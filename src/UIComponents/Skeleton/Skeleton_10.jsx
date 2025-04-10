import React from "react";

const Skeleton_10 = () => {
  return (
    <div className="w-full max-w-2xl p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-8 w-1/3 bg-gray-200 rounded mb-6"></div>

      <div className="space-y-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="h-5 w-1/3 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton_10;
