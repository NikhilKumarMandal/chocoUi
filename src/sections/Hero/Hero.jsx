import { Link } from "react-router-dom";
import PreviewComponent from "../../components/PreviewCom/PreviewComponent";
import { motion } from "framer-motion";
import Blob3D from "../../components/Blob3D";

const Hero = () => {
    
  return (
    <section data-scroll data-scroll-speed=".2" className="relative py-30 overflow-hidden bg-gradient-to-br from-[#FFEAC5] via-[#FFDBB5] to-[#f8c794] md:py-30 lg:py-32">
      {/* Background Blob */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-100">
          <Blob3D 
            color="rgb(212, 118, 46)"
            speed={0.8}
            distort={0.5}
            radius={2}
            width="100%"
            height="100%"
          />
        </div>
        <div className="absolute -bottom-1/4 left-2/3 w-[600px] h-[600px] opacity-90">
          <Blob3D 
            color="#603F26"
            speed={1.2}
            distort={0.4}
            radius={2}
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-2 sm:px-6">
        {/* Left Content - Enhanced with 3D effects */}
        <div className="flex flex-col justify-center max-w-2xl relative">
          {/* Floating badge with glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 self-start"
          >
            <span className="inline-flex items-center px-4 py-1.5 text-sm font-bold tracking-wider text-[#603F26] bg-[#FFDBB5] rounded-full shadow-lg border border-[#FFEAC5] hover:shadow-[0_0_15px_rgba(247,55,79,0.3)] transition-all duration-500 group">
              <span className="relative">
                New Components v2.0
                <span className="absolute -bottom-1 left-0 h-0.5 bg-[#F7374F] w-0 group-hover:w-full transition-all duration-700"></span>
              </span>
              <span className="ml-2 w-2 h-2 rounded-full bg-[#F7374F] animate-pulse shadow-[0_0_8px_#F7374F]"></span>
            </span>
          </motion.div>

          {/* Headline with text shadow */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-medium tracking-tighter text-[#452213] md:text-5xl lg:text-5xl [text-shadow:_1px_1px_0_rgb(255_234_197_/_80%)] mix-blend-multiply"
          >
            <span className="font-['dotine'] font-bold text-6xl">Beautiful <span className="relative">
              <span className="relative z-10 text-6xl font-bold">UI components</span>
              <span className="absolute bottom-0 left-0 h-2 -z-10 transform -rotate-1"></span>
            </span>,</span> 
            <br /><span className="font-['dotine'] font-bold">crafted with</span> <span className="relative font-light">
              <span className="relative z-10 font-['dotine'] font-bold text-7xl">care</span>
              <motion.span 
                initial={{ width: "0%", x: 0 }}
                animate={{ 
                  width: "100%",
                  x: [0, 5, -5, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  width: { duration: 0.5 },
                  x: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute bottom-0 left-0 h-2 bg-[#452213]/90 -z-10 transform origin-left"
              ></motion.span>
            </span>
          </motion.h1>

          {/* Description with animated border */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-lg text-[#6C4E31]/90 relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#F7374F] before:to-[#6C4E31] before:rounded-full before:hover:h-3/4 before:hover:top-[12%] before:transition-all before:duration-500 mix-blend-multiply"
          >
            A professionally designed, fully responsive UI component library for React applications. 
            Build beautiful interfaces without starting from scratch.
          </motion.p>

          {/* Buttons with 3D effect */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/dashboard"
                className="relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-[#FFEAC5] bg-[#603F26] rounded-xl hover:bg-[#6C4E31] transition-all duration-300 shadow-[0_8px_0_#522546] hover:shadow-[0_4px_0_#522546] transform hover:-translate-y-1 active:translate-y-0 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-2 z-10 transition-transform group-hover:translate-x-1 group-hover:scale-110"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F7374F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-[#603F26] bg-white rounded-xl hover:bg-[#FFEAC5] transition-all duration-300 shadow-[0_8px_0_#d1d5db] hover:shadow-[0_4px_0_#d1d5db] transform hover:-translate-y-1 active:translate-y-0 group overflow-hidden border-2 border-[#6C4E31]/20"
              >
                <span className="relative z-10 flex items-center">
                  View on GitHub
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2 z-10 transition-transform group-hover:translate-x-1 group-hover:scale-110"
                  >
                    <path
                      d="M15 3L21 3.00002M21 3.00002L21 9M21 3.00002L13 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#6C4E31]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Floating 3D Preview Component */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, rotateY: 15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[#F7374F]/20 rounded-2xl blur-xl opacity-70 -z-10"></div>
          <div className="absolute -inset-2 bg-[#6C4E31]/20 rounded-xl blur-md opacity-50 -z-10"></div>
          
          <PreviewComponent 
            title="Live Preview" 
            code={`<YourComponent />`} 
            language="jsx"
            className="relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-[#6C4E31]/10 shadow-inner overflow-hidden relative">
              {/* Floating elements in preview */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F7374F]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#6C4E31]/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#FFDBB5] to-[#F7374F]/30 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(247,55,79,0.3)] animate-float">
                  <svg className="w-10 h-10 text-[#603F26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#603F26] mb-2">Component Preview</h3>
                <p className="text-[#6C4E31]/90">Experience the elegance of ChocoUI</p>
                
                {/* Animated dots */}
                <div className="flex mt-6 space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-[#603F26]/30 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </PreviewComponent>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;