import React from "react";
import LeftSidebar from "./Sidebar/Leftsidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full bg-gradient-to-br from-[#FFEAC5] via-white to-[#FFDBB5] ">
      <div className="mr-3">{<LeftSidebar />}</div>
      <main className="p-5 w-full mt-15">{children}</main>
    </div>
  );
};

export default Layout;
