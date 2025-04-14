import React from "react";

const Button_07 = () => {
  return (
    <button className="flex h-14 w-14 m-4 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800">
      <svg
        className="h-6 w-6 text-gray-800 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>
  );
};

export default Button_07;
