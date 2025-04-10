import React from "react";

const Skeleton_15 = () => {
  return (
    <div className="w-full max-w-md p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="h-6 w-6 bg-gray-200 rounded"></div>
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
        <div className="h-6 w-6 bg-gray-200 rounded"></div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="text-center">
            <div className="h-5 w-5 bg-gray-200 rounded-full mx-auto"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 35 }).map((_, index) => (
          <div key={index} className="aspect-square p-1">
            <div
              className={`h-full w-full rounded-md ${index % 7 === 0 || index % 7 === 6 ? "bg-gray-100" : "bg-gray-200"}`}
            ></div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t">
        <div className="h-5 w-1/3 bg-gray-200 rounded mb-3"></div>
        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center">
              <div className="h-3 w-3 bg-gray-200 rounded-full mr-2"></div>
              <div className="h-4 w-1/4 bg-gray-200 rounded mr-3"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton_15;
