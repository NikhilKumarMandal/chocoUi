import React from "react";

const Card9 = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
        <div className="group relative max-w-sm w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative bg-gray-900 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Chocolate Delight
                  </h3>
                  <p className="text-gray-400">Premium Collection</p>
                </div>
              </div>
              <div className="bg-gray-800 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Dark Chocolate</span>
                  <span className="text-white font-semibold">$12.99</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800 p-3 rounded-lg text-center group-hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-sm text-gray-400">100g</span>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg text-center group-hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-sm text-gray-400">70%</span>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg text-center group-hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-sm text-gray-400">Belgium</span>
                </div>
              </div>

              <button className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card9;
