import React from "react";

const Skeleton_11 = () => {
  return (
    <div className="w-full max-w-sm p-5 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-6 w-1/2 bg-gray-200 rounded mb-2"></div>
      <div className="h-8 w-1/3 bg-gray-200 rounded mb-4"></div>

      <div className="h-10 w-full bg-gray-200 rounded mb-6"></div>

      <div className="space-y-3 mb-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded-full mr-3"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      <div className="h-10 w-full bg-gray-200 rounded"></div>
    </div>
  );
};

export default Skeleton_11;
