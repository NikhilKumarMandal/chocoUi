import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Modal1 from "../UIComponents/Modal/Modal1";
import Modal2 from "../UIComponents/Modal/Modal2";
import Modal3 from "../UIComponents/Modal/Modal3";
import Modal4 from "../UIComponents/Modal/Modal4";
import Modal5 from "../UIComponents/Modal/Modal5";

function ModalPage() {
  const ModalVariants = [
    {
      title: "Minimalist Elegance Bento",
      component: <Modal1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <Modal2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <Modal3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <Modal4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Minimalist Elegance Bento",
      component: <Modal5 />,
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
        {ModalVariants.map((variant, index) => (
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

export default ModalPage;
