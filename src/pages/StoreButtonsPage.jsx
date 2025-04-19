import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import PlayStore from "../UIComponents/StoreButtons/PlayStore";
import Window from "../UIComponents/StoreButtons/Window";

function StoreButtonsPage() {
  const StoreButtonVariants = [
    {
      title: "Microsoft Download",
      component: <Window />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Android Store",
      component: <PlayStore />,
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
        {StoreButtonVariants.map((variant, index) => (
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

export default StoreButtonsPage;
