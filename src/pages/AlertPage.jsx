import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Alert1 from "../UIComponents/Alert/Alert1";
import Alert3 from "../UIComponents/Alert/Alert3";
import Alert5 from "../UIComponents/Alert/Alert5";

function AlertPage() {
  const AlertVariants = [
    {
      title: "Minimalist Alert",
      component: <Alert1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Alert1 = () => {
            return (
              <div className=" flex flex-col ml-5  gap-4 p-8">
                <div
                  className="w-full flex items-center p-4 bg-[#FFEAC5] text-[#603F26] border border-[#FFDBB5] rounded-md"
                  role="alert"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                  <span>This is an info alert</span>
                </div>
          
                <div
                  className="w-full flex items-center p-4 bg-[#ECECEC] text-[#464646] border border-[#E1E1E1] rounded-md"
                  role="alert"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7-24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                  <span>This is a neutral alert</span>
                </div>
          
                <div
                  className="w-full flex items-center p-4 text-white bg-[#198754] rounded-md"
                  role="alert"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span>This is a success alert</span>
                </div>
          
                <div
                  className="w-full flex items-center p-4 text-white bg-[#DC3545] rounded-md"
                  role="alert"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                  <span>This is a danger alert</span>
                </div>
          
                <div
                  className="w-full flex items-center p-4 bg-[#FFC107] text-[#212529] rounded-md"
                  role="alert"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg>
                  <span>This is a warning alert</span>
                </div>
              </div>
            );
          };
          
          export default Alert1;
          `,
        },
      ],
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "The heading text for the alert",
          example: "",
        },
      ],
    },
    {
      title: "Bordered Alert",
      component: <Alert3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
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
              closeNotification(id);
            };
          
            return (
              <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
                {notifications.map(
                  (notification) =>
                    notification.isVisible && (
                      <div
                        key={notification.id}
                        className={"relative overflow-hidden rounded-lg shadow-md " + getNotificationStyles(notification.type).bg}
                      >
                        <div
                          className={"absolute top-0 left-0 w-1 h-full " + getNotificationStyles(notification.type).accent}
                        ></div>
          
                        <div className="flex items-start p-4 pl-6">
                          <div
                            className={"flex-shrink-0 " + getNotificationStyles(notification.type).iconColor}
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
                                  className={
                                    "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm " + 
                                    getNotificationStyles(notification.type).actionBg + 
                                    " " + 
                                    getNotificationStyles(notification.type).actionText + 
                                    " focus:outline-none focus:ring-2 " + 
                                    getNotificationStyles(notification.type).actionRing
                                  }
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
          `,
        },
      ],
      componentProps: [
        {
          name: "title",
          type: "string | ReactNode",
          default: "undefined",
          description: "Alert content (can be string or JSX)",
          example: "''",
        },
      ],
    },
    {
      title: "Dismissible Alert",
      component: <Alert5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";

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
      bg: "bg-blue-100 dark:bg-blue-900/80",
      border: "border-blue-300 dark:border-blue-700",
      text: "text-blue-900 dark:text-blue-50",
      icon: "text-blue-600 dark:text-blue-300",
      button: "hover:bg-blue-200 dark:hover:bg-blue-800",
    },
    success: {
      bg: "bg-emerald-100 dark:bg-emerald-900/80",
      border: "border-emerald-300 dark:border-emerald-700",
      text: "text-emerald-900 dark:text-emerald-50",
      icon: "text-emerald-600 dark:text-emerald-300",
      button: "hover:bg-emerald-200 dark:hover:bg-emerald-800",
    },
    warning: {
      bg: "bg-amber-100 dark:bg-amber-900/80",
      border: "border-amber-300 dark:border-amber-700",
      text: "text-amber-900 dark:text-amber-50",
      icon: "text-amber-600 dark:text-amber-300",
      button: "hover:bg-amber-200 dark:hover:bg-amber-800",
    },
    error: {
      bg: "bg-red-100 dark:bg-red-900/80",
      border: "border-red-300 dark:border-red-700",
      text: "text-red-900 dark:text-red-50",
      icon: "text-red-600 dark:text-red-300",
      button: "hover:bg-red-200 dark:hover:bg-red-800",
    },
    neutral: {
      bg: "bg-gray-100 dark:bg-gray-800/80",
      border: "border-gray-300 dark:border-gray-700",
      text: "text-gray-900 dark:text-gray-50",
      icon: "text-gray-600 dark:text-gray-300",
      button: "hover:bg-gray-200 dark:hover:bg-gray-700",
    },
  };

  const getIcon = (type) => {
    const icons = {
      info: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      success: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      warning: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      error: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      neutral: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    };
    return icons[type] || null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {alerts.map(
        (alert) =>
          alert.isVisible && (
            <div
              key={alert.id}
              className={
                "flex items-center justify-between p-4 mb-4 border rounded-lg " +
                alertStyles[alert.type].bg +
                " " +
                alertStyles[alert.type].border +
                " " +
                alertStyles[alert.type].text
              }
              role="alert"
            >
              <div className="flex items-center">
                <div
                  className={
                    "flex-shrink-0 " + alertStyles[alert.type].icon
                  }
                >
                  {getIcon(alert.type)}
                </div>
                <div className="ml-3 text-sm font-medium">
                  {alert.message}
                </div>
              </div>
              <button
                type="button"
                className={
                  "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:outline-none focus:ring-2 " +
                  alertStyles[alert.type].bg +
                  " " +
                  alertStyles[alert.type].text +
                  " " +
                  alertStyles[alert.type].button +
                  " transition-colors"
                }
                onClick={() => dismissAlert(alert.id)}
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
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
`,
        },
      ],
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "''",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Alert Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Collection of customizable alert components with different styles and
        behaviors
      </p>
      <div className="mt-6 space-y-6">
        {AlertVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default AlertPage;
