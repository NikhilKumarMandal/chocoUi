import React from "react";

const DollyGatesCard = ({ image, title, subtitle, description, label }) => {
  const iconPaths = [
    "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
    "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md rounded-3xl overflow-hidden bg-[#FFF8F2] shadow-xl border border-[#F1E6D9]">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
          <div className="relative h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3b2a20] opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FCD9B8] opacity-90">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="relative p-4 sm:p-6">
          <span className="inline-block bg-[#F5EDE6] text-[#7A4D28] px-3 py-1 rounded-full text-xs font-medium mb-3 sm:mb-4">
            {label}
          </span>

          <h2 className="text-xl sm:text-2xl font-semibold text-[#5C371B] mb-2 sm:mb-3">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-[#7A4D28] leading-relaxed mb-4 sm:mb-5">
            {description}
          </p>

          <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
            {iconPaths.map((path, index) => (
              <button
                key={index}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F3E3D3] hover:bg-[#EAD5C4] text-[#5C371B] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={path}></path>
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DollyGatesCard;
