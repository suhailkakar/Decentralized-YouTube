import React from "react";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-row flex-wrap">
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    </div>
  );
}
