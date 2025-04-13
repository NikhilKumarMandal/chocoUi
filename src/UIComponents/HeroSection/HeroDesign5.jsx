import React from 'react';

const HeroDesign5 = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center fixed inset-0 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
          Buy and Sell AI Prompts<br />
          Securely on the<br />
          Blockchain
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Discover high-quality AI prompts, sell your own creations, and join a thriving
          community of prompt engineers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-300">
            Browse Prompts
          </button>
          <button className="px-6 py-3 text-base font-medium text-gray-900 bg-white hover:bg-gray-50 rounded-full border border-gray-200 transition-colors duration-300">
            Sell Prompts
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroDesign5;
