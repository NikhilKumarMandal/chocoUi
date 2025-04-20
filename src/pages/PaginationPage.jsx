import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Pagination1 from "../UIComponents/Pagination/Pagination1";
import Pagination2 from "../UIComponents/Pagination/Pagination2";
import Pagination3 from "../UIComponents/Pagination/Pagination3";

function PaginationPage() {
  const PaginationVariants = [
    {
      title: "Page Navigation",
      component: (
        <div className="flex justify-center items-center">
          <Pagination1 />
        </div>
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Pagination = ({ totalPages = 6 }) => {
            const [currentPage, setCurrentPage] = useState(1);
          
            const goToPage = (page) => {
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            };
          
            return (
              <div className="flex space-x-1 justify-center items-center">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#603F26] hover:text-white hover:bg-[#603F26] hover:border-[#603F26] focus:text-white focus:bg-[#603F26] focus:border-[#603F26] active:border-[#603F26] active:text-white active:bg-[#603F26] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                >
                  Prev
                </button>
          
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  const isActive = page === currentPage;
          
                  return (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={
                        "min-w-9 rounded-full py-2 px-3.5 text-center text-sm transition-all ml-2 " +
                        (isActive
                          ? "bg-[#603F26] text-white border border-transparent shadow-md hover:bg-[#603F26] focus:bg-[#603F26]"
                          : "border border-slate-300 text-[#603F26] hover:text-white hover:bg-[#603F26] hover:border-[#603F26] focus:text-white focus:bg-[#603F26] focus:border-[#603F26]") +
                        " hover:shadow-lg focus:shadow-none active:shadow-none active:bg-[#603F26] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      }
                    >
                      {page}
                    </button>
                  );
                })}
          
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#603F26] hover:text-white hover:bg-[#603F26] hover:border-[#603F26] focus:text-white focus:bg-[#603F26] focus:border-[#603F26] active:border-[#603F26] active:text-white active:bg-[#603F26] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                >
                  Next
                </button>
              </div>
            );
          };
          
          export default Pagination;
`,
        },
      ],
      componentProps: [
        {
          name: "totalPages",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "6",
        },
      ],
    },
    {
      title: "Arrow Paging",
      component: (
        <div className="flex justify-center items-center">
          <Pagination2 />
        </div>
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
          
          const Pagination = ({ totalPages = 10 }) => {
            const [currentPage, setCurrentPage] = useState(1);
          
            const handlePrevious = () => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            };
          
            const handleNext = () => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            };
          
            return (
              <div className="flex justify-center items-center gap-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#603F26] hover:text-white hover:bg-[#603F26] hover:border-[#603F26] focus:text-white focus:bg-[#603F26] focus:border-[#603F26] active:border-[#603F26] active:text-white active:bg-[#603F26] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
          
                <p className="text-slate-600">
                  Page <strong className="text-[#603F26]">{currentPage}</strong> of&nbsp;
                  <strong className="text-[#603F26]">{totalPages}</strong>
                </p>
          
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#603F26] hover:text-white hover:bg-[#603F26] hover:border-[#603F26] focus:text-white focus:bg-[#603F26] focus:border-[#603F26] active:border-[#603F26] active:text-white active:bg-[#603F26] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            );
          };
          
          export default Pagination;`,
        },
      ],
      componentProps: [
        {
          name: "totalPages",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "10",
        },
      ],
    },
    {
      title: "Styled Pagination",
      component: (
        <div className="flex justify-center items-center">
          <Pagination3 />
        </div>
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Pagination = ({ totalPages = 5 }) => {
            const [currentPage, setCurrentPage] = useState(2);
          
            const handlePrev = () => {
              if (currentPage > 1) setCurrentPage((prev) => prev - 1);
            };
          
            const handleNext = () => {
              if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
            };
          
            return (
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-[#111111] hover:bg-[#603F26] hover:border-[#603F26] shadow-none hover:shadow-none"
                  >
                    <svg
                      width="1.5em"
                      height="1.5em"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                      className="mr-1.5 h-4 w-4 stroke-2"
                    >
                      <path
                        d="M15 6L9 12L15 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Previous
                  </button>
          
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    const isActive = page === currentPage;
          
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={
                          "inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md " +
                          (isActive
                            ? "shadow-sm hover:shadow-md bg-[#603F26] border-stone-800 text-stone-50 hover:bg-stone-700 hover:border-stone-700"
                            : "bg-transparent border-transparent text-stone-800 hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none")
                        }
                      >
                        {page}
                      </button>
                    );
                  })}
          
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-[#111111] hover:bg-[#603F26] hover:border-[#603F26] shadow-none hover:shadow-none"
                  >
                    Next
                    <svg
                      width="1.5em"
                      height="1.5em"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                      className="ml-1.5 h-4 w-4 stroke-2"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          };
          
          export default Pagination;
          `,
        },
      ],
      componentProps: [
        {
          name: "totalPages",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "5",
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Pagination Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        The Pagination component enables the user to select a specific page from
        a range of pages.
      </p>
      <div className="mt-6 space-y-6">
        {PaginationVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default PaginationPage;
