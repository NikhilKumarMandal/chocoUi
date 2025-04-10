import React from "react";

function Skeleton2() {
  return (
    <div className="w-full max-w-[300px] p-4 border rounded-lg shadow-md animate-pulse bg-white mx-auto">
      <div className="h-40 bg-gray-300 rounded-lg w-full"></div>
      <div className="mt-4 h-5 w-3/4 bg-gray-300 rounded"></div>
      <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
      <div className="mt-4 flex justify-between">
        <div className="h-6 w-16 bg-gray-300 rounded"></div>
        <div className="h-6 w-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default Skeleton2;
