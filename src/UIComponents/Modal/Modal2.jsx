import React, { useState } from "react";

const Modal2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center bg-[#f3f4f6] p-4">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-white/10 backdrop-blur-sm text-[#6c4e31] rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
      >
        Open Glass Modal
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          {/* Modal Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-500 border border-white/20">
            {/* Header */}
            <div className="p-6 border-b border-white/20">
              <h2 className="text-2xl font-bold text-white">Glass Effect</h2>
              <p className="text-white/80 mt-2">A modern glassmorphism modal</p>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-white/90">
                This modal features a beautiful glassmorphism effect with smooth
                animations and a modern design that works on all devices.
              </p>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/20 flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300"
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

export default Modal2;
