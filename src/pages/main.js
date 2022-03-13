import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import demoData from "../demo.json";
import ContractAbi from "../artifacts/contracts/OurTube.sol/OurTube.json";
import { ethers } from "ethers";
import getContract from "../utils/getContract";

export default function Main() {
  const [videos, setVideos] = useState([]);
  const [AllVideos, setAllVideos] = useState([]);

  const getBlockChainData = async () => {
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
  };

  const filterData = (e) => {
    let search = e;
    let filteredVideos = AllVideos.filter((video) => {
      return video.title.toLowerCase().includes(search.toLowerCase());
    });
    setVideos(filteredVideos);
  };

  useEffect(() => {
    getBlockChainData();
  }, []);
  return (
    <div className="w-full  flex flex-row">
      <Sidebar />
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
        </div>
      </div>
    </div>
  );
}
