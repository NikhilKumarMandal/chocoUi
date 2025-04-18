import React, { useState } from "react";

const Modal4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
      >
        Open Full Screen Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full transform transition-all duration-300">
            <div className="p-8 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800">
                Full Screen Modal
              </h2>
              <p className="text-gray-600 mt-2">
                A modern take on full-screen dialogs
              </p>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg">
                This full-screen modal provides maximum focus on the content
                while maintaining a clean and modern design. Perfect for
                important actions or detailed information.
              </p>
            </div>

            <div className="p-8 border-t border-gray-200 flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
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
