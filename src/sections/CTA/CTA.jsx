import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function CTA() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#603F26] to-[#6C4E31] md:py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#FFDBB5]/10 blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FFEAC5]/10 blur-3xl translate-x-20 translate-y-20"></div>
      
      <div className="container px-4 mx-auto text-center sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#FFEAC5] md:text-4xl lg:text-5xl">
            Ready to build something{' '}
            <span className="relative inline-block">
              <span className="relative z-10">amazing</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#FFDBB5]/50 -z-10 transform -rotate-1"></span>
            </span>?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-[#FFDBB5]/90"
          >
            Get started with ChocoUI today and transform your React applications with beautiful, accessible components.
          </motion.p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-[#603F26] bg-[#FFDBB5] rounded-xl transition-all duration-300 hover:bg-[#FFEAC5] hover:shadow-2xl hover:shadow-[#FFDBB5]/30"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#F7374F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-[#FFEAC5] border-2 border-[#FFDBB5]/50 rounded-xl bg-[#6C4E31]/30 backdrop-blur-sm hover:bg-[#603F26]/50 hover:border-[#FFDBB5]/80 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFDBB5]/20"
              >
                <span className="relative z-10">View Documentation</span>
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FFDBB5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FFDBB5]/30 rounded-full"
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 - 50 + '%'
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 - 50 + '%'
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default CTA