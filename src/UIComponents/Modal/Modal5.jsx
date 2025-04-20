import { useState } from "react";

const Modal5 = ({
  title = "Slide Modal",
  description = "A modern slide-in dialog",
  content = "This slide-in modal is perfect for side panels and additional content. It provides a smooth animation and works great on all devices.",
  triggerText = "Open Slide Modal",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "bg-[#603F26]",
  confirmHover = "hover:bg-[#8c6446]",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const confirmButtonClass =
    "px-4 py-2 " +
    confirmColor +
    " text-white rounded-lg " +
    confirmHover +
    " transition-colors duration-300";

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-[#603F26] text-white rounded-lg shadow-lg hover:bg-[#8c6446] transition-colors duration-300"
      >
        {triggerText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-end p-4 z-50">
          <div className="bg-white rounded-l-2xl shadow-xl w-full max-w-md h-full transform transition-all duration-300">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-700">{content}</p>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                {cancelText}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={confirmButtonClass}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal5;
