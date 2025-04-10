import React from "react";

const Skeleton_16 = () => {
  return (
    <div className="w-full max-w-md p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="flex items-center mb-4 pb-3 border-b">
        <div className="h-10 w-10 bg-gray-200 rounded-full mr-3"></div>
        <div>
          <div className="h-5 w-24 bg-gray-200 rounded"></div>
          <div className="mt-1 h-3 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="h-64 overflow-y-auto space-y-4 mb-4">
        {/* Received messages */}
        <div className="flex items-start">
          <div className="h-8 w-8 bg-gray-200 rounded-full mr-2 flex-shrink-0"></div>
          <div className="max-w-[70%]">
            <div className="bg-gray-200 rounded-lg p-3">
              <div className="h-4 w-full bg-gray-300 rounded mb-1"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            </div>
            <div className="h-3 w-16 bg-gray-200 rounded mt-1"></div>
          </div>
        </div>

        {/* Sent messages */}
        <div className="flex items-start justify-end">
          <div className="max-w-[70%]">
            <div className="bg-gray-200 rounded-lg p-3">
              <div className="h-4 w-full bg-gray-300 rounded mb-1"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            </div>
            <div className="h-3 w-16 bg-gray-200 rounded mt-1 ml-auto"></div>
          </div>
        </div>

        {/* Received messages */}
        <div className="flex items-start">
          <div className="h-8 w-8 bg-gray-200 rounded-full mr-2 flex-shrink-0"></div>
          <div className="max-w-[70%]">
            <div className="bg-gray-200 rounded-lg p-3">
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            </div>
            <div className="h-3 w-16 bg-gray-200 rounded mt-1"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center pt-3 border-t">
        <div className="h-10 w-10 bg-gray-200 rounded-full mr-2"></div>
        <div className="flex-1 h-10 bg-gray-200 rounded-lg mr-2"></div>
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default Skeleton_16;
