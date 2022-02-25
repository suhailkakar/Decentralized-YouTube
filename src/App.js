import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Upload from "./pages/Upload";
import Hero from "./pages/Hero";
export default function App() {
  const [UserWallet, setUserWallet] = useState(null);

  return (
    <Routes>
      <Route path="/app" exact element={<Main userWallet={UserWallet} />} />
      <Route path="/" element={<Hero />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}
