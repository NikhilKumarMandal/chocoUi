import { useState, useEffect } from "react";

const FeedbackAlert = ({
  message,
  type = "success",
  duration = 3000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const alertClasses = {
    success: "bg-green-100 border border-green-400 text-green-800",
    error: "bg-red-100 border border-red-400 text-red-800",
    warning: "bg-yellow-100 border border-yellow-400 text-yellow-800",
    info: "bg-blue-100 border border-blue-400 text-blue-800",
  };

  const iconClasses = {
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-yellow-500",
    info: "text-blue-500",
  };

  const icon = {
    success: (
      <svg height="20" width="20" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    error: (
      <svg height="20" width="20" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    ),
    warning: (
      <svg height="20" width="20" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    info: (
      <svg height="20" width="20" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-sm sm:right-6 sm:top-6">
      <div
        className={
          "flex items-start gap-3 p-4 rounded-md shadow-md relative " +
          alertClasses[type]
        }
        role="alert"
      >
        <div className={"mt-1 " + iconClasses[type]}>{icon[type]}</div>
        <div className="flex-1 text-sm">{message}</div>
        <button
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
          className={
            "absolute top-2 right-2 text-lg " +
            iconClasses[type] +
            " hover:opacity-75"
          }
        >
          ×
        </button>
      </div>
    </div>
  );
};

const AlertDemo = () => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (type) => {
    const id = Date.now();
    const newAlert = {
      id,
      type,
      message:
        type === "success"
          ? "Action completed successfully!"
          : type === "error"
            ? "Something went wrong! Please try again."
            : type === "warning"
              ? "This action requires your attention."
              : "Here is some information for you.",
    };

    setAlerts((prev) => [...prev, newAlert]);
  };

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => addAlert("success")}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Show Success
        </button>
        <button
          onClick={() => addAlert("error")}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Show Error
        </button>
        <button
          onClick={() => addAlert("warning")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
        >
          Show Warning
        </button>
        <button
          onClick={() => addAlert("info")}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Show Info
        </button>
      </div>

      {alerts.map((alert) => (
        <FeedbackAlert
          key={alert.id}
          type={alert.type}
          message={alert.message}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
    </div>
  );
};

export default AlertDemo;
