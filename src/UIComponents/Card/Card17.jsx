import React from "react";

const Card17 = () => {
  return (
    <div className="group max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="md:w-1/2 bg-gradient-to-br from-amber-600 to-orange-600 p-8 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <span className="text-4xl font-bold text-white">C</span>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Chocolate Bliss
              </h3>
              <p className="text-gray-600">Premium Selection</p>
            </div>
            <div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">
              New
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Dark Chocolate</span>
                <span className="text-gray-800 font-semibold text-lg">
                  $12.99
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transform origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-gray-600">100g</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-gray-600">70%</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300 transform group-hover:scale-105">
                <span className="text-sm text-gray-600">Belgium</span>
              </div>
            </div>

            <button className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/25">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card17;
