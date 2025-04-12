import { useState, useEffect } from "react";
import { Introduction } from "./sections/Introduction";
import { Installation } from "./sections/Installation";
import { Usage } from "./sections/Usage";
import { Theming } from "./sections/Theming";
import { SidebarLink } from "./components/SidebarLink";
import { motion } from "framer-motion";

export const Documentation = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", "installation", "usage", "theming"];
      const scrollPosition = window.scrollY + 100; // Add some offset

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
    <div className="min-h-screen bg-gradient-to-br from-[#FFEAC5] via-white to-[#FFDBB5]">
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-[#603F26] font-['Bricolage']">
            ChocoUI Documentation
          </h1>
          <p className="mt-4 text-xl text-[#6C4E31]/80 font-['Inter']">
            Everything you need to build beautiful interfaces
          </p>
        </motion.header>

        <div className="flex flex-col md:flex-row gap-12">
          <nav className="md:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-2">
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
                Basic Usage
              </SidebarLink>
              <SidebarLink
                active={activeTab === "theming"}
                onClick={() => scrollToSection("theming")}
              >
                Theming
              </SidebarLink>
            </div>
          </nav>

          <main className="flex-1 space-y-24 pb-24">
            <section id="introduction" className="scroll-mt-24">
              <Introduction />
            </section>
            <section id="installation" className="scroll-mt-24">
              <Installation />
            </section>
            <section id="usage" className="scroll-mt-24">
              <Usage />
            </section>
            <section id="theming" className="scroll-mt-24">
              <Theming />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
