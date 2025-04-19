import { useState, useEffect } from "react";

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
}

