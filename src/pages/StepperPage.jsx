import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Stepper1 from "../UIComponents/Stepper/Stepper1";
import Stepper2 from "../UIComponents/Stepper/Stepper2";
import Stepper3 from "../UIComponents/Stepper/Stepper3";

function StepperPage() {
  const StepperVariants = [
    {
      title: "Basic Stepper",
      component: <Stepper1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Stepper1 = ({
            steps = [
              {
                title: "Personal Info",
                content: "Fill in your personal information here.",
              },
              { title: "Account Details", content: "Set up your account details here." },
              { title: "Preferences", content: "Select your preferences here." },
              { title: "Confirmation", content: "Confirm your information and finish." },
            ],
          }) => {
            const [activeStep, setActiveStep] = useState(0);
          
            const handleNext = () =>
              setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
          
            const handleBack = () =>
              setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
          
            return (
              <div className="max-w-2xl mx-auto p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between mb-8 space-y-4 sm:space-y-0">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="flex items-center w-full sm:w-1/4 space-x-2"
                    >
                      <div
                        className={
                          "flex items-center justify-center aspect-square w-8 sm:w-10 rounded-full shrink-0 " +
                          (index <= activeStep
                            ? "bg-[#603F26] text-white"
                            : "bg-gray-200 text-gray-600")
                        }
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div
                          className={
                            "text-xs sm:text-sm font-medium " +
                            (index <= activeStep ? "text-[#603F26]" : "text-gray-600")
                          }
                        >
                          {step.title}
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={
                            "hidden sm:block h-0.5 w-8 sm:w-16 mx-2 " +
                            (index < activeStep ? "bg-[#603F26]" : "bg-gray-200")
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
          
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    {steps[activeStep].title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    {steps[activeStep].content}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                    <button
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      className={
                        activeStep === 0
                          ? "px-4 py-2 rounded-md bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={activeStep === steps.length - 1}
                      className={
                        activeStep === steps.length - 1
                          ? "px-4 py-2 rounded-md bg-[#603F26] text-white cursor-not-allowed"
                          : "px-4 py-2 rounded-md bg-[#603F26] text-white hover:bg-[#603F26]/90"
                      }
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </button>
                  </div>
                </div>
              </div>
            );
          };
          export default Stepper1;
          `,
        },
      ],
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "",
        },
      ],
    },
    {
      title: "Vertical Stepper",
      component: <Stepper2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Stepper = ({
            steps = [
              {
                title: "Personal Info",
                description: "Enter your personal details",
                icon: (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Account Details",
                description: "Set up your account",
                icon: (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
              },
            ],
          }) => {
            const [activeStep, setActiveStep] = useState(0);
          
            const handleNext = () => {
              setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
            };
          
            const handleBack = () => {
              setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
            };
          
            return (
              <div className="max-w-4xl mx-auto p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-64 mb-6 sm:mb-0">
                    <div className="relative">
                      <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#603F26] transition-all duration-300"
                          style={{
                            height: (activeStep / (steps.length - 1)) * 100 + "%",
                          }}
                        />
                      </div>
                      {steps.map((step, index) => (
                        <div key={step.title} className="relative flex items-center mb-8">
                          <div
                            className={
                              index <= activeStep
                                ? "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#603F26] text-white"
                                : "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 text-gray-600"
                            }
                          >
                            {step.icon}
                          </div>
                          <div className="ml-4">
                            <div
                              className={
                                index <= activeStep
                                  ? "text-xs sm:text-sm font-medium text-[#603F26]"
                                  : "text-xs sm:text-sm font-medium text-gray-600"
                              }
                            >
                              {step.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {step.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  <div className="flex-1 sm:ml-8">
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                      <h2 className="text-lg sm:text-xl font-semibold mb-4">
                        {steps[activeStep].title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 mb-6">
                        This is the content for {steps[activeStep].title.toLowerCase()}.
                        Fill in your information here.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                        <button
                          onClick={handleBack}
                          disabled={activeStep === 0}
                          className={
                            activeStep === 0
                              ? "px-4 py-2 rounded-md bg-gray-200 text-gray-400 cursor-not-allowed"
                              : "px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }
                        >
                          Back
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={activeStep === steps.length - 1}
                          className={
                            activeStep === steps.length - 1
                              ? "px-4 py-2 rounded-md bg-[#603F26] text-white cursor-not-allowed"
                              : "px-4 py-2 rounded-md bg-[#603F26] text-white hover:bg-[#603F26]"
                          }
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          
          export default Stepper;`,
        },
      ],
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "",
        },
      ],
    },
    {
      title: "Circular Stepper",
      component: <Stepper3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Stepper = ({
            steps = ["Setup", "Configuration", "Customization", "Review"],
          }) => {
            const [activeStep, setActiveStep] = useState(0);
          
            const handleNext = () => {
              setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
            };
          
            const handleBack = () => {
              setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
            };
          
            const calculateProgress = () => {
              return (activeStep / (steps.length - 1)) * 100;
            };
          
            return (
              <div className="max-w-4xl mx-auto p-4 sm:p-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#603F26"
                        strokeWidth="8"
                        strokeDasharray={calculateProgress() * 2.83 + " 283"}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-[#603F26]">
                          {Math.round(calculateProgress())}%
                        </div>
                        <div className="text-sm sm:text-base text-gray-600 mt-2">
                          {steps[activeStep]}
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="w-full max-w-md">
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                      <h2 className="text-lg sm:text-xl font-semibold mb-4">
                        {"Step " + (activeStep + 1) + " of " + steps.length}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 mb-6">
                        {"This is the content for " +
                          steps[activeStep].toLowerCase() +
                          ". Fill in your information here."}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                        <button
                          onClick={handleBack}
                          disabled={activeStep === 0}
                          className={
                            "px-4 py-2 rounded-md " +
                            (activeStep === 0
                              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300")
                          }
                        >
                          Back
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={activeStep === steps.length - 1}
                          className={
                            "px-4 py-2 rounded-md " +
                            (activeStep === steps.length - 1
                              ? "bg-[#603F26] text-white cursor-not-allowed"
                              : "bg-[#603F26] text-white hover:bg-[#603F26]")
                          }
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          
          export default Stepper;`,
        },
      ],
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "",
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Stepper Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Steppers convey progress through numbered steps. It provides a
        wizard-like workflow.
      </p>
      <div className="mt-6 space-y-6">
        {StepperVariants.map((variant, index) => (
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

export default StepperPage;
