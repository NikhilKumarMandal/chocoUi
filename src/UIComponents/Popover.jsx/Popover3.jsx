import { useState, useRef, useEffect } from "react";

const Popover3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative">
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-2.5 bg-white text-gray-700 rounded-full
                   hover:bg-gray-50 transition-all duration-200
                   shadow-sm hover:shadow border border-gray-100
                   flex items-center space-x-2 group"
        >
          <span className="font-medium">Information</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            ref={popoverRef}
            className="absolute left-1/2 transform -translate-x-1/2 mt-3
                     w-72 bg-white rounded-2xl shadow-lg border border-gray-100
                     backdrop-blur-sm transition-all duration-200 z-50"
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100" />
            </div>

            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-medium">Quick Information</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                Here's some helpful information that provides context the user.
                Keep it brief and meaningful.
              </p>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800
                           transition-colors duration-200"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popover3;
