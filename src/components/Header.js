import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { VscDebugDisconnect } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Toggle from "../utils/ThemeToggle";
import Logo from "../assets/logo.svg";
import { Jazzicon } from "@ukstv/jazzicon-react";
export const Header = ({ search }) => {
  let address = localStorage.getItem("walletAddress");
  return (
    <header className="w-full flex justify-between h-20 items-center border-b p-4 border-borderWhiteGray dark:border-borderGray">
      <div className=" w-1/3	">
        <img
          width={80}
          src={"https://i.ibb.co/JHn1pjz/logo.png"}
          alt="YouTube Logo"
        />
      </div>
      <div className=" w-1/3 flex justify-center items-center">
        {search ? (
          <input
            type="text"
            onChange={(e) => search(e.target.value)}
            placeholder="Type to search"
            className=" border-0 bg-transparent focus:outline-none"
          />
        ) : null}
      </div>

      <div className=" w-1/3 flex justify-end">
        <Link to="/upload">
          <AiOutlinePlusCircle
            size="30px"
            className="mr-8 fill-whiteIcons dark:fill-white cursor-pointer"
          />
        </Link>
        <Toggle />
        <div className=" w-[30px] h-[30px] ml-8">
          <Jazzicon address={address} />
        </div>
      </div>
    </header>
  );
};
