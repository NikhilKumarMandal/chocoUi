import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Tab1 from "../UIComponents/Tabs/Tabs1";
import Tab3 from "../UIComponents/Tabs/Tabs3";
import Tab4 from "../UIComponents/Tabs/Tabs4";

function TabsPage() {
  const TabsVariants = [
    {
      title: "Simple Tabs",
      component: <Tab1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Tab1 = () => {
            const [activeTab, setActiveTab] = useState(0);
          
            const tabs = [
              { label: "Home", content: "Welcome to the home tab" },
              { label: "Profile", content: "This is your profile tab" },
              { label: "Settings", content: "Manage your settings here" },
            ];
          
            return (
              <div className="max-w-md mx-auto p-4">
                <div className="flex border-b border-gray-200">
                  {tabs.map((tab, index) => {
                    let buttonClass = "px-4 py-2 text-sm font-medium transition-colors duration-300 ";
                    if (activeTab === index) {
                      buttonClass += "text-blue-600 border-b-2 border-blue-600";
                    } else {
                      buttonClass += "text-gray-500 hover:text-gray-700";
                    }
          
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={buttonClass}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
          
                <div className="mt-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    {tabs[activeTab].content}
                  </div>
                </div>
              </div>
            );
          };
          
          export default Tab1;`,
        },
      ],
    },
    {
      title: "Sidebar Tabs",
      component: <Tab3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Tab3 = () => {
            const [activeTab, setActiveTab] = useState(0);
          
            const tabs = [
              {
                label: "Dashboard",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                ),
                content: "View your dashboard",
              },
              {
                label: "Messages",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                ),
                content: "Check your messages",
              },
              {
                label: "Settings",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                content: "Manage your settings",
              },
            ];
          
            return (
              <div className="flex max-w-4xl mx-auto p-4">
                <div className="w-48 space-y-1">
                  {tabs.map((tab, index) => {
                    let btnClass =
                      "flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ";
                    if (activeTab === index) {
                      btnClass += "bg-blue-600 text-white";
                    } else {
                      btnClass += "text-gray-600 hover:bg-gray-100";
                    }
          
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={btnClass}
                      >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
          
                <div className="flex-1 ml-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    {tabs[activeTab].content}
                  </div>
                </div>
              </div>
            );
          };
          
          export default Tab3;
          `,
        },
      ],
    },
    {
      title: "Segmented Tabs",
      component: <Tab4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";

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
`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Tabs Components</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Tabs make it easy to explore and switch between different views.
      </p>
      <div className="mt-6 space-y-6">
        {TabsVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default TabsPage;
