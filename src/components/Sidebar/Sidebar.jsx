import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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
      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col fixed top-0 left-0 h-full w-64 bg-[#FFEAC5]/90 border-r border-[#6C4E31]/20 shadow-lg z-40 p-6">
        <form onSubmit={handleSearch} className="mb-6 mt-20">
          <input
            type="text"
            placeholder="Search page..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6C4E31]"
          />
        </form>

        <nav className="flex-1 overflow-y-auto space-y-2 py-2 scrollbar-hide">
          {renderLinks()}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
