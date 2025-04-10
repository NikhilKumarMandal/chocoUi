import React from "react";

const Skeleton_09 = () => {
  return (
    <div className="w-full max-w-xs p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-8 w-1/2 bg-gray-200 rounded mb-6"></div>

      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center">
            <div className="h-6 w-6 bg-gray-200 rounded mr-3"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-gray-200 rounded-full mr-3"></div>
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="mt-1 h-3 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton_09;
