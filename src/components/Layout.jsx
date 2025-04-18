import React from "react";
import LeftSidebar from "./Sidebar/Leftsidebar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-full  bg-gradient-to-b from-white via-[#fcedd2] to-white ">
      <div className="mr-3">{<LeftSidebar />}</div>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-5 w-full h-full mt-15 "
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
