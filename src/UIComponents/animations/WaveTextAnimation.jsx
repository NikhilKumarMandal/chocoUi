import { useState, useEffect } from "react";

function WaveTextAnimation({ text = "Wave Animation Effect" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (text.length * 2));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const getCharStyle = (index) => {
    const distance = Math.abs(index - (activeIndex % text.length));
    const isInWave = distance < 5;

    if (isInWave) {
      const waveHeight = [4, 3, 2, 1, 0];
      const translateY = waveHeight[distance];
      return {
        transform: "translateY(-" + translateY * 4 + "px)",
        color: distance === 0 ? "#3B82F6" : "#000",
        transition: "transform 0.2s ease, color 0.2s ease",
      };
    }

    return {
      transform: "translateY(0)",
      transition: "transform 0.2s ease, color 0.2s ease",
    };
  };

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block"
            style={getCharStyle(index)}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default WaveTextAnimation;
