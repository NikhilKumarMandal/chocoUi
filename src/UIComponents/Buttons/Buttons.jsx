import React from "react";

const Button = () => {
  return (
    <div className="flex flex-wrap gap-4 p-8 bg-gradient-to-br from-[#FFF8F2] to-[#FCEEE3] items-center justify-center rounded-md">
      <button
        type="button"
        aria-label="Primary Button"
        className="px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 bg-[#7A4D28] text-[#FCD9B8] hover:bg-[#5C371B] focus-visible:ring-[#A05F37] shadow-md hover:shadow-lg"
      >
        Primary
      </button>

      <button
        type="button"
        aria-label="Outline Button"
        className="px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 border border-[#A05F37] text-[#7A4D28] bg-white/60 backdrop-blur-md hover:bg-[#FFF2E3] focus-visible:ring-[#A05F37] shadow-sm hover:shadow-md"
      >
        Outline
      </button>

      <button
        type="button"
        aria-label="Ghost Button"
        className="px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 text-[#7A4D28] bg-[#FFF8F2]/30 backdrop-blur-md hover:bg-[#FAE4D1] focus-visible:ring-[#A05F37] hover:shadow-inner"
      >
        Ghost
      </button>

      <button
        type="button"
        aria-label="Delete Button"
        className="px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 bg-[#D8573B] text-white hover:bg-[#B5422A] focus-visible:ring-[#E46B4F] shadow-md hover:shadow-lg"
      >
        Delete
      </button>

      <button
        type="button"
        aria-label="Add Item Button"
        title="Add Item"
        className="flex items-center gap-2 px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 bg-[#FCEEE3] text-[#7A4D28] hover:bg-[#F5E2D3] focus-visible:ring-[#D6A88A] shadow-sm hover:shadow-md"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Item
      </button>
    </div>
  );
};

export default Button;
