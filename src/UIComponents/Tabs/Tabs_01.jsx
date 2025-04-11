import React, { useState } from 'react';

const Tab1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Home', content: 'Welcome to the home tab' },
    { label: 'Profile', content: 'This is your profile tab' },
    { label: 'Settings', content: 'Manage your settings here' },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
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

export default Tab1;