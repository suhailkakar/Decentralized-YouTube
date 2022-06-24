import React, { useEffect, useState } from "react";
import { useApolloClient, gql } from "@apollo/client";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoComponent from "../components/VideoComponent";
import Video from "../components/Video";
import getContract from "../utils/getContract";
import { Link } from "react-router-dom";
export default function VideoPage() {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const client = useApolloClient();
  const getUrlVars = () => {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      }
    );
    return vars;
  };

  const GET_VIDEOS = gql`
    query videos(
      $first: Int
      $skip: Int
      $orderBy: Video_orderBy
      $orderDirection: OrderDirection
      $where: Video_filter
    ) {
      videos(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        hash
        title
        description
        location
        category
        thumbnailHash
        isAudio
        date
        author
        createdAt
      }
    }
  `;

  const getRelatedVideos = () => {
    client
      .query({
        query: GET_VIDEOS,
        variables: {
          first: 20,
          skip: 0,
          orderBy: "createdAt",
          orderDirection: "desc",
          where: {}
        },
        fetchPolicy: "network-only"
      })
      .then(({ data }) => {
        console.log("videos", data.videos);
        setRelatedVideos(data.videos);
        const video = data?.videos?.find((video) => video.id === getUrlVars().id);
        setVideo(video);
      })
      .catch((err) => {
        alert("Something went wrong. please try again.!", err.message);
      });
  };

  useEffect(() => {
    getRelatedVideos();
  }, []);

  return (
    <div className="w-full  flex flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        {video && (
          <div className="flex flex-col m-10 justify-between	  lg:flex-row">
            <div className="lg:w-4/6 w-6/6">
              <VideoComponent video={video} />
            </div>
            <div className="w-2/6">
              <h4 className="text-md font-bold dark:text-white ml-5 mb-3 text-black">
                Related Videos
              </h4>
              {relatedVideos.map((video) => (
                <Link
                  onClick={() => {
                    setVideo(video);
                  }}
                  to={`/video?id=${video.id}`}
                  key={video.id}
                >
                  <Video video={video} horizontal={true} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
