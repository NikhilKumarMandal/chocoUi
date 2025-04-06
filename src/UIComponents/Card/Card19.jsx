import React from "react";

const Card19 = () => {
  return (
    <div className="group relative max-w-sm w-full">
      {/* Holographic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer"></div>

      {/* Card container */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden">
        {/* Light reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/50">
                <span className="text-xl font-bold text-white">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Chocolate Bliss
                </h3>
                <p className="text-gray-400">Premium Selection</p>
              </div>
            </div>
            <div className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600">
              New
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Dark Chocolate</span>
                <span className="text-white font-semibold">$12.99</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full transform origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:bg-gray-700/50 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-gray-300">100g</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:bg-gray-700/50 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-gray-300">70%</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:bg-gray-700/50 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-gray-300">Belgium</span>
              </div>
            </div>

            <button className="w-full py-3 px-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-900/25">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card19;
