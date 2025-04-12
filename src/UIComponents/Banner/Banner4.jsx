import React, { useState } from "react";

const Banner4 = () => {
  const [visibleBanners, setVisibleBanners] = useState({
    welcome: true,
    update: true,
    promotion: true,
    announcement: true,
  });

  const closeBanner = (bannerKey) => {
    setVisibleBanners((prev) => ({
      ...prev,
      [bannerKey]: false,
    }));
  };

  return (
    <div className="space-y-6 p-6 max-w-5xl mx-auto">
      {visibleBanners.welcome && (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-white opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-24 w-24 rounded-full bg-white opacity-20"></div>

          <div className="relative flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Welcome to our platform!
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  Get started by exploring our new features and personalized
                  recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50">
                Take Tour
              </button>
              <button
                onClick={() => closeBanner("welcome")}
                className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
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

      {visibleBanners.update && (
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
            <button
              onClick={() => closeBanner("update")}
              className="ml-4 inline-flex flex-shrink-0 items-center justify-center rounded-lg text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400"
            >
              <svg
                className="h-4 w-4"
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
      )}

      {visibleBanners.promotion && (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative flex flex-col items-center justify-between space-y-4 p-6 text-center sm:flex-row sm:space-y-0 sm:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">Summer Sale! 🔥</h3>
              <p className="mt-1 text-sm text-white/80">
                Get 40% off all premium plans until July 31st. Use code SUMMER40
                at checkout.
              </p>
            </div>
            <div className="flex flex-shrink-0 space-x-3">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-purple-600 transition-colors hover:bg-purple-50">
                Upgrade Now
              </button>
              <button
                onClick={() => closeBanner("promotion")}
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
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

      {visibleBanners.announcement && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-800/30 dark:bg-amber-900/20">
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                ></path>
              </svg>
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-amber-700 dark:text-amber-400">
                We're hosting a webinar on "Advanced UI Design Patterns" next
                Tuesday at 2 PM EST.
              </p>
              <div className="mt-3 flex items-center md:ml-6 md:mt-0">
                <button className="text-sm font-medium text-amber-700 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300">
                  Register →
                </button>
              </div>
            </div>
            <div className="ml-4">
              <button
                onClick={() => closeBanner("announcement")}
                className="inline-flex rounded text-amber-500 hover:text-amber-600 focus:outline-none dark:text-amber-400 dark:hover:text-amber-300"
              >
                <svg
                  className="h-4 w-4"
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
    </div>
  );
};

export default Banner4;
