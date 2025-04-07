import React from "react";

const Button_03 = () => {
  return (
    <button
      className="
            relative inline-flex h-12 items-center justify-center rounded-lg border-2
            border-teal-500 bg-transparent px-6 font-medium text-teal-500
            transition-all duration-300 ease-in-out
            hover:bg-teal-500 hover:text-white
            focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
            dark:border-cyan-400 dark:text-cyan-400
            dark:hover:bg-cyan-400 dark:hover:text-gray-900
            dark:focus:ring-cyan-300 dark:focus:ring-offset-gray-900
            active:scale-95
            before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]
            before:bg-teal-500 before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-20
            dark:before:bg-cyan-400
            disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent
          "
    >
      Fill Effect
    </button>
  );
};

export default Button_03;
