import React from "react";

const Navbar12 = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-900 text-xl font-light tracking-wider"
              >
                BRAND
              </a>
            </div>
            <nav className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider border-b border-gray-600 hover:border-gray-900"
              >
                Work
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar12;
