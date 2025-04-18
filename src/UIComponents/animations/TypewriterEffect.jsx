import { useState, useEffect } from "react";

function TypewriterEffect() {
  const phrases = ["Create.", "Design.", "Develop.", "Innovate."];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length];

    const handleTyping = () => {
      setText((prevText) =>
        isDeleting
          ? currentPhrase.substring(0, prevText.length - 1)
          : currentPhrase.substring(0, prevText.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <h2 className="text-3xl md:text-5xl font-bold text-white">
        {text}
        <span className="border-r-2 border-white ml-1 animate-pulse">&nbsp;</span>
      </h2>
    </div>
  );
}

export default TypewriterEffect;
