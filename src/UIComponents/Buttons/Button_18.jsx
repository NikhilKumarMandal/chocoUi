import React from "react";

const Button_18 = () => {
  return (
    <button
      className="
              group relative inline-flex h-12 items-center justify-center overflow-hidden
              rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-6
              font-medium text-white shadow-lg
              focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-50
              dark:from-red-600 dark:to-orange-600 dark:focus:ring-orange-500 dark:focus:ring-offset-gray-900
            "
    >
      <span
        className="
                absolute bottom-0 left-[-100%] top-0 z-10 w-1/2 -skew-x-12 transform
                bg-gradient-to-r from-transparent via-white/30 to-transparent
                transition-all duration-700 ease-in-out group-hover:left-[150%]
              "
      ></span>

      <span className="relative z-0">Glossy Shimmer</span>
    </button>
  );
};

export default Button_18;
