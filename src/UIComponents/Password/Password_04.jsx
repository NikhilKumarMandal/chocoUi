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

const Password_04 = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

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

  const strengthColor = useMemo(() => {
    const score = calculateStrength.score;
    if (score === 0) return "border-gray-300";
    if (score === 1) return "border-red-500";
    if (score === 2) return "border-orange-500";
    if (score === 3) return "border-yellow-500";
    if (score === 4) return "border-green-500";
    return "border-emerald-500";
  }, [calculateStrength.score]);

  return (
    <div className="w-96 mx-auto py-12">
      <div className="relative">
        <div className="relative">
          <input
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`w-full px-4 py-3 pr-20 rounded-lg border-2 ${strengthColor} bg-transparent outline-none transition-all duration-300`}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsVisible((prev) => !prev)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            <button
              type="button"
              onClick={() => setShowRequirements((prev) => !prev)}
              className={`text-gray-400 hover:text-gray-600 p-1 transition-transform duration-300 ${
                showRequirements ? "rotate-90" : ""
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
            showRequirements ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 border">
            <div className="space-y-2">
              {calculateStrength.requirements.map((req, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                    req.met ? "bg-green-50" : "bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      req.met ? "bg-green-100" : "bg-gray-200"
                    }`}
                  >
                    {req.met ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <X size={16} className="text-gray-400" />
                    )}
                  </div>
                  <span
                    className={`text-sm ${req.met ? "text-green-700" : "text-gray-600"}`}
                  >
                    {req.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm font-medium text-gray-600">
          Strength: {calculateStrength.score * 20}%
        </div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                index < calculateStrength.score
                  ? strengthColor.replace("border", "bg")
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Password_04;
