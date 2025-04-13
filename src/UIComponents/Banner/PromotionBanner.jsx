import React from "react";

const PromotionBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="relative flex flex-col items-center justify-between space-y-4 p-6 text-center sm:flex-row sm:space-y-0 sm:text-left">
        <div>
          <h3 className="text-xl font-bold text-white">Summer Sale! 🔥</h3>
          <p className="mt-1 text-sm text-white/80">
            Get 40% off all premium plans until July 31st. Use code SUMMER40 at
            checkout.
          </p>
        </div>
        <div className="flex flex-shrink-0 space-x-3">
          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-purple-600 transition-colors hover:bg-purple-50">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
