import React, { useState } from "react";

const Banner6 = () => {
  const [visibleBanners, setVisibleBanners] = useState({
    pricing: true,
    maintenance: true,
    newFeature: true,
    verification: true,
  });

  const closeBanner = (bannerKey) => {
    setVisibleBanners((prev) => ({
      ...prev,
      [bannerKey]: false,
    }));
  };

  return (
    <div className="space-y-6 p-6 max-w-5xl mx-auto">
      {visibleBanners.pricing && (
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="p-6 pl-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">
                    Pricing Update
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Our pricing plans are changing on August 1st. Lock in current
                  rates by renewing your subscription before the deadline.
                </p>
              </div>

              <div className="flex flex-shrink-0 items-center space-x-3">
                <button className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400">
                  Learn More
                </button>
                <button className="rounded-lg bg-purple-600 dark:bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 dark:hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400">
                  Renew Now
                </button>
                <button
                  onClick={() => closeBanner("pricing")}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-400"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {visibleBanners.maintenance && (
        <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30">
          <div className="p-4 sm:p-5">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-amber-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <div>
                  <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300">
                    Scheduled Maintenance
                  </h3>
                  <div className="mt-1 text-sm text-amber-700 dark:text-amber-200">
                    <p>
                      Our system will be undergoing maintenance on July 15th
                      from 2AM to 4AM UTC. Some services may be temporarily
                      unavailable during this time.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex md:ml-6 md:mt-0">
                  <button
                    type="button"
                    className="ml-3 rounded-md bg-amber-50 dark:bg-amber-900/30 px-3 py-2 text-sm font-medium text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-500"
                  >
                    Add to Calendar
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => closeBanner("maintenance")}
                  className="inline-flex rounded text-amber-500 hover:text-amber-600 focus:outline-none dark:text-amber-400 dark:hover:text-amber-300"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {visibleBanners.newFeature && (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-teal-500 shadow-lg">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/20"></div>
          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-white/20"></div>

          <div className="relative p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    New Feature: AI-Powered Analytics
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    We've just launched our new AI-powered analytics dashboard.
                    Get deeper insights into your data with predictive analysis
                    and automated reporting.
                  </p>
                  <div className="mt-3 flex space-x-3">
                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50 transition-colors">
                      Try It Now
                    </button>
                    <button className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition-colors">
                      Watch Tutorial
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => closeBanner("newFeature")}
                className="absolute top-3 right-3 sm:static sm:self-start rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {visibleBanners.verification && (
        <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">
                    Verify your account
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Please verify your email address to unlock all features and
                    enhance account security.
                  </p>
                </div>
              </div>

              <div className="flex flex-shrink-0 items-center space-x-3">
                <button className="rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
                  Verify Email
                </button>
                <button
                  onClick={() => closeBanner("verification")}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-400"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner6;
