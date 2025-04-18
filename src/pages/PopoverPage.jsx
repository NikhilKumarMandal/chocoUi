import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Popover1 from "../UIComponents/Popover/Popover1";
import Popover2 from "../UIComponents/Popover/Popover2";
import Popover3 from "../UIComponents/Popover/Popover3";
import Popover4 from "../UIComponents/Popover/Popover4";

function PopoverPage() {
  const PopoverVariants = [
    {
      title: "Click Popover",
      component: <Popover1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Hover Popover",
      component: <Popover2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Info Popover",
      component: <Popover3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Expandable Info",
      component: <Popover4 />,
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
        {PopoverVariants.map((variant, index) => (
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

export default PopoverPage;
