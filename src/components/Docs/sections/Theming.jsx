import { CodeBlock } from "../components/CodeBlock";

export const Theming = () => (
  <section>
    <h2 className="text-3xl font-bold text-[#603F26] mb-6 font-['Bricolage']">
      Theming
    </h2>
    <div className="space-y-8 text-[#6C4E31] font-['Inter']">
      <p className="text-lg leading-relaxed">
        Customize colors, spacing, and more:
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">
            Default Theme
          </h3>
          <CodeBlock
            language="javascript"
            className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md"
          >
            {`const defaultTheme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    success: '#10b981',
    danger: '#ef4444'
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem'
  }
};`}
          </CodeBlock>
        </div>

        <div>
          <h3 className="font-semibold text-[#603F26] text-xl mb-3 font-['Bricolage']">
            Custom Theme
          </h3>
          <CodeBlock
            language="jsx"
            className="bg-[#FFEAC5]/30 border border-[#FFDBB5] rounded-xl shadow-md"
          >
            {`import { ThemeProvider } from '@chocoui/react';

const customTheme = {
  colors: {
    primary: '#8b5cf6' // Purple as primary
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}`}
          </CodeBlock>
        </div>
      </div>
    </div>
  </section>
);
