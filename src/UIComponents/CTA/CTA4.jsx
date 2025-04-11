import React from "react";
const CTA4 = () => {
  return (
    <div className="space-y-20 px-4 py-12 md:px-10 lg:px-20">
      <section className="text-center py-16 md:py-24 px-4 sm:px-6 rounded-lg bg-gradient-to-b from-[#FFA95F] to-[#FF914D]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight md:leading-snug">
          Let’s make creators your <br className="hidden sm:block" /> next
          growth channel
        </h2>

        <div className="mt-8 space-y-4 text-base sm:text-lg text-gray-800">
          <div className="flex items-start justify-center gap-3 max-w-md mx-auto">
            <span className="text-black mt-1">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </span>
            <span>Get better returns on your time & money</span>
          </div>
          <div className="flex items-start justify-center gap-3 max-w-md mx-auto">
            <span className="text-black mt-1">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </span>
            <span>Save 75% of your time per campaign</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800">
            Get access →
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-md font-semibold hover:bg-gray-100">
            Book a call
          </button>
        </div>
      </section>
    </div>
  );
};
export default CTA4;
