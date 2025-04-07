import React from "react";

const Loader_09 = ({ orbCount = 5, orbColor = "bg-cyan-400", size = 60 }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div
        className="relative w-full h-full"
        style={{ animation: "spin 5s linear infinite" }}
      >
        {Array.from({ length: orbCount }).map((_, i) => {
          const angle = (i / orbCount) * 360; 
          const orbSize = Math.max(3, size / 10);
          const orbitRadius = size * 0.4; 

          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(${orbitRadius}px)`,
              }}
            >
              <div
                className={`${orbColor} rounded-full shadow-lg shadow-cyan-500/50`}
                style={{
                  width: orbSize,
                  height: orbSize,
                  animation: `pulse 2s infinite ease-in-out ${i * 0.2}s alternate`,
                }}
              />
            </div>
          );
        })}
      </div>

      <style>{`
            @keyframes spin { 
              0% { transform: rotate(0deg); } 
              100% { transform: rotate(360deg); } 
            }
            
            @keyframes pulse {
              0% { transform: scale(0.7); opacity: 0.5; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}</style>
    </div>
  );
};

export default Loader_09;
