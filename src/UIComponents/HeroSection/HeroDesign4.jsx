import React from "react";

export default function HeroDesign4() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ECECEC] via-white to-[#E1E1E1]"></div>
      <div className="relative container mx-auto px-4 sm:px-6 md:px-10 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between min-h-screen py-12 md:py-16 lg:py-32">
        <div className="w-full md:w-3/5 lg:w-1/2 text-left md:pr-8 mb-12 md:mb-0">
          <span className="inline-block px-3 py-1 bg-[#545454] text-[#ECECEC] text-sm font-semibold rounded-full mb-4 md:mb-6">
            Premium Solutions
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug mb-4 md:mb-8 text-[#464646]">
            Crafting Elegant Experiences
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-10 text-[#545454] max-w-xl md:leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            minus provident quisquam necessitatibus delectus corporis
            perspiciatis amet iste eligendi commodi accusamus id. Aliquam
            facilis dolor, numquam architecto cupiditate culpa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button className="px-6 py-3 md:px-8 bg-[#464646] text-[#ECECEC] font-medium rounded-lg hover:bg-[#545454] transition duration-300 shadow-lg">
              Explore Library
            </button>
            <button className="px-6 py-3 md:px-8 border border-[#545454] text-[#545454] rounded-lg hover:bg-[#545454] hover:text-[#ECECEC] transition duration-300">
              View Demos
            </button>
          </div>
          <div className="mt-10 md:mt-16">
            <p className="text-sm text-[#545454] mb-3 md:mb-5">
              Trusted by companies worldwide
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              <div className="w-14 h-7 md:w-16 md:h-8 bg-[#545454] opacity-20 rounded"></div>
              <div className="w-14 h-7 md:w-16 md:h-8 bg-[#545454] opacity-20 rounded"></div>
              <div className="w-14 h-7 md:w-16 md:h-8 bg-[#545454] opacity-20 rounded"></div>
              <div className="w-14 h-7 md:w-16 md:h-8 bg-[#545454] opacity-20 rounded"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white p-5 md:p-7 lg:p-8 rounded-xl border border-[#E1E1E1] shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold text-[#464646] mb-4 md:mb-6">
              Join Our Community
            </h3>
            <div className="space-y-3 md:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 md:py-3 bg-white text-[#464646] placeholder-[#545454] rounded-lg border border-[#E1E1E1] focus:ring-2 focus:ring-[#545454] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 md:py-3 bg-white text-[#464646] placeholder-[#545454] rounded-lg border border-[#E1E1E1] focus:ring-2 focus:ring-[#545454] outline-none"
              />
              <select className="w-full px-4 py-2 md:py-3 bg-white text-[#545454] rounded-lg border border-[#E1E1E1] focus:ring-2 focus:ring-[#545454] outline-none">
                <option>Select Type</option>
                <option>Navigation</option>
                <option>Form Elements</option>
                <option>Cards & Containers</option>
                <option>Interactive Elements</option>
              </select>
              <button className="w-full px-6 py-3 bg-[#464646] text-[#ECECEC] rounded-lg hover:bg-[#545454] transition duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-center text-[#545454] mt-3 md:mt-4">
              Get early access to new components and updates.
            </p>

            <div className="mt-6 md:mt-8 p-3 md:p-5 bg-[#F7F7F7] rounded-lg border border-[#E1E1E1]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#545454]"></div>
                <div>
                  <p className="text-sm font-semibold text-[#464646]">
                    Alex Morgan
                  </p>
                  <p className="text-xs text-[#545454]">Product Designer</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#545454] italic">
                "These components saved us weeks of development time. Absolutely
                worth every penny."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-10 right-10 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 bg-[#545454] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-[#464646] rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
}
