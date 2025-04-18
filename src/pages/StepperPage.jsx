import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Stepper1 from "../UIComponents/Stepper/Stepper1";
import Stepper2 from "../UIComponents/Stepper/Stepper2";
import Stepper3 from "../UIComponents/Stepper/Stepper3";
import Stepper4 from "../UIComponents/Stepper/Stepper4";

function StepperPage() {
  const StepperVariants = [
    {
      title: "Minimalist Elegance Bento",
      component: <Stepper1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <Stepper2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <Stepper3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <Stepper4 />,
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
        {StepperVariants.map((variant, index) => (
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

export default StepperPage;
