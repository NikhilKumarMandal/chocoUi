import { useState } from "react";

const Toggle4 = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">
          {enabled ? "Enabled" : "Disabled"}
        </span>

        <button
          onClick={() => setEnabled(!enabled)}
          className={
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 " +
            (enabled ? "bg-blue-600" : "bg-gray-300")
          }
        >
          <span
            className={
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 " +
              (enabled ? "translate-x-6" : "translate-x-1")
            }
          />
        </button>
      </div>
    </>
  );
};

export default Toggle4;
