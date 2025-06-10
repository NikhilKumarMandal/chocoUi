import { motion } from "framer-motion";
import { CodeBlock } from "../components/CodeBlock";

export const Installation = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="space-y-8"
  >
    {/* Section Header */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-[#603F26] mb-3 font-['Bricolage'] border-l-4 border-[#603F26]/90 pl-4">
        Installation Guide
      </h2>
      <p className="text-[#6C4E31]/90 font-['Inter'] text-lg max-w-3xl">
        Get started with ChocoUI in minutes. All components are copy-paste
        ready, but ensure your project is configured with
        <span className="font-semibold text-[#603F26]">
          {" "}
          Tailwind CSS + Vite
        </span>
        .
      </p>
    </div>

    {/* Fresh Start Section */}
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-[#603F26] mb-4 font-['Bricolage']">
          New Project Setup
        </h3>

        <div className="space-y-5">
          <div>
            <h4 className="font-['Bricolage'] text-[#6C4E31] mb-2">
              Create Vite App
            </h4>
            <CodeBlock language="bash">npm create vite@latest my-app</CodeBlock>
          </div>

          <div>
            <h4 className="font-['Bricolage'] text-[#6C4E31] mb-2">
              Navigate & Install
            </h4>
            <div className="space-y-3">
              <CodeBlock language="bash">cd my-app</CodeBlock>
              <CodeBlock language="bash">npm install</CodeBlock>
            </div>
          </div>

          <div>
            <h4 className="font-['Bricolage'] text-[#6C4E31] mb-2">
              Add Tailwind
            </h4>
            <CodeBlock language="bash">
              npm install tailwindcss @tailwindcss/vite
            </CodeBlock>
          </div>
        </div>
      </motion.div>

      {/* Vite Configuration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="pt-6"
      >
        <h3 className="text-xl font-bold text-[#603F26] mb-4 font-['Bricolage']">
          Vite Configuration
        </h3>

        <div className="space-y-5">
          <div>
            <h4 className="font-['Bricolage'] text-[#6C4E31] mb-2">
              vite.config.ts
            </h4>
            <CodeBlock language="js">
              {`import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="font-['Bricolage'] text-[#6C4E31] mb-2">
              CSS Import
            </h4>
            <CodeBlock language="css">@import "tailwindcss";</CodeBlock>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);
