import { motion } from "framer-motion";
import { CodeBlock } from "../components/CodeBlock";

export const Usage = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="space-y-8"
  >
    {/* Section Header */}
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-[#603F26] mb-3 font-['Bricolage'] border-l-4 border-[#603F26]/90 pl-4">
        Component Usage
      </h2>
      <p className="text-[#6C4E31]/90 font-['Inter'] text-lg max-w-3xl">
        Integrate ChocoUI components seamlessly into your React application with
        simple copy-paste functionality.
      </p>
    </div>

    <div className="space-y-8">
      {/* Importing Components */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-[#603F26] mb-4 font-['Bricolage']">
          Basic Implementation
        </h3>
        <div className="space-y-4">
          <CodeBlock language="jsx">
            {`import { Button } from '@chocoui/react';

function App() {
  return <Button>Click Me</Button>;
}`}
          </CodeBlock>
        </div>
      </motion.div>

      {/* Real-world Example */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-[#603F26] mb-4 font-['Bricolage']">
          Component Composition
        </h3>
        <div className="space-y-4">
          <CodeBlock language="jsx">
            {`import { Card, Button } from '@chocoui/react';

function ProductCard() {
  return (
    <Card className="max-w-sm">
      <h2 className="text-xl font-bold">Chocolate Donut</h2>
      <p className="text-sm mt-2">Delicious cocoa-glazed donut with sprinkles.</p>
      <Button className="mt-4">Order Now</Button>
    </Card>
  );
}`}
          </CodeBlock>
        </div>
      </motion.div>

      {/* Customization */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-[#603F26] mb-4 font-['Bricolage']">
          Custom Styling
        </h3>
        <div className="space-y-4">
          <p className="text-[#6C4E31]/90 font-['Inter']">
            Extend or override styles using Tailwind's utility classes:
          </p>
          <CodeBlock language="jsx">
            {`<Button className="bg-[#603F26] hover:bg-[#4a2f1b] text-white">
  Custom Button
</Button>`}
          </CodeBlock>
        </div>
      </motion.div>
    </div>
  </motion.section>
);
