import React from "react";

const BloomButton = ({
  label = "Hover Me",
  onClick,
  className = "",
  center = false,
}) => {
  const centerWrapper = center ? "flex items-center justify-center" : "";

  return (
    <div className={centerWrapper}>
      <button
        onClick={onClick}
        className={`group relative inline-block h-12 m-4 overflow-hidden rounded-full 
          border-2 px-8 font-medium transition-all duration-300 ease-out
          text-[#101828] border-[#6B4423] hover:text-white ${className}`}
      >
        <span className="relative z-10">{label}</span>
        <div
          className="absolute inset-0 m-auto h-0 w-0 rounded-full 
          bg-[#6B4423] transition-all duration-300 ease-out group-hover:h-full group-hover:w-full"
        />
      </button>
    </div>
  );
};

export default BloomButton;
