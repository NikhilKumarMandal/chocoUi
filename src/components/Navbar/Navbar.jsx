import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full h-16 flex items-center justify-between border-b border-black px-4 md:px-8 lg:px-16 relative">
      {/* Logo */}
      <p className="text-lg font-bold">ChocoUI</p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-10">
        <li>
          <NavLink to="/dashboard" className="text-black hover:underline">
            Components
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs" className="text-black hover:underline">
            Docs
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="text-black hover:underline">
            Examples
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col gap-4 mt-10">
          <li>
            <NavLink
              to="/dashboard"
              className="text-black hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Components
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-black hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-black hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Examples
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
