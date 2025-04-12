import React, { useState, useEffect } from "react";

const Banner5 = () => {
  const [visibleBanners, setVisibleBanners] = useState({
    cookie: true,
    newsletter: true,
    feedback: true,
    event: true,
  });

  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 8,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeBanner = (bannerKey) => {
    setVisibleBanners((prev) => ({
      ...prev,
      [bannerKey]: false,
    }));
  };

  return (
    <div className="space-y-6 p-6 max-w-5xl mx-auto">
      {visibleBanners.cookie && (
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
              <button
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                onClick={() => closeBanner("cookie")}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {visibleBanners.newsletter && (
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
              <button
                onClick={() => closeBanner("newsletter")}
                className="absolute top-3 right-3 sm:static sm:self-center p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20"
              >
                <svg
                  className="w-5 h-5"
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

      {visibleBanners.feedback && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">
                    Help us improve our platform
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    We'd love to hear your thoughts! Take our quick 2-minute
                    survey and help shape the future of our product.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="rounded-lg bg-purple-600 px-4 py-2 text-xs font-medium text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                      Take Survey
                    </button>
                    <button
                      onClick={() => closeBanner("feedback")}
                      className="rounded-lg bg-gray-100 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      Maybe Later
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => closeBanner("feedback")}
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
        </div>
      )}

      {visibleBanners.event && (
        <div className="rounded-xl overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg">
          <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wide bg-white/20 rounded-md backdrop-blur-sm">
                  Upcoming Event
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold">
                Annual Developer Conference
              </h3>
              <p className="mt-2 text-white/80 max-w-md">
                Join us for three days of workshops, keynotes, and networking
                opportunities with industry experts.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="text-2xl font-bold text-white">
                    {countdown.days}
                  </span>
                  <span className="text-xs text-white/80">Days</span>
                </div>
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="text-2xl font-bold text-white">
                    {countdown.hours}
                  </span>
                  <span className="text-xs text-white/80">Hours</span>
                </div>
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="text-2xl font-bold text-white">
                    {countdown.minutes}
                  </span>
                  <span className="text-xs text-white/80">Mins</span>
                </div>
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="text-2xl font-bold text-white">
                    {countdown.seconds}
                  </span>
                  <span className="text-xs text-white/80">Secs</span>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors">
                  Register Now
                </button>
                <button
                  onClick={() => closeBanner("event")}
                  className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20"
                >
                  <svg
                    className="w-5 h-5"
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

export default Banner5;
