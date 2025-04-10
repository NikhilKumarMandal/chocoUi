import React from "react";

const Skeleton_04 = () => {
  return (
    <div className="w-full max-w-sm p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-48 bg-gray-200 rounded-lg w-full"></div>
      <div className="mt-4 h-5 w-3/4 bg-gray-200 rounded"></div>
      <div className="mt-2 h-4 w-full bg-gray-200 rounded"></div>
      <div className="mt-2 h-4 w-2/3 bg-gray-200 rounded"></div>
      <div className="mt-4 flex justify-between">
        <div className="h-8 w-24 bg-gray-200 rounded"></div>
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default Skeleton_04;
