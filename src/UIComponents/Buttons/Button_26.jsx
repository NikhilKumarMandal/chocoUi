import React from "react";

const Button_26 = () => {
  return (
    <div className="group relative h-12 w-36 cursor-pointer overflow-hidden rounded-full border border-gray-300 bg-white p-1 font-medium transition-all duration-300 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800">
      <span className="absolute inset-0 flex translate-y-0 items-center justify-center text-gray-700 opacity-100 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 dark:text-gray-300">
        Our Work
      </span>

      <div className="absolute inset-0 flex translate-y-full items-center justify-center bg-gray-900 text-gray-100 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        View Projects
      </div>

      <div className="absolute bottom-2 left-1/2 h-px w-8 -translate-x-1/2 rounded-full bg-gray-400 transition-all duration-500 group-hover:w-20 group-hover:bg-white dark:bg-gray-500" />
    </div>
  );
};

export default Button_26;
