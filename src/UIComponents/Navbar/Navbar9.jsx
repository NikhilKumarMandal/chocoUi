import React from "react";

const Navbar9 = () => {
  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-blue-400 text-xl font-bold">
                Brand
              </a>
            </div>
            <nav className="flex items-center space-x-4 sm:space-x-8">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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

export default Navbar9;
