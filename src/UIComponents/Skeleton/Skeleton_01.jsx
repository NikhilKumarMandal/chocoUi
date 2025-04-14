import React from "react";

export default function Skeleton1() {
  return (
    <div className="w-full max-w-[360px] p-6 border rounded-lg shadow-md animate-pulse bg-white mx-auto m-4 flex flex-col items-center">
      <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
      <div className="mt-4 h-6 w-3/4 bg-gray-300 rounded"></div>
      <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
      <div className="mt-4 h-8 w-full bg-gray-300 rounded"></div>
    </div>
  );
}
