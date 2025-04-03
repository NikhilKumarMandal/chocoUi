import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden bg-gradient-to-br from-[#FFEAC5] via-[#FFDBB5] to-[#f8c794] border-t border-[#6C4E31]/20">
      {/* Background elements */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 2, type: "spring" }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#F7374F]/10 blur-3xl -z-10"
      />
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.3, type: "spring" }}
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#6C4E31]/15 blur-3xl -z-10"
      />

      <div className="container px-4 mx-auto sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo with animation */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-[#603F26] rounded-lg shadow-[0_4px_0_#522546] hover:shadow-[0_2px_0_#522546] transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#FFDBB5]"
                >
                  <path
                    d="M14.5 3H9.5L4.5 12L9.5 21H14.5L19.5 12L14.5 3Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <span className="text-lg font-bold text-[#603F26] group-hover:text-[#6C4E31] transition-colors duration-300 relative">
                ChocoUI
                <span className="absolute -bottom-1 left-0 h-0.5 bg-[#F7374F] w-0 group-hover:w-full transition-all duration-500"></span>
              </span>
            </Link>
          </motion.div>

          {/* Copyright text with subtle animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-[#6C4E31]/90 hover:text-[#603F26] transition-colors duration-300"
          >
            © {new Date().getFullYear()} ChocoUI. All rights reserved.
          </motion.div>

          {/* Social links with floating animation */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a 
              href="#" 
              className="text-[#6C4E31]/80 hover:text-[#F7374F] transition-colors duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">GitHub</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.839c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                  fill="currentColor"
                ></path>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              className="text-[#6C4E31]/80 hover:text-[#F7374F] transition-colors duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Twitter</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Additional links row */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            to="/privacy" 
            className="text-[#6C4E31]/80 hover:text-[#603F26] transition-colors duration-300 relative group"
          >
            Privacy Policy
            <span className="absolute -bottom-1 left-0 h-0.5 bg-[#F7374F] w-0 group-hover:w-full transition-all duration-500"></span>
          </Link>
          <Link 
            to="/terms" 
            className="text-[#6C4E31]/80 hover:text-[#603F26] transition-colors duration-300 relative group"
          >
            Terms of Service
            <span className="absolute -bottom-1 left-0 h-0.5 bg-[#F7374F] w-0 group-hover:w-full transition-all duration-500"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-[#6C4E31]/80 hover:text-[#603F26] transition-colors duration-300 relative group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 h-0.5 bg-[#F7374F] w-0 group-hover:w-full transition-all duration-500"></span>
          </Link>
          <Link 
            to="/docs" 
            className="text-[#6C4E31]/80 hover:text-[#603F26] transition-colors duration-300 relative group"
          >
            Documentation
            <span className="absolute -bottom-1 left-0 h-0.5 bg-[#F7374F] w-0 group-hover:w-full transition-all duration-500"></span>
          </Link>
        </motion.div>

        {/* Made with love text */}
        <motion.p 
          className="mt-8 text-center text-xs text-[#6C4E31]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Made with <span className="text-[#F7374F]">♥</span> by the ChocoUI team
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer