import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Feature() {
  const features = [
    {
      title: "Modular Components",
      description:
        "Mix and match components to create unique interfaces that fit your brand perfectly.",
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
      size: "medium",
      color: "bg-gradient-to-br from-[#FFDBB5] to-[#FFD19A]",
    },
    {
      title: "Customizable",
      description:
        "Easily customize colors, spacing, and more to match your design system with minimal effort.",
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
      size: "small",
      color: "bg-gradient-to-br from-[#FFEAC5] to-[#FFE0A8]",
    },
    {
      title: "Performance First",
      description:
        "Optimized for speed and efficiency, ensuring your application remains lightning fast even at scale.",
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
      size: "large",
      color: "bg-gradient-to-br from-[#603F26] to-[#7A5233]",
      textColor: "text-white",
    },
    {
      title: "Developer Friendly",
      description:
        "Well-documented API with TypeScript support for smooth development and enhanced productivity.",
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
      size: "medium",
      color: "bg-gradient-to-br from-[#6C4E31] to-[#8A6541]",
      textColor: "text-white",
    },
    {
      title: "Accessible by Default",
      description:
        "Built with accessibility in mind, ensuring your app works for everyone without compromise.",
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
      size: "small",
      color: "bg-gradient-to-br from-[#FFDBB5] to-[#FFD19A]",
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "small":
        return "md:col-span-1";
      case "medium":
        return "md:col-span-2";
      case "large":
        return "md:col-span-3";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-[#fcedd2]/30 to-white overflow-hidden py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] rounded-full bg-[#FFDBB5]/20 blur-3xl -z-10 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-[#6C4E31]/10 blur-3xl -z-10 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#FFEAC5]/15 blur-3xl -z-10 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12 text-center"
        >
          <div className="inline-block mb-2 px-3 py-1 bg-[#FFEAC5]/50 rounded-full">
            <span className="text-xs font-medium text-[#603F26] font-['Inter']">
              Why Choose Choco UI
            </span>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900 font-['Bricolage']">
            <span className="font-['InstrumentSerif'] text-[#603F26] font-normal italic">
              Powerful
            </span>{" "}
            Features
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-lg mx-auto font-['Inter'] leading-relaxed">
            Our UI library is built with the developer experience in mind,
            making it easy to create beautiful interfaces that delight your
            users.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative group ${getSizeClasses(feature.size)} h-full`}
            >
              <div className="h-full p-5 rounded-xl border border-[#3C2613]/10 bg-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:scale-[1.01] overflow-hidden text-[#603F26] group-hover:bg-[#3C2613] group-hover:border-[#3C2613]/80">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-white/20 border border-white/30 transition-all duration-300 group-hover:bg-[#FFDBB5]/30">
                  <div className="text-lg group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-[#603F26] transition-colors duration-300 font-['Bricolage'] group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-[#6C4E31]/90 text-sm font-['Inter'] leading-relaxed group-hover:text-white/90">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
