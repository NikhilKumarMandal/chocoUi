import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Type from "../UIComponents/animations/Type";
import WaveTextAnimation from "../UIComponents/animations/WaveTextAnimation";

function Animation() {
  const AnimVariants = [
    {
      title: "Dynamic Text Effect",
      component: <Type />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState, useEffect } from "react";
          
          export default function Types({ words = ["Choco", "Prize", "Money"] }) {
            const typingDelay = 150;
            const erasingDelay = 100;
            const newLetterDelay = 1000;
          
            const [index, setIndex] = useState(0);
            const [charIndex, setCharIndex] = useState(0);
            const [isTyping, setIsTyping] = useState(true);
          
            useEffect(() => {
              let timer;
          
              if (isTyping) {
                if (charIndex < words[index].length) {
                  timer = setTimeout(() => {
                    setCharIndex((prev) => prev + 1);
                  }, typingDelay);
                } else {
                  timer = setTimeout(() => setIsTyping(false), newLetterDelay);
                }
              } else {
                if (charIndex > 0) {
                  timer = setTimeout(() => {
                    setCharIndex((prev) => prev - 1);
                  }, erasingDelay);
                } else {
                  setIsTyping(true);
                  setIndex((prev) => (prev + 1) % words.length);
                }
              }
          
              return () => clearTimeout(timer);
            }, [charIndex, isTyping, index, words]);
          
            return (
              <div className="text-4xl font-bold text-black flex items-center">
                <span>
                  Everyone deserves a{" "}
                  {words[index].substring(0, charIndex)}
                </span>
                <span className="border-l-2 border-yellow-400 animate-blink ml-1">
                  &nbsp;
                </span>
              </div>
            );
          }`,
        },
      ],
    },
    {
      title: "Wavy Text",
      component: <WaveTextAnimation />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState, useEffect } from "react";
          
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
          
          export default WaveTextAnimation`,
        },
      ],
    },
  ];
  return (
    <div className=" mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Animation Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Bring your interface to life with smooth, purposeful animations
      </p>
      <div className="mt-6 space-y-6 rounded-lg">
        {AnimVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            // isFullWidth={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default Animation;
