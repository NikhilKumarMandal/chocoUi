import React from "react";
import { ChevronRight } from "lucide-react";

const Button_21 = () => {
  return (
    <button
      className="
              group inline-flex h-11 m-4 items-center justify-center gap-2 whitespace-nowrap
              rounded-md bg-gray-700 px-5 py-2 text-sm font-medium text-white
              transition-colors duration-200 ease-out hover:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white
              dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300
              dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900
            "
    >
      <span>Get Started</span>
      <ChevronRight
        className="
                h-4 w-4 transform transition-transform duration-200 ease-out
                group-hover:rotate-90
              "
      />
    </button>
  );
};

export default Button_21;
