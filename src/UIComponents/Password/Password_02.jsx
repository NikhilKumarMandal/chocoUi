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

const STRENGTH_CONFIG = {
  colors: {
    0: "border-gray-200",
    1: "border-red-500",
    2: "border-orange-500",
    3: "border-amber-500",
    4: "border-green-400",
    5: "border-emerald-500",
  },
  texts: {
    0: "Enter a password",
    1: "Weak password",
    2: "Medium password!",
    3: "Strong password!!",
    4: "Very Strong password!!!",
  },
};

const Password_02 = (password) => {
  const fulfilledRequirements = PASSWORD_REQUIREMENTS.filter((req) =>
    req.regex.test(password)
  );
  const score = fulfilledRequirements.length;

  let levelIndex;
  if (score <= 1) levelIndex = 0;
  else if (score === 2) levelIndex = 1;
  else if (score === 3) levelIndex = 2;
  else if (score === 4) levelIndex = 3;
  else levelIndex = 4; // score 5

  return {
    score,
    level: STRENGTH_CONFIG.texts[levelIndex],
    requirements: PASSWORD_REQUIREMENTS.map((req) => ({
      ...req,
      met: req.regex.test(password),
    })),
  };
};

// --- Component ---

const ModernPasswordInput = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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

  const handleConfirmpass = (e) => {
    const passwordsMatch = password !== "" && e.target.value === password;
    setConfirmPassword(passwordsMatch);
  };

  return (
    <div className="w-96 mx-auto py-12">
      <form className="space-y-4">
        <div className="flex justify-between items-center">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="focus:outline-none"
            >
              <Info
                size={20}
                className={`cursor-pointer ${STRENGTH_CONFIG.colors[calculateStrength.score]} transition-all`}
              />
            </button>
            {showTooltip && (
              <div className="absolute right-0 mt-2 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-fade-in">
                <div className="absolute -top-2 right-2 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45" />
                <ul className="space-y-2 relative">
                  {calculateStrength.requirements.map((req, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      {req.met ? (
                        <Check
                          size={16}
                          className="text-emerald-500 shrink-0"
                        />
                      ) : (
                        <X size={16} className="text-gray-400 shrink-0" />
                      )}
                      <span
                        className={`text-xs ${req.met ? "text-emerald-600" : "text-gray-500"}`}
                      >
                        {req.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              id="password"
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={`w-full px-4 py-2.5 rounded-lg border-2 bg-white outline-none transition-all duration-200 ${
                STRENGTH_CONFIG.colors[calculateStrength.score]
              }`}
            />
            <button
              type="button"
              onClick={() => setIsVisible((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative">
            <input
              id="confirm-password"
              type={isVisible ? "text" : "password"}
              onChange={handleConfirmpass}
              placeholder="Confirm password"
              className={`w-full px-4 py-2.5 rounded-lg border-2 bg-white outline-none transition-all duration-200 ${
                confirmPassword === null
                  ? "border-gray-200"
                  : confirmPassword
                    ? "border-green-400"
                    : "border-red-500"
              }`}
            />
            {confirmPassword === false && (
              <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                Passwords do not match
              </p>
            )}
          </div>
        </div>

        {password && (
          <div className="text-sm text-gray-600">
            {STRENGTH_CONFIG.texts[calculateStrength.score]}
          </div>
        )}
      </form>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Password_02;
