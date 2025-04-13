import React, { useState } from "react";

const Stepper3 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Setup", "Configuration", "Customization", "Review"];

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
              stroke="#3B82F6"
              strokeWidth="8"
              strokeDasharray={`${calculateProgress() * 2.83} 283`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">
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
              Step {activeStep + 1} of {steps.length}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              This is the content for {steps[activeStep].toLowerCase()}. Fill in
              your information here.
            </p>
            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
              <button
                onClick={handleBack}
                disabled={activeStep === 0}
                className={`px-4 py-2 rounded-md ${
                  activeStep === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                className={`px-4 py-2 rounded-md ${
                  activeStep === steps.length - 1
                    ? "bg-blue-400 text-white cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
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

export default Stepper3;
