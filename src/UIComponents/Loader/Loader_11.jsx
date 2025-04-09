import React from "react";

const Loader_11 = ({ barCount = 12, barColor = "bg-purple-500" }) => {
  return (
    <div className="flex items-end justify-center space-x-1 h-24 p-2 bg-black/20 rounded-lg">
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className={`w-2 ${barColor} rounded-t-sm transition-[height] duration-100 ease-out`}
          style={{
            height: "10%", 
            animation: `soundPulse 0.8s infinite ease-in-out alternate`,
            animationDelay: `${Math.random() * 0.5}s`,
            filter: "drop-shadow(0 0 4px var(--color-purple-500))", 
          }}
        ></div>
      ))}
      <style>{`
              @keyframes soundPulse {
                0% { height: 10%; opacity: 0.7; }
                50% { height: 100%; opacity: 1; } /* Random height achieved by different delays */
                100% { height: 15%; opacity: 0.8; }
              }
              :root { --color-purple-500: #a855f7; /* Define color variable */ }
           `}</style>
    </div>
  );
};

export default Loader_11;
