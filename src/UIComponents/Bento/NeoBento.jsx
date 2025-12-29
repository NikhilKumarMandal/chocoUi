import React from 'react';

const NeoBento = () => {
  return (
    <div className="p-4 bg-yellow-50 min-h-[600px] flex items-center justify-center font-mono">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        
        {/* Card 1: Large Profile/Intro */}
        <div className="md:col-span-2 bg-[#FF90E8] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 rounded-none transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl font-black uppercase mb-4">Neo-Brutalism</h2>
          <p className="text-lg font-bold leading-tight">
            Bold. Raw. Unapologetic. High contrast and hard shadows define this style.
          </p>
          <button className="mt-6 bg-white border-2 border-black px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer">
            LEARN MORE
          </button>
        </div>

        {/* Card 2: Stat/Number */}
        <div className="bg-[#23A094] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col justify-between transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-xl font-bold bg-black text-white w-fit px-2">STATS</span>
          <div className="text-6xl font-black text-white mt-4">99%</div>
          <p className="font-bold mt-2">Awesomeness Level</p>
        </div>

        {/* Card 3: Image/Visual */}
        <div className="bg-[#FFC900] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center justify-center overflow-hidden relative group transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
           <div className="w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center text-4xl animate-bounce">
             🚀
           </div>
        </div>

        {/* Card 4: List/Features */}
        <div className="md:col-span-2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4 border-b-4 border-black inline-block">FEATURES</h3>
          <ul className="space-y-3 font-bold">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white flex items-center justify-center">1</div>
              <span>Hard Shadows</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#FF90E8] border-2 border-black flex items-center justify-center">2</div>
              <span>Vibrant Colors</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#23A094] border-2 border-black flex items-center justify-center">3</div>
              <span>Thick Borders</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default NeoBento;
