import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">ChocoUI</h1>

        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Deliciously Crafted UI Components
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          ChocoUi is your sweet spot for minimal, modern, and developer-friendly UI components. 
          Build stunning interfaces effortlessly with our plug-and-play design system.
        </p>

        <div className="mb-10">
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
            Explore the component library
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
            Get Started →
          </button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <div className="mb-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Loved by developers</p>
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Trusted by 5K+ frontend engineers worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
