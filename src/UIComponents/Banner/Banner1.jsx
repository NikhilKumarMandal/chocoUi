import { useState } from "react";

const Banners1 = () => {
  const [visibleBanners, setVisibleBanners] = useState({
    success: true,
    info: true,
    warning: true,
    error: true,
    promo: true,
  });

  const closeBanner = (bannerKey) => {
    setVisibleBanners((prev) => ({
      ...prev,
      [bannerKey]: false,
    }));
  };

  return (
    <div className="space-y-4 p-4 max-w-4xl mx-auto">
      {visibleBanners.success && (
        <div
          className="flex items-center justify-between px-4 py-3 
                     bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-green-700 text-sm font-medium">
              Changes have been saved successfully
            </p>
          </div>
          <button
            onClick={() => closeBanner("success")}
            className="text-green-600 hover:text-green-800"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {visibleBanners.info && (
        <div
          className="flex items-center justify-between px-4 py-3 
                     bg-blue-50 border border-blue-200 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-blue-700 text-sm">
              System maintenance scheduled for tomorrow at 2 AM
            </p>
          </div>
          <button
            onClick={() => closeBanner("info")}
            className="text-blue-600 hover:text-blue-800"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {visibleBanners.warning && (
        <div
          className="flex items-center justify-between px-4 py-3 
                     bg-yellow-50 border border-yellow-200 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-yellow-700 text-sm">
              Your subscription will expire in 3 days
            </p>
          </div>
          <button
            onClick={() => closeBanner("warning")}
            className="text-yellow-600 hover:text-yellow-800"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {visibleBanners.error && (
        <div
          className="flex items-center justify-between px-4 py-3 
                     bg-red-50 border border-red-200 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-red-700 text-sm">
              Unable to connect to the server. Please try again.
            </p>
          </div>
          <button
            onClick={() => closeBanner("error")}
            className="text-red-600 hover:text-red-800"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {visibleBanners.promo && (
        <div
          className="flex items-center justify-between px-4 py-3 
                     bg-gray-900 text-white rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            <div>
              <p className="text-sm font-medium">
                Special Offer! Get 20% off on annual plans
                <span className="ml-2 text-xs bg-white text-gray-900 px-2 py-0.5 rounded-full">
                  New
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={() => closeBanner("promo")}
            className="text-white hover:text-gray-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Banners1;
