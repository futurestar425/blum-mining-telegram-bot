import React from "react";
import { Outlet } from "react-router-dom";
import End from "./End";

const DefaultLayout = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-indigo-950">
      <div className="1max-w-5xl w-full flex flex-col items-center">
        <div className="w-full mb-16">
          <Outlet />
        </div>
        <div className="w-full ">
          <End />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout;