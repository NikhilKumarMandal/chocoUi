import React from "react";
import LeftSidebar from "./Sidebar/Leftsidebar";
import RightSidebar from "./Sidebar/RightSidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full bg-gradient-to-br from-[#FFEAC5] via-white to-[#FFDBB5] ">
      <div className="">{<LeftSidebar />}</div>

      <main className="p-5 w-full">{children}</main>
      <div>{/* <RightSidebar /> */}</div>
    </div>
  );
};

export default Layout;
