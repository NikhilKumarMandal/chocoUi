import React, { useState } from "react";

const Modal1 = ({
  user = "Nikhil",
  title = "This is a modern modal dialog",
  description = "This modal is fully responsive and works great on all screen sizes.",
  buttonColor = "bg-black",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const confirmButtonClasses =
    "px-4 py-2 " +
    buttonColor +
    " text-white rounded-lg hover:bg-blue-700 transition-colors duration-300";

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full transform transition-all duration-300">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>

            <div className="p-6">
              <p className="text-gray-700">
                {"Hello, " + user + "! " + description}
              </p>
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
