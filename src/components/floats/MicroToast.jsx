import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, AlertTriangle, Bell, Sparkles } from "lucide-react";

const MicroToast = ({
  message,
  type = "info",
  duration = 3000,
  position = "top-right",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  const toastTypes = {
    info: {
      icon: <Bell className="w-4 h-4 text-purple-300" />,
      bg: "bg-gray-800",
      border: "border-purple-500/30",
      accent: "text-purple-300",
    },
    success: {
      icon: <Check className="w-4 h-4 text-emerald-300" />,
      bg: "bg-gray-800",
      border: "border-emerald-500/30",
      accent: "text-emerald-300",
    },
    error: {
      icon: <AlertTriangle className="w-4 h-4 text-rose-400" />,
      bg: "bg-gray-800",
      border: "border-rose-500/30",
      accent: "text-rose-400",
    },
    premium: {
      icon: <Sparkles className="w-4 h-4 text-amber-300" />,
      bg: "bg-gradient-to-br from-purple-900/80 to-amber-900/50",
      border: "border-amber-400/20",
      accent: "text-amber-300",
    },
  };

  setTimeout(() => setIsVisible(false), duration);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed ${positions[position]} z-50 min-w-[200px] max-w-[280px] p-3 rounded-lg backdrop-blur-md ${toastTypes[type].bg} border ${toastTypes[type].border} shadow-lg shadow-black/30 overflow-hidden`}
          initial={{
            opacity: 0,
            y: position.includes("top") ? -20 : 20,
            x: position.includes("right") ? 20 : -20,
          }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2">
              <div
                className={`p-1.5 rounded-md ${toastTypes[type].border} ${toastTypes[type].bg} mt-0.5`}
              >
                {toastTypes[type].icon}
              </div>
              <p className="text-sm text-gray-200">{message}</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-0.5 rounded-full hover:bg-gray-700/50 transition-colors"
            >
              <X className="w-3.5 h-3.5 text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ color: toastTypes[type].accent }}
          />

          {/* Floating particles (premium only) */}
          {type === "premium" && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-amber-300/70"
                  initial={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: 0,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MicroToast;
