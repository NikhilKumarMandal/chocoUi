import React from "react";

const Button_12 = () => {
  return (
    <button className="group relative inline-block h-12 overflow-hidden rounded-full border-2 border-blue-500 px-8 font-medium text-blue-500 transition-all hover:text-white">
      <span className="relative z-10">Hover Me</span>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-0 w-0 rounded-full bg-blue-500 transition-all duration-300 ease-out group-hover:h-full group-hover:w-full" />
    </button>
  );
};

export default Button_12;
