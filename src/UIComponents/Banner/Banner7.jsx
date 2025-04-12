import React, { useState } from "react";

const Banner7 = () => {
  const [visibleBanners, setVisibleBanners] = useState({
    gdpr: true,
    appUpdate: true,
    teamInvite: true,
    achievement: true,
  });

  const closeBanner = (bannerKey) => {
    setVisibleBanners((prev) => ({
      ...prev,
      [bannerKey]: false,
    }));
  };

  return (
    <div className="space-y-6 p-6 max-w-5xl mx-auto">
      {visibleBanners.gdpr && (
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 hidden md:flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
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
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Privacy Policy Update
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  We've updated our privacy policy to comply with GDPR
                  regulations. The changes will take effect on July 20, 2025.
                </p>
                <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <p>Key changes include:</p>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    <li>Enhanced data subject rights</li>
                    <li>Updated data retention policies</li>
                    <li>Improved transparency in data processing</li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button className="rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
                    Review Changes
                  </button>
                  <button
                    onClick={() => closeBanner("gdpr")}
                    className="rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                  >
                    Acknowledge
                  </button>
                </div>
              </div>

              <div className="flex-shrink-0 self-start md:self-center">
                <button
                  onClick={() => closeBanner("gdpr")}
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

      {visibleBanners.appUpdate && (
        <div className="rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 p-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-900 p-2 rounded-xl shadow-lg">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white">
                      Mobile App Update Available
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      Version 3.2.0 is now available with new features and
                      performance improvements.
                    </p>
                  </div>
                </div>

                <div className="flex flex-shrink-0 items-center space-x-3">
                  <button className="rounded-lg bg-gray-900 dark:bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400">
                    Update Now
                  </button>
                  <button
                    onClick={() => closeBanner("appUpdate")}
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
        </div>
      )}

      {visibleBanners.teamInvite && (
        <div className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative flex-shrink-0">
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-purple-600">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Team Invitation
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    Sarah Johnson invited you to join the "Product Design" team.
                    You have 3 pending invitations.
                  </p>
                </div>
              </div>

              <div className="flex flex-shrink-0 items-center space-x-3">
                <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 transition-colors">
                  View Invitations
                </button>
                <button
                  onClick={() => closeBanner("teamInvite")}
                  className="rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white"
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

      {visibleBanners.achievement && (
        <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                    <svg
                      className="h-6 w-6 text-yellow-600 dark:text-yellow-400"
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
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="text-base font-medium text-gray-900 dark:text-white">
                      Achievement Unlocked!
                    </h3>
                    <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:text-yellow-300">
                      +500 points
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Congratulations! You've completed 100 tasks and earned the
                    "Productivity Master" badge.
                  </p>
                </div>
              </div>

              <div className="flex flex-shrink-0 items-center space-x-3">
                <button className="rounded-lg bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 text-sm font-medium text-yellow-800 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800/40 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400">
                  View Achievements
                </button>
                <button
                  onClick={() => closeBanner("achievement")}
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

export default Banner7;
