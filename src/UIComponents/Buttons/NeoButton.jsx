import React from 'react';

const NeoButton = ({ 
  label = "Neo Button", 
  onClick, 
  className = "" 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-8 py-3 font-bold text-black transition-all duration-200 
        bg-[#FF90E8] border-4 border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
        hover:translate-x-[2px] hover:translate-y-[2px] 
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
        active:translate-x-[4px] active:translate-y-[4px] 
        active:shadow-none 
        uppercase tracking-wider
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default NeoButton;
