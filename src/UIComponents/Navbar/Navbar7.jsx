import React, { useState } from "react";

const Navbar7 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-white text-xl font-bold">
                Brand
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-4 sm:space-x-8">
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Work
              </a>
              <a
                href="#"
                className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors ml-2"
              >
                Sign Up
              </a>
            </nav>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-purple-700"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-purple-700"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-purple-700"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-purple-700"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-purple-700"
            >
              Work
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium bg-white text-purple-600 hover:bg-gray-100 w-24 text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar7;
