import React from "react";

const Card16 = () => {
  return (
    <div className="group max-w-sm w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
      {/* Gradient header */}
      <div className="relative h-48 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
            <span className="text-3xl font-bold text-white">C</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">Chocolate Bliss</h3>
            <p className="text-gray-400 text-sm">Premium Selection</p>
          </div>
          <div className="bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full text-sm font-medium border border-rose-500/30">
            New
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Dark Chocolate</span>
            <span className="text-white font-semibold">$12.99</span>
          </div>

          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transform origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 rounded-lg bg-gray-700/50 group-hover:bg-gray-700 transition-colors duration-300">
              <span className="text-sm text-gray-300">100g</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-700/50 group-hover:bg-gray-700 transition-colors duration-300">
              <span className="text-sm text-gray-300">70%</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-700/50 group-hover:bg-gray-700 transition-colors duration-300">
              <span className="text-sm text-gray-300">Belgium</span>
            </div>
          </div>

          <button className="w-full py-2.5 px-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-rose-500/25">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card16;
