import React from "react";

const Loader_04 = () => {
  return (
    <div className="flex space-x-2 justify-center">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default Loader_04;
