import React, { useState } from "react";

const Modal4 = ({
  title = "Full Screen Modal",
  description = "A modern take on full-screen dialogs",
  content = "This full-screen modal provides maximum focus on the content while maintaining a clean and modern design. Perfect for important actions or detailed information.",
  confirmColor = "bg-[#603F26]",
  confirmHover = "hover:bg-[#8c6446]",
  triggerText = "Open Full Screen Modal",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const confirmButtonClass =
    "px-6 py-3 " +
    confirmColor +
    " text-white rounded-lg " +
    confirmHover +
    " transition-colors duration-300";

  return (
    <div className="flex items-center justify-center bg-[#F5EEE7] p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-[#603F26] text-white rounded-lg shadow-lg hover:bg-[#8c6446] transition-colors duration-300"
      >
        {triggerText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-[#FFF9F5] rounded-2xl shadow-2xl max-w-2xl w-full transform transition-all duration-300">
            <div className="p-8 border-b border-[#E4D4C6]">
              <h2 className="text-3xl font-bold text-[#3C2B21]">{title}</h2>
              <p className="text-[#6B4E3B] mt-2">{description}</p>
            </div>

            <div className="p-8">
              <p className="text-[#4E3A2A] text-lg">{content}</p>
            </div>

            <div className="p-8 border-t border-[#E4D4C6] flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 text-[#7B5236] hover:bg-[#F2E6DD] rounded-lg transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={confirmButtonClass}
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

export default Modal4;
