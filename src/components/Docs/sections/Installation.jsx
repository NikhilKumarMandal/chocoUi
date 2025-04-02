import { CodeBlock } from "../components/CodeBlock";

export const Installation = () => (
  <section>
    <h2 className="text-2xl font-bold text-gray-900  mb-4">Installation</h2>
    <div className="space-y-6 text-gray-700 ">
      <p>Install ChocoUI using your favorite package manager:</p>

      <div>
        <h3 className="font-medium text-lg mb-2">npm</h3>
        <CodeBlock>npm install @chocoui/react</CodeBlock>
      </div>

      <div>
        <h3 className="font-medium text-lg mb-2">yarn</h3>
        <CodeBlock>yarn add @chocoui/react</CodeBlock>
      </div>

      <div>
        <h3 className="font-medium text-lg mb-2">pnpm</h3>
        <CodeBlock>pnpm add @chocoui/react</CodeBlock>
      </div>

      <div className="bg-yellow-50  border border-yellow-200  rounded-lg p-4">
        <h3 className="font-medium text-yellow-800  mb-2">Peer Dependencies</h3>
        <CodeBlock>npm install react react-dom tailwindcss</CodeBlock>
      </div>
    </div>
  </section>
);
