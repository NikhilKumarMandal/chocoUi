import { useState, useEffect } from "react";
import { Introduction } from "./sections/Introduction";
import { Installation } from "./sections/Installation";
import { Usage } from "./sections/Usage";
import { SidebarLink } from "./components/SidebarLink";
import { motion } from "framer-motion";
import { Sparkles } from "../floats/sparkles";

export const Documentation = () => {
  const [activeTab, setActiveTab] = useState("introduction");
  const [isLastSection, setIsLastSection] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const sections = ["introduction", "installation", "usage", "theming"];
      const scrollPosition = window.scrollY + 100; // Add some offset

      const lastSection = document.getElementById("theming");
      if (lastSection) {
        const lastSectionBottom =
          lastSection.offsetTop + lastSection.offsetHeight;
        const viewportHeight = window.innerHeight;
        setIsLastSection(scrollPosition + viewportHeight >= lastSectionBottom);
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#fcedd2]/30 to-white overflow-hidden">
      <Sparkles
        density={200}
        speed={1}
        size={2}
        direction="top"
        opacitySpeed={1.5}
        color="#603F26"
        className="absolute inset-x-0 bottom-0 h-full w-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <nav className="lg:w-60 flex-shrink-0 fixed top-24 self-start hidden lg:block">
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-[#FFDBB5]/20 lg:mr-8 transform transition-all duration-300 hover:shadow-md">
              {/* Navigation Links */}
              <div className="space-y-2">
                <SidebarLink
                  active={activeTab === "introduction"}
                  onClick={() => scrollToSection("introduction")}
                >
                  Introduction
                </SidebarLink>
                <SidebarLink
                  active={activeTab === "installation"}
                  onClick={() => scrollToSection("installation")}
                >
                  Installation
                </SidebarLink>
                <SidebarLink
                  active={activeTab === "usage"}
                  onClick={() => scrollToSection("usage")}
                >
                  Components Guide
                </SidebarLink>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 lg:ml-[50vh] space-y-16 pb-24">
            {/* Introduction Section */}
            <motion.section
              id="introduction"
              className="scroll-mt-24 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#FFDBB5]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Introduction />
            </motion.section>

            {/* Installation Section */}
            <motion.section
              id="installation"
              className="scroll-mt-24 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#FFDBB5]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Installation />
            </motion.section>

            {/* Usage Section */}
            <motion.section
              id="usage"
              className="scroll-mt-24 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#FFDBB5]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Usage />
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
};
