import React from "react";

const FeedbackBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-3xl"></div>
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/20"></div>
      <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/20"></div>

      <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white text-center sm:text-left">
          <h3 className="text-xl font-bold">We value your feedback!</h3>
          <p className="mt-2 text-white/80 max-w-md">
            Help us improve by sharing your thoughts and suggestions about your
            experience with our platform.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2.5 rounded-lg bg-white/20 text-white font-medium hover:bg-white/30 transition-colors">
            Share Feedback
          </button>
          <button className="px-4 py-2.5 rounded-lg bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition-colors">
            Take Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBanner;
