import React from "react";

const UpdateBanner = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div className="flex">
          <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-white">
              New Update Available
            </h3>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              <p>
                Version 2.5.0 includes performance improvements and new
                features.
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-5 text-xs text-gray-500 dark:text-gray-400">
                <li>Enhanced dashboard analytics</li>
                <li>Improved mobile responsiveness</li>
                <li>New customization options</li>
              </ul>
            </div>
            <div className="mt-3 flex space-x-3">
              <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Update Now
              </button>
              <button className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                Release Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBanner; 