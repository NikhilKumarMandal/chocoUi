import React from "react";

const Skeleton_07 = () => {
  return (
    <div className="w-full max-w-5xl p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto m-4">
      <div className="h-8 w-1/4 bg-gray-200 rounded mb-6"></div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="p-4 border rounded-lg">
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
            <div className="mt-2 h-3 w-1/3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Chart Area */}
      <div className="border rounded-lg p-4">
        <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default Skeleton_07;
