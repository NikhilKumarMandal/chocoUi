import React from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

const PreviewCard = ({ index, isHovered, onHover }) => {
  const zIndex = 3 - index;
  const yOffset = index * 30; // Increased stacking offset
  const xOffset = index * -40; // Horizontal offset for overlapping (80% overlap)
  const hoverOffset = index === 1 ? -60 : 0; // Increased hover offset
  const scale = 1 - index * 0.05; // Slightly smaller scale for back cards

  return (
    <motion.div
      className="relative w-[90%] max-w-[500px]"
      style={{
        zIndex,
        position: "absolute",
        left: `${xOffset}px`, // Apply horizontal positioning
      }}
      animate={{
        y: isHovered ? hoverOffset : yOffset,
        scale: isHovered ? (index === 1 ? 1.05 : 1) : scale,
        x: isHovered ? index * -40 : xOffset, // Spread cards slightly on hover
      }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
    >
      {/* Preview window mockup */}
      <div className="rounded-lg bg-white shadow-xl overflow-hidden border border-[#6C4E31]/20">
        {/* Window header */}
        <div className="bg-[#603F26] p-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FFEAC5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFDBB5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#6C4E31]"></div>
          </div>
        </div>
        {/* Window content */}
        <div className="bg-gradient-to-br from-[#FFEAC5]/50 to-white p-6">
          {/* Code visualization */}
          <div className="space-y-2">
            <div className="h-3 bg-[#6C4E31]/10 rounded w-3/4"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-1/2"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-5/6"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-1/3"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-2/3"></div>
          </div>

          {/* Component preview */}
          <div className="mt-6 p-4 border border-[#6C4E31]/20 rounded bg-white">
            <div className="h-20 bg-[#FFDBB5] rounded-md flex items-center justify-center">
              <div className="w-100 h-6 bg-[#603F26] rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#FFDBB5] rounded-lg -z-10"></div>
      <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#6C4E31]/10 rounded-lg -z-10"></div>
    </motion.div>
  );
};

const Hero2 = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div data-scroll data-scroll-speed=".2">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FFEAC5] via-white to-[#FFDBB5]">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#6C4E31] opacity-5"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-[#603F26] opacity-5"></div>
        </div>

        <div className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text content */}

            {/* Stacked cards */}
            <div className="w-full md:w-2/3 mt-12 md:mt-0 relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative"
                  style={{ width: "500px", height: "350px" }}
                >
                  {[0, 1, 2].map((index) => (
                    <PreviewCard
                      key={index}
                      index={index}
                      isHovered={isHovered}
                      onHover={setIsHovered}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full m-auto md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#452213] leading-tight mb-6">
                Design with Confidence
              </h1>
              <p className="text-lg md:text-xl text-[#6C4E31] mb-8 max-w-xl">
                Create stunning interfaces with our customizable components.
                Build faster and deliver better experiences.
              </p>
              {/* Add whitespace-nowrap to keep button text on one line */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-[#603F26] text-[#FFEAC5] rounded-lg font-medium transition-transform hover:scale-105 whitespace-nowrap">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-[#6C4E31] text-[#6C4E31] rounded-lg font-medium transition-transform hover:scale-105 whitespace-nowrap">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
