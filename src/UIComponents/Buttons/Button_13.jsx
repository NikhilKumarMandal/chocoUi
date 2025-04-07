import React from "react";

const Button_13 = () => {
  return (
    <>
      <svg className="hidden">
        <filter id="distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.02"
            numOctaves="1"
            result="warp"
          />
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="15"
            in="SourceGraphic"
            in2="warp"
          />
        </filter>
      </svg>
      <button className="relative h-14 px-8 text-lg font-medium text-indigo-600 transition-all duration-500 hover:filter hover:contrast-[1.2] hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)] hover:brightness-[1.05] active:scale-95">
        <span className="block transition-all duration-300 hover:filter-none">
          <span className="block hover:[filter:url(#distortion)]">
            Hover Effect
          </span>
        </span>
        <div className="absolute inset-0 -z-10 rounded-2xl bg-white/80 backdrop-blur-xl transition-all duration-300 group-hover:bg-white/95" />
      </button>
    </>
  );
};

export default Button_13;
