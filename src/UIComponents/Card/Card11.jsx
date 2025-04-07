import React from "react";

const Card11 = () => {
  return (
    <div className="group relative max-w-sm w-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-lg p-8 border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">C</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Chocolate Delight
              </h3>
              <p className="text-gray-400">Premium Collection</p>
            </div>
          </div>
          <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
            <svg
              className="w-6 h-6 text-violet-400"
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
            <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="h-full w-3/4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
              <span className="text-sm text-gray-300">100g</span>
            </div>
            <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
              <span className="text-sm text-gray-300">70%</span>
            </div>
            <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
              <span className="text-sm text-gray-300">Belgium</span>
            </div>
          </div>

          <button className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card11;
