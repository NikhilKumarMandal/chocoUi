import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Components", path: "/dashboard/navbar" },
    { name: "Documentation", path: "/documentation" },
    { name: "Examples", path: "/examples" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-[#FFEAC5]/60 via-[#FFDBB5]/60 to-[#f8c794]/60 backdrop-blur-lg shadow-lg"
          : "bg-gradient-to-r from-[#FFEAC5]/80 via-[#FFDBB5]/80 to-[#f8c794]/80"
      } border-b border-[#6C4E31]/10`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="relative h-20 md:h-24 w-auto group">
            <img
              src="/3.png"
              alt="ChocoUI Logo"
              className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-all duration-300 relative ${
                    isActive
                      ? "text-[#603F26] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#603F26]"
                      : "text-[#6C4E31] hover:text-[#603F26] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#603F26] hover:after:w-full after:transition-all after:duration-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#603F26] to-[#6C4E31] text-[#FFEAC5] rounded-lg font-bold hover:shadow-lg hover:shadow-[#603F26]/20 transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-lg bg-gradient-to-br from-[#FFDBB5] to-[#f8c794] text-[#603F26] hover:shadow-md transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#603F26]/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-gradient-to-br from-[#FFEAC5] via-[#FFDBB5] to-[#f8c794] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } border-r border-[#6C4E31]/10`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="relative h-16 w-auto group">
              <img
                src="/3.png"
                alt="ChocoUI Logo"
                className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
              />
            </div>
            <button
              className="p-2.5 rounded-lg bg-gradient-to-r from-[#603F26] to-[#6C4E31] text-[#FFEAC5] hover:shadow-md transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="space-y-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 text-lg rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#FFDBB5] to-[#f8c794] text-[#603F26] font-medium shadow-md"
                      : "text-[#6C4E31] hover:bg-[#FFDBB5]/50 hover:text-[#603F26]"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button className="mt-8 w-full py-3 bg-gradient-to-r from-[#603F26] to-[#6C4E31] text-[#FFEAC5] rounded-lg font-bold hover:shadow-lg hover:shadow-[#603F26]/20 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
