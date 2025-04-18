import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
    { name: "Home", path: "/" },
    { name: "Components", path: "/dashboard/accordion" },
    { name: "Docs", path: "/docs" },
    { name: "Feedback", path: "/feedback" },
    { name: "Template", path: "https://template.chocoui.live", external: true },
  ];

  return (
    <>
      {/* Floating Navbar with gap above */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-6xl z-50 transition-all duration-300 rounded-4xl mt-7  ${
          scrolled
            ? "bg-white/60 backdrop-blur-lg shadow-lg border border-gray-200/80 mt-[-10px] "
            : "bg-white/60 backdrop-blur-md shadow-md border border-gray-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Simplified */}
            <NavLink to="/" className="flex items-center group">
              <img
                src="/3.png"
                alt="ChocoUi Logo"
                className="h-18 hover:scale-105 transition-transform duration-300"
              />
            </NavLink>

            {/* Desktop Menu - Minimalist */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) =>
                item.external ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={({ isActive }) =>
                      `text-sm font-['Inter'] font-medium transition-all duration-200 relative ${
                        isActive
                          ? "text-[#060606] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#603F26]"
                          : "text-gray-700 hover:text-[#060606] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#603F26] hover:after:w-full after:transition-all after:duration-300"
                      }`
                    }
                  >
                    {item.name}
                  </Link>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-['Inter'] font-medium transition-all duration-200 relative ${
                        isActive
                          ? "text-[#060606] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#603F26]"
                          : "text-gray-700 hover:text-[#060606] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#603F26] hover:after:w-full after:transition-all after:duration-300"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}
              <button className="px-5 py-2 bg-[#603F26] text-[#FFDBB5] rounded-3xl font-['Inter'] text-sm font-medium hover:bg-[#6C4E31] transition-all duration-300 shadow-sm hover:shadow-md">
                Github
              </button>
            </div>

            {/* Mobile Menu Button - Minimal */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu - Minimalist */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-2xl transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <NavLink to="/" className="flex items-center group">
              <img
                src="/3.png"
                alt="ChocoUi Logo"
                className="h-18 hover:scale-105 transition-transform duration-300"
              />
            </NavLink>
            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm rounded-lg text-gray-700 hover:bg-gray-100 hover:text-[#603F26]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-[#FFDBB5] text-[#603F26] font-medium"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[#603F26]"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          <button className="mt-8 w-full py-2.5 bg-[#603F26] text-[#FFDBB5] rounded-lg text-sm font-medium hover:bg-[#6C4E31] transition-all duration-300">
            Github
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
