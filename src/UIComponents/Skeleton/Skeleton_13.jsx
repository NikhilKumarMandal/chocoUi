import React from "react";

const Skeleton_13 = () => {
  return (
    <div className="w-full max-w-6xl p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-8 w-1/4 bg-gray-200 rounded mb-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="border rounded-lg p-3">
            <div className="h-40 w-full bg-gray-200 rounded-lg mb-3"></div>
            <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-3"></div>
            <div className="flex justify-between items-center">
              <div className="h-6 w-16 bg-gray-200 rounded"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton_13;
