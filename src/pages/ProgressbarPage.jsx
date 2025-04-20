import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import LinearProgress from "../UIComponents/ProgressBar/LinearProgress";
import CircularProgress from "../UIComponents/ProgressBar/CircularProgress";
import LoadingIndicator from "../UIComponents/ProgressBar/LoadingIndicator";
import SteppedProgress from "../UIComponents/ProgressBar/SteppedProgress";

function ProgressbarPage() {
  const ProgressVariants = [
    {
      title: "Line Progress",
      component: <LinearProgress />,
      codeSnippets: [
        {
          language: "jsx",
          code: `const LinearProgress = ({ progress = 60 }) => {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#603F26]  transition-all duration-300"
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
};

export default LinearProgress;`,
        },
      ],
    },
    {
      title: "Radial Bar",
      component: <CircularProgress />,
      codeSnippets: [
        {
          language: "jsx",
          code: `const CircularProgress = ({ progress = 75 }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="text-[#603F26]"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-gray-700 font-medium">{progress}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;`,
        },
      ],
    }
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        ProgressBar Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
      </p>
      <div className="mt-6 space-y-6">
        {ProgressVariants.map((variant, index) => (
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

export default ProgressbarPage;
