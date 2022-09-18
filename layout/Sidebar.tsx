import React, { useState } from "react";
import {
  AiOutlineBulb,
  AiOutlineCompass,
  AiOutlineDribbble,
  AiOutlineFire,
  AiOutlineMenu,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";

import { Colors } from "../constants/colors";

export default function Sidebar({ updateCategory }) {
  const [active, setActive] = useState("All");

  let color = "#878787";

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
    <div className="border-r border-border-light dark:border-border-dark p-7 ">
      <AiOutlineMenu
        color="#fff"
        size="25px"
        className="fill-icons-light dark:fill-white"
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
    </div>
  );
}
