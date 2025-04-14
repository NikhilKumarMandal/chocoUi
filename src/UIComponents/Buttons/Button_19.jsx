import React from "react";

const Button_19 = () => {
  return (
    <button
      className="
              group relative inline-flex h-14 m-4 items-center justify-center rounded-xl
              border-2 border-purple-500 bg-white px-8 py-3 font-bold
              transition-colors duration-200 ease-in-out
              hover:bg-purple-50
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-50
              dark:border-fuchsia-500 dark:bg-gray-900 dark:hover:bg-gray-800
              dark:focus:ring-fuchsia-400 dark:focus:ring-offset-gray-900
            "
    >
      <span
        className="
                bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                bg-clip-text text-transparent transition-all duration-500 ease-in-out
                [background-size:200%_auto] [background-position:0%_center]
                group-hover:[background-position:100%_center]
                dark:from-fuchsia-500 dark:via-pink-500 dark:to-rose-500
              "
      >
        Text Gradient
      </span>
    </button>
  );
};

export default Button_19;
