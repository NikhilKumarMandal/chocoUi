import React from "react";

const Button_22 = () => {
  return (
    <button
      className="
              group inline-flex h-11 select-none items-center justify-center rounded-md
              border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700
              shadow-sm transition duration-150 ease-out
              hover:bg-gray-50
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white
              active:translate-y-px active:bg-gray-100 active:shadow-inner
              dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200
              dark:hover:bg-gray-600 dark:active:bg-gray-700/80
              dark:focus:ring-blue-600 dark:focus:ring-offset-gray-900
              dark:active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]
            "
    >
      {/* Content moves slightly on press */}
      <span className="block transition-transform duration-150 ease-out group-active:translate-y-[1px]">
        Confirm Choice
      </span>
    </button>
  );
};

export default Button_22;
