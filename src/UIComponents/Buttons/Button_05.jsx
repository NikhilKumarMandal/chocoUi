import React, { useRef, useState } from "react";

const Button_05 = () => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setPosition({ x: -100, y: -100 }); 
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
            relative inline-flex h-12 items-center justify-center overflow-hidden
            rounded-lg border border-gray-300 bg-white px-6 font-medium text-gray-800
            shadow-sm transition-shadow duration-300 hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-50
            dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:shadow-gray-700/50
            dark:focus:ring-offset-gray-900
          "
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(165, 180, 252, 0.25), transparent 80%)`,
        }}
      />
      <span className="relative z-10">Spotlight Hover</span>
    </button>
  );
};

export default Button_05;
