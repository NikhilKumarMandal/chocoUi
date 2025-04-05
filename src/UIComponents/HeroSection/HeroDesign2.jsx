import React from "react";

const HeroDesign1 = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FFEAC5] via-white to-[#FFDBB5]">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#6C4E31] opacity-5"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-[#603F26] opacity-5"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="w-full md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#603F26] leading-tight mb-6">
              Design with Confidence
            </h1>
            <p className="text-lg md:text-xl text-[#6C4E31] mb-8 max-w-xl">
              Create stunning interfaces with our customizable components. Build
              faster and deliver better experiences.
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

          {/* Visual element */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
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
                      <div className="w-16 h-6 bg-[#603F26] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#FFDBB5] rounded-lg -z-10"></div>
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#6C4E31]/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesign1;
