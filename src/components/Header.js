import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Toggle from "../utils/ThemeToggle";

export const Header = () => {
  return (
    <header className="w-full flex justify-between h-20 items-center border-b p-4 border-borderWhiteGray dark:border-borderGray">
      <div className=" w-1/3	">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/youtube_48dp.png"
          alt="Keep logo"
        />
      </div>
      <div className=" w-1/3 flex justify-center items-center">
        <input
          type="text"
          placeholder="Type to search"
          className=" border-0  dark:bg-backgroundBlack  text-gray-600 focus:outline-none"
        />
      </div>

      <div className=" w-1/3 flex justify-end">
        <AiOutlinePlusCircle
          size="30px"
          className="mr-8 fill-whiteIcons dark:fill-white"
        />
        <Toggle />

        <img
          src="https://i.pinimg.com/originals/71/f4/d1/71f4d1c20c03b052a20158d6b8ecfc3f.png"
          alt="avatar"
          className="rounded-full w-[30px] h-[30px] ml-8"
        />
      </div>
    </header>
  );
};
