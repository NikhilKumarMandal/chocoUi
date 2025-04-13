import React from 'react';

const HeroSection2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full mb-6">
                New Feature
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="block">Build Better</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Digital Products
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Create stunning digital experiences with our powerful platform.
                Start building today and bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800/50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  </div>
                  <div className="text-sm text-gray-400">Dashboard</div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Active Users', value: '2,543' },
                    { label: 'Revenue', value: '$12,345' },
                    { label: 'Conversion', value: '3.2%' },
                    { label: 'Growth', value: '+12.5%' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                      <div className="text-xl font-semibold text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="h-48 bg-gray-700/30 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400">Chart Preview</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2; 