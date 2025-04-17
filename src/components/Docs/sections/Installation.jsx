import { CodeBlock } from "../components/CodeBlock";

export const Installation = () => (
  <section>
    <h2 className="text-3xl font-bold text-[#603F26] mb-2 font-['Bricolage']">
      Get Started
    </h2>
    <p className="text-[#6C4E31] text-lg leading-relaxed font-['Inter'] text-[1.1rem]  space-y-8 mb-8">
      Start by checking our Installation Guide and then dive into Components.
    </p>

    <h2 className="text-3xl font-bold text-[#603F26] mb-6 font-['Bricolage']">
      Installation
    </h2>
    <div className="space-y-8 text-[#6C4E31] font-['Inter']">
      <p className="text-lg leading-relaxed">
        ChocoUI doesn't require installation. All components are copy-paste
        ready. But make sure your project is setup with{" "}
        <span className="font-semibold">Tailwind CSS + Vite</span>.
      </p>

      <p className="text-lg leading-relaxed mb-1 font-bold">
        If you're starting fresh:
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">
            npm
          </h3>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">
            npm create vite@latest my-app
          </CodeBlock>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">
            cd my-app
          </CodeBlock>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">
            npm install
          </CodeBlock>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">
            npm install -D tailwindcss postcss autoprefixer
          </CodeBlock>
          <CodeBlock className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">
            npx tailwindcss init -p
          </CodeBlock>
        </div>

        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">
            Configure Tailwind
          </h3>
          <CodeBlock
            language="js"
            className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md"
          >
            {`export default {       // tailwind.config.js 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          </CodeBlock>
        </div>

        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">
            Add Tailwind to CSS
          </h3>
          <CodeBlock
            language="css"
            className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md"
          >
            {`@tailwind base;   // src/index.css
@tailwind components;
@tailwind utilities;
`}
          </CodeBlock>
        </div>
      </div>
    </div>
  </section>
);
