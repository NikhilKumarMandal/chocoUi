// import { useState, useEffect } from "react";
// import { Introduction } from "./sections/Introduction";
// import { Installation } from "./sections/Installation";
// import { Usage } from "./sections/Usage";
// import { SidebarLink } from "./components/SidebarLink";
// import { motion } from "framer-motion";
// import { Sparkles } from "../floats/sparkles";

// export const Documentation = () => {
//   const [activeTab, setActiveTab] = useState("introduction");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const handleScroll = () => {
//       const sections = ["introduction", "installation", "usage", "theming"];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveTab(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative min-h-screen mt-[-60px] bg-gradient-to-b from-white via-[#fcedd2] to-white overflow-hidden">
//       <Sparkles
//         density={200}
//         speed={1}
//         size={2}
//         direction="top"
//         opacitySpeed={1.5}
//         color="#603F26"
//         className="absolute inset-x-0 bottom-0 h-full w-full"
//       />

//       <div className="max-w-7xl mx-auto px-4 py-8 pt-35 relative z-10">
//         <motion.header
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-16 text-center"
//         ></motion.header>

//         <div className="relative">
//           {/* Fixed Sidebar */}
//           <nav className="hidden md:block fixed top-19 left-4 w-60 z-20">
//             <div className="space-y-2 bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#FFDBB5]">
//               <h3 className="text-[#603F26] font-semibold mb-4 font-['Bricolage']">
//                 Contents
//               </h3>
//               <SidebarLink
//                 active={activeTab === "introduction"}
//                 onClick={() => scrollToSection("introduction")}
//               >
//                 Introduction
//               </SidebarLink>
//               <SidebarLink
//                 active={activeTab === "installation"}
//                 onClick={() => scrollToSection("installation")}
//               >
//                 Installation
//               </SidebarLink>
//               <SidebarLink
//                 active={activeTab === "usage"}
//                 onClick={() => scrollToSection("usage")}
//               >
//                 Basic Usage
//               </SidebarLink>
//             </div>
//           </nav>

//           <main className="md:ml-72  space-y-24 pb-10">
//             <motion.section
//               id="introduction"
//               className="scroll-mt-24"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <Introduction />
//             </motion.section>

//             <motion.section
//               id="installation"
//               className="scroll-mt-24"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Installation />
//             </motion.section>

//             <motion.section
//               id="usage"
//               className="scroll-mt-24"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Usage />
//             </motion.section>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { Introduction } from "./sections/Introduction";
import { Installation } from "./sections/Installation";
import { Usage } from "./sections/Usage";
import { SidebarLink } from "./components/SidebarLink";
import { motion } from "framer-motion";
import { Sparkles } from "../floats/sparkles";

export const Documentation = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#fcedd2] to-white overflow-hidden">
      <Sparkles
        density={200}
        speed={1}
        size={2}
        direction="top"
        opacitySpeed={1.5}
        color="#603F26"
        className="absolute inset-x-0 bottom-0 h-full w-full"
      />

      <div className="max-w-7xl mx-auto px-4 py-8 pt-35 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <nav className="fixed md:w-64 flex-shrink-0">
            <div className="top-32 space-y-2 bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#FFDBB5]">
              <h3 className="text-[#603F26] font-semibold mb-4 font-['Bricolage']">
                Contents
              </h3>
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
            </div>
          </nav>

          <main className="flex-1 ml-[50vh] space-y-24 pb-24">
            <motion.section
              id="introduction"
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Introduction />
            </motion.section>

            <motion.section
              id="installation"
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Installation />
            </motion.section>

            <motion.section
              id="usage"
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Usage />
            </motion.section>
            <motion.section
              id="theming"
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.section>
          </main>
        </div>
      </div>
    </div>
  );
};
