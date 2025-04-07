import React from "react";

const Loader_06 = () => {
  return (
    <div className="flex space-x-1 items-end h-10">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-2 bg-cyan-500 animate-[bounce_1s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.2}s`, height: "100%" }}
        />
      ))}
    </div>
  );
};

export default Loader_06;
