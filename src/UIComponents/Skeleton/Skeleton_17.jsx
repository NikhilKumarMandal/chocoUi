import React from "react";

const Skeleton_17 = () => {
  return (
    <div className="w-full max-w-lg p-5 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
        <div className="flex flex-col items-center justify-center">
          <div className="h-12 w-12 bg-gray-200 rounded-full mb-3"></div>
          <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-5 w-1/4 bg-gray-200 rounded mb-2"></div>

        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center p-3 border rounded-lg">
            <div className="h-10 w-10 bg-gray-200 rounded mr-3"></div>
            <div className="flex-1">
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-1"></div>
              <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
            </div>
            <div className="h-6 w-6 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <div className="h-10 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default Skeleton_17;
