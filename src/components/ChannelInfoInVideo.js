import React from "react";
import { BiCheck } from "react-icons/bi";
import { Jazzicon } from "@ukstv/jazzicon-react";

export default function ChannelInfoInVIdeo({ video }) {
  console.log("ChannelInfoInVIdeo", video);
  return (
    <div>
      <div className="flex mt-5 flex-row items-center ">
        <div className="w-12">
          <Jazzicon address={video.author} size={12} />
        </div>

        <div className="ml-3 flex flex-col">
          <p className="text-md flex items-center text-black dark:text-white mt-1">
            {video.author.slice(0, 13)}...{" "}
            <BiCheck size="20px" className="ml-1 fill-gray" />
          </p>
          <p className="text-sm flex items-center text-textSubTitle ">
            12,988 ETH
          </p>
        </div>
      </div>
      <p className="text-sm text-black mt-4 ml-16">{video.description}</p>
    </div>
  );
}
