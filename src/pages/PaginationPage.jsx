import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Pagination1 from "../UIComponents/Pagination/Pagination1";
import Pagination2 from "../UIComponents/Pagination/Pagination2";
import Pagination3 from "../UIComponents/Pagination/Pagination3";

function PaginationPage() {
  const PaginationVariants = [
    {
      title: "Page Navigation",
      component: <Pagination1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Arrow Paging",
      component: <Pagination2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Styled Pagination",
      component: <Pagination3 />,
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
        {PaginationVariants.map((variant, index) => (
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

export default PaginationPage;
