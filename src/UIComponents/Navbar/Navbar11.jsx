import React from "react";

const Navbar11 = () => {
  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="#" className="text-indigo-600 text-xl font-bold">
                  Brand
                </a>
              </div>
              <nav className="flex items-center space-x-1 sm:space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar11;
