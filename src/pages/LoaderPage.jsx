import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Loader1 from "../UIComponents/Loader/Loader1";
import Loader3 from "../UIComponents/Loader/Loader3";
import Loader5 from "../UIComponents/Loader/Loader5";
import Loader6 from "../UIComponents/Loader/Loader6";
import Loader12 from "../UIComponents/Loader/Loader12";
import Loader13 from "../UIComponents/Loader/Loader13";
import Loader15 from "../UIComponents/Loader/Loader15";

function LoaderPage() {
  const LoaderVariants = [
    {
      title: "The Bouncer",
      component: <Loader1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Loader = () => {
            return (
              <div className="flex space-x-2 justify-center m-4">
                {[...Array(3)].map((_, i) => {
                  const bounceClass = "w-4 h-4 bg-cyan-400 rounded-full animate-bounce";
                  const delayStyle = { animationDelay: (i * 0.2).toString() + "s" };
          
                  return <span key={i} className={bounceClass} style={delayStyle} />;
                })}
              </div>
            );
          };
          
          export default Loader;`,
        },
      ],
    },

    {
      title: "The Spinner",
      component: <Loader3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Loader = () => {
            return (
              <div className="flex justify-center items-center h-32">
                <div className="w-16 h-16 border-4 border-cyan-500 border-dashed rounded-full animate-spin"></div>
              </div>
            );
          };
          
          export default Loader;`,
        },
      ],
    },
    {
      title: "The Swift Spinner",
      component: <Loader5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Loader = () => {
            return (
              <div className="m-4 h-12 w-12 border-4 border-cyan-400 animate-[spin_1s_linear_infinite] mx-auto"></div>
            );
          };
          
          export default Loader;`,
        },
      ],
    },
    {
      title: "Vertical Bounce",
      component: <Loader6 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Loader = () => {
            return (
              <div className="flex space-x-1 items-end h-10 m-4 justify-center">
                {[...Array(5)].map((_, i) => {
                  const bounceClass =
                    "w-2 bg-cyan-500 animate-[bounce_1s_ease-in-out_infinite]";
                  const delayStyle = {
                    animationDelay: (i * 0.2).toString() + "s",
                    height: "100%",
                  };
          
                  return <div key={i} className={bounceClass} style={delayStyle} />;
                })}
              </div>
            );
          };
          
          export default Loader;
`,
        },
      ],
    },
    {
      title: "The Adaptable Spinner",
      component: <Loader12 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Loader = ({ size = "md", color = "blue" }) => {
            const sizeClasses = {
              sm: "w-6 h-6",
              md: "w-10 h-10",
              lg: "w-16 h-16",
              xl: "w-24 h-24",
            };
          
            const colorClasses = {
              blue: "border-blue-500",
              indigo: "border-indigo-500",
              purple: "border-purple-500",
              pink: "border-pink-500",
              red: "border-red-500",
              orange: "border-orange-500",
              amber: "border-amber-500",
              yellow: "border-yellow-500",
              lime: "border-lime-500",
              green: "border-green-500",
              teal: "border-teal-500",
              cyan: "border-cyan-500",
              sky: "border-sky-500",
              gray: "border-gray-500",
            };
          
            return (
              <div className="flex justify-center items-center m-4">
                <div
                  className={
                    sizeClasses[size] +
                    " border-4 border-t-transparent rounded-full animate-spin " +
                    colorClasses[color]
                  }
                ></div>
              </div>
            );
          };
          
          export default Loader;
`,
        },
      ],
    },
    {
      title: "Vector Loader",
      component: <Loader13 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Loader = ({ size = "md", color = "blue" }) => {
            const sizeClasses = {
              sm: "w-6 h-6",
              md: "w-10 h-10",
              lg: "w-16 h-16",
              xl: "w-24 h-24",
            };
          
            const colorClasses = {
              blue: "text-blue-500",
              indigo: "text-indigo-500",
              purple: "text-purple-500",
              pink: "text-pink-500",
              red: "text-red-500",
              orange: "text-orange-500",
              amber: "text-amber-500",
              yellow: "text-yellow-500",
              lime: "text-lime-500",
              green: "text-green-500",
              teal: "text-teal-500",
              cyan: "text-cyan-500",
              sky: "text-sky-500",
              gray: "text-gray-500",
            };
          
            return (
              <div className="flex justify-center items-center m-4">
                <div className={sizeClasses[size] + " " + colorClasses[color]}>
                  <svg
                    className="animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              </div>
            );
          };
          
          export default Loader;
`,
        },
      ],
    },

    {
      title: "Dual Spinner",
      component: <Loader15 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Loader = ({ size = "md", color = "blue" }) => {
            const sizeClasses = {
              sm: "w-6 h-6",
              md: "w-10 h-10",
              lg: "w-16 h-16",
              xl: "w-24 h-24",
            };
          
            const colorClasses = {
              blue: "border-blue-500",
              indigo: "border-indigo-500",
              purple: "border-purple-500",
              pink: "border-pink-500",
              red: "border-red-500",
              orange: "border-orange-500",
              amber: "border-amber-500",
              yellow: "border-yellow-500",
              lime: "border-lime-500",
              green: "border-green-500",
              teal: "border-teal-500",
              cyan: "border-cyan-500",
              sky: "border-sky-500",
              gray: "border-gray-500",
            };
          
            return (
              <div className="flex justify-center items-center m-4">
                <div className={sizeClasses[size] + " relative"}>
                  <div
                    className={
                      "absolute inset-0 border-4 " +
                      colorClasses[color] +
                      " rounded-full animate-pulse"
                    }
                  ></div>
                  <div
                    className={
                      "absolute inset-0 border-4 border-t-transparent " +
                      colorClasses[color] +
                      " rounded-full animate-spin"
                    }
                  ></div>
                </div>
              </div>
            );
          };
          
          export default Loader;
`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Loader Components</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Keep users engaged during wait times with elegant loading states
      </p>
      <div className="mt-6 space-y-6">
        {LoaderVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default LoaderPage;
