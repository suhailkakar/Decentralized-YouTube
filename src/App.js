import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/main";
import Upload from "./pages/Upload";
import Hero from "./pages/Hero";
import VideoPage from "./pages/Video";
export default function App() {
  const [UserWallet, setUserWallet] = useState(null);

  let navigate = useNavigate();

  const checkedWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      // Change network to ropsten
      await ethereum.enable();

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // await ethereum.request({
      //   method: "wallet_switchEthereumChain",
      //   params: [{ chainId: "0x80001" }],
      // });
      console.log("Connected", accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);

      navigate("/app");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkedWallet();
  }, []);

  return (
    <Routes>
      <Route path="/app" element={<Main userWallet={UserWallet} />} />
      <Route path="/" exact element={<Hero />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/video" element={<VideoPage />} />
    </Routes>
  );
}
