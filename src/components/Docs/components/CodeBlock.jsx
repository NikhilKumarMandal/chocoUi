export const CodeBlock = ({ children, language = "bash" }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700 text-gray-300 text-sm">
        <span>{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white flex items-center gap-1"
          aria-label="Copy code"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-gray-100">
        <code className="font-mono text-sm">{children}</code>
      </pre>
    </div>
  );
};
