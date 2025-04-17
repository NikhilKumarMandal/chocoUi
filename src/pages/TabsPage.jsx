import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Tab1 from "../UIComponents/Tabs/Tabs1";
import Tab3 from "../UIComponents/Tabs/Tabs3";
import Tab4 from "../UIComponents/Tabs/Tabs4";

function TabsPage() {
  const TabsVariants = [
    {
      title: "Minimalist Elegance Bento",
      component: <Tab1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <Tab3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
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
      <h1 className="text-3xl font-bold text-[#603F26]">Bento Components</h1>
      <p className="text-[#1a1a1a] mt-2">
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
