import React, { useState } from "react";

const Modal1 = ({
  user = "Nikhil",
  title = "This is a modern modal dialog",
  description = "This modal is fully responsive and works great on all screen sizes.",
  buttonColor = "bg-[#603F26]",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const confirmButtonClasses =
    "px-4 py-2 " +
    buttonColor +
    " text-white rounded-lg hover:opacity-90 transition-colors duration-300";

  return (
    <div className="flex items-center justify-center bg-[#F6ECE4] p-4 ">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-[#603F26] text-white rounded-lg shadow-lg hover:bg-[#976C4A] transition-colors duration-300"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#FFF9F5] rounded-2xl shadow-xl max-w-md w-full transform transition-all duration-300 border border-[#EAD8C0]">
            <div className="p-6 border-b border-[#EAD8C0]">
              <h2 className="text-2xl font-bold text-[#4B2E2B]">{title}</h2>
              <p className="text-[#6B4C3B] mt-2">{description}</p>
            </div>

            <div className="p-6">
              <p className="text-[#3F2B2B]">
                Hello, <span className="font-semibold">{user}</span>!{" "}
                {description}
              </p>
            </div>

            <div className="p-6 border-t border-[#EAD8C0] flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-[#5C4333] bg-[#EFE6DC] hover:bg-[#e2d6cb] rounded-lg transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={confirmButtonClasses}
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

export default Modal1;
