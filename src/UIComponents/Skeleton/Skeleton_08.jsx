import React from "react";

const Skeleton_08 = () => {
  return (
    <div className="w-full max-w-md p-5 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-6 w-1/2 bg-gray-200 rounded mb-6"></div>

      <div className="space-y-4">
        {/* Form Fields */}
        <div>
          <div className="h-4 w-1/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 w-full bg-gray-200 rounded"></div>
        </div>

        <div>
          <div className="h-4 w-1/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 w-full bg-gray-200 rounded"></div>
        </div>

        <div>
          <div className="h-4 w-1/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-24 w-full bg-gray-200 rounded"></div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center">
          <div className="h-5 w-5 bg-gray-200 rounded"></div>
          <div className="ml-2 h-4 w-1/2 bg-gray-200 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="pt-4 flex space-x-3">
          <div className="h-10 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-10 w-1/2 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton_08;
