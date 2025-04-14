import React from "react";
import { MoveRight } from "lucide-react";

const Button_02 = () => {
  return (
    <button
      className="
              group relative inline-flex h-12 m-4 items-center justify-center overflow-hidden
              rounded-lg bg-indigo-600 px-6 font-medium text-white shadow-md
              transition-all duration-300 ease-out
              hover:bg-indigo-700 hover:pl-5 hover:pr-12
              focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-50
              dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-400 dark:focus:ring-offset-gray-900
            "
    >
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
        Explore More
      </span>
      <MoveRight
        className="
                absolute right-4 h-5 w-5 translate-x-10 transform opacity-0
                transition-all duration-300 ease-out group-hover:translate-x-0
                group-hover:opacity-100
              "
      />
    </button>
  );
};

export default Button_02;
