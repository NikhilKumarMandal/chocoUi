import React from "react";
import { MoveRight } from "lucide-react";

const Button_02 = () => {
  return (
    <button
      className="
        group relative inline-flex h-12 m-4 items-center justify-center overflow-hidden
        rounded-lg bg-[#603F26] px-6 font-medium text-white
        transition-all duration-300 hover:bg-[#7a4f2f] hover:pl-5 hover:pr-12
        focus:outline-none
      "
    >
      <span className="transition-transform duration-300 group-hover:-translate-x-1">
        Explore More
      </span>
      <MoveRight
        className="
          absolute right-4 h-5 w-5 translate-x-10 opacity-0
          transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100
        "
      />
    </button>
  );
};

export default Button_02;