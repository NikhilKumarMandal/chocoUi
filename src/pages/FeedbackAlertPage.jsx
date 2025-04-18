import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import FeedbackModal from "../UIComponents/FeedbackAlert/FeedbackModal";
import AlertDemo from "../UIComponents/FeedbackAlert/AlertDemo";

function FeedbackAlertPage() {
  const FeedbackVariants = [
    {
      title: "Alert Manager",
      component: <AlertDemo />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Feedback Pop Up",
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
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Bento Components</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
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
