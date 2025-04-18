import { CodeBlock } from "../components/CodeBlock";

export const Usage = () => (
  <section>
    <h2 className="text-3xl font-bold text-[#603F26] mb-6 font-['Bricolage']">
      Basic Usage
    </h2>

    <div className="space-y-10 text-[#6C4E31] font-['Inter']">
      <p className="text-lg leading-relaxed">
        Using ChocoUI is as simple as importing and using the components inside
        your React + Tailwind CSS project. Here's a quick guide to get started:
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">
            📦 Importing Components
          </h3>
          <CodeBlock
            language="jsx"
            className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md"
          >
            {`import { Button } from '@chocoui/react';

function App() {
  return <Button>Click Me</Button>;
}`}
          </CodeBlock>
        </div>

        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">
            🚀 Real-world Example
          </h3>
          <CodeBlock
            language="jsx"
            className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md"
          >
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

        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">
            🎨 Customizing with Tailwind
          </h3>
          <p className="text-base leading-relaxed mb-2">
            All components are built with Tailwind utility classes, so you can
            easily customize them by passing{" "}
            <code className="bg-[#FFEDD5] px-1 py-0.5 rounded">className</code>.
          </p>
          <CodeBlock
            language="jsx"
            className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md"
          >
            {`<Button className="bg-[#603F26] hover:bg-[#4a2f1b] text-white">
  Custom Button
</Button>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  </section>
);
