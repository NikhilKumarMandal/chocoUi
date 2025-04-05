import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Navbar", path: "/dashboard/navbar" },
    { name: "Footer", path: "/dashboard/footer" },
    { name: "Cards", path: "/dashboard/card" },
    { name: "Bento", path: "/dashboard/bento" },
  ];

  return (
    <>
      {/* Sidebar - Desktop */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-[#FFEAC5]/90 border-r border-[#6C4E31]/20 shadow-lg z-40 p-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#603F26] flex items-center">
            ChocoUI
            <span className="w-2 h-2 ml-2 rounded-full bg-[#6C4E31]" />
          </h2>
        </div>
        <nav className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-[#FFDBB5] text-[#603F26] shadow-inner"
                  : "text-[#6C4E31] hover:bg-[#FFDBB5]/50 hover:text-[#603F26]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-3 rounded-xl bg-[#FFEAC5] shadow-lg text-[#603F26] hover:bg-[#FFDBB5] transition-all"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Overlay - Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Slide-in - Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#FFEAC5] shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold text-[#603F26]">ChocoUI</h2>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-[#603F26] text-[#FFEAC5] hover:bg-[#6C4E31]"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-3 px-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleSidebar}
              className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                location.pathname === link.path
                  ? "bg-[#FFDBB5] text-[#603F26]"
                  : "text-[#6C4E31] hover:bg-[#FFDBB5]/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
