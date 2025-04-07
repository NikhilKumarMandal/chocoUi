import React from "react";

const Button_08 = () => {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-gray-800 transition-transform duration-300 dark:bg-gray-900 dark:text-white hover:scale-105">
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-gray-900">
        Explore More
      </span>
      <div className="absolute inset-0 z-0 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-out group-hover:w-full" />
      <div className="absolute inset-0 z-10 rounded-md border-2 border-transparent transition-colors duration-300 group-hover:border-white dark:group-hover:border-gray-900" />
    </button>
  );
};

export default Button_08;
