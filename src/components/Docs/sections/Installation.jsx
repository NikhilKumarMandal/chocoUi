import { CodeBlock } from "../components/CodeBlock";

export const Installation = () => (
  <section>
    <h2 className="text-3xl font-bold text-[#603F26] mb-6 font-['Bricolage']">Installation</h2>
    <div className="space-y-8 text-[#6C4E31] font-['Inter']">
      <p className="text-lg leading-relaxed">Install ChocoUI using your favorite package manager:</p>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">npm</h3>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">npm install @chocoui/react</CodeBlock>
        </div>

        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">yarn</h3>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">yarn add @chocoui/react</CodeBlock>
        </div>

        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">pnpm</h3>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">pnpm add @chocoui/react</CodeBlock>
        </div>

        <div className="bg-[#FFEAC5]/50 border border-[#FFDBB5] rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-[#603F26] text-xl mb-4 font-['Bricolage']">Peer Dependencies</h3>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">npm install react react-dom tailwindcss</CodeBlock>
        </div>
      </div>
    </div>
  </section>
);
