import React from "react";

const Button_01 = () => {
  return (
    <button
      className="
              relative inline-flex h-12 items-center justify-center rounded-lg px-6
              font-medium text-white transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
              dark:focus:ring-offset-gray-900
              before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]
              before:border-2 before:border-indigo-300 before:opacity-0
              before:transition-opacity before:duration-300 before:ease-in-out
              hover:before:opacity-100
              active:scale-95
              bg-gradient-to-r from-blue-500 to-indigo-600
              dark:from-indigo-600 dark:to-purple-700 dark:before:border-purple-400
            "
    >
      Glow Border
    </button>
  );
};

export default Button_01;
