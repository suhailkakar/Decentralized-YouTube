import React from "react";
import { BiCheck } from "react-icons/bi";

export default function Video() {
  return (
    <div className="w-80 m-5">
      <img
        className=" object-cover rounded-lg"
        src="https://i.ytimg.com/vi/S5iXvDAwNVI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcJUZSuyV1AZjB2jzo3p4Wv0cZ0Q"
        alt=""
      />

      <h4 className="text-md font-bold dark:text-white mt-3 text-black">
        2022 Asus G14 Review - 6900HS + 6800S
      </h4>
      <p className="text-sm flex items-center text-textSubTitle mt-1">
        Dave 2D <BiCheck size="20px" color="green" className="ml-1" />
      </p>
    </div>
  );
}
