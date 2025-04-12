import { useState, useRef, useEffect } from "react";

export default function Dropdown1() {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
  
    <div className="relative inline-block" ref={dropdownRef}>
   
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
      >
        <svg
          className="w-5 h-5 text-gray-800 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

   
      {isOpen && (
        <div
          className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition ease-out duration-100 transform scale-100 opacity-100"
        >
          {[
            "Your Profile",
            "Your Projects",
            "Help",
            "Settings",
            "Sign Out",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  
  );
}
