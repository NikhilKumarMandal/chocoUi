import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Button_02 from "../UIComponents/Buttons/Button_02";
import Button_03 from "../UIComponents/Buttons/Button_03";
import Button_05 from "../UIComponents/Buttons/Button_05";
import Button_07 from "../UIComponents/Buttons/Button_07";
import Button_08 from "../UIComponents/Buttons/Button_08";
import Button_10 from "../UIComponents/Buttons/Button_10";
import Button_12 from "../UIComponents/Buttons/Button_12";
import Button_13 from "../UIComponents/Buttons/Button_13";
import Button_19 from "../UIComponents/Buttons/Button_19";
import Button_21 from "../UIComponents/Buttons/Button_21";
import Button_23 from "../UIComponents/Buttons/Button_23";
import Button_24 from "../UIComponents/Buttons/Button_24";
import Button_25 from "../UIComponents/Buttons/Button_25";
import Button_26 from "../UIComponents/Buttons/Button_26";
import Button_27 from "../UIComponents/Buttons/Button_27";

function ButtonPage() {
  const ButtonVariants = [
    {
      title: "Icon Glide Button",
      component: <Button_02 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
import { MoveRight } from "lucide-react";

const Button = () => {
  return (
    <button
      className="
              group relative inline-flex h-12 items-center justify-center overflow-hidden
              rounded-lg bg-indigo-600 px-6 font-medium text-white shadow-md
              transition-all duration-300 ease-out
              hover:bg-indigo-700 hover:pl-5 hover:pr-12
              focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-50
              dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-400 dark:focus:ring-offset-gray-900
            "
    >
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
        Explore More
      </span>
      <MoveRight
        className="
                absolute right-4 h-5 w-5 translate-x-10 transform opacity-0
                transition-all duration-300 ease-out group-hover:translate-x-0
                group-hover:opacity-100
              "
      />
    </button>
  );
};

export default Button;`,
        },
      ],
    },
    {
      title: "The Fill Button",
      component: <Button_03 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button = () => {
            return (
              <button
                className="
                      relative inline-flex h-12 items-center justify-center rounded-lg border-2
                      border-teal-500 bg-transparent px-6 font-medium text-teal-500
                      transition-all duration-300 ease-in-out
                      hover:bg-teal-500 hover:text-white
                      focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                      dark:border-cyan-400 dark:text-cyan-400
                      dark:hover:bg-cyan-400 dark:hover:text-gray-900
                      dark:focus:ring-cyan-300 dark:focus:ring-offset-gray-900
                      active:scale-95
                      before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]
                      before:bg-teal-500 before:opacity-0 before:transition-opacity before:duration-300
                      hover:before:opacity-20
                      dark:before:bg-cyan-400
                      disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent
                    "
              >
                Fill Effect
              </button>
            );
          };
          
          export default Button;`,
        },
      ],
    },
    {
      title: "Round Action Button",
      component: <Button_07 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button = () => {
            return (
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800">
                <svg
                  className="h-6 w-6 text-gray-800 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            );
          };
          
          export default Button;`,
        },
      ],
    },
    {
      title: "Gradient Reveal Button",
      component: <Button_08 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button = () => {
            return (
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-gray-800 transition-transform duration-300 dark:bg-gray-900 dark:text-white hover:scale-105">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-gray-900">
                  Explore More
                </span>
                <div className="absolute inset-0 z-0 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-out group-hover:w-full" />
                <div className="absolute inset-0 z-10 rounded-md border-2 border-transparent transition-colors duration-300 group-hover:border-white dark:group-hover:border-gray-900" />
              </button>
            );
          };
          
          export default Button;`,
        },
      ],
    },

    {
      title: "Arrow Slide Button",
      component: <Button_10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button_10 = () => {
            return (
              <button className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                View Profile
                <svg
                  className="h-4 w-4 translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            );
          };
          
          export default Button_10;
          `,
        },
      ],
    },

    {
      title: "The Bloom Button",
      component: <Button_12 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button_12 = () => {
            return (
              <button className="group relative inline-block h-12 overflow-hidden rounded-full border-2 border-blue-500 px-8 font-medium text-blue-500 transition-all hover:text-white">
                <span className="relative z-10">Hover Me</span>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-0 w-0 rounded-full bg-blue-500 transition-all duration-300 ease-out group-hover:h-full group-hover:w-full" />
              </button>
            );
          };
          
          export default Button_12;`,
        },
      ],
    },
    {
      title: "The Prismatic Button",
      component: <Button_19 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button = () => {
            return (
              <button
                className="
                        group relative inline-flex h-14 items-center justify-center rounded-xl
                        border-2 border-purple-500 bg-white px-8 py-3 font-bold
                        transition-colors duration-200 ease-in-out
                        hover:bg-purple-50
                        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-50
                        dark:border-fuchsia-500 dark:bg-gray-900 dark:hover:bg-gray-800
                        dark:focus:ring-fuchsia-400 dark:focus:ring-offset-gray-900
                      "
              >
                <span
                  className="
                          bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
                          bg-clip-text text-transparent transition-all duration-500 ease-in-out
                          [background-size:200%_auto] [background-position:0%_center]
                          group-hover:[background-position:100%_center]
                          dark:from-fuchsia-500 dark:via-pink-500 dark:to-rose-500
                        "
                >
                  Text Gradient
                </span>
              </button>
            );
          };
          
          export default Button;`,
        },
      ],
    },
    {
      title: "Rotate Arrow Button",
      component: <Button_21 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
import { ChevronRight } from "lucide-react";

const Button = () => {
  return (
    <button
      className="
              group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap
              rounded-md bg-gray-700 px-5 py-2 text-sm font-medium text-white
              transition-colors duration-200 ease-out hover:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white
              dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300
              dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900
            "
    >
      <span>Get Started</span>
      <ChevronRight
        className="
                h-4 w-4 transform transition-transform duration-200 ease-out
                group-hover:rotate-90
              "
      />
    </button>
  );
};

export default Button;`,
        },
      ],
    },
    {
      title: "Expanding Button",
      component: <Button_23 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button = () => {
            return (
              <button
                className="
                    group relative inline-flex h-12 items-center justify-center 
                    overflow-hidden rounded-full border border-gray-200
                    bg-white px-3 font-medium text-gray-700 shadow-sm
                    transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
                    hover:w-36 hover:shadow-md hover:border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
                    dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-600
                    dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900
                  "
              >
          
                <span
                  className="
                      absolute left-4 whitespace-nowrap opacity-0
                      transition-all duration-300 ease-out
                      group-hover:translate-x-0 group-hover:opacity-100
                      -translate-x-2
                    "
                >
                  Explore
                </span>
          
                <div
                  className="
                      absolute flex items-center justify-center
                      transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
                      group-hover:translate-x-12
                    "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
          
                <div
                  className="
                      flex h-8 w-8 items-center justify-center rounded-full
                      bg-gray-100 transition-all duration-500
                      group-hover:h-0 group-hover:w-0 group-hover:opacity-0
                      dark:bg-gray-700
                    "
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-500 dark:text-gray-400"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            );
          };
          
          export default Button;`,
        },
      ],
    },
    {
      title: "Slide Reveal Button",
      component: <Button_24 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
import { ArrowRight } from "lucide-react";

const Button = () => {
  return (
    <div className="group relative isolate h-12 w-32 cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white p-1 text-center font-medium shadow-sm transition-all duration-500 hover:border-transparent hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <span className="absolute inset-0 z-10 flex translate-x-0 items-center justify-center text-gray-800 opacity-100 transition-all duration-500 ease-out group-hover:-translate-x-full group-hover:opacity-0 dark:text-gray-200">
        Explore
      </span>

      <div className="absolute inset-0 z-10 flex translate-x-full items-center justify-center gap-2 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
        <span>Explore</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      <div className="absolute inset-0 -z-0 h-full w-0 rounded-full bg-gradient-to-r from-teal-600 to-blue-800 transition-all duration-500 ease-out group-hover:w-full" />

      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-shimmer" />
      </div>
    </div>
  );
};

export default Button;`,
        },
      ],
    },
    {
      title: "The Beacon Button",
      component: <Button_25 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
import { ArrowRight } from "lucide-react";

const Button = () => {
  return (
    <button
      className="
          group relative flex h-12 w-44 items-center justify-between
          overflow-hidden rounded-full px-6 py-3 font-medium
          bg-neutral-900 text-white transition-all duration-300
          hover:bg-neutral-800 hover:shadow-lg
          dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100
          
          before:absolute before:inset-0 before:rounded-full 
          before:border-2 before:border-transparent 
          before:transition-all before:duration-500
          hover:before:border-white/30 hover:dark:before:border-neutral-900/30
          
          after:absolute after:top-0 after:left-0 after:h-full after:w-12
          after:-translate-x-12 after:skew-x-12 after:bg-white/20
          after:transition-all after:duration-700
          hover:after:translate-x-[200px] hover:after:skew-x-12
        "
    >
      <span className="relative z-10">Schedule Call</span>
      <div
        className="
            relative z-10 flex items-center transition-all duration-300
            group-hover:translate-x-2 group-hover:scale-110
          "
      >
        <ArrowRight className="h-4 w-4" />
      </div>

      <div
        className="
            absolute right-5 h-2 w-2 rounded-full bg-white/80
            opacity-0 transition-all duration-500 group-hover:opacity-100
            group-hover:[animation:pulse_1.5s_infinite]
            dark:bg-neutral-900/80
          "
      />
    </button>
  );
};

export default Button;`,
        },
      ],
    },
    {
      title: "Vertical Flip Button",
      component: <Button_26 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button = () => {
            return (
              <div className="group relative h-12 w-36 cursor-pointer overflow-hidden rounded-full border border-gray-300 bg-white p-1 font-medium transition-all duration-300 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <span className="absolute inset-0 flex translate-y-0 items-center justify-center text-gray-700 opacity-100 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 dark:text-gray-300">
                  Our Work
                </span>
          
                <div className="absolute inset-0 flex translate-y-full items-center justify-center bg-gray-900 text-gray-100 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  View Projects
                </div>
          
                <div className="absolute bottom-2 left-1/2 h-px w-8 -translate-x-1/2 rounded-full bg-gray-400 transition-all duration-500 group-hover:w-20 group-hover:bg-white dark:bg-gray-500" />
              </div>
            );
          };
          
          export default Button;`,
        },
      ],
    },
    {
      title: "Underline Button",
      component: <Button_27 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button = () => {
            return (
              <button
                className="
                    group relative inline-flex h-12 items-center justify-center 
                    overflow-hidden rounded-lg border border-slate-300
                    bg-white px-8 font-medium text-slate-800 transition-all
                    duration-200 ease-out hover:bg-slate-50
                    shadow-sm hover:shadow-md
                    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                    dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100
                    dark:hover:bg-slate-700 dark:focus:ring-slate-500 dark:focus:ring-offset-slate-900
                  "
              >
                <span className="relative">
                  Contact Me
                  <span
                    className="
                        absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-800
                        transition-all duration-300 group-hover:w-full
                        dark:bg-slate-200
                      "
                  />
                </span>
              </button>
            );
          };
          
          export default Button;`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#603F26]">Button Components</h1>
      <p className="text-[#1a1a1a] mt-2">
      Engaging, accessible buttons for every interaction in your application
      </p>
      <div className="mt-6 space-y-6">
        {ButtonVariants.map((variant, index) => (
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

export default ButtonPage;
