import React, { useState } from "react";

const Tab2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Overview", content: "Get an overview of your data" },
    { label: "Analytics", content: "View detailed analytics" },
    { label: "Reports", content: "Access your reports here" },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex space-x-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === index
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
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

export default Tab2;
