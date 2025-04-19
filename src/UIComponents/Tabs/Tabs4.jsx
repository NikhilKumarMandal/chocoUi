import React, { useState } from "react";

const Tab4 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "All", content: "View all items" },
    { label: "Active", content: "View active items" },
    { label: "Archived", content: "View archived items" },
  ];

  const getButtonClass = (index) => {
    const baseClass = "px-4 py-2 text-sm font-medium transition-colors duration-300";
    const roundClass =
      index === 0
        ? "rounded-l-lg"
        : index === tabs.length - 1
        ? "rounded-r-lg"
        : "";
    const activeClass =
      activeTab === index
        ? "bg-blue-600 text-white"
        : "bg-white text-gray-700 hover:bg-gray-50";

    return [baseClass, roundClass, activeClass].join(" ").trim();
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="inline-flex rounded-lg shadow-sm">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={getButtonClass(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Tab4;

