import { useRouter } from "next/router";
import { Header, Sidebar } from "../../layout";
import React, { useEffect, useState } from "react";
import { Background, Player, Video as RelatedVideos } from "../../components";
import lighthouse from "@lighthouse-web3/sdk";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import Avvvatars from "avvvatars-react";
import { IVideo } from "../../types";
import { getContract } from "../../utils";

export default function Video() {
  const router = useRouter();
  const { id } = router.query;
  const [video, setVideo] = useState<IVideo | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<IVideo[]>([]);
  const [deal, setDeal] = useState({});

  const fetchVideos = async () => {
    if (id) {
      let contract = await getContract();
      let video = await contract.videos(id);
      let videosCount = await contract.videoCount();
      let videos = [];
      for (var i = videosCount; i >= 1; i--) {
        let video = await contract.videos(i);
        videos.push(video);
      }
      setRelatedVideos(videos);
      setVideo(video);
      getDealInfo(video);
    }
  };

  const getDealInfo = async (video) => {
    const status = await lighthouse.dealStatus(video.hash);

    setDeal(status.data.dealStatus[0]);
  };

  useEffect(() => {
    fetchVideos();
  }, [id]);

  return (
    <Background className="flex   w-full flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        {video && (
          <div className="m-10 flex flex-col justify-between	  lg:flex-row">
            <div className="w-6/6 lg:w-4/6">
              <Player id={video.hash} />
              <div className="border-border-light dark:border-border-dark flex flex-row justify-between border-b-2 py-4">
                <div>
                  <h3 className="text-transform: text-2xl capitalize dark:text-white">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-gray-500 ">{video.category} </p>
                </div>
              </div>
              <div>
                <div className="mt-5 flex flex-row items-center ">
                  <div className="w-12">
                    <Avvvatars value={video.author.slice(2, 13)} size={50} />
                  </div>
                  <div className="ml-3 flex flex-col">
                    <p className="text-md mt-1 flex items-center text-black dark:text-white">
                      {video.author.slice(0, 13)}...{" "}
                      <BiCheck size="20px" className="fill-gray ml-1" />
                    </p>
                    <p className="text-subtitle-light flex items-center text-sm ">
                      Video by {video.author}
                    </p>
                  </div>
                </div>
                <p className="text-text-light dark:text-text-dark text-textSubTitle mt-4 ml-16 text-sm">
                  {video.description}
                </p>
                <h5 className="text-xl mt-8 dark:text-white ">
                  Deal Information
                </h5>
                <p className="text-text-light dark:text-text-dark text-textSubTitle mt-3 text-sm  mb-8">
                  {deal &&
                    Object.entries(deal).map(([key, val], i) => (
                      <div key={i} className="mt-2 flex flex-row">
                        <pre className="text-gray-700 dark:text-gray-400">
                          {key}
                        </pre>
                        : {/* @ts-ignore  */}
                        <span className="ml-2">{val}</span>
                      </div>
                    ))}
                </p>
              </div>
            </div>
            <div className="w-2/6">
              <h4 className="text-md ml-5 mb-3 font-bold text-black dark:text-white">
                Related Videos
              </h4>
              {relatedVideos.map((video) => (
                <Link href={`/video/${video.id}`} key={video.id}>
                  <RelatedVideos video={video} horizontal={true} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Background>
  );
}
