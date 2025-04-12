import React, { useState } from "react";

const Alert5 = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "info",
      message: "A new software update is available",
      isVisible: true,
    },
    {
      id: 2,
      type: "success",
      message: "Your profile has been updated successfully",
      isVisible: true,
    },
    {
      id: 3,
      type: "warning",
      message: "Your subscription will expire in 3 days",
      isVisible: true,
    },
    {
      id: 4,
      type: "error",
      message: "There was an error processing your payment",
      isVisible: true,
    },
    {
      id: 5,
      type: "neutral",
      message: "You have 5 unread messages",
      isVisible: true,
    },
  ]);

  const dismissAlert = (id) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, isVisible: false } : alert
      )
    );
  };

  const alertStyles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-900/30",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-800 dark:text-blue-200",
      icon: "text-blue-500 dark:text-blue-400",
    },
    success: {
      bg: "bg-green-50 dark:bg-green-900/30",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-800 dark:text-green-200",
      icon: "text-green-500 dark:text-green-400",
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-900/30",
      border: "border-yellow-200 dark:border-yellow-800",
      text: "text-yellow-800 dark:text-yellow-200",
      icon: "text-yellow-500 dark:text-yellow-400",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-900/30",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-800 dark:text-red-200",
      icon: "text-red-500 dark:text-red-400",
    },
    neutral: {
      bg: "bg-gray-50 dark:bg-gray-800/50",
      border: "border-gray-200 dark:border-gray-700",
      text: "text-gray-800 dark:text-gray-200",
      icon: "text-gray-500 dark:text-gray-400",
    },
  };

  const getIcon = (type) => {
    switch (type) {
      case "info":
        return (
          <svg
            className="w-5 h-5"
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
        );
      case "success":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
        );
      case "warning":
        return (
          <svg
            className="w-5 h-5"
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
        );
      case "error":
        return (
          <svg
            className="w-5 h-5"
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
        );
      case "neutral":
        return (
          <svg
            className="w-5 h-5"
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {alerts.map(
        (alert) =>
          alert.isVisible && (
            <div
              key={alert.id}
              className={`flex items-center justify-between p-4 mb-4 border rounded-lg ${alertStyles[alert.type].bg} ${alertStyles[alert.type].border} ${alertStyles[alert.type].text}`}
              role="alert"
            >
              <div className="flex items-center">
                <div
                  className={`flex-shrink-0 ${alertStyles[alert.type].icon}`}
                >
                  {getIcon(alert.type)}
                </div>
                <div className="ml-3 text-sm font-medium">{alert.message}</div>
              </div>
              <button
                type="button"
                className={`-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:outline-none focus:ring-2 ${alertStyles[alert.type].bg} ${alertStyles[alert.type].text}`}
                onClick={() => dismissAlert(alert.id)}
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
    </div>
  );
};

export default Alert5;
