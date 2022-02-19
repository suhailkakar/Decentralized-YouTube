import React from "react";
import {
  AiOutlineCompass,
  AiOutlineFire,
  AiOutlineMenu,
  AiOutlinePlayCircle,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { Colors } from "../constants/colors";

export default function Sidebar() {
  return (
    <div className="border-r border-borderWhiteGray dark:border-borderGray p-7">
      <AiOutlineMenu
        color="#fff"
        size="25px"
        className="fill-whiteIcons dark:fill-white"
      />
      <div className="mt-14">
        <AiOutlineCompass size="25px" className="fill-primary" />
        <AiOutlineFire
          size="25px"
          className="mt-8 fill-whiteIcons dark:fill-white"
        />
        <AiOutlinePlayCircle
          color={Colors.secondary}
          size="25px"
          className="mt-8 fill-whiteIcons dark:fill-white"
        />
      </div>
    </div>
  );
}
