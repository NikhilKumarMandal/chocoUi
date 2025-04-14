import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
function CTA() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#2A1B10] to-[#3C2613] md:py-20 lg:py-28 rounded-xl">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#FFDBB5]/5 blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#6C4E31]/10 blur-3xl translate-x-20 translate-y-20"></div>

      {/* Decorative line elements */}
      <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#FFDBB5]/20 to-transparent"></div>
      <div className="absolute right-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#FFDBB5]/15 to-transparent"></div>

      <div className="container px-4 mx-auto text-center sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#FFDBB5] md:text-4xl lg:text-5xl font-['Bricolage']">
            Ready to build something{" "}
            <span className="relative inline-block">
              <span className="font-['InstrumentSerif'] font-normal italic relative z-10">
                amazing
              </span>
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-[#FFDBB5] z-20 transform -rotate-1"
              ></motion.span>
            </span>
            ?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-sm lg:text-lg text-[#FFDBB5]/80 font-['Inter'] leading-relaxed"
          >
            Get started with our UI library today and transform your React
            applications with beautiful, accessible components.
          </motion.p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                to={""}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#2A1B10] bg-[#FFDBB5] rounded-xl transition-all duration-300 hover:bg-[#6C4E31] hover:text-white hover:shadow-2xl hover:shadow-[#FFDBB5]/30 font-['Inter']"
              >
                <span className="relative z-10">Coming Soon</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FFDBB5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
              {/* Decorative dot pattern beneath button */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-[#FFDBB5]/60 rounded-full"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                to="/docs"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#FFDBB5] border-2 border-[#FFDBB5]/30 rounded-xl bg-[#3C2613]/50 backdrop-blur-sm hover:bg-[#2A1B10]/70 hover:border-[#FFDBB5]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFDBB5]/10 font-['Inter']"
              >
                <span className="relative z-10">View Documentation</span>
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FFDBB5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-10 right-10 w-32 h-32 border border-[#FFDBB5]/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#FFDBB5]/10 rounded-full opacity-20"></div>

      {/* Curved decoration at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 48"
          fill="none"
          className="w-full h-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 48H1440V24C1296 40 1092 48 720 48C348 48 144 40 0 24V48Z"
            fill="#f8f8f8"
            fillOpacity="0.05"
          />
        </svg>
      </div>
    </section>
  );
}

export default CTA;