import { useState } from "react";

const Dropdown2 = ({
  options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
    { id: 4, label: "Option 4" },
  ],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (optionId) => {
    setSelectedItems((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  return (
    <div className="relative w-72 m-4">
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg flex items-center justify-between hover:bg-purple-700 transition-colors duration-200 shadow-md"
      >
        <span>
          {selectedItems.length === 0
            ? "Select Options"
            : selectedItems.length + " Selected"}
        </span>
        <svg
          className={
            isOpen
              ? "w-5 h-5 transition-transform duration-200 transform rotate-180"
              : "w-5 h-5 transition-transform duration-200"
          }
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
        <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-100">
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
              onClick={() => toggleOption(option.id)}
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(option.id)}
                  onChange={() => {}}
                  className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-purple-500 text-purple-600 cursor-pointer"
                />
                {selectedItems.includes(option.id) && (
                  <svg
                    className="absolute w-4 h-4 text-green-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-3 text-gray-700">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
