import React from "react";

const Button_06 = () => {
  return (
    <button
      className="
        relative inline-flex h-12 items-center justify-center rounded-lg
        bg-gradient-to-r from-indigo-500 to-purple-600 px-8 font-medium text-white
        transition-all duration-300 ease-in-out
        hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/30
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
        dark:focus:ring-offset-gray-900
      "
    >
      <span className="relative z-10">Get Started</span>
      <div
        className="
          absolute inset-0 rounded-lg
          bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent
          opacity-0 transition-opacity duration-300 ease-in-out
          hover:opacity-100
        "
      />
    </button>
  );
};

export default Button_06;
