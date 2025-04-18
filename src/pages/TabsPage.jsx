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
          code: ``,
        },
      ],
    },
    {
      title: "Sidebar Tabs",
      component: <Tab3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Segmented Tabs",
      component: <Tab4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Bento Components</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Discover modular, grid-based Bento UI components
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
