import { useState, useEffect } from "react";

function ShuffleTextAnimation() {
  const finalText = "Shuffle Text Effect";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    let iteration = 0;
    const maxIterations = 12;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return finalText
          .split("")
          .map((char, idx) => {
            if (idx < iteration / 3) {
              return finalText[idx];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });

      iteration += 1;

      if (iteration >= maxIterations) {
        setDisplayText(finalText);
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-3xl md:text-5xl font-mono text-green-400">
        {displayText || Array(finalText.length).fill("_").join("")}
      </h2>
    </div>
  );
}

export default ShuffleTextAnimation;
