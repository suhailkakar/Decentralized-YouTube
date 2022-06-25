import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroHome() {
  let navigate = useNavigate();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);
      navigate("/app");
    } catch (error) {
      console.log(error);
    }
  };

  const continueAsGuest = () => {
    localStorage.setItem(
      "walletAddress",
      "0x0000000000000000000000000000000000000000"
    );
    navigate("/app");
  };

  return (
    <>
      <section className="relative bg-black flex flex-col h-screen justify-center items-center">
        {/* Illustration behind hero content */}
        <div
          className="absolute animate-float  transform -translate-x-1/2  pointer-events-none"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#3B84F5" offset="0%" />
                <stop stopColor="#34A9DC" offset="77.402%" />
                <stop stopColor="#2DD3BF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle className="left-20" cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                It is YouTube, but{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Decentralized
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  A YouTube Clone built on top of Etherum network, allow users
                  to create, share and watch videos, without worrying about
                  their privacy.
                </p>
                <button
                  className="items-center  bg-white rounded-full font-medium  p-4 shadow-lg"
                  onClick={() => {
                    connectWallet();
                  }}
                >
                  <span>Connect your wallet to continue</span>
                </button>
                <p onClick={continueAsGuest} className="text-gray-400 mt-5">
                  Continue as a guest
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHome;
