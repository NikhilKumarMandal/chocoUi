import React, { useState } from "react";

const Stepper1 = ({
  steps = [
    { title: "Personal Info", content: "Fill in your personal information here." },
  { title: "Account Details", content: "Set up your account details here." },
  { title: "Preferences", content: "Select your preferences here." },
    { title: "Confirmation", content: "Confirm your information and finish." }
  ]
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center">
            <div
              className={
                index <= activeStep
                  ? "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white"
                  : "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 text-gray-600"
              }
            >
              {index + 1}
            </div>
            <div className="ml-2">
              <div
                className={
                  index <= activeStep
                    ? "text-xs sm:text-sm font-medium text-blue-600"
                    : "text-xs sm:text-sm font-medium text-gray-600"
                }
              >
                {step.title}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={
                  index < activeStep
                    ? "hidden sm:block h-0.5 w-8 sm:w-16 mx-2 bg-blue-600"
                    : "hidden sm:block h-0.5 w-8 sm:w-16 mx-2 bg-gray-200"
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
                ? "px-4 py-2 rounded-md bg-blue-400 text-white cursor-not-allowed"
                : "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
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

