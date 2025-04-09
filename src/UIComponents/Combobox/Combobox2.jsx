import { useState } from "react";

const options = ["Ocean Blue", "Sky Blue", "Navy Blue", "Light Blue"];

export default function ComboBox2() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-72 mx-auto mt-10">
      <button
        onClick={toggleDropdown}
        className="w-full bg-blue-100 text-blue-700 py-3 px-4 rounded-sm shadow hover:bg-blue-200 transition text-left"
      >
        {selected}
        <span className="float-right">&#9662;</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-blue-300 rounded-sm shadow-lg">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 hover:bg-blue-100 text-blue-800 rounded-sm transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
