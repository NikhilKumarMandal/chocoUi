import React from "react";

const Loader_12 = ({ size = "md", color = "gray" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const colorClasses = {
    blue: "border-blue-500",
    indigo: "border-indigo-500",
    purple: "border-purple-500",
    pink: "border-pink-500",
    red: "border-red-500",
    orange: "border-orange-500",
    amber: "border-amber-500",
    yellow: "border-yellow-500",
    lime: "border-lime-500",
    green: "border-green-500",
    teal: "border-teal-500",
    cyan: "border-cyan-500",
    sky: "border-sky-500",
    gray: "border-[#603F26]",
  };

  return (
    <div className="flex justify-center items-center m-4">
      <div
        className={
          sizeClasses[size] +
          " border-4 border-t-transparent rounded-full animate-spin " +
          colorClasses[color]
        }
      ></div>
    </div>
  );
};

export default Loader_12;
