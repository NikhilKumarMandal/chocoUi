import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Heart,
  Mail,
  FileText,
  Globe,
  Shield,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden bg-[#fff]/30 border-t border-[#603F26]/10">
      {/* Animated background elements */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 2, type: "spring" }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#603F26]/5 blur-3xl -z-10"
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.3, type: "spring" }}
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#6C4E31]/10 blur-3xl -z-10"
      />

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#603F26]/15 to-transparent"></div>
      <div className="absolute right-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#603F26]/10 to-transparent"></div>

      <div className="container px-4 mx-auto sm:px-6">
        {/* Bento grid layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Logo card - span 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 p-6 rounded-xl bg-white/40 backdrop-blur-sm border border-[#603F26]/10 shadow-lg"
          >
            <p className="mt-4 text-sm text-[#603F26]/80 font-['Inter'] leading-relaxed">
              Modern, accessible React components that make your applications
              look professional with minimal effort.
            </p>

            <div className="flex mt-4 space-x-4">
              <motion.a
                href="https://github.com/NikhilKumarMandal/chocoUi"
                target="_blank"
                className="p-2 text-[#603F26]/80 hover:text-[#603F26] bg-[#6C4E31]/10 rounded-lg transition-all duration-300 hover:bg-[#6C4E31]/20"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">GitHub</span>
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://x.com/chocoui001"
                target="_blank"
                className="p-2 text-[#603F26]/80 hover:text-[#603F26] bg-[#6C4E31]/10 rounded-lg transition-all duration-300 hover:bg-[#6C4E31]/20"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Twitter</span>
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chocoui001@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#603F26]/80 hover:text-[#603F26] bg-[#6C4E31]/10 rounded-lg transition-all duration-300 hover:bg-[#6C4E31]/20"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Email</span>
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick links card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-[#603F26]/10 shadow-lg"
          >
            <h3 className="text-md font-semibold text-[#603F26] mb-4 font-['Bricolage']">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/docs"
                  className="text-[#603F26]/80 hover:text-[#603F26] text-sm flex items-center gap-2 transition-all duration-300 relative group font-['Inter']"
                >
                  <FileText
                    size={14}
                    className="opacity-70 group-hover:opacity-100"
                  />
                  <span>Documentation</span>
                  <span className="absolute -bottom-0.5 left-0 h-0.5 bg-[#603F26] w-0 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="text-[#603F26]/80 hover:text-[#603F26] text-sm flex items-center gap-2 transition-all duration-300 relative group font-['Inter']"
                >
                  <Globe
                    size={14}
                    className="opacity-70 group-hover:opacity-100"
                  />
                  <span>Feedback</span>
                  <span className="absolute -bottom-0.5 left-0 h-0.5 bg-[#603F26] w-0 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal links card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-[#603F26]/10 shadow-lg"
          >
            <h3 className="text-md font-semibold text-[#603F26] mb-4 font-['Bricolage']">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-[#603F26]/80 hover:text-[#603F26] text-sm flex items-center gap-2 transition-all duration-300 relative group font-['Inter']"
                >
                  <Shield
                    size={14}
                    className="opacity-70 group-hover:opacity-100"
                  />
                  <span>Privacy Policy</span>
                  <span className="absolute -bottom-0.5 left-0 h-0.5 bg-[#603F26] w-0 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-[#603F26]/80 hover:text-[#603F26] text-sm flex items-center gap-2 transition-all duration-300 relative group font-['Inter']"
                >
                  <FileText
                    size={14}
                    className="opacity-70 group-hover:opacity-100"
                  />
                  <span>Terms of Service</span>
                  <span className="absolute -bottom-0.5 left-0 h-0.5 bg-[#603F26] w-0 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=chocoui001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#603F26]/80 hover:text-[#603F26] text-sm flex items-center gap-2 transition-all duration-300 relative group font-['Inter']"
                >
                  <Mail
                    size={14}
                    className="opacity-70 group-hover:opacity-100"
                  />
                  <span>Contact Us</span>
                  <span className="absolute -bottom-0.5 left-0 h-0.5 bg-[#603F26] w-0 group-hover:w-full transition-all duration-500"></span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom row with copyright and made with love */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-6 border-t border-[#603F26]/10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-[#603F26]/70 hover:text-[#603F26] transition-colors duration-300 font-['Inter']"
          >
            © {new Date().getFullYear()} ChocoUI. All rights reserved.
          </motion.div>

          <motion.p
            className="text-center text-xs text-[#603F26]/60 flex items-center mt-4 md:mt-0 font-['Inter']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Made with
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mx-1 inline-flex text-[#603F26]"
            >
              <Heart size={14} fill="#603F26" />
            </motion.span>
            by the ChocoUI team
          </motion.p>
        </div>
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute bottom-6 left-6 w-24 h-24 border border-[#603F26]/10 rounded-full opacity-30"></div>
      <div className="absolute top-10 right-10 w-16 h-16 border border-[#603F26]/10 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#603F26]/5 rounded-full opacity-10"></div>

      {/* Large logo container that extends beyond the footer */}
      <div className="absolute -bottom-[30%] left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] overflow-hidden">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-full h-full"
        >
          {/* Logo image with gradient overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/3.png"
              alt="ChocoUI Logo"
              className="relative h-300 top-[0%] object-contain -z-999"
            />
            <div className="absolute inset-0 bg-transparent"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
