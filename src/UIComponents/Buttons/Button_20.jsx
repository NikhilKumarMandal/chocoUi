import React from "react";

const Button_20 = () => {
  return (
    <button
      className="
            group relative inline-flex h-12 items-center justify-center 
            rounded-lg bg-emerald-600 px-8 py-3
            font-medium text-white shadow-sm transition-all
            duration-300 ease-out hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-emerald-500 
            focus:ring-offset-2 focus:ring-offset-white
            dark:bg-emerald-700 dark:hover:shadow-emerald-800/30
            dark:focus:ring-emerald-600 dark:focus:ring-offset-gray-900
          "
    >
      <span
        className="
              absolute inset-0 z-0 rounded-[inherit] opacity-0 
              transition-opacity duration-500 ease-out
              bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700
              group-hover:opacity-100
              dark:from-emerald-600 dark:via-emerald-700 dark:to-emerald-800
            "
      ></span>

      <span className="relative z-10 flex items-center gap-2 transition-transform duration-200 group-hover:scale-[1.02]">
        Get Started
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>

      <span
        className="
              absolute -inset-1 z-0 rounded-lg
              bg-emerald-400 opacity-0 transition-opacity
              duration-700 group-hover:opacity-20 group-hover:animate-[pulse_2s_ease-in-out_infinite]
              dark:bg-emerald-500
            "
      ></span>
    </button>
  );
};

export default Button_20;
