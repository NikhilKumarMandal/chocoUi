import React from 'react';

const EcoHero = () => {
  return (
    <section className="bg-[#f9f5f2] dark:bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brown-800 dark:text-amber-300 leading-tight">
              Indulge in Chocolate
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-brown-600 dark:text-amber-100">
              Handcrafted, ethically sourced chocolate made to satisfy your soul. Rich in taste, rooted in sustainability — where every bite tells a story.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition duration-300 shadow-md text-sm sm:text-base">
                Browse Chocolates
              </button>
              <button className="border-2 border-amber-600 text-amber-600 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/30 font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition duration-300 text-sm sm:text-base">
                Our Chocolate Journey
              </button>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-brown-700 dark:text-amber-200">100% Organic Cacao</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-brown-700 dark:text-amber-200">Eco-Friendly Wrapping</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Artisan chocolate bar display"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f9f5f2]/40 to-transparent dark:from-[#1a1a1a]/40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoHero;