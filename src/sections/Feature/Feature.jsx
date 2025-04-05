import React from "react";
import { motion } from "framer-motion";

function Feature() {
  const features = [
    {
      title: "Modular Components",
      description:
        "Mix and match components to create unique interfaces that fit your brand.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 8H8.01M12 8H12.01M16 8H16.01M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Customizable",
      description:
        "Easily customize colors, spacing, and more to match your design system.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 12L11 16L17 8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Performance First",
      description:
        "Optimized for speed and efficiency, ensuring your app stays fast.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 10V3L4 14H11V21L20 10H13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Developer Friendly",
      description:
        "Well-documented API with TypeScript support for smooth development.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H16M8 3V5H16V3M8 3H16M19 9H5M10 13H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Accessible by Default",
      description:
        "Built with accessibility in mind, ensuring your app works for everyone.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 9L14 14.5L11.5 12M7 14.5H3M7 8.5H3M21 14.5H16.5M21 8.5H12M7 21C5.34315 21 4 19.6569 4 18C4 16.3431 5.34315 15 7 15C8.65685 15 10 16.3431 10 18C10 19.6569 8.65685 21 7 21ZM7 9C5.34315 9 4 7.65685 4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6C10 7.65685 8.65685 9 7 9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16  overflow-hidden  bg-gradient-to-b from-[#FFEAC5]/20 via-[#FFDBB5]/80 to-[#f8c794] md:py-20 lg:py-28">
      {/* 3D Floating Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#F7374F]/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#6C4E31]/15 blur-3xl -z-10"></div>

      <div className="container px-4 mx-auto sm:px-6">
        {/* Header with floating effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#603F26] md:text-4xl [text-shadow:_1px_1px_3px_rgb(255_234_197_/_80%)]">
            Features that{" "}
            <span className="relative">
              <span className="relative z-10 text-[#452213]">set us apart</span>
              <motion.span
                initial={{ width: "0%", x: 0 }}
                animate={{
                  width: "100%",
                  x: [0, 5, -5, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  width: { duration: 0.5 },
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
                className="absolute bottom-0 left-0 h-2 bg-[#452213]/90 -z-10 transform origin-left"
              ></motion.span>
            </span>
          </h2>
          <p className="text-lg text-[#6C4E31]/90 relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#F7374F] before:to-[#6C4E31] before:rounded-full">
            Our UI library is built with the developer experience in mind,
            making it easy to create beautiful interfaces.
          </p>
        </motion.div>

        {/* Feature cards with 3D pop effect */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group perspective-1000"
            >
              {/* Card shadow */}
              <div className="absolute inset-0 rounded-xl shadow-[0_25px_50px_-12px_rgba(96,63,38,0.25)] group-hover:shadow-[0_35px_60px_-15px_rgba(96,63,38,0.3)] transition-all duration-500 -z-10"></div>

              {/* Card glow */}
              <div className="absolute inset-0 rounded-xl bg-[#F7374F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Main card */}
              <div className="relative h-full p-6 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-[#6C4E31]/10 transform-style-preserve-3d group-hover:bg-white transition-all duration-500 overflow-hidden">
                {/* Floating elements inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F7374F]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#6C4E31]/10 rounded-full blur-xl"></div>

                {/* Icon with floating animation */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#FFDBB5] to-[#F7374F]/30 text-[#603F26] shadow-[2px_2px_0px] transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_10px_20px_-5px_rgba(247,55,79,0.3)]"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="mb-3 text-xl font-bold text-[#603F26] group-hover:text-[#6C4E31] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#6C4E31]/90 mb-4">{feature.description}</p>

                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFDBB5] via-[#6C4E31] to-[#F7374F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating dots */}
                <div className="flex mt-4 space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-[#603F26]/30 rounded-full"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
