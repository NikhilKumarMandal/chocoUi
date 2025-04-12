import React, { useState, useEffect } from "react";

const Alert2 = () => {
  const [toasts, setToasts] = useState([
    {
      id: 1,
      title: "Success",
      message: "Your changes have been saved",
      type: "success",
      isVisible: true,
      autoClose: true,
    },
    {
      id: 2,
      title: "Information",
      message: "New features are available",
      type: "info",
      isVisible: true,
      autoClose: true,
    },
    {
      id: 3,
      title: "Warning",
      message: "Your session will expire soon",
      type: "warning",
      isVisible: true,
      autoClose: true,
    },
    {
      id: 4,
      title: "Error",
      message: "Failed to connect to server",
      type: "error",
      isVisible: true,
      autoClose: false,
    },
  ]);

  useEffect(() => {
    const timers = toasts
      .filter((toast) => toast.autoClose && toast.isVisible)
      .map((toast) => {
        return setTimeout(() => {
          dismissToast(toast.id);
        }, 5000);
      });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [toasts]);

  const dismissToast = (id) => {
    setToasts(
      toasts.map((toast) =>
        toast.id === id ? { ...toast, isVisible: false } : toast
      )
    );
  };

  const getToastStyles = (type) => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-500",
          icon: (
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          ),
        };
      case "info":
        return {
          bg: "bg-blue-500",
          icon: (
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
          ),
        };
      case "warning":
        return {
          bg: "bg-yellow-500",
          icon: (
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          ),
        };
      case "error":
        return {
          bg: "bg-red-500",
          icon: (
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          ),
        };
      default:
        return {
          bg: "bg-gray-500",
          icon: null,
        };
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50 w-full max-w-xs sm:max-w-sm">
      {toasts.map(
        (toast) =>
          toast.isVisible && (
            <div
              key={toast.id}
              className="flex items-center w-full max-w-xs p-4 mb-4 text-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-slide-in"
              role="alert"
              style={{ animationDelay: `${toast.id * 150}ms` }}
            >
              <div
                className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg ${getToastStyles(toast.type).bg}`}
              >
                {getToastStyles(toast.type).icon}
              </div>
              <div className="ml-3 text-sm font-normal">
                <div className="text-sm font-semibold">{toast.title}</div>
                <div className="text-sm">{toast.message}</div>
              </div>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 text-white hover:text-gray-200 focus:outline-none"
                onClick={() => dismissToast(toast.id)}
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )
      )}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Alert2;
