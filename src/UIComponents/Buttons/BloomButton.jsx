import React from "react";

const BloomButton = ({
  label = "Hover Me",
  onClick,
  color = "blue",
  className = "",
  center = false,
}) => {
  var baseClasses =
    "group relative inline-block h-12 m-4 overflow-hidden rounded-full " +
    "border-2 px-8 font-medium transition-all hover:text-white ";

  var textClass = "text-" + color + "-500 ";
  var borderClass = "border-" + color + "-500 ";
  var bgClass = "bg-" + color + "-500 ";
  var centerWrapper = center
    ? "flex items-center justify-center min-h-screen"
    : "";

  return (
    <div className={centerWrapper}>
      <button
        onClick={onClick}
        className={baseClasses + borderClass + textClass + className}
      >
        <span className="relative z-10">{label}</span>
        <div
          className={
            "absolute bottom-0 left-0 right-0 top-0 m-auto h-0 w-0 rounded-full " +
            bgClass +
            " transition-all duration-300 ease-out group-hover:h-full group-hover:w-full"
          }
        />
      </button>
    </div>
  );
};

export default BloomButton;
