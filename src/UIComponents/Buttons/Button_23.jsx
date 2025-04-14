import React from "react";

const Button_23 = () => {
  return (
    <button
      className="
          group relative inline-flex h-12 m-4 items-center justify-center 
          overflow-hidden rounded-full border border-gray-200
          bg-white px-3 font-medium text-gray-700 shadow-sm
          transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
          hover:w-36 hover:shadow-md hover:border-gray-300
          focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
          dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-600
          dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900
        "
    >
      <span
        className="
            absolute left-4 whitespace-nowrap opacity-0
            transition-all duration-300 ease-out
            group-hover:translate-x-0 group-hover:opacity-100
            -translate-x-2
          "
      >
        Explore
      </span>

      <div
        className="
            absolute flex items-center justify-center
            transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
            group-hover:translate-x-12
          "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className="
            flex h-8 w-8 items-center justify-center rounded-full
            bg-gray-100 transition-all duration-500
            group-hover:h-0 group-hover:w-0 group-hover:opacity-0
            dark:bg-gray-700
          "
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gray-500 dark:text-gray-400"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button_23;
