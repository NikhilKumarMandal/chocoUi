import React from 'react';

const MinimalLanding = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
        <div className="inline-flex items-center justify-between mb-8 py-1 px-4 pr-5 text-sm text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-300">
          <span className="text-xs bg-indigo-600 rounded-full text-white px-3 py-1 mr-3">New</span>
          <span className="text-sm font-medium">ChocoUi is now live for developers!</span>
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Build beautiful interfaces with <span className="text-indigo-600 dark:text-indigo-400">ChocoUi</span>
        </h1>

        <p className="mb-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          ChocoUi is a modern component library designed to help developers build elegant, responsive UIs faster. 
          Crafted for performance and simplicity, it takes care of design so you can focus on code.
        </p>

        <div className="flex flex-col mb-12 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 transition-colors duration-300">
            Get started
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-colors duration-300">
            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch demo
          </a>  
        </div>

        <div className="mt-16 grid gap-8 grid-cols-2 md:grid-cols-4">
          {[
            { value: "1K+", label: "Components available" },
            { value: "99.9%", label: "Developer satisfaction" },
            { value: "10K+", label: "Projects powered" },
            { value: "Open", label: "MIT licensed" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
};

export default MinimalLanding;
