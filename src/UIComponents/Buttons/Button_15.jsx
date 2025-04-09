import React from "react";

const Button_15 = () => {
  return (
    <button className="group relative h-14 px-8 font-mono font-bold text-emerald-400 transition-all duration-500 hover:text-cyan-400">
      <span className="absolute inset-0 rounded-lg bg-emerald-400/5 transition-all duration-300 group-hover:bg-cyan-400/10" />
      <span className="relative block overflow-hidden">
        <span className="block animate-glitch-1 group-hover:animate-none">
          CYBER_UI
        </span>
        <span className="absolute left-0 top-0 block animate-glitch-2 text-transparent [clip-path:polygon(10%_0,20%_0,20%_100%,10%_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          CYBER_UI
        </span>
        <span className="absolute left-0 top-0 block animate-glitch-3 text-transparent [clip-path:polygon(90%_0,100%_0,100%_100%,90%_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          CYBER_UI
        </span>
      </span>
      <div className="absolute inset-0 rounded-lg border-2 border-emerald-400/30 opacity-0 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-lg [mask:linear-gradient(transparent_40%,#000_90%)] [mask-size:200%_200%] group-hover:[mask-position:100%_100%]" />
    </button>
  );
};

export default Button_15;
