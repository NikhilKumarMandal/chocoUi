import React from "react";

const Button_16 = () => {
  return (
    <button className="group relative h-14 px-8 font-medium text-gray-800 transition-all duration-500 hover:text-white dark:text-gray-200">
      <span className="relative z-10">Hover Me</span>
      <div className="absolute inset-0 -z-10 rounded-xl bg-gray-100 transition-all duration-500 group-hover:bg-gray-800 group-hover:[clip-path:polygon(0%_15%,15%_15%,15%_0%,85%_0%,85%_15%,100%_15%,100%_85%,85%_85%,85%_100%,15%_100%,15%_85%,0%_85%)] dark:bg-gray-800 dark:group-hover:bg-gray-100" />
    </button>
  );
};

export default Button_16;
