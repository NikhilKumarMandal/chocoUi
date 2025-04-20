import React, { useState } from "react";

const Modal3 = ({
  title = "Bottom Sheet",
  description = "Perfect for mobile interfaces",
  content = "This bottom sheet modal is optimized for mobile devices with a natural swipe-to-dismiss interaction pattern.",
  confirmColor = "bg-[#5C3B28]",
  confirmHover = "hover:bg-[#7B5236]",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const confirmBtnClass =
    "px-4 py-2 " +
    confirmColor +
    " text-white rounded-lg " +
    confirmHover +
    " transition-colors duration-300";

  return (
    <div className="flex items-center justify-center bg-[#F5EEE7] p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-[#5C3B28] text-white rounded-lg shadow-lg hover:bg-[#7B5236] transition-colors duration-300"
      >
        Open Bottom Sheet
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-center p-4 z-50">
          <div className="bg-[#FFF9F5] rounded-t-2xl shadow-xl w-full max-w-md transform transition-all duration-300">
            <div className="flex justify-center p-2">
              <div className="w-12 h-1 bg-[#D8C3B0] rounded-full"></div>
            </div>

            <div className="p-6 border-b border-[#E4D4C6]">
              <h2 className="text-2xl font-bold text-[#3C2B21]">{title}</h2>
              <p className="text-[#6B4E3B] mt-2">{description}</p>
            </div>

            <div className="p-6">
              <p className="text-[#4E3A2A]">{content}</p>
            </div>

            <div className="p-6 border-t border-[#E4D4C6] flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-[#7B5236] hover:bg-[#F2E6DD] rounded-lg transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={confirmBtnClass}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal3;
