import { useState } from "react";

export const CodeBlock = ({ children, language = "bash", className = "" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div
      className={`bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg border border-[#333333] ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#222222] text-[#CCCCCC] text-sm border-b border-[#333333]">
        <span className="font-medium">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-[#999999] hover:text-white flex items-center gap-1.5 transition-colors duration-200"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                className="w-4 h-4 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-xs text-green-400">Copied</span>
            </>
          ) : (
            <>
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
              <span className="text-xs">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-[#E0E0E0] bg-[#1A1A1A]">
        <code className="font-mono text-sm leading-relaxed">{children}</code>
      </pre>
    </div>
  );
};
