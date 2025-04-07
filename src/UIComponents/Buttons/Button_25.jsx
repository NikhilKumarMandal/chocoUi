import React from "react";
import { ArrowRight } from "lucide-react";

const Button_25 = () => {
  return (
    <button
      className="
          group relative flex h-12 w-44 items-center justify-between
          overflow-hidden rounded-full px-6 py-3 font-medium
          bg-neutral-900 text-white transition-all duration-300
          hover:bg-neutral-800 hover:shadow-lg
          dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100
          
          before:absolute before:inset-0 before:rounded-full 
          before:border-2 before:border-transparent 
          before:transition-all before:duration-500
          hover:before:border-white/30 hover:dark:before:border-neutral-900/30
          
          after:absolute after:top-0 after:left-0 after:h-full after:w-12
          after:-translate-x-12 after:skew-x-12 after:bg-white/20
          after:transition-all after:duration-700
          hover:after:translate-x-[200px] hover:after:skew-x-12
        "
    >
      <span className="relative z-10">Schedule Call</span>
      <div
        className="
            relative z-10 flex items-center transition-all duration-300
            group-hover:translate-x-2 group-hover:scale-110
          "
      >
        <ArrowRight className="h-4 w-4" />
      </div>

      <div
        className="
            absolute right-5 h-2 w-2 rounded-full bg-white/80
            opacity-0 transition-all duration-500 group-hover:opacity-100
            group-hover:[animation:pulse_1.5s_infinite]
            dark:bg-neutral-900/80
          "
      />
    </button>
  );
};

export default Button_25;
