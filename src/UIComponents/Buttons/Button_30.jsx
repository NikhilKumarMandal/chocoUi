import React from "react";

const Button_30 = () => {
  return (
    <button
      className="
          group relative h-12 w-40 perspective-1000
        "
    >
      <div
        className="
            relative h-full w-full preserve-3d transition-all
            duration-500 [transform-style:preserve-3d]
            group-hover:[transform:rotateX(180deg)]
          "
      >
        <div
          className="
              absolute inset-0 backface-hidden rounded-lg
              bg-stone-800 border border-stone-600
              grid place-items-center text-stone-100
            "
        >
          Get Started
        </div>

        <div
          className="
              absolute inset-0 backface-hidden rounded-lg
              bg-navy-700 border border-navy-500
              grid place-items-center text-stone-100
              [transform:rotateX(180deg)]
            "
        >
          Learn More
        </div>
      </div>

      <div
        className="
            absolute inset-0 rounded-lg border border-stone-400/30
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
            dark:border-stone-600/30
          "
      />
    </button>
  );
};

export default Button_30;
