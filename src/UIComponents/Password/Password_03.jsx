import React, { useState, useMemo } from "react";
import { Check, Eye, EyeOff, X } from "lucide-react";

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
];

const Password_03 = () => {
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
    if (score === 0) return "#603F26";
    if (score === 1) return "#603F26";
    if (score === 2) return "#603F26";
    if (score === 3) return "#603F26";
    return "#603F26";
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
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#603F26]"
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
                (req.met ? "border-[#603F26] bg-green-50" : "border-gray-200")
              }
            >
              <div className="flex items-center space-x-2">
                {req.met ? (
                  <Check size={16} className="text-[#603F26]" />
                ) : (
                  <X size={16} className="text-gray-400" />
                )}
                <span
                  className={
                    "text-sm " + (req.met ? "text-[#603F26]" : "text-gray-600")
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

export default Password_03;
