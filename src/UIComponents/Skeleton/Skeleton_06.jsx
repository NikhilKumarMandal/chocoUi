import React from "react";

const Skeleton_06 = () => {
  return (
    <div className="w-full max-w-4xl p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-8 w-1/3 bg-gray-200 rounded mb-4"></div>
      <div className="space-y-3">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 py-2 border-b">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Rows */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="grid grid-cols-4 gap-4 py-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton_06;
