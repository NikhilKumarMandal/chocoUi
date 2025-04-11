import { useState } from 'react';

const Dropdown3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Select option');

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className="relative w-64">
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg 
                 flex items-center justify-between hover:bg-indigo-700 
                 transition-colors duration-200"
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
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

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border border-gray-200 
                      rounded-lg shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 
                       first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Dropdown3;