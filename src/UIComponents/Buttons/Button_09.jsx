import React from "react";

const Button_09 = () => {
  return (
    <button className="relative inline-flex h-12 items-center justify-center px-8 font-medium text-gray-700 transition-all hover:text-black dark:text-gray-300 dark:hover:text-white">
      Discover
      <span className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-blue-500 transition-all group-hover:w-3/4" />
    </button>
  );
};

export default Button_09;
