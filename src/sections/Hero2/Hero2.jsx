import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PreviewCard = ({ index, isHovered, onHover }) => {
  const zIndex = 3 - index;
  const yOffset = index * 30;
  const xOffset = index * -40;
  const hoverOffset = index === 1 ? -60 : 0;
  const scale = 1 - (index * 0.05);

  return (
    <motion.div
      className="relative w-[90%] max-w-[500px]"
      style={{ 
        zIndex,
        position: 'absolute',
        left: `${xOffset}px`,
      }}
      animate={{
        y: isHovered ? hoverOffset : yOffset,
        scale: isHovered ? (index === 1 ? 1.05 : 1) : scale,
        x: isHovered ? (index * -40) : xOffset,
      }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
    >
      {/* Preview window mockup */}
      <div className="rounded-xl bg-white shadow-lg overflow-hidden border border-[#FFDBB5]">
        {/* Window header */}
        <div className="bg-[#603F26] p-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FFEAC5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFDBB5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#6C4E31]"></div>
          </div>
        </div>
        {/* Window content */}
        <div className="bg-gradient-to-br from-[#FFEAC5]/20 to-white p-6">
          {/* Code visualization */}
          <div className="space-y-2">
            <div className="h-3 bg-[#6C4E31]/10 rounded w-3/4"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-1/2"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-5/6"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-1/3"></div>
            <div className="h-3 bg-[#6C4E31]/10 rounded w-2/3"></div>
          </div>

          {/* Component preview */}
          <div className="mt-6 p-4 border border-[#6C4E31]/20 rounded-lg bg-white">
            <div className="h-20 bg-[#FFDBB5]/30 rounded-md flex items-center justify-center">
              <div className="w-24 h-6 bg-[#603F26] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#FFDBB5]/30 rounded-xl -z-10"></div>
      <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#6C4E31]/10 rounded-xl -z-10"></div>
    </motion.div>
  );
};

const Hero2 = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <section className="relative bg-[#FFEAC5]/90 rounded-4xl overflow-hidden py-10 md:py-10">
      <div className="container mx-10 lg:mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content - takes exactly half width with proper padding */}
          <div className="w-full mr-20 lg:w-2/3 px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Bricolage']">
                <span className="font-['InstrumentSerif'] text-[#603F26] font-normal italic">
                  Design
                </span>{' '}
                with Confidence
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg font-['Inter'] leading-relaxed">
                Create stunning interfaces with our customizable components. Build faster and{' '}
                <span className="font-medium text-[#6C4E31]">deliver better</span> experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/dashboard"
                  className="px-6 py-3 text-sm md:text-base font-medium text-white bg-[#603F26] rounded-xl hover:bg-[#6C4E31] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] font-['Inter']"
                >
                  Get Started
                </Link>
                <button className="px-6 py-3 text-sm md:text-base font-medium text-[#603F26] bg-white rounded-xl border-2 border-[#FFDBB5] hover:border-[#6C4E31] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] font-['Inter']">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stacked cards - takes exactly half width with centered alignment */}
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] flex items-center justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[500px] h-[350px] ml-25 lg:mx-0">
                {[0, 1, 2].map((index) => (
                  <PreviewCard
                    key={index}
                    index={index}
                    isHovered={isHovered}
                    onHover={setIsHovered}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;