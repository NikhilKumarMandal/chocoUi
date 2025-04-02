import { CodeBlock } from "../components/CodeBlock";

export const Theming = () => (
  <section>
    <h2 className="text-2xl font-bold text-gray-900  mb-4">Theming</h2>
    <div className="space-y-6 text-gray-700 ">
      <p>Customize colors, spacing, and more:</p>

      <div>
        <h3 className="font-medium text-lg mb-2">Default Theme</h3>
        <CodeBlock language="javascript">
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
        <h3 className="font-medium text-lg mb-2">Custom Theme</h3>
        <CodeBlock language="jsx">
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
  </section>
);
