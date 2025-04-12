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
      { name: "Accordion", path: "/dashboard/accordion" },
      { name: "Animation", path: "/dashboard/animation" },
      { name: "Badge", path: "/dashboard/badge" },
      { name: "Banner", path: "/dashboard/banner" },
      { name: "Checkbox", path: "/dashboard/checkbox" },
      { name: "Combobox", path: "/dashboard/combobox" },
      { name: "CTA", path: "/dashboard/cta" },
      { name: "Dropdown", path: "/dashboard/dropdown" },
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
      className="fixed left-0 top-1/3 z-50 flex items-center justify-center bg-gradient-to-r from-[#2A1B10] to-[#3C2613] text-[#FFDBB5] shadow-lg rounded-r-lg border border-[#FFDBB5]/20 md:hidden"
      style={{
        width: "40px",
        height: "80px",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      }}
      aria-label="Toggle menu"
    >
      <div className="flex flex-col items-center">
        <GripVertical size={16} className="mb-1 text-[#FFDBB5]/60" />
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </div>
    </button>
  );

  const SearchInput = () => (
    <div className="relative mb-3 font-['Inter']">
      <input
        key="search-input"
        autoFocus={isOpen}
        type="text"
        placeholder="Search components..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-9 pr-3 py-1.5 text-sm bg-[#2A1B10]/50 border border-[#FFDBB5]/20 rounded-md focus:ring-2 focus:ring-[#FFDBB5]/30 focus:border-[#FFDBB5]/30 outline-none text-[#FFDBB5] placeholder-[#FFDBB5]/40"
      />
      <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#FFDBB5]/40" />
    </div>
  );

  const SidebarContent = () => (
    <div className="space-y-6 relative z-10 h-full flex flex-col px-2">
      <div className="px-2">
        <h2 className="text-xl font-bold text-[#FFDBB5] flex items-center font-['Bricolage']">
          <svg
            className="w-5 h-5 mr-2 text-[#FFDBB5]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          ChocoUI
        </h2>
      </div>

      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-xs font-semibold text-[#FFDBB5]/60 uppercase tracking-wider font-['Inter']">
            Components
          </h2>
          <span className="bg-[#FFDBB5]/10 text-[#FFDBB5] text-xs px-2 py-0.5 rounded-full border border-[#FFDBB5]/20">
            {filteredLinks.length}
          </span>
        </div>

        <SearchInput />

        <div
          className="overflow-y-auto overflow-x-hidden"
          style={{ maxHeight: "calc(100vh - 250px)" }}
        >
          <ul className="space-y-1 font-['Inter']">
            {filteredLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  replace
                  onClick={handleLinkClick}
                  className={`block px-3 py-1.5 rounded-md transition-all duration-300 text-sm ${
                    location.pathname === link.path
                      ? "bg-[#FFDBB5]/10 text-[#FFDBB5] font-medium border border-[#FFDBB5]/20"
                      : "text-[#FFDBB5]/70 hover:bg-[#FFDBB5]/5 hover:text-[#FFDBB5]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                        location.pathname === link.path ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </Link>
              </li>
            ))}
            {filteredLinks.length === 0 && (
              <li className="px-3 py-2 text-sm text-[#FFDBB5]/40 italic">
                No matches found.
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
        className="w-60 bg-gradient-to-br from-[#2A1B10] to-[#3C2613] p-6 border-r border-[#FFDBB5]/10 shadow-lg hidden md:block relative"
        style={{ height: `${windowHeight}px`, position: "sticky", top: 0 }}
      >
        {/* Decorative effects */}
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-[#FFDBB5]/5 blur-3xl -translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#6C4E31]/10 blur-3xl translate-x-10 translate-y-10"></div>
        <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#FFDBB5]/20 to-transparent"></div>
        <div className="absolute right-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#FFDBB5]/15 to-transparent"></div>
        <div className="absolute top-10 right-5 w-24 h-24 border border-[#FFDBB5]/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-5 w-32 h-32 border border-[#FFDBB5]/10 rounded-full opacity-20"></div>
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={handleLinkClick}
          />
          <aside
            className="fixed top-0 left-0 w-4/5 max-w-60 z-50 bg-gradient-to-br from-[#2A1B10] to-[#3C2613] p-6 border-r border-[#FFDBB5]/10 shadow-lg md:hidden overflow-hidden"
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
