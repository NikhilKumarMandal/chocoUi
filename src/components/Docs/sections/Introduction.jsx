import { motion } from "framer-motion";

export const Introduction = () => (
  <section>
    <h2 className="text-3xl font-bold text-[#603F26] mb-6 font-['Bricolage']">
      Introduction
    </h2>
    <div className="space-y-8 text-[#6C4E31] font-['Inter']">
      <p className="text-lg leading-relaxed">
        ChocoUI is a collection of beautifully designed React components built
        with Tailwind CSS that can be easily customized to match your brand's
        look and feel.
      </p>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#2A1B10] to-[#3C2613]/80 rounded-xl p-8 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h3 className="font-semibold text-[#FFDBB5] text-2xl mb-6 font-['Bricolage']">
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "40+ Components",
                description:
                  "A comprehensive library of customizable UI components",
              },
              {
                title: "Tailwind CSS",
                description:
                  "Built with the utility-first CSS framework for rapid development",
              },
              {
                title: "Clean and Consistent Design",
                description:
                  "Built-in support for a modern, minimalist theme with consistent styling across all components",
              },
              {
                title: "Built for Everyone",
                description:
                  "Designed with accessibility best practices to support all users.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-[#3C2613]/50 backdrop-blur-sm border border-[#FFDBB5]/20 rounded-xl p-5 transition-all duration-300 hover:border-[#FFDBB5]/40 hover:shadow-lg hover:shadow-[#FFDBB5]/10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#FFDBB5]/10 text-[#FFDBB5] mr-4">
                      <span className="text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-[#FFDBB5] font-medium mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[#FFDBB5]/80 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
