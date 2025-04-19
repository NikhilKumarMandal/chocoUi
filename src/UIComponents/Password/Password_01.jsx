import React, { useState, useMemo } from "react";
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

const Password_01 = () => {
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

export default Password_01;


