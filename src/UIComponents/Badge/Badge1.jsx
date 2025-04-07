import React from "react";

const Badge1 = () => {
  return (
    <div className="w-full p-8">
      <div className="p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-3">
          <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#FFEAC5] text-black">
            Choco
          </span>
          <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#ECECEC] text-black">
            Light
          </span>
          <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#198754] text-white">
            Success
          </span>
          <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#DC3545] text-white">
            Danger
          </span>
          <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#FFC107] text-[#212529]">
            Warning
          </span>
          <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#212529] text-white border border-white">
            Dark
          </span>
        </div>
      </div>
    </div>
  );
};

export default Badge1;
