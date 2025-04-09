import React from "react";

const Button_28 = () => {
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  };

  return (
    <button
      className="
            group relative isolate h-14 w-44 overflow-hidden 
            rounded-xl border-2 border-transparent bg-gray-900
            px-8 font-medium text-white shadow-xl
            before:absolute before:inset-0 before:-z-10
            before:bg-[radial-gradient(circle_at_var(--x)_var(--y),#3b82f6_0%,transparent_70%]
            before:opacity-0 before:transition-opacity before:duration-500
            hover:before:opacity-100
          "
      onMouseMove={handleMouseMove}
    >
      <span className="relative z-10">Hover Me</span>
      <div
        className="
            absolute -z-20 h-32 w-32 rounded-full bg-blue-500/10
            blur-xl transition-all duration-700
            group-hover:h-64 group-hover:w-64 group-hover:bg-blue-500/20
          "
      />
    </button>
  );
};

export default Button_28;
