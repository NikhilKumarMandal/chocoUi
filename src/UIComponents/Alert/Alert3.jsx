import React, { useState } from "react";

const Alert3 = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      title: "Information",
      message:
        "Your trial period has started. Explore all premium features for the next 14 days.",
      isVisible: true,
      hasAction: true,
      actionText: "View Features",
    },
    {
      id: 2,
      type: "success",
      title: "Success",
      message:
        "Your document has been successfully uploaded and is now being processed.",
      isVisible: true,
      hasAction: false,
    },
    {
      id: 3,
      type: "warning",
      title: "Warning",
      message:
        "Your storage is almost full. Consider upgrading your plan or deleting unused files.",
      isVisible: true,
      hasAction: true,
      actionText: "Upgrade Plan",
    },
    {
      id: 4,
      type: "error",
      title: "Error",
      message:
        "We encountered an issue while processing your request. Please try again later.",
      isVisible: true,
      hasAction: true,
      actionText: "Try Again",
    },
  ]);

  const closeNotification = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isVisible: false }
          : notification
      )
    );
  };

  const handleAction = (id) => {
    // In a real application, this would trigger specific actions based on the notification type
    console.log(`Action triggered for notification ${id}`);
    // For demo purposes, we'll close the notification after action
    closeNotification(id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {notifications.map(
        (notification) =>
          notification.isVisible && (
            <div
              key={notification.id}
              className={`relative overflow-hidden rounded-lg shadow-md ${getNotificationStyles(notification.type).bg}`}
            >
              {/* Colored accent bar */}
              <div
                className={`absolute top-0 left-0 w-1 h-full ${getNotificationStyles(notification.type).accent}`}
              ></div>

              <div className="flex items-start p-4 pl-6">
                <div
                  className={`flex-shrink-0 ${getNotificationStyles(notification.type).iconColor}`}
                >
                  {getNotificationIcon(notification.type)}
                </div>

                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {notification.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {notification.message}
                  </p>

                  {notification.hasAction && (
                    <div className="mt-3 flex space-x-3">
                      <button
                        type="button"
                        className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm ${getNotificationStyles(notification.type).actionBg} ${getNotificationStyles(notification.type).actionText} focus:outline-none focus:ring-2 ${getNotificationStyles(notification.type).actionRing}`}
                        onClick={() => handleAction(notification.id)}
                      >
                        {notification.actionText}
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        onClick={() => closeNotification(notification.id)}
                      >
                        Dismiss
                      </button>
                    </div>
                  )}
                </div>

                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    className="bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                    onClick={() => closeNotification(notification.id)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
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
          )
      )}
    </div>
  );
};

// Helper functions for styling
const getNotificationStyles = (type) => {
  switch (type) {
    case "info":
      return {
        bg: "bg-white dark:bg-gray-800",
        accent: "bg-blue-500",
        iconColor: "text-blue-500",
        actionBg:
          "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        actionText: "text-white",
        actionRing: "focus:ring-blue-500",
      };
    case "success":
      return {
        bg: "bg-white dark:bg-gray-800",
        accent: "bg-green-500",
        iconColor: "text-green-500",
        actionBg:
          "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
        actionText: "text-white",
        actionRing: "focus:ring-green-500",
      };
    case "warning":
      return {
        bg: "bg-white dark:bg-gray-800",
        accent: "bg-yellow-500",
        iconColor: "text-yellow-500",
        actionBg:
          "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600",
        actionText: "text-white",
        actionRing: "focus:ring-yellow-500",
      };
    case "error":
      return {
        bg: "bg-white dark:bg-gray-800",
        accent: "bg-red-500",
        iconColor: "text-red-500",
        actionBg:
          "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
        actionText: "text-white",
        actionRing: "focus:ring-red-500",
      };
    default:
      return {
        bg: "bg-white dark:bg-gray-800",
        accent: "bg-gray-500",
        iconColor: "text-gray-500",
        actionBg:
          "bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600",
        actionText: "text-white",
        actionRing: "focus:ring-gray-500",
      };
  }
};

const getNotificationIcon = (type) => {
  switch (type) {
    case "info":
      return (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "success":
      return (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "error":
      return (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      );
  }
};

export default Alert3;
