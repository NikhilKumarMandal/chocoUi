import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
  useTransition,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronRight, Menu, X, GripVertical } from "lucide-react";

const linksData = [
  { name: "Accordion", path: "/dashboard/accordion" },
  { name: "Alert", path: "/dashboard/alert" },
  { name: "Avatar", path: "/dashboard/avatar" },
  { name: "Animation", path: "/dashboard/animation" },

  { name: "Bento", path: "/dashboard/bento" },
  { name: "Breadcrumb", path: "/dashboard/breadcrumb" },
  { name: "Badge", path: "/dashboard/badge" },
  { name: "Button", path: "/dashboard/button" },

  { name: "Card", path: "/dashboard/card" },
  { name: "Calendar", path: "/dashboard/calendar" },
  { name: "Checkbox", path: "/dashboard/checkbox" },
  { name: "Carousel", path: "/dashboard/carousel" },
  { name: "CTA", path: "/dashboard/cta" },

  { name: "Dropdown", path: "/dashboard/dropdown" },

  { name: "File Upload", path: "/dashboard/fileupload" },
  { name: "Feedback Alert", path: "/dashboard/feedbackalert" },
  { name: "Form", path: "/dashboard/form" },
  { name: "Footer", path: "/dashboard/footer" },

  { name: "Input", path: "/dashboard/input" },
  { name: "Loader", path: "/dashboard/loader" },
  { name: "Modal", path: "/dashboard/modal" },
  { name: "Navbar", path: "/dashboard/navbar" },

  { name: "Pagination", path: "/dashboard/pagination" },
  { name: "Popover", path: "/dashboard/popover" },
  { name: "Progress Bar", path: "/dashboard/progressbar" },
  { name: "Password", path: "/dashboard/password" },
  { name: "Pricing Card", path: "/dashboard/pricing" },

  { name: "Review", path: "/dashboard/review" },

  { name: "Skeleton", path: "/dashboard/skeleton" },
  { name: "Stepper", path: "/dashboard/stepper" },
  { name: "Store Buttons", path: "/dashboard/storebuttons" },

  { name: "Toggle", path: "/dashboard/toggle" },
  { name: "Table", path: "/dashboard/table" },
  { name: "TextArea", path: "/dashboard/textArea" },
  { name: "Tabs", path: "/dashboard/tabs" },
  // { name: "Tooltip", path: "/dashboard/tooltip" },
];

const LeftSidebar = () => {
  const location = useLocation();
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [_, startTransition] = useTransition();

  // Resize Handler
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    const scrollTop = scrollRef.current?.scrollTop || 0;
    setIsOpen(false);

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollTop;
      }
    }, 50);
  }, []);

  const filteredLinks = useMemo(() => {
    return linksData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const SearchInput = useMemo(
    () => (
      <div className="relative mb-4 font-['Inter']">
        <input
          type="text"
          placeholder="Search components..."
          value={searchTerm}
          onChange={(e) => {
            const value = e.target.value;
            startTransition(() => setSearchTerm(value));
          }}
          className="w-full pl-9 pr-3 py-2 text-sm bg-white/50 backdrop-blur-sm border border-gray-200/60 rounded-lg focus:ring-2 focus:ring-[#603F26] focus:border-[#603F26] outline-none text-[#1E1E2C] placeholder-gray-500/70 transition-all"
          autoFocus
        />
        <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500/70" />
      </div>
    ),
    [searchTerm]
  );

  const SidebarContent = useMemo(
    () => (
      <div className="space-y-6 relative z-10 h-full flex flex-col  px-3 py-2">
        <div className="flex-grow mt-15">
          <div className="flex items-center justify-between mb-2 px-2">
            <h2 className="text-xs font-semibold text-gray-600/90 uppercase tracking-wider font-['Inter']">
              Components
            </h2>
            <span className="bg-[#6c4e31] text-[#ffdbb5] font-bold text-xs px-2 py-0.5 rounded-full shadow-sm">
              {filteredLinks.length}
            </span>
          </div>

          {SearchInput}

          <div
            ref={scrollRef}
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
    ),
    [filteredLinks, handleLinkClick, location.pathname, SearchInput]
  );

  const MobileToggleButton = useMemo(
    () => (
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed left-0 top-1/2 z-50 flex items-center justify-center bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200/80 rounded-r-lg md:hidden transition-all hover:bg-white/90"
        style={{
          width: "40px",
          height: "80px",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col items-center text-[#1E1E2C]">
          <GripVertical size={16} className="mb-1 opacity-70" />
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </div>
      </button>
    ),
    [isOpen]
  );

  return (
    <>
      {MobileToggleButton}

      {/* Desktop Sidebar */}
      <aside
        className="w-64 bg-white/60 backdrop-blur-lg shadow-xl border-r border-gray-200/80 p-5 hidden md:block relative"
        style={{
          height: `${windowHeight}px`,
          position: "sticky",
          top: 0,
        }}
      >
        {SidebarContent}
      </aside>

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
            {SidebarContent}
          </aside>
        </>
      )}
    </>
  );
};

export default LeftSidebar;
