import React from 'react';

const SteppedProgress = ({ steps = 5, currentStep = 2 }) => {
  // Validate props
  const validatedSteps = Math.max(1, Math.min(steps, 10));
  const validatedCurrentStep = Math.max(0, Math.min(currentStep, validatedSteps));

  return (
    <div className="flex items-center">
      {[...Array(validatedSteps)].map((_, i) => (
        <React.Fragment key={i}>
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center 
              ${i < validatedCurrentStep ? 'bg-green-500 border-green-500 text-white' : 
                i === validatedCurrentStep ? 'border-blue-500' : 'border-gray-300'}`}
          >
            {i < validatedCurrentStep ? (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < validatedSteps - 1 && (
            <div className={`h-1 w-8 ${i < validatedCurrentStep ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SteppedProgress;