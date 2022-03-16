import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import ContractAbi from "../artifacts/contracts/OurTube.sol/OurTube.json";
import { ethers } from "ethers";
import getContract from "../utils/getContract";

export default function Main() {
  const [videos, setVideos] = useState([]);
  const [AllVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingArray, setLoadingArray] = useState(10);

  const getBlockChainData = async () => {
    setLoading(true);
    let contract = await getContract();
    let videosCount = await contract.videoCount();
    console.log(String(videosCount));
    let videos = [];
    for (var i = videosCount; i >= 1; i--) {
      let video = await contract.videos(i);
      videos.push(video);
    }
    setAllVideos(videos);
    setVideos(videos);
    setLoading(false);
  };

  const filterData = (e) => {
    let search = e;
    let filteredVideos = AllVideos.filter((video) => {
      return video.title.toLowerCase().includes(search.toLowerCase());
    });
    setVideos(filteredVideos);
  };

  const filterBasedOnCategory = (category) => {
    console.log(category);
    if (category === "All") {
      setVideos(AllVideos);
    } else {
      let filteredVideos = AllVideos.filter((video) => {
        return video.category.toLowerCase().includes(category.toLowerCase());
      });
      setVideos(filteredVideos);
    }
  };

  useEffect(() => {
    getBlockChainData();
  }, []);
  return (
    <div className="w-full  flex flex-row">
      <Sidebar updateCategory={(category) => filterBasedOnCategory(category)} />
      <div className="flex-1 flex flex-col">
        <Header search={(text) => filterData(text)} />
        <div className="flex-1 flex flex-row flex-wrap">
          {videos.map((video) => (
            <Link to={`/video?id=${video.id}`}>
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
                  <div className="w-80">
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
    <div class="flex flex-col m-5 animate-pulse">
      <div class="w-full bg-gray-300 dark:bg-borderGray h-40 rounded-lg "></div>
      <div class="w-50 mt-3 bg-gray-300 dark:bg-borderGray h-6 rounded-md "></div>
      <div class="w-24 bg-gray-300 h-3 dark:bg-borderGray mt-3 rounded-md "></div>
    </div>
  );
};
