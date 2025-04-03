import React from "react";

const Navbar7 = () => {
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
            <nav className="flex items-center space-x-4 sm:space-x-8">
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
                className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Sign Up
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar7;
