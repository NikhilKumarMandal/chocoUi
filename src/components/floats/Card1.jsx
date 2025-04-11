import React, { useState, useEffect } from 'react'

export default function Card1() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [sparkles, setSparkles] = useState([]);
  
    useEffect(() => {
      if (isHovered) {
        const interval = setInterval(() => {
          setSparkles(prev => [...prev, {
            id: Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
          }].slice(-5));
        }, 300);
        return () => clearInterval(interval);
      }
    }, [isHovered]);

    return (
      <div
        className="group relative w-40 h-16 bg-blue-500 rounded-full overflow-hidden cursor-pointer transition-all duration-500 hover:bg-green-500 hover:shadow-xl hover:shadow-[#603F26]/40 before:absolute before:inset-0 before:duration-500  hover:scale-105"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos({
            x: e.clientX - rect.left - rect.width / 2,
            y: e.clientY - rect.top - rect.height / 2,
          });
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setPos({ x: 0, y: 0 });
          setIsHovered(false);
          setSparkles([]);
        }}
      >
        <div
          className="absolute w-full h-full flex items-center justify-center font-bold text-[#FFF] transition-all duration-500 group-hover:text-white group-hover:scale-110"
          style={{
            transform: `translate(${pos.x * 0.3}px, ${pos.y * 0.3}px)`,
          }}
        >
          <span className="relative z-10 tracking-wider">
            Hover Me
          </span>
        </div>
        
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            }}
          />
        ))}
      </div>
    );
  }
