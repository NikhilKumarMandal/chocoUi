import React, { useState } from "react";

const Navbar12 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider inline-block pb-1 hover:border-b hover:border-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider inline-block pb-1 hover:border-b hover:border-gray-900"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider inline-block pb-1 hover:border-b hover:border-gray-900"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider inline-block pb-1 hover:border-b hover:border-gray-900"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider inline-block pb-1 hover:border-b hover:border-gray-900"
              >
                Work
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider inline-block pb-1 hover:border-b hover:border-gray-900"
              >
                Sign Up
              </a>
            </nav>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
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
          <div className="px-4 pt-2 pb-4 space-y-2 sm:px-6 bg-white shadow-lg">
            <a
              href="#"
              className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
            >
              <span className="inline-block pb-1 hover:border-b hover:border-gray-900">Home</span>
            </a>
            <a
              href="#"
              className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
            >
              <span className="inline-block pb-1 hover:border-b hover:border-gray-900">About</span>
            </a>
            <a
              href="#"
              className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
            >
              <span className="inline-block pb-1 hover:border-b hover:border-gray-900">Services</span>
            </a>
            <a
              href="#"
              className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
            >
              <span className="inline-block pb-1 hover:border-b hover:border-gray-900">Contact</span>
            </a>
            <a
              href="#"
              className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
            >
              <span className="inline-block pb-1 hover:border-b hover:border-gray-900">Work</span>
            </a>
            <a
              href="#"
              className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
            >
              <span className="inline-block pb-1 hover:border-b hover:border-gray-900">Sign Up</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar12;
