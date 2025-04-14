import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronRight, Menu, X, GripVertical } from "lucide-react";

const LeftSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = useMemo(
    () => [
      { name: "Navbar", path: "/dashboard/navbar" },
      { name: "Footer", path: "/dashboard/footer" },
      { name: "Cards", path: "/dashboard/card" },
      { name: "Bento", path: "/dashboard/bento" },
      // { name: "Hero", path: "/dashboard/hero" },
      { name: "Breadcrumb", path: "/dashboard/breadcrumb" },
      { name: "Calendar", path: "/dashboard/calendar" },
      { name: "Form", path: "/dashboard/form" },
      // { name: "Pricing", path: "/dashboard/pricing" },
      { name: "Skeleton", path: "/dashboard/skeleton" },
      // { name: "Table", path: "/dashboard/table" },
      { name: "Toggle", path: "/dashboard/toggle" },
      // { name: "Accordion", path: "/dashboard/accordion" },
      { name: "Animation", path: "/dashboard/animation" },
      { name: "Badge", path: "/dashboard/badge" },
      // { name: "Banner", path: "/dashboard/banner" },
      { name: "Checkbox", path: "/dashboard/checkbox" },
      // { name: "Combobox", path: "/dashboard/combobox" },
      // { name: "CTA", path: "/dashboard/cta" },
      { name: "Dropdown", path: "/dashboard/dropdown" },
      { name: "Input", path: "/dashboard/input" },
      { name: "Loader", path: "/dashboard/loader" },
      // { name: "FileUpload", path: "/dashboard/fileUpload" },
      { name: "Button", path: "/dashboard/button" },
    ],
    []
  );

  const filteredLinks = useMemo(() => {
    return links.filter((component) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, links]);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const MobileToggleButton = () => (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="fixed left-0 top-1/3 z-50 flex items-center justify-center bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200/80 rounded-r-lg md:hidden transition-all hover:bg-white/90"
      style={{
        width: "40px",
        height: "80px",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      }}
      aria-label="Toggle menu"
    >
      <div className="flex flex-col items-center text-[#1E1E2C]">
        <GripVertical size={16} className="mb-1 opacity-70" />
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </div>
    </button>
  );

  const SearchInput = () => (
    <div className="relative mb-4 font-['Inter']">
      <input
        type="text"
        placeholder="Search components..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-9 pr-3 py-2 text-sm bg-white/50 backdrop-blur-sm border border-gray-200/60 rounded-lg focus:ring-2 focus:ring-[#5C5CFF]/80 focus:border-[#5C5CFF]/80 outline-none text-[#1E1E2C] placeholder-gray-500/70 transition-all"
        autoFocus
      />
      <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500/70" />
    </div>
  );

  const SidebarContent = () => (
    <div className="space-y-6 relative z-10 h-full flex flex-col px-3 py-2">
      <div className="flex-grow mt-20">
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-xs font-semibold text-gray-600/90 uppercase tracking-wider font-['Inter']">
            Components
          </h2>
          <span className="bg-[#6c4e31] text-[#ffdbb5] font-bold text-xs px-2 py-0.5 rounded-full shadow-sm">
            {filteredLinks.length}
          </span>
        </div>

        <SearchInput />

        <div
          className="overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300/50 scrollbar-track-transparent"
          style={{ maxHeight: "calc(100vh - 250px)" }}
        >
          <ul className="space-y-1.5 font-['Inter']">
            {filteredLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                    location.pathname === link.path
                      ? "bg-[#6c4e31] text-[#ffdbb5] font-medium shadow-sm"
                      : "text-gray-700/90 hover:bg-gray-100/70"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        location.pathname === link.path
                          ? "rotate-90 text-white/90"
                          : "text-gray-400/80"
                      }`}
                    />
                  </div>
                </Link>
              </li>
            ))}
            {filteredLinks.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-500/80 italic">
                No components found
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <MobileToggleButton />

      {/* Desktop sidebar */}
      <aside
        className="w-64 bg-white/60 backdrop-blur-lg shadow-xl border-r border-gray-200/80 p-5 hidden md:block relative"
        style={{
          height: `${windowHeight}px`,
          position: "sticky",
          top: 0,
        }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={handleLinkClick}
          />
          <aside
            className="fixed top-0 left-0 w-72 max-w-[80%] z-50 bg-white/70 backdrop-blur-xl shadow-2xl border-r border-gray-200/90 p-5 md:hidden overflow-hidden"
            style={{ height: `${windowHeight}px` }}
          >
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
};

export default LeftSidebar;
