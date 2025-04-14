import React from "react";

const Button_10 = () => {
  return (
    <button className="group inline-flex h-11 m-4 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
      View Profile
      <svg
        className="h-4 w-4 translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default Button_10;
