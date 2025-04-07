import React from "react";

const Card18 = () => {
  return (
    <div className="group relative max-w-sm w-full">
      {/* Liquid animation background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

      {/* Morphing card */}
      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 overflow-hidden">
        {/* Morphing shapes */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-1000"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/30 rounded-full blur-2xl transform group-hover:scale-150 group-hover:-rotate-45 transition-all duration-1000"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-xl font-bold text-white">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Chocolate Bliss
                </h3>
                <p className="text-blue-200">Premium Selection</p>
              </div>
            </div>
            <div className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30">
              New
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Dark Chocolate</span>
                <span className="text-white font-semibold">$12.99</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full transform origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-blue-200">100g</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-blue-200">70%</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-blue-200">Belgium</span>
              </div>
            </div>

            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card18;
