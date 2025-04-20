import React from "react";
import { ArrowRight } from "lucide-react";

const RevealButton = ({
  label = "Explore",
  onClick,
  icon = true,
  className = "",
  center = false,
}) => {
  const baseClasses = `
    group relative isolate h-12 w-36 m-4 cursor-pointer overflow-hidden rounded-full 
    border border-[#C4A484] bg-[#FFF8F2] p-1 text-center font-medium shadow-sm 
    transition-all duration-500 hover:border-transparent hover:shadow-lg 
    dark:border-[#BFA88F] dark:bg-[#3B2A1A] ${className}
  `;

  const textClasses = `
    absolute inset-0 z-10 flex translate-x-0 items-center justify-center text-[#edcaa5] opacity-100 
    transition-all duration-500 ease-out group-hover:-translate-x-full group-hover:opacity-0
  `;

  const iconClasses = `
    absolute inset-0 z-10 flex translate-x-full items-center justify-center gap-2 text-white opacity-0 
    transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100
  `;

  const gradientClasses = `
    absolute inset-0 -z-0 h-full w-0 rounded-full bg-gradient-to-r 
    from-[#7A4D28] to-[#B78B61] transition-all duration-500 ease-out group-hover:w-full
  `;

  const shimmerClasses = `
    absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100 
    group-hover:animate-shimmer
  `;

  const centerWrapper = center
    ? "flex items-center justify-center min-h-screen"
    : "";

  return (
    <div className={centerWrapper}>
      <div onClick={onClick} className={baseClasses}>
        <span className={textClasses}>{label}</span>

        <div className={iconClasses}>
          <span>{label}</span>
          {icon && (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </div>

        <div className={gradientClasses} />

        <div className={shimmerClasses}>
          <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:250%_250%]" />
        </div>
      </div>
    </div>
  );
};

export default RevealButton;
