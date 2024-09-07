import React from "react";
import { Outlet } from "react-router-dom";
import End from "./End";

const DefaultLayout = () => {
  return (
    <div className="w-full h-screen">
      <Outlet />
      <End />
    </div>
  )
}

export default DefaultLayout;