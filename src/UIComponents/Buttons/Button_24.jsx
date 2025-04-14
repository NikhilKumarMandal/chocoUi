import React from "react";
import { ArrowRight } from "lucide-react";

const Button_24 = () => {
  return (
    <div className="group relative isolate h-12 w-32 m-4 cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white p-1 text-center font-medium shadow-sm transition-all duration-500 hover:border-transparent hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <span className="absolute inset-0 z-10 flex translate-x-0 items-center justify-center text-gray-800 opacity-100 transition-all duration-500 ease-out group-hover:-translate-x-full group-hover:opacity-0 dark:text-gray-200">
        Explore
      </span>

      <div className="absolute inset-0 z-10 flex translate-x-full items-center justify-center gap-2 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
        <span>Explore</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      <div className="absolute inset-0 -z-0 h-full w-0 rounded-full bg-gradient-to-r from-teal-600 to-blue-800 transition-all duration-500 ease-out group-hover:w-full" />

      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-shimmer" />
      </div>
    </div>
  );
};

export default Button_24;
