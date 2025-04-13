import React from "react";

const Loader_08 = () => {
  return (
    <div className="flex space-x-2 justify-center">
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className="w-3 h-3 bg-white rounded-full animate-ping"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default Loader_08;
