import { motion } from "framer-motion";

const SpotlightCard = ({ title, description, imageSrc, className = "" }) => {
  return (
    <motion.div
      className={`group relative max-w-sm mx-auto rounded-xl overflow-hidden bg-gradient-to-b from-[#0c0c0c] to-[#252525] ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content container */}
      <div className="relative z-10 p-6 space-y-4">
        {/* Image container */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/50">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={title || "Card visual"}
              className="object-contain w-full h-full"
            />
          )}
        </div>

        {/* Text content */}
        {title && (
          <h3 className="text-xl font-semibold text-gray-100 text-center">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-gray-400 text-center">{description}</p>
        )}
      </div>

      {/* Border gradient */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/10 transition-all duration-300" />
    </motion.div>
  );
};

export default SpotlightCard;
