import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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
    { name: "Hero", path: "/dashboard/hero" },
    { name: "Avatar", path: "/dashboard/avatar" },
    { name: "Breadcrumb", path: "/dashboard/breadcrumb" },
    { name: "Calendar", path: "/dashboard/calendar" },
    { name: "Form", path: "/dashboard/form" },
    { name: "Pricing", path: "/dashboard/pricing" },
    { name: "Skeleton", path: "/dashboard/skeleton" },
    { name: "Table", path: "/dashboard/table" },
    { name: "Toggle", path: "/dashboard/toggle" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const match = links.find(
      (link) => link.name.toLowerCase() === query.toLowerCase()
    );
    if (match) {
      navigate(match.path);
      setQuery("");
      setIsOpen(false);
    } else {
      alert("No matching page found.");
    }
  };

  const renderLinks = () =>
    links.map((link) => (
      <Link
        key={link.name}
        to={link.path}
        onClick={() => setIsOpen(false)}
        className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
          location.pathname === link.path
            ? "bg-[#FFDBB5] text-[#603F26] shadow-inner"
            : "text-[#6C4E31] hover:bg-[#FFDBB5]/50 hover:text-[#603F26]"
        }`}
      >
        {link.name}
      </Link>
    ));

  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-[#FFEAC5]/90 border-r border-[#6C4E31]/20 shadow-lg z-40 p-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#603F26] flex items-center">
            ChocoUI
            <span className="w-2 h-2 ml-2 rounded-full bg-[#6C4E31]" />
          </h2>
        </div>

        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            placeholder="Search page..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C4E31]"
          />
        </form>

        <nav className="space-y-2">{renderLinks()}</nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-3 rounded-xl bg-[#FFEAC5] shadow-lg text-[#603F26] hover:bg-[#FFDBB5] transition-all"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
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

        <form onSubmit={handleSearch} className="px-6 mb-4">
          <input
            type="text"
            placeholder="Search page..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C4E31]"
          />
        </form>

        <nav className="space-y-3 px-6">{renderLinks()}</nav>
      </div>
    </>
  );
}

export default Sidebar;
