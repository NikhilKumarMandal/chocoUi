import React from "react";

const Loader_01 = () => {
  return (
    <div className="flex space-x-2 justify-center">
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className={`w-4 h-4 bg-cyan-400 rounded-full animate-bounce`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default Loader_01;
