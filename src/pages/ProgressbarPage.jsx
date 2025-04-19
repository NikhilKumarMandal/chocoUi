import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import LinearProgress from "../UIComponents/ProgressBar/LinearProgress";
import CircularProgress from "../UIComponents/ProgressBar/CircularProgress";
import LoadingIndicator from "../UIComponents/ProgressBar/LoadingIndicator";
import SteppedProgress from "../UIComponents/ProgressBar/SteppedProgress";

function ProgressbarPage() {
  const ProgressVariants = [
    {
      title: "Line Progress",
      component: <LinearProgress />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Radial Bar",
      component: <CircularProgress />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Stepped Progress",
      component: <SteppedProgress />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Animated Dots",
      component: <LoadingIndicator />,
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
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Bento Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Discover modular, grid-based Bento UI components
      </p>
      <div className="mt-6 space-y-6">
        {ProgressVariants.map((variant, index) => (
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

export default ProgressbarPage;
