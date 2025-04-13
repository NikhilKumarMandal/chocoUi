import React, { useState } from "react";

export default function AudioWave() {
  const [isHovered, setIsHovered] = useState(false);

  // Number of bars in the wave
  const bars = 7;

  // Base heights for the bars (creates a pleasing curve)
  const baseHeights = [15, 24, 33, 40, 33, 24, 15];

  return (
    <div
      className="flex items-center justify-center p-4 rounded-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-1" style={{ height: "50px" }}>
        {[...Array(bars)].map((_, i) => {
          const baseHeight = baseHeights[i];
          const hoverHeight = baseHeight * 1.3;

          return (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-500 ease-in-out ${isHovered ? "bg-blue-400" : "bg-cyan-400"}`}
              style={{
                height: `${isHovered ? hoverHeight : baseHeight}px`,
                animation: `simpleWave 1.2s infinite ease-in-out`,
                animationDelay: `${i * 0.15}s`,
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
              }}
            ></div>
          );
        })}
      </div>

      <style>
        {`
          @keyframes simpleWave {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.7); }
          }
        `}
      </style>
    </div>
  );
}
