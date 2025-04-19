import React from "react";

const Card1 = ({
  title = "Choco UI",
  description = "Here are the full information of choco ui and tech-wizard team",
  buttonText = "Read more",
  onClick = () => {},
  backgroundColor = "#FFDBB5",
  textColor = "#152f3d",
  buttonColor = "#6C4E31",
}) => {
  return (
    <div
      className="max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm mx-auto m-4"
      style={{ backgroundColor }}
    >
      <h5
        className="mb-2 text-2xl font-bold tracking-tight"
        style={{ color: textColor }}
      >
        {title}
      </h5>

      <p className="mb-3 font-normal" style={{ color: textColor }}>
        {description}
      </p>

      <button
        onClick={onClick}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none"
        style={{
          backgroundColor: buttonColor,
        }}
      >
        {buttonText}
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card1;
