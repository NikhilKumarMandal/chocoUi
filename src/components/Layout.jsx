import React from "react";
import LeftSidebar from "./Sidebar/Leftsidebar";
import RightSidebar from "./Sidebar/RightSidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex relative bg-gradient-to-br from-[#FFEAC5] via-white to-[#FFDBB5] ">
      <div className=" md:block fixed top-0 left-0 h-screen z-10 w-64">
        <LeftSidebar />
      </div>

      <main
        className={`
          flex-1 mx-auto px-4 md:px-8 lg:px-20  w-full max-w-10xl
          mt-20
          ${"ml-1.5 md:ml-64"}
          ${"mr-0 lg:mr-64"}
        `}
      >
        {children}
      </main>

      <div className="hidden lg:block fixed top-0 right-[-15px] h-screen z-10 w-64">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
