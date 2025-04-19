import React from "react";

const FillButton = ({
  label = "Click Me",
  onClick,
  variant = "outline",
  className = "",
}) => {
  let baseClasses =
    "relative inline-flex h-12 m-4 items-center justify-center rounded-lg " +
    "border-2 px-6 font-medium transition-all duration-300 " +
    "focus:outline-none active:scale-95 ";

  let variantClasses = "";

  if (variant === "outline") {
    variantClasses =
      "border-[#603F26] bg-transparent text-[#603F26] " +
      "hover:bg-[#603F26] hover:text-white";
  } else if (variant === "fill") {
    variantClasses =
      "bg-[#603F26] text-white border-[#603F26] " +
      "hover:bg-transparent hover:text-[#603F26]";
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses + variantClasses + " " + className}
    >
      {label}
    </button>
  );
};

export default FillButton;
