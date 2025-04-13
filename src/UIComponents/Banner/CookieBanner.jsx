import React from "react";

const CookieBanner = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 hidden sm:block">
            <svg
              className="w-8 h-8 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
              <path d="M10 6a1 1 0 100 2 1 1 0 000-2zm0 6a1 1 0 100 2 1 1 0 000-2zm0-3a1 1 0 100 2 1 1 0 000-2z"></path>
            </svg>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic.
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-wrap sm:flex-nowrap gap-2">
          <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
            Cookie Settings
          </button>
          <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
