"use client";
import React, { useState, useMemo } from "react";
import { Check, Eye, EyeOff, X } from "lucide-react";

const Password_05 = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    setStrength(score);
  }, [password]);

  const getStrengthColor = () => {
    if (strength === 0) return "bg-gray-200";
    if (strength <= 2) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    if (strength <= 4) return "bg-green-500";
    return "bg-emerald-500";
  };

  const getStrengthText = () => {
    if (strength === 0) return "Start typing...";
    if (strength <= 2) return "Weak";
    if (strength <= 3) return "Medium";
    if (strength <= 4) return "Strong";
    return "Very Strong";
  };

  return (
    <div className="w-96 mx-auto py-12">
      <div className="group relative">
        <input
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 text-base bg-transparent outline-none border-b border-gray-300 focus:border-transparent"
          placeholder="Enter password"
        />
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-focus-within:w-full" />
        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-2"
          aria-label={isVisible ? "Hide password" : "Show password"}
        >
          {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {password && (
        <div className="mt-2 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">Password strength:</span>
            <span
              className={`font-medium ${getStrengthColor().replace("bg-", "text-")}`}
            >
              {getStrengthText()}
            </span>
          </div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  index < strength ? getStrengthColor() : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Password_05;
