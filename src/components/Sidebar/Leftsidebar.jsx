import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredlinks = links.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="w-72 bg-white p-6 border-r border-gray-200 shadow-sm h-screen overflow-y-auto hidden md:block">
      <div className="space-y-8">
        <div className="px-2">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-blue-600"
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

        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Docs
          </h2>
          <ul className="space-y-1">
            {[
              { id: "introduction", name: "Introduction" },
              { id: "terminology", name: "Terminology" },
              { id: "faq", name: "FAQ" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3 px-2">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Components
            </h2>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {filteredlinks.length}
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full mb-2 px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <ul className="space-y-1">
            {filteredlinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md transition-colors text-sm ${
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {filteredlinks.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-400 italic">
                No matches found.
              </li>
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
