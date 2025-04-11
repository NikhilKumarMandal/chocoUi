import React, { useState } from "react";

const Dropdown5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Select a color");

  const colors = [
    { name: "White", class: "bg-blue-300 text-white" },
    { name: "Black", class: "bg-blue-950 text-white" },
    { name: "Gray", class: "bg-gray-500 text-white" },
    {
      name: "Gradient",
      class: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white",
    },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (colorName) => {
    setSelectedColor(colorName);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen" >
    <div className="relative  inline-block text-left  ">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-48 px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-xl shadow-md
           hover:bg-gray-500 focus:outline-none"
        >
          {selectedColor}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`cursor-pointer px-4 py-2 text-sm rounded-xl m-1 ${color.class} hover:opacity-90`}
                onClick={() => handleSelect(color.name)}
              >
                {color.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Dropdown5;
