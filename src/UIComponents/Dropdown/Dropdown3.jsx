import { useState } from "react";

const Dropdown3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select option");

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Precomputed class names
  const containerClass = "relative w-64 m-4";

  const buttonClass =
    "w-full px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center justify-between hover:bg-indigo-700 transition-colors duration-200";

  const iconBaseClass = "w-5 h-5 transition-transform duration-200";
  const iconOpenClass = "transform rotate-180";
  const iconClass = isOpen
    ? iconBaseClass + " " + iconOpenClass
    : iconBaseClass;

  const dropdownClass =
    "absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg";

  const optionClass =
    "px-4 py-2 cursor-pointer hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg";

  return (
    <div className={containerClass}>
      <button onClick={toggleDropdown} className={buttonClass}>
        <span>{selected}</span>
        <svg
          className={iconClass}
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
        <div className={dropdownClass}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={optionClass}
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
