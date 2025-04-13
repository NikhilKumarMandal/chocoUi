import React from "react";

const WelcomeBanner = () => {
  return (
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
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner; 