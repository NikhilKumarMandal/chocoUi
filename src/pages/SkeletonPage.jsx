import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Skeleton01 from "../UIComponents/Skeleton/Skeleton_01";
import Skeleton03 from "../UIComponents/Skeleton/Skeleton_03";
import Skeleton_04 from "../UIComponents/Skeleton/Skeleton_04";
import Skeleton_05 from "../UIComponents/Skeleton/Skeleton_05";
import Skeleton_07 from "../UIComponents/Skeleton/Skeleton_07";
import Skeleton_10 from "../UIComponents/Skeleton/Skeleton_10";
import Skeleton_14 from "../UIComponents/Skeleton/Skeleton_14";
import Skeleton_17 from "../UIComponents/Skeleton/Skeleton_17";

function FooterPage() {
  const FooterVariants = [
    {
      title: "Skeleton",
      component: <Skeleton01 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          export default function Skeleton() {
            return (
              <div className="w-full max-w-[360px] p-6 border rounded-lg shadow-md animate-pulse bg-white mx-auto flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                <div className="mt-4 h-6 w-3/4 bg-gray-300 rounded"></div>
                <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
                <div className="mt-4 h-8 w-full bg-gray-300 rounded"></div>
              </div>
            );
          }`,
        },
      ],
    },

    {
      title: "Skeleton",
      component: <Skeleton03 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Skeleton() {
            return (
              <div className="w-full max-w-[340px] p-4 border rounded-lg shadow-md animate-pulse bg-white mx-auto">
                <div className="h-40 bg-gray-300 rounded-lg w-full"></div>
                <div className="mt-4 h-6 w-3/4 bg-gray-300 rounded"></div>
                <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
              </div>
            );
          }
          
          export default Skeleton;`,
        },
      ],
    },

    {
      title: "Skeleton",
      component: <Skeleton_04 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Skeleton = () => {
            return (
              <div className="w-full max-w-sm p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
                <div className="h-48 bg-gray-200 rounded-lg w-full"></div>
                <div className="mt-4 h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="mt-2 h-4 w-full bg-gray-200 rounded"></div>
                <div className="mt-2 h-4 w-2/3 bg-gray-200 rounded"></div>
                <div className="mt-4 flex justify-between">
                  <div className="h-8 w-24 bg-gray-200 rounded"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            );
          };
          
          export default Skeleton;`,
        },
      ],
    },

    {
      title: "Skeleton",
      component: <Skeleton_05 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Skeleton = () => {
            return (
              <div className="w-full max-w-xs p-5 border rounded-xl shadow-sm animate-pulse bg-white mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                    <div className="mt-1 h-3 w-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                    <div className="mt-1 h-3 w-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                    <div className="mt-1 h-3 w-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            );
          };
          
          export default Skeleton;`,
        },
      ],
    },
    {
      title: "Skeleton",
      component: <Skeleton_10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Skeleton = () => {
            return (
              <div className="w-full max-w-2xl p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
                <div className="h-8 w-1/3 bg-gray-200 rounded mb-6"></div>
          
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                        <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="h-5 w-1/3 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          };
          
          export default Skeleton;`,
        },
      ],
    },

    {
      title: "Skeleton",
      component: <Skeleton_14 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Skeleton = () => {
            return (
              <div className="w-full max-w-md p-4 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
                <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
          
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-start p-3 border rounded-lg">
                      <div className="h-10 w-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-4 w-3/4 bg-gray-200 rounded mb-1"></div>
                        <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
                        <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                        <div className="mt-2 h-3 w-1/4 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
          
                <div className="mt-4 pt-3 border-t flex justify-center">
                  <div className="h-8 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            );
          };
          
          export default Skeleton;
          `,
        },
      ],
    },

    {
      title: "Skeleton",
      component: <Skeleton_17 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Skeleton = () => {
            return (
              <div className="w-full max-w-lg p-5 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
                <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
          
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-12 w-12 bg-gray-200 rounded-full mb-3"></div>
                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                  </div>
                </div>
          
                <div className="space-y-3">
                  <div className="h-5 w-1/4 bg-gray-200 rounded mb-2"></div>
          
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center p-3 border rounded-lg">
                      <div className="h-10 w-10 bg-gray-200 rounded mr-3"></div>
                      <div className="flex-1">
                        <div className="h-4 w-3/4 bg-gray-200 rounded mb-1"></div>
                        <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                      </div>
                      <div className="h-6 w-6 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
          
                <div className="mt-6 flex justify-end">
                  <div className="h-10 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            );
          };
          
          export default Skeleton;`,
        },
      ],
    },

    ,
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-black">Component Previews</h1>
      <p className="text-gray-600 mt-2">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {FooterVariants.map((variant, index) => (
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

export default FooterPage;
