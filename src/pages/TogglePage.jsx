import Toggle1 from "../UIComponents/Toggle/Toggle1";
import Toggle2 from "../UIComponents/Toggle/Toggle2";
import Toggle4 from "../UIComponents/Toggle/Toggle4";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function TogglePage() {
  const ToggleVariants = [
    {
      title: "Day-Night Toggle",
      component: <Toggle1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);
  return (
    <>
      <button
        onClick={toggle}
        className={"relative w-14 h-8 rounded-full transition-colors duration-300 px-1 " + (isOn ? "bg-yellow-400" : "bg-gray-600")}
      >
        <span
          className={"absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center text-[16px] " + (isOn ? "translate-x-6" : "")}
        >
          {isOn ? "🌞" : "🌙"}
        </span>
      </button>
    </>
  );
};

export default Toggle;
`,
        },
      ],
    },
    {
      title: "Dark Mode Toggle",
      component: <Toggle2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOn(!isOn)}
        className={"relative w-14 h-8 rounded-full transition-colors duration-300 " + (isOn ? "bg-black" : "bg-gray-300")}
      >
        <span
          className={"absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 " + (isOn ? "translate-x-6" : "")}
        />
      </button>
    </>
  );
};

export default Toggle;
`,
        },
      ],
    },

    {
      title: "Enabled-Disabled Toggle",
      component: <Toggle4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">
          {enabled ? "Enabled" : "Disabled"}
        </span>

        <button
          onClick={() => setEnabled(!enabled)}
          className={"relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 " + (enabled ? "bg-blue-600" : "bg-gray-300")}
        >
          <span
            className={"inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 " + (enabled ? "translate-x-5" : "translate-x-1")}
          />
        </button>
      </div>
    </>
  );
};

export default Toggle;
`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Toggle Components</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Sleek, accessible switches for binary options and preferences
      </p>
      <div className="mt-6 space-y-6">
        {ToggleVariants.map((variant, index) => (
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

export default TogglePage;
