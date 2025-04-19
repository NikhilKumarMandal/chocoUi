import React, { useState } from "react";

const Modal3 = ({
  title = "Bottom Sheet",
  description = "Perfect for mobile interfaces",
  content = "This bottom sheet modal is optimized for mobile devices with a natural swipe-to-dismiss interaction pattern.",
  confirmColor = "bg-green-600",
  confirmHover = "hover:bg-green-700",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const confirmBtnClass =
    "px-4 py-2 " +
    confirmColor +
    " text-white rounded-lg " +
    confirmHover +
    " transition-colors duration-300";

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
      >
        Open Bottom Sheet
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center p-4 z-50">
          <div className="bg-white rounded-t-2xl shadow-xl w-full max-w-md transform transition-all duration-300">
            <div className="flex justify-center p-2">
              <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
            </div>

            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>

            <div className="p-6">
              <p className="text-gray-700">{content}</p>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
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
