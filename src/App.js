import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Upload from "./pages/Upload";

export default function App() {
  const [UserWallet, setUserWallet] = useState(null);

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
      setUserWallet(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <Routes>
      <Route path="/" exact element={<Main userWallet={UserWallet} />} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}
