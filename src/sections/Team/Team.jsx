import React from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
import { Sparkles } from "../../compoForUser/floats/sparkles";

const Team = () => {
  const teamMembers = [
    { name: "Nikhil", role: "Lead Developer" },
    { name: "SLA", role: "UI Designer" },
    { name: "John", role: "Backend Engineer" },
    { name: "Sarah", role: "Product Manager" },
    { name: "Mike", role: "DevOps Specialist" },
    { name: "Emma", role: "Frontend Developer" },
    { name: "Chris", role: "QA Engineer" },
    { name: "Laura", role: "UX Researcher" },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#2A1B10] to-[#3C2613]/80 md:py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#FFDBB5]/5 blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#6C4E31]/10 blur-3xl translate-x-20 translate-y-20"></div>

      {/* Sparkles background */}
      <div className="absolute inset-0 opacity-20">
        <Sparkles
          density={100}
          speed={1.2}
          size={3}
          direction="top"
          opacitySpeed={2}
          color="#FFDBB5"
          className="h-full w-full"
        />
      </div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center font-['Bricolage'] text-3xl md:text-4xl lg:text-5xl text-[#FFDBB5] mb-16 md:mb-20"
      >
        Meet the{" "}
        <span className="font-['InstrumentSerif'] italic font-normal relative inline-block">
          <span className="relative z-10">Choco Team</span>
          <motion.span
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-full h-2 bg-[#FFDBB5]/30 -z-10 transform -rotate-1"
          />
        </span>
      </motion.h2>

      {/* Team Members Grid */}
      <div className="container px-4 mx-auto sm:px-6 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl bg-[#3C2613]/50 backdrop-blur-sm border border-[#FFDBB5]/10 hover:border-[#FFDBB5]/30 transition-all duration-300"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FFDBB5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full bg-[#FFDBB5]/10 mb-6 border-2 border-[#FFDBB5]/20" />

                {/* Member Info */}
                <h3 className="text-xl font-bold text-[#FFDBB5] mb-2 font-['Bricolage']">
                  {member.name}
                </h3>
                <p className="text-sm text-[#FFDBB5]/80 mb-4 font-['Inter']">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-[#2A1B10] hover:bg-[#FFDBB5]/10 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5 text-[#FFDBB5]/80 hover:text-[#FFDBB5]" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-[#2A1B10] hover:bg-[#FFDBB5]/10 transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5 text-[#FFDBB5]/80 hover:text-[#FFDBB5]" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-[#2A1B10] hover:bg-[#FFDBB5]/10 transition-colors"
                  >
                    <GithubIcon className="w-5 h-5 text-[#FFDBB5]/80 hover:text-[#FFDBB5]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
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
};

export default Team;
