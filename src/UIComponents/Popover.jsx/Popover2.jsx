import { useState, useRef, useEffect } from "react";

const Popover2 = () => {
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative inline-block">
        <span
          ref={triggerRef}
          onMouseEnter={() => setIsOpen(true)}
          className="text-gray-600 border-b border-dashed border-gray-400 
                   cursor-pointer hover:text-gray-900 transition-colors"
        >
          Hover me
        </span>

        {isOpen && (
          <div
            ref={popoverRef}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full 
                     top-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md 
                     shadow-lg whitespace-nowrap"
            style={{ marginTop: "-10px" }}
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-2 h-2 bg-gray-900 rotate-45" />
            </div>
            Simple tooltip message
          </div>
        )}
      </div>
    </div>
  );
};

export default Popover2;
