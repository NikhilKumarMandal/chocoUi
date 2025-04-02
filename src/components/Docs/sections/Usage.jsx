import { CodeBlock } from "../components/CodeBlock";

export const Usage = () => (
  <section>
    <h2 className="text-2xl font-bold text-gray-900  mb-4">Basic Usage</h2>
    <div className="space-y-6 text-gray-700 ">
      <p>After installation, you can import components directly:</p>

      <div>
        <h3 className="font-medium text-lg mb-2">Importing Components</h3>
        <CodeBlock language="jsx">
          {`import { Button } from '@chocoui/react';

function App() {
  return <Button>Click Me</Button>;
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium text-lg mb-2">Theme Provider</h3>
        <CodeBlock language="jsx">
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
  </section>
);
