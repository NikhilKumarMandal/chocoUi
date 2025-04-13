import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Github, Users } from "lucide-react";

const RightSidebar = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resources = [
    {
      name: "GitHub Repository",
      icon: (
        <Github size={16} className="text-gray-700/90 hover:bg-gray-100/70" />
      ),
    },
    {
      name: "Contributing Guide",
      icon: (
        <BookOpen size={16} className="text-gray-700/90 hover:bg-gray-100/70" />
      ),
    },
    {
      name: "Code of Conduct",
      icon: (
        <Users size={16} className="text-gray-700/90 hover:bg-gray-100/70" />
      ),
    },
  ];

  const quickLinks = [
    {
      name: "Installation",
      icon: (
        <BookOpen size={16} className="text-gray-700/90 hover:bg-gray-100/70" />
      ),
    },
    {
      name: "Getting Started",
      icon: (
        <BookOpen size={16} className="text-gray-700/90 hover:bg-gray-100/70" />
      ),
    },
    {
      name: "Customization",
      icon: (
        <BookOpen size={16} className="text-gray-700/90 hover:bg-gray-100/70" />
      ),
    },
    {
      name: "Theming",
      icon: (
        <BookOpen size={16} className="text-gray-700/90 hover:bg-gray-100/70" />
      ),
    },
  ];

  return (
    <aside
      className="w-64 bg-white/60 p-5 border-l border-gray-200/80 shadow-xl hidden lg:block relative"
      style={{ height: `${windowHeight}px`, position: "sticky", top: 0 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#ffdbb5]/5 blur-3xl translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#6c4e31]/10 blur-3xl -translate-x-10 translate-y-10"></div>

      <div className="space-y-6 relative z-10 h-full flex flex-col mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="px-2"
        >
          <h2 className="text-xl font-bold text-gray-600/90 flex items-center font-['Bricolage']">
            Resources
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-2 px-2">
            <h2 className="text-xs font-extrabold text-[#6c4e31] uppercase tracking-wider">
              Quick Links
            </h2>
            <span className="bg-[#6c4e31] text-[#ffdbb5] font-bold text-xs px-2 py-0.5 rounded-full">
              {quickLinks.length}
            </span>
          </div>
          <ul className="space-y-1.5 text-sm">
            {quickLinks.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#"
                  className="flex items-center w-full text-left px-3 py-2 rounded-lg transition-all  duration-200 text-gray-700/90 hover:bg-gray-100/70 "
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
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex-grow"
        >
          <div className="flex items-center justify-between mb-2 px-2">
            <h2 className="text-xs font-bold text-[#6c4e31] uppercase tracking-wider">
              Documentation
            </h2>
            <span className="bg-[#6c4e31] text-[#ffdbb5] font-bold text-xs px-2 py-0.5 rounded-full">
              {resources.length}
            </span>
          </div>

          <div
            className="overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffdbb5]/30 scrollbar-track-transparent"
            style={{ maxHeight: "calc(100vh - 300px)" }}
          >
            <ul className="space-y-1.5 text-sm">
              {resources.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className="flex items-center w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-gray-700/90 hover:bg-gray-100/70"
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
    </aside>
  );
};

export default RightSidebar;
