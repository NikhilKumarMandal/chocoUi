import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Blob3D from "../../components/Blob3D";
import Card1 from "../../components/floats/Card1";
import AudioWave from "../../components/floats/AudioWave";
import { RandomizedTextEffect } from "../../components/floats/randomText";
import { Sparkles } from "../../components/floats/sparkles";
import FileUpload from "../../components/floats/SmallFileUpload";
import UserAvatar from "../../components/floats/FloatAvatar";
import ActionButton from "../../components/floats/NeonButton";
import ImageHoverButton from "../../components/floats/ImageHover";

const Hero = () => {
  const floatingElements = [
    {
      left: "5%",
      top: "20%",
      rotate: -5,
      delay: 0,
      comp: (
        <Link to={"/dashboard/button"}>
          <Card1 />
        </Link>
      ),
    },
    {
      left: "10%",
      top: "70%",
      comp: (
        <Link to={"/dashboard/button"}>
          <ImageHoverButton
            imageUrl="https://images.unsplash.com/photo-1702313040371-6cde8b0f1972?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            label="Project Showcase"
          />
        </Link>
      ),
      rotate: 6,
      delay: 0.5,
    },
    {
      right: "15%",
      top: "70%",
      comp: (
        <Link to={"/dashboard/button"}>
          <ActionButton text="Hover" />
        </Link>
      ),
      rotate: 2,
      delay: 0.8,
    },
    {
      right: "20%",
      top: "10%",
      comp: (
        <Link to={"/dashboard/loader"}>
          <AudioWave />
        </Link>
      ),
      rotate: -4,
      delay: 1.2,
    },
    {
      left: "15%",
      top: "40%",
      rotate: 6,
      delay: 1.6,
      comp: (
        <Link to="/dashboard/avatar">
          <UserAvatar
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
          />
        </Link>
      ),
    },
    {
      right: "5%",
      top: "30%",
      comp: (
        <Link to="/dashboard/fileupload">
          <FileUpload />
        </Link>
      ),
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

      {/* Floating components */}
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

      <div className="container mt-12 md:mt-20 mx-auto px-4 md:px-6 py-6 md:py-12 flex flex-col items-center justify-center text-center relative z-10">
        <div className="min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[90%] lg:max-w-[1200px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-3 max-w-4xl font-['Bricolage']"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">
              <span className="font-['InstrumentSerif'] text-[#603F26] font-normal">
                Build faster
              </span>{" "}
              with
              <span className="block mt-2 font-bold">
                Chocolaty, Production-Ready
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
            <p className="text-sm sm:text-base md:text-sm text-gray-700 max-w-2xl mt-6 md:mt-10 mx-auto font-['Inter'] leading-relaxed">
              A{" "}
              <span className="font-semibold text-[#6C4E31]">
                curated collection
              </span>{" "}
              of responsive, accessible React components that will{" "}
              <span className="italic">accelerate</span> your development
              workflow and <span className="font-medium">elevate</span> your
              product's design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-2 relative"
          >
            <div className="relative">
              <Link
                to="https://template.chocoui.live/"
                target="_blank"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#603F26] shadow-xl px-6 md:px-8 font-medium text-white transition-transform duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center font-['Inter']">
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
              </Link>
              <div className="absolute -bottom-8 md:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#6C4E31] font-['Inter'] italic whitespace-nowrap">
                Build layouts using templates
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#603F26] to-transparent opacity-50 my-2" />

            {/* Explore Components Button */}
            <div className="relative">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full shadow-xl font-['Inter'] bg-[#FFEAC5] px-6 md:px-8 font-medium text-[#603F26] transition-transform duration-300 hover:scale-105 hover:text-[#FFEAC5]">
                <Link to={"/dashboard/navbar"}>
                  <span className="relative z-10 flex items-center">
                    Explore Components
                    <span className="ml-2 px-2 py-0.5 bg-[#FFEAC5] text-[#603F26] rounded-md text-lg font-medium transition-colors duration-300">
                      30+
                    </span>
                  </span>
                </Link>
                <div className="absolute inset-0 z-0 w-0 bg-gradient-to-r from-[#603F26] to-[#6C4E31] transition-all duration-500 ease-out group-hover:w-full" />
              </button>
              <div className="absolute -bottom-8 md:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#6C4E31] font-['Inter'] italic whitespace-nowrap">
                Design with individual UI components
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
