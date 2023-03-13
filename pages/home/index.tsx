import React, { useEffect, useState } from "react";
import { Background, Video } from "../../components";
import { Header, Sidebar } from "../../layout";
import { getContract } from "../../utils";
import { useContractRead } from "wagmi";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [AllVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [category, setCategory] = useState<String>("");

  const fetchVideos = async () => {
    setLoading(true);
    let contract = await getContract();
    let videosCount = await contract.videoCount();
    console.log(String(videosCount));
    let videos = [];
    for (var i = videosCount; i >= 1; i--) {
      let video = await contract.videos(i);
      videos.push(video);
    }
    setVideos(videos);
    setAllVideos(videos);
    setLoading(false);
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

  const filterData = (e) => {
    let search = e;
    let filteredVideos = AllVideos.filter((video) => {
      return video.title.toLowerCase().includes(search.toLowerCase());
    });
    setVideos(filteredVideos);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <Background className="w-full">
      <div className="w-full flex flex-row">
        <Sidebar
          updateCategory={(category) => filterBasedOnCategory(category)}
        />
        <div className="flex-1 h-screen flex flex-col">
          <Header search={(text) => filterData(text)} />
          <div className="flex flex-row flex-wrap">
            {loading ? (
              <>
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <div className="w-80">
                      <Loader />
                    </div>
                  ))}
              </>
            ) : (
              videos?.map((video: any) => (
                <Video video={video} horizontal={false} />
              ))
            )}
          </div>
        </div>
      </div>
    </Background>
  );
}

const Loader = () => {
  return (
    <div className="flex flex-col m-5 animate-pulse">
      <div className="w-full bg-gray-300 dark:bg-border-dark h-40 rounded-lg "></div>
      <div className="w-50 mt-3 bg-gray-300 dark:bg-border-dark h-6 rounded-md "></div>
      <div className="w-24 bg-gray-300 h-3 dark:bg-border-dark  mt-3 rounded-md "></div>
    </div>
  );
};
