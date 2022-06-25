import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApolloClient, gql } from "@apollo/client";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Main() {
  const [videos, setVideos] = useState([]);
  const [AllVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingArray, setLoadingArray] = useState(10);
  const [titleSearchInput, setTitleSearchInput] = useState("");
  const [categorySearchInput, setCategorySearchInput] = useState("");

  const client = useApolloClient();

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

  const getVideos = async () => {
    setLoading(true);
    client
      .query({
        query: GET_VIDEOS,
        variables: {
          first: 200,
          skip: 0,
          orderBy: "createdAt",
          orderDirection: "desc",
          where: {
            ...(titleSearchInput && {
              title_contains_nocase: titleSearchInput,
            }),
            ...(categorySearchInput && {
              category_contains_nocase: categorySearchInput,
            }),
          },
        },
        fetchPolicy: "network-only",
      })
      .then(({ data }) => {
        setLoading(false);
        console.log("videos", data.videos);
        setAllVideos(videos);
        setVideos(data.videos);
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong. please try again.!", err.message);
      });
  };

  useEffect(() => {
    getVideos();
  }, [titleSearchInput, categorySearchInput]);
  return (
    <div className="w-full flex flex-row">
      <Sidebar
        updateCategory={(category) => setCategorySearchInput(category)}
      />
      <div className="flex-1 h-screen flex flex-col">
        <Header search={(text) => setTitleSearchInput(text)} />
        <div className="flex flex-row flex-wrap">
          {videos.map((video) => (
            <Link to={`/video?id=${video.id}`} key={video.id}>
              <div className="w-80">
                <Video video={video} />
              </div>
            </Link>
          ))}

          {loading && (
            <div className="flex-1 flex flex-row flex-wrap">
              {Array(loadingArray)
                .fill(0)
                .map((_, index) => (
                  <div className="w-80" key={index}>
                    <Loader />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Loader = () => {
  return (
    <div className="flex flex-col m-5 animate-pulse">
      <div className="w-full bg-gray-300 dark:bg-borderGray h-40 rounded-lg "></div>
      <div className="w-50 mt-3 bg-gray-300 dark:bg-borderGray h-6 rounded-md "></div>
      <div className="w-24 bg-gray-300 h-3 dark:bg-borderGray mt-3 rounded-md "></div>
    </div>
  );
};
