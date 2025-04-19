import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import FillButton from "../UIComponents/Buttons/FillButton";
import SideButton from "../UIComponents/Buttons/SideButton";
import BloomButton from "../UIComponents/Buttons/BloomButton";
import RevealButton from "../UIComponents/Buttons/RevealButton";
import BeaconButton from "../UIComponents/Buttons/BeaconButton";
import Buttons from "../UIComponents/Buttons/Buttons";

function ButtonPage() {
  const ButtonVariants = [
    {
      title: "The Fill Button",
      component: (
        <FillButton
          label="Click Me"
          onClick={() => {}}
          variant="fill"
          className=" ml-80"
        />
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button_03 = ({
            label = "Click Me",
            onClick,
            variant = "outline",
            className = "",
          }) => {
            let baseClasses =
              "relative inline-flex h-12 m-4 items-center justify-center rounded-lg " +
              "border-2 px-6 font-medium transition-all duration-300 " +
              "focus:outline-none active:scale-95 ";
          
            let variantClasses = "";
          
            if (variant === "outline") {
              variantClasses =
                "border-[#603F26] bg-transparent text-[#603F26] " +
                "hover:bg-[#603F26] hover:text-white";
            } else if (variant === "fill") {
              variantClasses =
                "bg-[#603F26] text-white border-[#603F26] " +
                "hover:bg-transparent hover:text-[#603F26]";
            }
          
            return (
              <button
                onClick={onClick}
                className={baseClasses + variantClasses + " " + className}
              >
                {label}
              </button>
            );
          };
          
          export default Button_03;
          `,
        },
      ],
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "'Fill Effect'",
          description: "The label for the button.",
          example: "'Get Started'",
        },
        {
          name: "variant",
          type: "string",
          default: "'Fill Effect'",
          description: "The variant for the button.",
          example: "'outline'",
        },
      ],
    },

    {
      title: "Arrow Slide Button",
      component: (
        <SideButton label="Click Me" onClick={() => {}} className="ml-80" />
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const SideButton = ({
            label = "Click Me",
            onClick,
            showIcon = true,
            className = "",
            center = false,
          }) => {
            var baseClasses =
              "group inline-flex h-11 m-4 items-center justify-center gap-2 rounded-md " +
              "bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition-all " +
              "hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 ";
          
            var wrapperClasses = center
              ? "flex items-center justify-center min-h-screen"
              : "";
          
            return (
              <div className={wrapperClasses}>
                <button onClick={onClick} className={baseClasses + className}>
                  {label}
                  {showIcon && (
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
                  )}
                </button>
              </div>
            );
          };
          
          export default SideButton;
          `,
        },
      ],
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "The label for the button.",
          example: "'Click Me'",
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "The background color for the button.",
          example: "'ml-80'",
        },
      ],
    },
    {
      title: "The Bloom Button",
      component: (
        <BloomButton label="Hover Me" onClick={() => {}} className="ml-80" />
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const BloomButton = ({
            label = "Hover Me",
            onClick,
            color = "blue",
            className = "",
            center = false,
          }) => {
            var baseClasses =
              "group relative inline-block h-12 m-4 overflow-hidden rounded-full " +
              "border-2 px-8 font-medium transition-all hover:text-white ";
          
            var textClass = "text-" + color + "-500 ";
            var borderClass = "border-" + color + "-500 ";
            var bgClass = "bg-" + color + "-500 ";
            var centerWrapper = center
              ? "flex items-center justify-center min-h-screen"
              : "";
          
            return (
              <div className={centerWrapper}>
                <button
                  onClick={onClick}
                  className={baseClasses + borderClass + textClass + className}
                >
                  <span className="relative z-10">{label}</span>
                  <div
                    className={
                      "absolute bottom-0 left-0 right-0 top-0 m-auto h-0 w-0 rounded-full " +
                      bgClass +
                      " transition-all duration-300 ease-out group-hover:h-full group-hover:w-full"
                    }
                  />
                </button>
              </div>
            );
          };
          
          export default BloomButton;
          `,
        },
      ],
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "The label for the button.",
          example: "'Hover Me'",
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "The CSS classes for the button.",
          example: "'ml-80'",
        },
      ],
    },
    {
      title: "Slide Reveal Button",
      component: <RevealButton label="Explore" className="ml-80" />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
import { ArrowRight } from "lucide-react";

const RevealButton = ({
  label = "Explore",
  onClick,
  colorFrom = "teal-600",
  colorTo = "blue-800",
  icon = true,
  className = "",
  center = false,
}) => {
  var baseClasses =
    "group relative isolate h-12 w-32 m-4 cursor-pointer overflow-hidden rounded-full " +
    "border border-gray-200 bg-white p-1 text-center font-medium shadow-sm " +
    "transition-all duration-500 hover:border-transparent hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 ";

  var textClasses =
    "absolute inset-0 z-10 flex translate-x-0 items-center justify-center text-gray-800 opacity-100 " +
    "transition-all duration-500 ease-out group-hover:-translate-x-full group-hover:opacity-0 dark:text-gray-200";

  var iconClasses =
    "absolute inset-0 z-10 flex translate-x-full items-center justify-center gap-2 text-white opacity-0 " +
    "transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100";

  var gradientClasses =
    "absolute inset-0 -z-0 h-full w-0 rounded-full bg-gradient-to-r from-" +
    colorFrom +
    " to-" +
    colorTo +
    " transition-all duration-500 ease-out group-hover:w-full";

  var shimmerClasses =
    "absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100 " +
    "group-hover:animate-shimmer";

  var centerWrapper = center
    ? "flex items-center justify-center min-h-screen"
    : "";

  return (
    <div className={centerWrapper}>
      <div onClick={onClick} className={baseClasses + className}>
        <span className={textClasses}>{label}</span>

        <div className={iconClasses}>
          <span>{label}</span>
          {icon && (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </div>

        <div className={gradientClasses} />

        <div className={shimmerClasses}>
          <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:250%_250%]" />
        </div>
      </div>
    </div>
  );
};

export default RevealButton;
`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["lucide-react"],
      usageInstructions:
        "Import the Slide Reveal Button component and use it with label, bgColor, hoverBgColor and icon props.",
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "The label for the button.",
          example: "'Explore'",
        },
        {
          name: "icon",
          type: "string",
          default: "undefined",
          description: "The icon for the button.",
          example: "ArrowRight",
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "The CSS classes for the button.",
          example: "'ml-80'",
        },
      ],
    },
    {
      title: "The Beacon Button",
      component: <BeaconButton label="Schedule Call" className="ml-80" />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
import { ArrowRight } from "lucide-react";

const BeaconButton = ({
  label = "Schedule Call",
  onClick,
  icon = true,
  className = "",
  center = false,
}) => {
  var wrapperClass = center
    ? "flex items-center justify-center min-h-screen"
    : "";

  var buttonClasses =
    "group relative flex h-12 w-44 m-4 items-center justify-between overflow-hidden " +
    "rounded-full px-6 py-3 font-medium bg-neutral-900 text-white " +
    "transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg " +
    "dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 " +
    "before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent " +
    "before:transition-all before:duration-500 hover:before:border-white/30 hover:dark:before:border-neutral-900/30 " +
    "after:absolute after:top-0 after:left-0 after:h-full after:w-12 after:-translate-x-12 " +
    "after:skew-x-12 after:bg-white/20 after:transition-all after:duration-700 " +
    "hover:after:translate-x-[200px] hover:after:skew-x-12 " +
    className;

  var iconWrapperClasses =
    "relative z-10 flex items-center transition-all duration-300 " +
    "group-hover:translate-x-2 group-hover:scale-110";

  var dotClasses =
    "absolute right-5 h-2 w-2 rounded-full bg-white/80 opacity-0 " +
    "transition-all duration-500 group-hover:opacity-100 " +
    "group-hover:[animation:pulse_1.5s_infinite] dark:bg-neutral-900/80";

  return (
    <div className={wrapperClass}>
      <button onClick={onClick} className={buttonClasses}>
        <span className="relative z-10">{label}</span>
        {icon && (
          <div className={iconWrapperClasses}>
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
        <div className={dotClasses} />
      </button>
    </div>
  );
};

export default BeaconButton;
`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["lucide-react"],
      usageInstructions:
        "Import the Icon Glide Button component and use it with label, bgColor, hoverBgColor and icon props.",
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "The label for the button.",
          example: "'Explore'",
        },
        {
          name: "icon",
          type: "string",
          default: "undefined",
          description: "The icon for the button.",
          example: "ArrowRight",
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "The CSS classes for the button.",
          example: "'ml-80'",
        },
      ],
    },
    {
      title: "Underline Button",
      component: <Buttons />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Button = () => {
            return (
              <div className="flex flex-wrap gap-4 p-8 bg-gradient-to-br from-gray-50 to-white items-center justify-center">
                <button
                  type="button"
                  aria-label="Primary Button"
                  className="px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-md hover:shadow-lg"
                >
                  Primary
                </button>
          
                <button
                  type="button"
                  aria-label="Outline Button"
                  className="px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 border border-blue-500 text-blue-600 bg-white/60 backdrop-blur-md hover:bg-blue-100 focus-visible:ring-blue-400 shadow-sm hover:shadow-md"
                >
                  Outline
                </button>
          
                <button
                  type="button"
                  aria-label="Ghost Button"
                  className="px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 text-blue-600 bg-white/30 backdrop-blur-md hover:bg-blue-50 focus-visible:ring-blue-300 hover:shadow-inner"
                >
                  Ghost
                </button>
          
                <button
                  type="button"
                  aria-label="Delete Button"
                  className="px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow-md hover:shadow-lg"
                >
                  Delete
                </button>
          
                <button
                  type="button"
                  aria-label="Add Item Button"
                  title="Add Item"
                  className="flex items-center gap-2 px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-400 shadow-sm hover:shadow-md"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Item
                </button>
              </div>
            );
          };
          
          export default Button;
          `,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Button Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Engaging, accessible buttons for every interaction in your application
      </p>
      <div className="mt-6 space-y-6">
        {ButtonVariants.map((variant, index) => (
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

export default ButtonPage;
