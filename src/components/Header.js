import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import Toggle from "../utils/ThemeToggle";
import Logo from "../assets/logo.svg";
export const Header = ({ search }) => {
  return (
    <header className="w-full flex justify-between h-20 items-center border-b p-4 border-borderWhiteGray dark:border-borderGray">
      <div className=" w-1/3	">
        <Link to="/app">
          <img width={80} src={Logo} alt="Keep logo" />
        </Link>
      </div>
      <div className=" w-1/3 flex justify-center items-center">
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          placeholder="Type to search"
          className=" border-0  dark:bg-backgroundBlack  text-gray-600 focus:outline-none"
        />
      </div>

      <div className=" w-1/3 flex justify-end">
        <Link to="/upload">
          <AiOutlinePlusCircle
            size="30px"
            className="mr-8 fill-whiteIcons dark:fill-white cursor-pointer"
          />
        </Link>
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
