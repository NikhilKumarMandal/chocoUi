import React from "react";

const Button_17 = () => {
  return (
    <button className="group relative h-14 overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 px-8 font-medium text-white transition-all duration-500 hover:from-violet-600 hover:to-purple-600">
      <span className="relative z-10">Click Me</span>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-particle rounded-full bg-white/80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </button>
  );
};

export default Button_17;
