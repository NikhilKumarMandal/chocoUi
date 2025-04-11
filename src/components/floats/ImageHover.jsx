'use client';
import { motion, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ImageHoverButton = ({ imageUrl, label }) => {
  const [showImage, setShowImage] = useState(false);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  const springConfig = { stiffness: 500, damping: 15, mass: 0.1 };
  const imagePos = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
  };

  const handleMove = (e) => {
    if (!imageRef.current || !buttonRef.current) return;
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - buttonRect.left - imageRef.current.offsetWidth/2;
    const y = e.clientY - buttonRect.top - imageRef.current.offsetHeight/2;
    
    imagePos.x.set(x);
    imagePos.y.set(y - 100); // Adjust vertical offset
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
      className="relative group w-40 h-14 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl 
                border border-gray-700/50 hover:border-gray-600/80 transition-all
                flex items-center justify-center gap-2 overflow-visible
                backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Button content */}
      <motion.span 
        className="z-10 text-sm font-medium tracking-tight text-gray-200 group-hover:text-white"
        initial={false}
        animate={{ x: showImage ? 2 : 0 }}
      >
        {label}
      </motion.span>
      
      <motion.div
        className="z-10 text-gray-400 group-hover:text-blue-400"
        animate={{ rotate: showImage ? 45 : 0 }}
      >
        <ArrowUpRight className="w-4 h-4" />
      </motion.div>

      {/* Image preview */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: showImage ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <motion.img
          ref={imageRef}
          src={imageUrl}
          alt={label}
          className="w-64 h-48 rounded-lg object-cover border-2 border-white/5 bg-gray-900/50
                   shadow-2xl shadow-black/50 backdrop-blur-lg"
          initial={{ scale: 0.95 }}
          animate={{ 
            scale: showImage ? 1 : 0.95,
            filter: showImage ? 'brightness(1.1) saturate(1.1)' : 'brightness(1) saturate(1)'
          }}
        />
      </motion.div>

      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ImageHoverButton;