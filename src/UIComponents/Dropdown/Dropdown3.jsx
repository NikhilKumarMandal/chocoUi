import { useState } from "react";

const Dropdown3 = ({
  options = ["Option 1", "Option 2", "Option 3", "Option 4"],
  width = "w-64",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${width} m-4`}>
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-3 bg-[#4B2E2B] text-white rounded-lg flex items-center justify-between hover:bg-[#3C241F] transition-colors duration-200 shadow-md"
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-[#F5ECE4] border border-[#D7C2B4] rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-[#EADFD3] text-[#4B2E2B] first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown3;
