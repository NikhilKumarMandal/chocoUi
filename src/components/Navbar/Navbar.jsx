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
    { name: "Docs", path: "/docs" },
    { name: "Components", path: "/dashboard/accordion" },
    { name: "Feedback", path: "/feedback" },
    {
      name: "Templates",
      path: "https://template.chocoui.live",
      external: true,
      special: true,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-6xl z-50 transition-all duration-300 rounded-4xl ${
          scrolled
            ? "bg-white/60 backdrop-blur-lg shadow-lg border border-gray-200/80 mt-[-10px]"
            : "bg-white/60 backdrop-blur-md shadow-md border border-gray-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <NavLink to="/" className="flex items-center group">
              <img
                src="/3.png"
                alt="ChocoUi Logo"
                className="h-18 hover:scale-105 transition-transform duration-300"
              />
            </NavLink>

            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) =>
                item.external ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-['Inter'] font-medium transition-all duration-200 relative flex items-center gap-1 ${
                      item.special
                        ? "border border-[#603F26]/80 text-[#603F26] hover:bg-[#FFDBB5]/20 px-3 py-1.5 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[#FFDBB5]/30 hover:border-[#603F26] hover:scale-[1.02]"
                        : "text-gray-700 hover:text-[#060606] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#603F26] hover:after:w-full after:transition-all after:duration-300"
                    }`}
                  >
                    {item.name}
                    {item.special && (
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    )}
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
              <a
                href="https://github.com/NikhilKumarMandal/chocoUi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#603F26] text-[#FFDBB5] rounded-3xl font-['Inter'] text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:opacity-80"
                // disabled
              >
                Github
              </a>
            </div>

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

      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

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
                  className={`flex items-center justify-between px-4 py-3 text-sm rounded-lg transition-all duration-300 ${
                    item.special
                      ? "text-[#603F26] bg-[#FFDBB5]/20 border border-[#FFDBB5] hover:border-[#603F26]/50"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#603F26]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {item.special && (
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  )}
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

          <a
            href="https://github.com/NikhilKumarMandal/chocoUi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-2.5 bg-[#603F26] text-[#FFDBB5] rounded-lg text-sm font-medium transition-all duration-300 hover:opacity-80"
            // disabled
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
