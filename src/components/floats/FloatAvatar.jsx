import React, { useState } from "react";
import { motion } from "framer-motion";

const UserAvatar = ({
  size = "md",
  imageUrl = null,
  name = "User",
  showInitials = true,
  className = "",
  onClick = () => {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size mapping
  const sizeClasses = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-sm",
    lg: "w-20 h-20 text-base",
  };

  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const initials = getInitials(name);

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className} cursor-pointer`}
      initial={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Base container */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800"
        initial={{ opacity: 1 }}
        animate={{
          boxShadow: isHovered
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Content container */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ scale: isHovered ? 0.95 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${name}'s avatar`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
            {showInitials && (
              <motion.span
                className="font-medium text-gray-600 dark:text-gray-200"
                animate={{
                  opacity: isHovered ? 0.85 : 1,
                  y: isHovered ? -1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {initials}
              </motion.span>
            )}
          </div>
        )}
      </motion.div>

      {/* Subtle border */}
      <motion.div
        className="absolute inset-0 rounded-full border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: isHovered ? 1 : 0.5,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Hover ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-blue-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.05 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Minimal accent dot */}
      <motion.div
        className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-blue-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
          y: isHovered ? -1 : 0,
          x: isHovered ? -1 : 0,
        }}
        transition={{
          duration: 0.2,
          delay: isHovered ? 0.1 : 0,
        }}
      />
    </motion.div>
  );
};

export default UserAvatar;
