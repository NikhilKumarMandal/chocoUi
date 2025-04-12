import React, { useState, useEffect } from "react";
import { motion , AnimatePresence } from "framer-motion";
import { Search, Menu, X, GripVertical, Github, BookOpen, Users } from "lucide-react";

const RightSidebar = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Update window height on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  // Sidebar content component
  const SidebarContent = () => (
    <div className="space-y-6 relative z-10 h-full flex flex-col px-2">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-2"
      >
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
          Resources
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xs font-semibold text-[#FFDBB5]/60 uppercase tracking-wider mb-2 px-2 font-['Bricolage']">
          Quick Links
        </h2>
        <ul className="space-y-1 text-sm font-['Inter']">
          {[
            { name: "Installation", icon: <BookOpen size={14} /> },
            { name: "Getting Started", icon: <BookOpen size={14} /> },
            { name: "Customization", icon: <BookOpen size={14} /> },
            { name: "Theming", icon: <BookOpen size={14} /> },
          ].map((item) => (
            <motion.li 
              key={item.name}
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#"
                className="flex items-center w-full text-left px-3 py-1.5 rounded-md transition-all duration-300 text-[#FFDBB5]/70 hover:bg-[#FFDBB5]/5 hover:text-[#FFDBB5]"
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-grow"
      >
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-xs font-semibold text-[#FFDBB5]/60 uppercase tracking-wider font-['Inter']">
            Resources
          </h2>
          <span className="bg-[#FFDBB5]/10 text-[#FFDBB5] text-xs px-2 py-0.5 rounded-full border border-[#FFDBB5]/20">
            3
          </span>
        </div>

        <div className="relative mb-3">
          <div className="relative font-['Inter']">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-[#2A1B10]/50 border border-[#FFDBB5]/20 rounded-md focus:ring-2 focus:ring-[#FFDBB5]/30 focus:border-[#FFDBB5]/30 outline-none text-[#FFDBB5] placeholder-[#FFDBB5]/40"
            />
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#FFDBB5]/40" />
          </div>
        </div>

        <div className="overflow-y-auto overflow-x-hidden" style={{ maxHeight: 'calc(100vh - 250px)' }}>
          <ul className="space-y-1 text-sm font-['Inter']">
            {[
              { name: "GitHub Repository", icon: <Github size={14} /> },
              { name: "Contributing Guide", icon: <BookOpen size={14} /> },
              { name: "Code of Conduct", icon: <Users size={14} /> },
            ].map((item) => (
              <motion.li 
                key={item.name}
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#"
                  className="flex items-center w-full text-left px-3 py-1.5 rounded-md transition-all duration-300 text-[#FFDBB5]/70 hover:bg-[#FFDBB5]/5 hover:text-[#FFDBB5]"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );

  return (
    <>

      {/* Desktop sidebar */}
      <aside 
        className="w-60 bg-gradient-to-br from-[#2A1B10] to-[#3C2613] p-6 border-l border-[#FFDBB5]/10 shadow-lg hidden lg:block relative"
        style={{ height: `${windowHeight}px`, position: 'sticky', top: 0 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#FFDBB5]/5 blur-3xl translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#6C4E31]/10 blur-3xl -translate-x-10 translate-y-10"></div>
        
        {/* Decorative line elements */}
        <div className="absolute right-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#FFDBB5]/20 to-transparent"></div>
        <div className="absolute left-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#FFDBB5]/15 to-transparent"></div>

        <SidebarContent />

        {/* Additional decorative elements */}
        <div className="absolute top-10 left-5 w-24 h-24 border border-[#FFDBB5]/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-5 w-32 h-32 border border-[#FFDBB5]/10 rounded-full opacity-20"></div>
      </aside>
    </>
  );
};

export default RightSidebar;
