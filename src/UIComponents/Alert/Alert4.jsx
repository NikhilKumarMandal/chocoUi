import React, { useState } from "react";

const Alert4 = () => {
  const [statusAlerts, setStatusAlerts] = useState([
    {
      id: 1,
      type: "success",
      title: "Task Completed",
      message: "Your file has been successfully uploaded to the cloud storage.",
      isVisible: true,
      progress: 100,
      icon: true,
    },
    {
      id: 2,
      type: "processing",
      title: "Processing",
      message:
        "We are currently processing your request. This might take a few minutes.",
      isVisible: true,
      progress: 65,
      icon: true,
    },
    {
      id: 3,
      type: "error",
      title: "Error Occurred",
      message:
        "We couldn't complete your request due to a network error. Please check your connection and try again.",
      isVisible: true,
      progress: 0,
      icon: true,
    },
    {
      id: 4,
      type: "neutral",
      title: "System Update",
      message:
        "We'll be performing system maintenance on July 20th. The platform will be unavailable from 2AM to 4AM UTC.",
      isVisible: true,
      progress: 0,
      icon: false,
    },
  ]);

  const dismissAlert = (id) => {
    setStatusAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, isVisible: false } : alert
      )
    );
  };

  const getAlertStyles = (type) => {
    const styles = {
      success: {
        container: "bg-white dark:bg-gray-800 border-l-4 border-green-500",
        title: "text-green-800 dark:text-green-400",
        message: "text-gray-600 dark:text-gray-300",
        progressBg: "bg-green-100 dark:bg-green-800/30",
        progressFill: "bg-green-500",
        icon: (
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        ),
      },
      processing: {
        container: "bg-white dark:bg-gray-800 border-l-4 border-blue-500",
        title: "text-blue-800 dark:text-blue-400",
        message: "text-gray-600 dark:text-gray-300",
        progressBg: "bg-blue-100 dark:bg-blue-800/30",
        progressFill: "bg-blue-500",
        icon: (
          <svg
            className="w-6 h-6 text-blue-500 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
        ),
      },
      error: {
        container: "bg-white dark:bg-gray-800 border-l-4 border-red-500",
        title: "text-red-800 dark:text-red-400",
        message: "text-gray-600 dark:text-gray-300",
        progressBg: "bg-red-100 dark:bg-red-800/30",
        progressFill: "bg-red-500",
        icon: (
          <svg
            className="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        ),
      },
      neutral: {
        container: "bg-white dark:bg-gray-800 border-l-4 border-gray-500",
        title: "text-gray-800 dark:text-gray-200",
        message: "text-gray-600 dark:text-gray-300",
        progressBg: "bg-gray-100 dark:bg-gray-700",
        progressFill: "bg-gray-500",
        icon: (
          <svg
            className="w-6 h-6 text-gray-500"
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
        ),
      },
    };

    return styles[type] || styles.neutral;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {statusAlerts.map(
        (alert) =>
          alert.isVisible && (
            <div
              key={alert.id}
              className={`relative overflow-hidden shadow-md rounded-md ${getAlertStyles(alert.type).container}`}
            >
              <div className="p-4">
                <div className="flex items-start">
                  {alert.icon && (
                    <div className="flex-shrink-0 mr-3">
                      {getAlertStyles(alert.type).icon}
                    </div>
                  )}

                  <div className="flex-1">
                    <h3
                      className={`text-base font-medium ${getAlertStyles(alert.type).title}`}
                    >
                      {alert.title}
                    </h3>
                    <div className="mt-1">
                      <p
                        className={`text-sm ${getAlertStyles(alert.type).message}`}
                      >
                        {alert.message}
                      </p>
                    </div>

                    {alert.progress > 0 && (
                      <div className="mt-3">
                        <div
                          className={`w-full h-2 rounded-full overflow-hidden ${getAlertStyles(alert.type).progressBg}`}
                        >
                          <div
                            className={`h-full ${getAlertStyles(alert.type).progressFill} transition-all duration-500 ease-in-out`}
                            style={{ width: `${alert.progress}%` }}
                          ></div>
                        </div>
                        <p
                          className={`mt-1 text-xs ${getAlertStyles(alert.type).title}`}
                        >
                          {alert.progress}% Complete
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                      onClick={() => dismissAlert(alert.id)}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Alert4;
