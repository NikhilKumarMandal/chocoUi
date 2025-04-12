import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftSidebar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const links = [
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
  ];

  const filteredLinks = links.filter((link) =>
    link.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="flex items-center justify-between mb-3 px-2">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Components
            </h2>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {filteredLinks.length}
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
            {filteredLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
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
            {filteredLinks.length === 0 && (
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
