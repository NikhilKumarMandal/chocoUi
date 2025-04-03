import { useState, useEffect } from "react";

function Types() {
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

      <p className="text-4xl font-bold">
        Everyone deserves a <span className="text-yellow-400">{words[index].substring(0, charIndex)}</span>
        <span className="cursor border-l-2 border-yellow-400 animate-blink ml-1">&nbsp;</span>
      </p>
  )
}

export default Types