import React from "react";
import LeftSidebar from "./Sidebar/Leftsidebar";
import RightSidebar from "./Sidebar/RightSidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex  bg-gradient-to-b from-[#ffffff] to-[#875d3a]">
      <div className="fixed top-0 left-0 h-screen z-10">
        <LeftSidebar />
      </div>

      <main className="flex-1 mx-auto px-4 md:px-8 lg:px-16 w-full max-w-5xl ml-72 mr-64 mt-28">
        {children}
      </main>

      <div className="fixed top-0 right-0 h-screen z-10">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
