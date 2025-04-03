import React from "react";

const Card13 = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
        <div className="group max-w-sm w-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
          {/* Header with image */}
          <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl font-bold text-gray-800">C</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Chocolate Bliss
                </h3>
                <p className="text-gray-500 text-sm">Premium Selection</p>
              </div>
              <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                New
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Dark Chocolate</span>
                <span className="text-gray-800 font-semibold">$12.99</span>
              </div>

              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gray-800 rounded-full transform origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <span className="text-sm text-gray-600">100g</span>
                </div>
                <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <span className="text-sm text-gray-600">70%</span>
                </div>
                <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <span className="text-sm text-gray-600">Belgium</span>
                </div>
              </div>

              <button className="w-full py-2.5 px-4 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card13;
