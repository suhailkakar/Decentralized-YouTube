import React, { useState } from "react";
import {
  AiOutlineBook,
  AiOutlineBulb,
  AiOutlineCompass,
  AiOutlineDribbble,
  AiOutlineFire,
  AiOutlineMenu,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { IoGameControllerOutline, IoNewspaperOutline } from "react-icons/io5";
import { local } from "web3modal";

import { Colors } from "../constants/colors";

export default function Sidebar({ updateCategory }) {
  const [active, setActive] = useState("All");

  let mode = localStorage.getItem("color-theme");
  console.log("mode", mode);
  let color = mode === "dark" ? "#4B5563" : "#000";

  let categories = [
    {
      name: "All",
      icon: (
        <AiOutlineFire
          size={"25px"}
          color={active === "All" ? Colors.primary : color}
        />
      ),
      onClick: () => {
        setActive("All");
        updateCategory("");
      },
    },
    {
      name: "Travel",
      icon: (
        <AiOutlineCompass
          size={"25px"}
          color={active === "Travel" ? Colors.primary : color}
        />
      ),
      onClick: () => {
        setActive("Travel");
        updateCategory("Travel");
      },
    },
    {
      name: "Sports",
      icon: (
        <AiOutlineDribbble
          size={"25px"}
          color={active === "Sports" ? Colors.primary : color}
        />
      ),
      onClick: () => {
        setActive("Sports");
        updateCategory("Sports");
      },
    },
    {
      name: "Music",
      icon: (
        <AiOutlinePlayCircle
          size={"25px"}
          color={active === "Music" ? Colors.primary : color}
        />
      ),
      onClick: () => {
        setActive("Music");
        updateCategory("Music");
      },
    },

    {
      name: "Science & Technology",
      icon: (
        <AiOutlineBulb
          size={"25px"}
          color={active === "Science & Technology" ? Colors.primary : color}
        />
      ),
      onClick: () => {
        setActive("Science & Technology");
        updateCategory("Science & Technology");
      },
    },
    {
      name: "Gaming",
      icon: (
        <IoGameControllerOutline
          size={"25px"}
          color={active === "Gaming" ? Colors.primary : color}
        />
      ),
      onClick: () => {
        setActive("Gaming");
        updateCategory("Gaming");
      },
    },
  ];

  return (
    <div className="border-r border-borderWhiteGray dark:border-borderGray p-7">
      <AiOutlineMenu
        color="#fff"
        size="25px"
        className="fill-whiteIcons dark:fill-white"
      />
      <div className="mt-14 flex flex-col  justify-between h-80">
        {categories.map((category, index) => (
          <div
            className="cursor-pointer"
            onClick={category.onClick}
            key={index}
          >
            {category.icon}
          </div>
        ))}
      </div>

      {/* <div className="mt-14 flex flex-col  justify-between h-80">
        <AiOutlineFire size="25px" className="fill-primary" />
        <AiOutlineCompass
          size="25px"
          className=" fill-whiteIcons dark:fill-white"
        />
        <AiOutlineDribbble
          size="25px"
          className=" fill-whiteIcons dark:fill-white"
        />
        <AiOutlinePlayCircle
          color={Colors.secondary}
          size="25px"
          className=" fill-whiteIcons dark:fill-white"
        />

        <AiOutlineBulb
          color={Colors.secondary}
          size="25px"
          className=" fill-whiteIcons dark:fill-white"
        />
        <IoGameControllerOutline
          color={"#fff"}
          size="25px"
          className=" fill-whiteIcons dark:fill-white"
        />
      </div> */}
    </div>
  );
}
