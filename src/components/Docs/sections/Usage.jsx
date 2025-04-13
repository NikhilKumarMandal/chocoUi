import { CodeBlock } from "../components/CodeBlock";

export const Usage = () => (
  <section>
    <h2 className="text-3xl font-bold text-[#603F26] mb-6 font-['Bricolage']">Basic Usage</h2>
    <div className="space-y-8 text-[#6C4E31] font-['Inter']">
      <p className="text-lg leading-relaxed">After installation, you can import components directly:</p>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">Importing Components</h3>
          <CodeBlock language="jsx" className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">
            {`import { Button } from '@chocoui/react';

function App() {
  return <Button>Click Me</Button>;
}`}
          </CodeBlock>
        </div>

        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">Theme Provider</h3>
          <CodeBlock language="jsx" className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md">
            {`import { ThemeProvider } from '@chocoui/react';

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}`}
          </CodeBlock>
        </div>
      </div>
    </div>
  </section>
);
