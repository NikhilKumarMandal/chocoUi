import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, GripVertical } from "lucide-react";

const SmartTagInputShowcase = () => {
  const [tags, setTags] = useState([
    "React",
    "Tailwind",
    "Framer Motion",
    "UI",
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Demo color generator
  const getTagColor = (text) => {
    const colors = [
      "bg-[#FFDBB5] text-[#603F26]",
      "bg-[#FFEAC5] text-[#6C4E31]",
      "bg-[#603F26] text-[#FFDBB5]",
      "bg-[#6C4E31] text-[#FFEAC5]",
    ];
    return colors[text.length % colors.length];
  };

  return (
    <div className="relative w-full max-w-md p-6 rounded-xl bg-white border border-[#FFDBB5]/50 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#603F26]">Smart Tag Input</h3>
        <div className="flex space-x-2">
          <button
            className="p-1 rounded-md hover:bg-[#FFEAC5]/50 transition-colors"
            onClick={() => setShowSuggestions(!showSuggestions)}
          >
            <Sparkles className="w-4 h-4 text-[#6C4E31]" />
          </button>
        </div>
      </div>

      {/* Tags Container */}
      <div className="relative min-h-[120px] p-3 rounded-lg bg-[#FFEAC5]/20 border border-dashed border-[#FFDBB5]">
        <div className="flex flex-wrap gap-2 mb-2">
          <AnimatePresence>
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                className={`flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${getTagColor(tag)}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GripVertical className="w-3 h-3 mr-1 opacity-50 cursor-move" />
                {tag}
                <button className="ml-1.5 opacity-70 hover:opacity-100 transition-opacity">
                  <X className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Type to add tags..."
            className="w-full px-3 py-2 text-sm rounded-md border border-[#FFDBB5] focus:outline-none focus:ring-2 focus:ring-[#6C4E31]/50 focus:border-[#6C4E31] bg-white/80"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-[#603F26] border-t-transparent border-r-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Suggestions Panel */}
      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            className="mt-3 p-3 rounded-lg bg-[#603F26]/5 border border-[#6C4E31]/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-2 text-xs font-semibold text-[#6C4E31]">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Suggestions
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "React Hooks",
                "Tailwind CSS",
                "Framer Motion",
                "UI Components",
              ].map((suggestion) => (
                <motion.div
                  key={suggestion}
                  className="px-3 py-1 text-sm rounded-full bg-[#FFDBB5] text-[#603F26] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {suggestion}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sparkles (Decorative) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFDBB5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: "float 3s infinite ease-in-out",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SmartTagInputShowcase;
