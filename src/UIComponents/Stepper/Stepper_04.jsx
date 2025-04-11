import React, { useState } from 'react';

const Stepper4 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: 'Project Initiation',
      description: 'Define project scope and objectives',
      date: 'Jan 2024',
    },
    {
      title: 'Planning Phase',
      description: 'Create project plan and timeline',
      date: 'Feb 2024',
    },
    {
      title: 'Execution',
      description: 'Implement project deliverables',
      date: 'Mar 2024',
    },
    {
      title: 'Review & Launch',
      description: 'Final testing and deployment',
      date: 'Apr 2024',
    },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200">
          <div
            className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-500"
            style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative pl-12 transition-all duration-300 ${
                index === activeStep ? 'scale-105' : 'scale-100'
              }`}
            >
              <div
                className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= activeStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              <div
                className={`p-6 rounded-lg shadow-sm ${
                  index === activeStep
                    ? 'bg-blue-50 border border-blue-200'
                    : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className={`text-lg font-medium ${
                        index <= activeStep ? 'text-blue-600' : 'text-gray-800'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">{step.date}</span>
                </div>
                {index === activeStep && (
                  <div className="mt-4 p-4 bg-white rounded-md border border-gray-200">
                    <p className="text-gray-700">
                      This is the content for {step.title.toLowerCase()}. Fill in your information here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className={`px-4 py-2 rounded-md ${
            activeStep === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          className={`px-4 py-2 rounded-md ${
            activeStep === steps.length - 1
              ? 'bg-blue-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Stepper4; 