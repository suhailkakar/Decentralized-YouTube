import Link from "next/link";
import React from "react";
import { BiCheck } from "react-icons/bi";
import getImage from "../lib/getImage";
import { IVideo } from "../types";

interface IProps {
  video: IVideo;
  horizontal?: boolean;
}

const Video: React.FC<IProps> = ({ video, horizontal }) => {
  return (
    <Link className="cursor-pointer" href={`/video/${video.id}`}>
      <div
        className={`${
          horizontal
            ? "flex flex-row mx-5 mb-5  item-center justify-center"
            : "flex flex-col m-5 w-80"
        } `}
      >
        <img
          className={
            horizontal
              ? "object-cover rounded-lg w-60  "
              : "object-cover rounded-lg w-full h-40"
          }
          src={getImage(video.thumbnailHash)}
          alt=""
        />
        <div className={horizontal && "ml-3  w-80"}>
          <h4 className="text-md font-bold dark:text-white mt-3 text-black text-transform: capitalize">
            {video.title}
          </h4>
          {horizontal && (
            <p className="text-sm flex items-center text-subtitle-light mt-1">
              {video.category} • March 7, 2022
            </p>
          )}
          <p className="text-sm flex items-center text-subtitle-light mt-1">
            {horizontal ? null : video.category + " • "}
            {video?.author?.slice(0, 9)}...{" "}
            <BiCheck size="20px" color="green" className="ml-1" />
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Video;
