import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-950 via-blue-800 to-blue-500 text-white px-5 py-5 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold mask-l-to-fuchsia-600">Chocoui</div>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-white mb-1 rounded transition-all duration-300" />
          <div className="w-6 h-1 bg-white mb-1 rounded transition-all duration-300" />
          <div className="w-6 h-1 bg-white rounded transition-all duration-300" />
        </button>
        <ul className="hidden md:flex space-x-6 text-xl font-medium">
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Home</li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">About</li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Services</li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Contact</li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-xl font-medium">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}
