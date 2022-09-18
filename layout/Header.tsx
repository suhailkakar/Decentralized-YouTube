import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import { Toggle } from "../components";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface IHeader {
  search?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ search }: IHeader) {
  return (
    <header className="w-full flex justify-between h-20 items-center border-b p-4 border-border-light dark:border-border-dark">
      <div className=" w-1/3	">
        <Link href={"/home"}>
          <Image
            src="https://raw.githubusercontent.com/suhailkakar/Decentralized-YouTube/version-1/logo.png"
            alt="Decentralized YouTube"
            width={55}
            height={40}
          />
        </Link>
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

      <div className=" w-1/3 flex justify-end items-center">
        <Link href="/upload">
          <AiOutlinePlusCircle
            size="30px"
            className="mr-8 fill-icons-light dark:fill-icons-dark cursor-pointer"
          />
        </Link>
        <Toggle />
        <div className="ml-10">
          <ConnectButton
            label="Connect Wallet"
            accountStatus="address"
            showBalance={false}
          />
        </div>
      </div>
    </header>
  );
}
