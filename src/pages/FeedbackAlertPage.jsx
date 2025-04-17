import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import FeedbackModal from "../UIComponents/FeedbackAlert/FeedbackModal";
import AlertDemo from "../UIComponents/FeedbackAlert/AlertDemo";

function FeedbackAlertPage() {
  const FeedbackVariants = [
    {
      title: "Minimalist Elegance Bento",
      component: <AlertDemo />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <FeedbackModal />,
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
        {FeedbackVariants.map((variant, index) => (
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

export default FeedbackAlertPage;
