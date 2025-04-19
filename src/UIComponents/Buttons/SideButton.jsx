import React from "react";

const SideButton = ({
  label = "Click Me",
  onClick,
  showIcon = true,
  className = "",
  center = false,
}) => {
  var baseClasses =
    "group inline-flex h-11 m-4 items-center justify-center gap-2 rounded-md " +
    "bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition-all " +
    "hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 ";

  var wrapperClasses = center
    ? "flex items-center justify-center min-h-screen"
    : "";

  return (
    <div className={wrapperClasses}>
      <button onClick={onClick} className={baseClasses + className}>
        {label}
        {showIcon && (
          <svg
            className="h-4 w-4 translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SideButton;
