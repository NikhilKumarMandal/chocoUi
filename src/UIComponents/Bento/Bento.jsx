import React from "react";

export default function Bento() {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white flex items-center justify-center min-h-[150px] sm:col-span-1 md:col-span-2 shadow-lg">
        <h2 className="text-2xl font-bold">Large Item</h2>
      </div>
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white flex items-center justify-center min-h-[150px] shadow-md">
        <h2 className="text-xl font-semibold">Item 1</h2>
      </div>
      <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white flex items-center justify-center min-h-[150px] shadow-md">
        <h2 className="text-xl font-semibold">Item 2</h2>
      </div>
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white flex items-center justify-center min-h-[150px] md:row-span-2 shadow-lg">
        <h2 className="text-xl font-semibold">Tall Item</h2>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl p-6 text-white flex items-center justify-center min-h-[150px] shadow-md">
        <h2 className="text-xl font-semibold">Item 3</h2>
      </div>
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 text-white flex items-center justify-center min-h-[150px] shadow-md">
        <h2 className="text-xl font-semibold">Item 4</h2>
      </div>
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 text-white flex items-center justify-center min-h-[150px] shadow-md">
        <h2 className="text-xl font-semibold">Item 5</h2>
      </div>
    </div>
  );
}
