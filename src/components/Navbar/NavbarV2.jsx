import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavbarV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/docs" },
    { name: "Components", path: "/dashboard" },
    { name: "Feedback", path: "/feedback" },
    { name: "Template", path: "https://template.chocoui.live", external: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/60 backdrop-blur-lg shadow-lg border border-gray-200/80"
            : "bg-white/60 backdrop-blur-md shadow-md border border-gray-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLink
              to="/"
              className="flex items-center group"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="/3.png"
                alt="ChocoUI Logo"
                className="h-18 hover:scale-105 transition-transform duration-300"
              />
            </NavLink>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-['Inter'] font-medium transition-all duration-200 relative ${
                      isActive
                        ? "text-[#060606] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#603F26] "
                        : "text-gray-700 hover:text-[#060606] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#603F26] hover:after:w-full after:transition-all after:duration-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <button className="px-5 py-2 bg-[#603F26] text-[#FFDBB5] rounded-3xl font-['Inter'] text-sm font-medium hover:bg-[#6C4E31] transition-all duration-300 shadow-sm hover:shadow-md">
                Github
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#603F26] hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div
            className={`px-2 pt-2 pb-4 space-y-1 sm:px-3 ${!isOpen && "hidden"}`}
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-[#FFDBB5] text-[#603F26]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-[#603F26]"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <button className="mt-8 w-full py-2.5 bg-[#603F26] text-[#FFDBB5] rounded-lg text-sm font-medium hover:bg-[#6C4E31] transition-all duration-300">
              Github
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarV2;
