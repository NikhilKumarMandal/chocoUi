import React from "react";

const Skeleton_05 = () => {
  return (
    <div className="w-full max-w-xs p-5 border rounded-xl shadow-sm animate-pulse bg-white mx-auto m-4">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          <div className="mt-1 h-3 w-8 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          <div className="mt-1 h-3 w-8 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          <div className="mt-1 h-3 w-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton_05;
