import { useState, useRef, useEffect } from "react";

const Popover4 = () => {
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
    <div className="flex justify-center items-center">
      <div className="relative">
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(!isOpen)}
          className={
            "px-5 py-2 bg-[#603F26] text-neutral-300 rounded-lg " +
            "hover:bg-[#be885e] transition-all duration-200 " +
            "border border-neutral-700 flex items-center space-x-2"
          }
        >
          <span className="font-medium">Read More</span>
          <svg
            className={
              "w-4 h-4 transition-transform duration-200 " +
              (isOpen ? "rotate-180" : "")
            }
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
            className={
              "absolute left-1/2 transform -translate-x-1/2 mt-3 " +
              "w-80 bg-neutral-800 rounded-lg border border-neutral-700 " +
              "shadow-xl transition-all duration-200 z-50"
            }
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div
                className={
                  "w-3 h-3 bg-neutral-800 rotate-45 " +
                  "border-l border-t border-neutral-700"
                }
              />
            </div>

            <div className="p-5 space-y-4">
              <p className="text-neutral-300 text-sm leading-relaxed">
                Minimal design focuses on the essential elements of a user
                interface. It emphasizes simplicity and clarity, removing
                unnecessary decorative elements that don't serve a functional
                purpose.
              </p>

              <p className="text-neutral-400 text-sm leading-relaxed">
                This approach not only creates a clean and modern aesthetic but
                also improves usability by reducing cognitive load and helping
                users focus on what's important. The careful use of space,
                typography, and contrast guides the user's attention.
              </p>

              <div className="pt-2 flex justify-end border-t border-neutral-700">
                <button
                  onClick={() => setIsOpen(false)}
                  className={
                    "px-4 py-1.5 text-sm text-neutral-400 " +
                    "hover:text-neutral-200 transition-colors duration-200"
                  }
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popover4;
