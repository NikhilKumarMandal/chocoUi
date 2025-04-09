import React from "react";

const Loader_10 = ({ percentage = 0, size = 100, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gaugeGradient)" 
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-500 ease-out"
          style={{ filter: "drop-shadow(0 0 5px #06b6d4)" }} // Neon glow
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" /> {/* Light Cyan */}
            <stop offset="100%" stopColor="#0891b2" /> {/* Darker Cyan */}
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-xl font-bold text-cyan-300 font-mono">
        {`${Math.round(percentage)}%`}
      </span>
    </div>
  );
};

export default Loader_10;
