import React from "react";

const Button_14 = () => {
  return (
    <button className="relative isolate h-14 overflow-hidden rounded-2xl bg-gray-900 px-8 font-medium text-white transition-all duration-500 hover:bg-gray-800 hover:shadow-xl">
      <span className="relative z-10">Hover Me</span>
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_-50%,#3b82f6_0%,transparent_70%)] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:[background-size:300%_300%]" />
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100 group-hover:[background-position:200%_100%]" />
    </button>
  );
};

export default Button_14;
