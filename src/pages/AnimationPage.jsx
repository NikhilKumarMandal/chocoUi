import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Type from "../UIComponents/animations/Type";

function Animation() {
  const AnimVariants = [
    {
      title: "Animations",
      component: <Type />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState, useEffect } from "react";
          
          export default function Animations() {
            const words = ["Choco", "Prize", "Money"];
            const typingDelay = 200;
            const erasingDelay = 200;
            const newLetterDelay = 800;
          
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
                  setTimeout(() => setIsTyping(false), newLetterDelay);
                }
              } else {
                if (charIndex > 0) {
                  timer = setTimeout(() => {
                    setCharIndex((prev) => prev - 1);
                  }, erasingDelay);
                } else {
                  setIndex((prev) => (prev + 1) % words.length);
                  setIsTyping(true);
                }
              }
          
              return () => clearTimeout(timer);
            }, [charIndex, isTyping, index, words]);
            return (
              <p className="text-4xl font-bold m-4">
                Everyone deserves a{" "}
                <span className="text-yellow-400">
                  {words[index].substring(0, charIndex)}
                </span>
                <span className="cursor border-l-2 border-yellow-400 animate-blink ml-1">
                  &nbsp;
                </span>
              </p>
            );
          }`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">Component Previews</h1>
      <p className="text-gray-600 mt-2">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
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
