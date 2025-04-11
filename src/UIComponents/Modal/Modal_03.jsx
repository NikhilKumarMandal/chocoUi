import React, { useState } from 'react';

const Modal3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
      >
        Open Bottom Sheet
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center p-4 z-50">
          {/* Modal Content */}
          <div className="bg-white rounded-t-2xl shadow-xl w-full max-w-md transform transition-all duration-300">
            {/* Handle */}
            <div className="flex justify-center p-2">
              <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
            </div>

            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Bottom Sheet</h2>
              <p className="text-gray-600 mt-2">Perfect for mobile interfaces</p>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-gray-700">
                This bottom sheet modal is optimized for mobile devices with
                a natural swipe-to-dismiss interaction pattern.
              </p>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
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