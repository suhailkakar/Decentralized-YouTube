import React, { useState, useEffect, useRef } from "react";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContractAbi from "../artifacts/contracts/OurTube.sol/OurTube.json";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { BiCloud, BiMusic, BiPlus } from "react-icons/bi";
import toast from "react-hot-toast";
import getContract from "../utils/getContract";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules

export default function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const [isAudio, setIsAudio] = useState(false);

  const client = create("https://ipfs.infura.io:5001/api/v0");
  const thumbnailRef = useRef();
  const videoRef = useRef();

  const handleSubmit = async () => {
    if (
      title === "" ||
      description === "" ||
      category === "" ||
      location === "" ||
      thumbnail === "" ||
      video === ""
    ) {
      toast.error("Please fill all the fields", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    uploadThumbnail(thumbnail);
  };

  const uploadThumbnail = async (thumbnail) => {
    toast("Uploading thumbnail...", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    console.log("uploading thumbnail");
    try {
      const added = await client.add(thumbnail);
      uploadVideo(added.path);
      toast.success("Thumbnail uploaded successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const uploadVideo = async (thumbnail) => {
    console.log("uploading video");
    toast("Uploading video...", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    try {
      const added = await client.add(video);
      console.log({
        uploadVIdeo: added.path,
        thumbnail: thumbnail,
      });
      saveVideo(added.path, thumbnail);
      toast.success("Video uploaded successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const saveVideo = async (video, thumbnail) => {
    let data = {
      title,
      description,
      category,
      location,
      thumbnail,
      video,
    };
    console.log("Saving video", data);
    let contract = await getContract();
    let UploadedDate = new Date();
    contract.uploadVideo(
      video,
      title,
      description,
      location,
      category,
      thumbnail,
      isAudio,
      UploadedDate
    );
    console.log("Video saved");
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="mt-5 mr-10 flex  justify-between">
          <label className="flex flex-row items-center">
            <Toggle
              defaultChecked={isAudio}
              onChange={(e) => {
                console.log(e.target.checked);
                setIsAudio(e.target.checked);
                setVideo("");
              }}
              icons={false}
              className="audio-toggle ml-10"
            />
            <span className="dark:text-white ml-3 ">Audio Only</span>
          </label>
          <div className="flex items-center">
            <button
              className="bg-transparent  dark:text-[#9CA3AF] py-2 px-6 border rounded-lg  border-gray-600  mr-6"
              onClick={() => {
                goBack();
              }}
            >
              Discard
            </button>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white  py-2  rounded-lg flex px-4 justify-between flex-row items-center"
            >
              <BiCloud />
              <p className="ml-2">Upload</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col m-10 	mt-5  lg:flex-row">
          <div className="flex lg:w-3/4 flex-col ">
            <label className="text-gray-600 dark:text-[#9CA3AF]  text-sm">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Rick Astley - Never Gonna Give You Up (Official Music Video)"
              className="w-[90%]  dark:placeholder:text-gray-600  rounded-md mt-2 h-12 p-2 border border-borderWhiteGray bg-white dark:bg-backgroundBlack dark:border-[#444752] focus:outline-none"
            />
            <label className="text-gray-600 dark:text-[#9CA3AF] mt-10 text-sm">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Never Gonna Give You Up was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody."
              className="w-[90%] dark:placeholder:text-gray-600 rounded-md mt-2  h-32 p-2 border border-borderWhiteGray bg-white dark:bg-backgroundBlack dark:border-[#444752] focus:outline-none"
            />

            <div className="flex flex-row mt-10 w-[90%]  justify-between">
              <div className="flex flex-col w-2/5	">
                <label className="text-gray-600 dark:text-[#9CA3AF]  text-sm">
                  Location
                </label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Bali - Indonesia"
                  className="rounded-md mt-2 dark:placeholder:text-gray-600  h-12 p-2 border border-borderWhiteGray bg-white dark:bg-backgroundBlack dark:border-[#444752] focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-2/5	">
                <label className="text-gray-600 dark:text-[#9CA3AF]  text-sm">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className=" rounded-md mt-2  h-12 p-2 dark:border-gray-600 border border-borderWhiteGray bg-white dark:bg-backgroundBlack dark:text-[#9CA3AF] focus:outline-none"
                >
                  <option>Music</option>
                  <option>Sports</option>
                  <option>Gaming</option>
                  <option>News</option>
                  <option>Entertainment</option>
                  <option>Education</option>
                  <option>Science & Technology</option>
                  <option>Travel</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <label className="text-gray-600 dark:text-[#9CA3AF]  mt-10 text-sm">
              Thumbnail
            </label>

            <div
              onClick={() => {
                thumbnailRef.current.click();
              }}
              className="border-2 w-64 dark:border-gray-600  border-dashed border-borderWhiteGray rounded-md mt-2 p-2  h-36 items-center justify-center flex"
            >
              {thumbnail ? (
                <img
                  onClick={() => {
                    thumbnailRef.current.click();
                  }}
                  src={URL.createObjectURL(thumbnail)}
                  alt="thumbnail"
                  className="h-full rounded-md"
                />
              ) : (
                <BiPlus size={40} color="gray" />
              )}
            </div>

            <input
              type="file"
              className="hidden"
              ref={thumbnailRef}
              onChange={(e) => {
                setThumbnail(e.target.files[0]);
              }}
            />
          </div>

          <div
            onClick={() => {
              videoRef.current.click();
            }}
            className={
              video
                ? " w-96   rounded-md  h-64 items-center justify-center flex"
                : "border-2 dark:border-gray-600  w-96 border-dashed border-borderWhiteGray rounded-md mt-8   h-64 items-center justify-center flex"
            }
          >
            {video ? (
              <>
                {isAudio ? (
                  <audio
                    src={URL.createObjectURL(video)}
                    controls
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    controls
                    src={URL.createObjectURL(video)}
                    className="h-full rounded-md"
                  />
                )}
              </>
            ) : (
              <p className="dark:text-[#9CA3AF]">
                Upload {isAudio ? "Audio" : "Video"}
              </p>
            )}
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          ref={videoRef}
          accept={isAudio ? "audio/*" : "video/*"}
          onChange={(e) => {
            setVideo(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        />
      </div>
    </div>
  );
}
