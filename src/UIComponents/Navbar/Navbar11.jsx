import React, { useState } from "react";

const Navbar11 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

              <nav className="hidden md:flex items-center space-x-1 sm:space-x-4">
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
                  className="px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50"
                >
                  Work
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors ml-2"
                >
                  Get Started
                </a>
              </nav>

              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-4 pt-2 pb-4 space-y-2 sm:px-6 bg-white rounded-b-lg">
              <a
                href="#"
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Work
              </a>
              <div className="pt-2">
                <a
                  href="#"
                  className="block w-32 mx-auto px-4 py-3 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar11;
