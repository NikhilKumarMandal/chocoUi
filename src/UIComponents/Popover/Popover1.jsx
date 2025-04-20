import { useState, useRef, useEffect } from "react";

const Popover1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center h-70">
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-[#603F26] text-white rounded-lg 
                   hover:bg-gray-700 transition-colors duration-200 
                   focus:outline-none focus:ring-2 focus:ring-gray-500 
                   focus:ring-offset-2"
        >
          Click me
        </button>

        {isOpen && (
          <div
            ref={popoverRef}
            className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 
                     bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div
                className="w-4 h-4 bg-white rotate-45 border-l border-t 
                           border-gray-200"
              ></div>
            </div>

            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium text-[#603F26]">
                Popover Title
              </h3>
            </div>

            <div className="px-4 py-3">
              <p className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque, reprehenderit.
              </p>
            </div>

            <div
              className="px-4 py-3 bg-gray-50 rounded-b-lg border-t 
                         border-gray-200"
            >
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 bg-gray-200 text-[#603F26]rounded 
                           hover:bg-gray-300 transition-colors duration-200"
                >
                  Close
                </button>
                <button
                  className="px-3 py-1.5 bg-[#603F26] text-white rounded 
                           hover:bg-gray-700 transition-colors duration-200"
                >
                  Action
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popover1;
