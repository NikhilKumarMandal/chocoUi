import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Password_01 from "../UIComponents/Password/Password_01";
import Password_03 from "../UIComponents/Password/Password_03";

function PasswordPage() {
  const PasswordVariants = [
    {
      title: "Password Checker",
      component: <Password_01 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Circular Strength",
      component: <Password_03 />,
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
        {PasswordVariants.map((variant, index) => (
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

export default PasswordPage;
