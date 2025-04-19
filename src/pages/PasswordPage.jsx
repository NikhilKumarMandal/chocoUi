import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Password_01 from "../UIComponents/Password/Password_01";
import Password_03 from "../UIComponents/Password/Password_03";

function PasswordPage() {
  const PasswordVariants = [
    {
      title: "Password Checker",
      component: <Password_01 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState, useMemo } from "react";
import { Check, Eye, EyeOff, X } from "lucide-react";

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
];

const STRENGTH_CONFIG = {
  texts: {
    0: "Enter a password",
    1: "Weak password",
    2: "Medium password!",
    3: "Strong password!!",
    4: "Very Strong password!!!",
  },
};

const Password = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const calculateStrength = useMemo(() => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));
    return {
      score: requirements.filter((req) => req.met).length,
      requirements,
    };
  }, [password]);

  return (
    <div className="max-w-md w-full mx-auto px-4 py-6">
      <form className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-invalid={calculateStrength.score < 4}
            aria-describedby="password-strength"
            className="w-full p-2 border-2 rounded-md bg-background outline-none focus:border-blue-700 transition"
          />
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            aria-label={isVisible ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground"
          >
            {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </form>

      {/* Strength Bar */}
      <div className="flex gap-2 w-full justify-between mt-2">
        {[1, 2, 3, 4, 5].map((level) => {
          const baseClass = "p-1 rounded-full w-full";
          const isActive = calculateStrength.score >= level;
          let activeColor = "bg-border";
          if (isActive) {
            if (level === 1) activeColor = "bg-green-200";
            else if (level === 2) activeColor = "bg-green-300";
            else if (level === 3) activeColor = "bg-green-400";
            else if (level === 4) activeColor = "bg-green-500";
            else activeColor = "bg-green-600";
          }
          const className = activeColor + " " + baseClass;
          return <span key={level} className={className}></span>;
        })}
      </div>

      <p
        id="password-strength"
        className="my-2 text-sm font-medium flex justify-between"
      >
        <span>Must contain:</span>
        <span>
          {STRENGTH_CONFIG.texts[Math.min(calculateStrength.score, 4)]}
        </span>
      </p>

      <ul className="space-y-1.5" aria-label="Password requirements">
        {calculateStrength.requirements.map((req, index) => {
          const icon = req.met ? (
            <Check size={16} className="text-emerald-500" />
          ) : (
            <X size={16} className="text-muted-foreground/80" />
          );

          let textClass = "text-xs";
          if (req.met) {
            textClass += " text-emerald-600";
          } else {
            textClass += " text-muted-foreground";
          }

          return (
            <li key={index} className="flex items-center space-x-2">
              {icon}
              <span className={textClass}>
                {req.text}
                <span className="sr-only">
                  {req.met ? " - Requirement met" : " - Requirement not met"}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Password;`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["lucide-react"],
      usageInstructions: "Import the Password component.",
      componentProps: [
        {
          name: "password",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "",
        },
      ],
    },
    {
      title: "Circular Strength",
      component: <Password_03 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState, useMemo } from "react";
import { Check, Eye, EyeOff, X } from "lucide-react";

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
];

const Password = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const calculateStrength = useMemo(() => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));
    const metCount = requirements.filter((req) => req.met).length;
    return {
      score: metCount,
      requirements: requirements,
      percentage: (metCount / PASSWORD_REQUIREMENTS.length) * 100,
    };
  }, [password]);

  const getColor = (score) => {
    if (score === 0) return "#94a3b8";
    if (score === 1) return "#ef4444";
    if (score === 2) return "#f97316";
    if (score === 3) return "#eab308";
    return "#10b981";
  };

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (calculateStrength.percentage / 100) * circumference;

  return (
    <div className="w-full max-w-md mx-auto px-4 py-12">
      <div className="relative flex items-center justify-center mb-8">
        <svg
          className="w-24 h-24 sm:w-28 sm:h-28 -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={getColor(calculateStrength.score)}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute text-lg sm:text-2xl font-semibold">
          {calculateStrength.score * 25}%
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-lg border-2 bg-transparent outline-none transition-all duration-300 text-sm sm:text-base"
            style={{ borderColor: getColor(calculateStrength.score) }}
          />
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {calculateStrength.requirements.map((req, index) => (
            <div
              key={index}
              className={
                "p-3 rounded-lg border transition-all duration-300 " +
                (req.met ? "border-green-500 bg-green-50" : "border-gray-200")
              }
            >
              <div className="flex items-center space-x-2">
                {req.met ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <X size={16} className="text-gray-400" />
                )}
                <span
                  className={
                    "text-sm " +
                    (req.met ? "text-green-700" : "text-gray-600")
                  }
                >
                  {req.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Password;`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["lucide-react"],
      usageInstructions: "Import the Password component.",
      componentProps: [
        {
          name: "password",
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
        Password Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Password displays strength indicator for password fields.
      </p>
      <div className="mt-6 space-y-6">
        {PasswordVariants.map((variant, index) => (
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

export default PasswordPage;
