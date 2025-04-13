import React from "react";

const NewsletterBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-3xl"></div>
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/20"></div>
      <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/20"></div>

      <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white text-center sm:text-left">
          <h3 className="text-xl font-bold">Stay in the loop!</h3>
          <p className="mt-2 text-white/80 max-w-md">
            Subscribe to our newsletter to receive updates, exclusive
            offers, and helpful tips directly to your inbox.
          </p>
        </div>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 px-4 py-2.5 rounded-lg text-gray-800 bg-white/90 border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
          </div>
          <button className="px-4 py-2.5 rounded-lg bg-white text-teal-600 font-medium hover:bg-teal-50 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner; 