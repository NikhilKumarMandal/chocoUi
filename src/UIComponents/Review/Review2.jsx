import React from "react";

const Review2 = () => {
  return (
    <div className="max-w-2xl mx-auto my-6 p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-2xl font-semibold text-[#464646] leading-relaxed mb-6">
        "Production Online has helped me become a better musician and producer
        than I ever thought possible."
      </p>

      <div className="flex items-center">
        <div className="w-12 h-12 me-3 rounded-full bg-gradient-to-br from-[#545454] to-[#464646] flex items-center justify-center text-[#ECECEC] font-medium text-xl">
          K
        </div>
        <div>
          <h4 className="text-lg font-bold text-[#464646]">
            Kyle Weznick{" "}
            <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#FFEAC5] text-black">
              Choco
            </span>
          </h4>
          <p className="text-sm text-[#545454]">
            Media Director, Turn Around Music Group
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review2;
