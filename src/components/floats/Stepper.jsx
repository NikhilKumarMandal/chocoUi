import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Check, Rocket, Zap, Sparkles, Clock } from "lucide-react";

const TimeBasedProgressBar = ({
  duration = 5000, // milliseconds
  onComplete,
  theme = "cosmic",
  label = "Processing...",
  showPercentage = true,
  showElapsedTime = true,
  pulseEffect = true,
  cometEffect = true,
  glowEffect = true,
}) => {
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimation();
  const cometControls = useAnimation();
  const barRef = useRef(null);
  const intervalRef = useRef(null);

  const themes = {
    cosmic: {
      bg: "bg-gray-900",
      bar: "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400",
      text: "text-cyan-200",
      icon: <Rocket className="w-5 h-5 text-cyan-300" />,
    },
    fire: {
      bg: "bg-gray-900",
      bar: "bg-gradient-to-r from-amber-500 via-orange-600 to-red-500",
      text: "text-amber-200",
      icon: <Zap className="w-5 h-5 text-amber-300" />,
    },
    neon: {
      bg: "bg-gray-950",
      bar: "bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500",
      text: "text-cyan-200",
      icon: <Sparkles className="w-5 h-5 text-cyan-300" />,
    },
  };

  // Comet animation sequence
  const animateComet = async () => {
    await cometControls.start({
      x: ["-100%", "120%"],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1],
      },
    });
    if (progress < 100) {
      animateComet();
    }
  };

  // Start progress
  useEffect(() => {
    if (isComplete) return;

    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const currentProgress = Math.min((elapsedTime / duration) * 100, 100);

      setProgress(currentProgress);
      setElapsed(elapsedTime);

      if (currentProgress >= 100) {
        clearInterval(intervalRef.current);
        setIsComplete(true);
        controls.start({
          scale: [1, 1.02, 1],
          boxShadow: [
            "0 0 0 rgba(0,0,0,0)",
            "0 0 20px rgba(124, 58, 237, 0.7)",
            "0 0 0 rgba(0,0,0,0)",
          ],
          transition: { duration: 0.8 },
        });
        setTimeout(() => onComplete?.(), 800);
      }
    }, 16); // ~60fps

    if (cometEffect) {
      animateComet();
    }

    return () => clearInterval(intervalRef.current);
  }, [duration, isComplete]);

  // Pulse animation
  useEffect(() => {
    if (pulseEffect && !isComplete) {
      controls.start({
        scale: [1, 1.02, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [pulseEffect, isComplete]);

  // Format time
  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    return `${seconds}s`;
  };

  return (
    <div
      className={`relative w-full max-w-lg p-5 rounded-xl ${themes[theme].bg} border border-gray-800 overflow-hidden`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {themes[theme].icon}
          <span className={`font-medium ${themes[theme].text}`}>{label}</span>
        </div>

        <div className="flex items-center gap-3">
          {showElapsedTime && (
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>{formatTime(elapsed)}</span>
            </div>
          )}
          {showPercentage && (
            <span className={`text-sm font-bold ${themes[theme].text}`}>
              {Math.round(progress)}%
            </span>
          )}
        </div>
      </div>

      {/* Main progress bar */}
      <div
        ref={barRef}
        className={`relative h-3 rounded-full bg-gray-800 overflow-hidden ${glowEffect ? "shadow-inner" : ""}`}
      >
        {/* Progress fill */}
        <motion.div
          className={`absolute top-0 left-0 h-full ${themes[theme].bar} rounded-full`}
          style={{ width: `${progress}%` }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Animated shine */}
          {glowEffect && (
            <motion.div
              className="absolute top-0 left-0 h-full w-20 bg-white/20"
              animate={{
                x: ["-100%", "150%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transform: "skewX(-20deg)",
                filter: "blur(6px)",
              }}
            />
          )}
        </motion.div>

        {/* Comet effect */}
        {cometEffect && (
          <motion.div
            className="absolute top-0 h-full w-8 bg-white"
            animate={cometControls}
            style={{
              filter: "blur(4px)",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
            }}
          />
        )}

        {/* Pulse dots */}
        {pulseEffect && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 h-full w-1 bg-white rounded-full"
                initial={{ x: `${10 + i * 15}%`, opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Completion animation */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center p-6 rounded-lg bg-gray-800 border border-gray-700"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <motion.div
                className="p-3 mb-3 rounded-full bg-gradient-to-br from-green-400 to-emerald-600"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.8,
                  ease: "backOut",
                }}
              >
                <Check className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-100">Complete!</h3>
              <p className="text-sm text-gray-400 mt-1">
                Processed in {formatTime(elapsed)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles */}
      {glowEffect && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/70"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: 0,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.7, 0],
                y: [`${Math.random() * 20}%`, `${Math.random() * 80}%`],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeBasedProgressBar;
