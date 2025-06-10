import { motion } from "framer-motion";

export const Introduction = () => {
  const features = [
    {
      title: "30+ Components",
      description: "Copy-paste React components",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first styling",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      ),
    },
    {
      title: "Accessible",
      description: "WCAG compliant",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        </svg>
      ),
    },
    {
      title: "Responsive",
      description: "All screen sizes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-3"
      >
        <h2 className="text-3xl font-bold text-[#603F26] font-['Bricolage']">
          Build Faster with ChocoUI
        </h2>
        <p className="text-[#6C4E31]/90 text-base font-['Inter'] max-w-3xl">
          A curated collection of React components combining modern design with
          developer-friendly implementation.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-[#FFDBB5]/40 hover:border-[#603F26]/30 hover:bg-[#FFEAC5]/20 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-md bg-[#FFEAC5]/30 flex items-center justify-center text-[#603F26]/80 group-hover:text-[#603F26]">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#603F26] font-['Bricolage']">
                {feature.title}
              </h3>
              <p className="text-xs text-[#6C4E31]/80 font-['Inter']">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 p-3 text-sm rounded-lg bg-[#FFEAC5]/20 border border-[#FFDBB5]/30"
      >
        <p className="text-[#6C4E31]/80 font-['Inter'] italic">
          "Reduces development time by 40% while maintaining design consistency"
        </p>
      </motion.div>
    </section>
  );
};
