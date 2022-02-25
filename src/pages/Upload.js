import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Upload() {
  const [ShowModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  });
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-row flex-wrap"></div>
      </div>

      {ShowModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <img
                  src="https://static.thenounproject.com/png/485862-200.png"
                  alt="logo"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}
