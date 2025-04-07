"use client";
import React, { useState, useMemo } from "react";
import { Check, Eye, EyeOff, X } from "lucide-react";

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  { regex: /[!-\/:-@[-`{-~]/, text: "At least 1 special characters" },
];

const Password_03 = () => {
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
      percentage:
        (requirements.filter((req) => req.met).length /
          PASSWORD_REQUIREMENTS.length) *
        100,
    };
  }, [password]);

  const getColor = (score) => {
    if (score === 0) return "#94a3b8";
    if (score === 1) return "#ef4444";
    if (score === 2) return "#f97316";
    if (score === 3) return "#eab308";
    if (score === 4) return "#22c55e";
    return "#10b981";
  };

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (calculateStrength.percentage / 100) * circumference;

  return (
    <div className="w-96 mx-auto py-12">
      <div className="relative flex items-center justify-center mb-8">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke={getColor(calculateStrength.score)}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute text-2xl font-semibold">
          {calculateStrength.score * 20}%
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-lg border-2 bg-transparent outline-none transition-all duration-300"
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

        <div className="grid grid-cols-2 gap-4">
          {calculateStrength.requirements.map((req, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border transition-all duration-300 ${
                req.met ? "border-green-500 bg-green-50" : "border-gray-200"
              }`}
            >
              <div className="flex items-center space-x-2">
                {req.met ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <X size={16} className="text-gray-400" />
                )}
                <span
                  className={`text-sm ${req.met ? "text-green-700" : "text-gray-600"}`}
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
