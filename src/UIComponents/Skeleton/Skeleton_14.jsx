import React from "react";

const Skeleton_14 = () => {
  return (
    <div className="w-full max-w-md p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto m-4">
      <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>

      <div className="space-y-3">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex items-start p-3 border rounded-lg">
            <div className="h-10 w-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-1"></div>
              <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
              <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
              <div className="mt-2 h-3 w-1/4 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t flex justify-center">
        <div className="h-8 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default Skeleton_14;
