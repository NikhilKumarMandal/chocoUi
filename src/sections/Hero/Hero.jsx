import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Blob3D from "../../components/Blob3D";
import Card1 from "../../compoForUser/floats/Card1";
import AudioWave from "../../compoForUser/floats/AudioWave";
import { RandomizedTextEffect } from "../../compoForUser/floats/randomText";
import { Sparkles } from "../../compoForUser/floats/sparkles";
import FileUpload from "../../compoForUser/floats/SmallFileUpload";
import MicroToast from "../../compoForUser/floats/MicroToast";
import TimeBasedProgressBar from "../../compoForUser/floats/Stepper";

const Hero = () => {
  // Responsive positions for floating component previews
  const floatingElements = [
    {
      left: "5%", 
      top: "20%",
      rotate: -5,
      delay: 0,
      comp: <a href="https://google.com" target="_blank" rel="noopener noreferrer"><Card1/></a>,
    },
    {
      left: "10%",
      top: "60%",
      comp: <a href="https://google.com" target="_blank" rel="noopener noreferrer"></a>,
      rotate: 3,
      delay: 0.5,
    },
    {
      right: "15%",
      top: "60%",
      width: "300px",
      height: "300px",
      comp: <a href="https://google.com" target="_blank" rel="noopener noreferrer">
      
    </a>,
      rotate: 2,
      delay: 0.8,
    },
    {
      right: "20%",
      top: "10%",
      comp: <a href="https://google.com" target="_blank" rel="noopener noreferrer"><AudioWave/></a>,
      rotate: -4,
      delay: 1.2,
    },
    {
      left: "20%",
      top: "40%",
      rotate: 6,
      delay: 1.6,
      comp: <a href="https://google.com" target="_blank" rel="noopener noreferrer"></a>,
      
    },
    {
      right: "5%",
      top: "30%",
      comp: <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FileUpload/></a>,
      rotate: -3,
      delay: 2,
    },
  ];

  return (
    <section className="relative min-h-[100vh] bg-[#f8f8f8] overflow-hidden pt-24 md:pt-24">
      <Sparkles
            density={100}
            speed={1.2}
            size={1.5}
            direction="top"
            opacitySpeed={2}
            color="#603F26"
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* First Blob with responsive sizing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hidden sm:block"
        >
          <Blob3D
            color="rgb(212, 118, 46)"
            speed={0.8}
            distort={0.5}
            radius={2}
            width="100%"
            height="100%"
          />
        </motion.div>

        {/* Second Blob with staggered fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-1/4 left-2/3 w-[600px] h-[600px] hidden md:block"
        >
          <Blob3D
            color="#153448"
            speed={1.2}
            distort={0.4}
            radius={2}
            width="100%"
            height="100%"
          />
        </motion.div>
      </div>
      {/* Floating component preview placeholders with staggered animations */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: [20, -20, 20],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            y: {
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: el.delay,
            },
            opacity: {
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: el.delay,
            },
          }}
          style={{
            position: "absolute",
            width: el.width,
            height: el.height,
            left: el.left,
            right: el.right,
            top: `calc(${el.top} + 2rem)`,
            rotate: `${el.rotate}deg`,
            borderRadius: "12px",
          }}
          className="backdrop-blur-[1px] relative z-20 drop-shadow-3xl invisible lg:visible md:invisible"
        >
          {el.comp ? el.comp : "Hello"}
        </motion.div>
      ))}

      {/* Main content area with improved responsive spacing */}
      <div className="container mt-20 mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col items-center justify-center text-center relative z-10">
        <div className="min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[90%] lg:max-w-[1200px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8 max-w-4xl font-['Bricolage']"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">
              <span className="font-['InstrumentSerif'] text-[#603F26] font-normal">
                Build faster
              </span>{" "}
              with
              <span className="block mt-2 font-bold">
                Beautiful, Production-Ready
              </span>
              <span className="relative inline-block">
                <span className="relative z-10 [text-shadow:_0_1px_2px_rgba(255,234,197,0.2)]">
                  <RandomizedTextEffect
                  text="UI Components" 
                    className="relative z-10 [text-shadow:_0_1px_2px_rgba(255,234,197,0.2)]"
                  />
                </span>
                <motion.span
                  initial={{ width: "0%", x: 0 }}
                  animate={{
                    width: "100%",
                    x: [0, 5, -5, 0],
                    rotate: [0, 0.5, -0.5, 0],
                  }}
                  transition={{
                    width: { duration: 0.9, ease: "easeOut" },
                    x: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute bottom-0 left-0 h-2 bg-[#6C4E31] -z-10 transform origin-left"
                ></motion.span>
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mt-6 md:mt-10 mx-auto font-['Inter'] leading-relaxed">
              A{" "}
              <span className="font-semibold text-[#6C4E31]">
                curated collection
              </span>{" "}
              of responsive, accessible React components that will{" "}
              <span className="italic">accelerate</span> your development workflow
              and <span className="font-medium">elevate</span> your product's
              design.
            </p>
          </motion.div>

          {/* CTA Buttons with improved responsive layout */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 w-full sm:w-auto"
>
  <Link
    to="/dashboard"
    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#603F26] shadow-xl px-8 font-medium text-white transition-transform duration-300 hover:scale-105"
  >
    <span className="relative z-10 flex items-center">
      Start Building Now
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <div className="absolute inset-0 z-0 w-0 bg-gradient-to-r from-[#6C4E31] to-[#FFDBB5] transition-all duration-500 ease-out group-hover:w-full" />
    <div className="absolute inset-0 z-10 rounded-md border-2 border-transparent transition-colors duration-300" />
  </Link>

  <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full shadow-xl font-['Inter'] bg-[#FFEAC5] px-8 font-medium text-[#603F26] transition-transform duration-300 hover:scale-105 hover:text-[#FFDBB5]">
    <span className="relative z-10 flex items-center">
      Explore Components
      <span className="ml-2 px-2 py-0.5 bg-[#FFEAC5] text-[#603F26] rounded-md text-lg font-medium group-hover:text-[#603F26] transition-colors duration-300">
        50+
      </span>
    </span>
    <div className="absolute inset-0 z-0 w-0 bg-gradient-to-r font-['Inter'] from-[#603F26] to-[#6C4E31] transition-all duration-500 ease-out group-hover:w-full" />
    <div className="absolute inset-0 z-10 rounded-md border-transparent transition-colors duration-300"/>
  </button>
</motion.div>
        </div>

        {/* Value proposition section with improved responsive grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-left max-w-5xl font-['Inter']"
        >
          {[
            {
              title: "Developer First",
              description:
                "Clean, intuitive APIs with TypeScript support and comprehensive docs that developers love.",
            },
            {
              title: "Design Perfection",
              description:
                "Pixel-perfect components crafted by designers, with attention to every interaction detail.",
            },
            {
              title: "Production Ready",
              description:
                "Fully accessible, responsive, and performance optimized for real-world applications.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 md:p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-sm md:text-base font-bold text-[#603F26] mb-2 md:mb-3 font-bricolage">
                {item.title}
              </h3>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="h-0.5 bg-[#FFDBB5] mb-2 md:mb-3"
              />

              <p className="text-gray-700 text-xs md:text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
