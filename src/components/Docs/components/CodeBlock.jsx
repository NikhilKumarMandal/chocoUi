import { useState } from "react";

export const CodeBlock = ({ children, language = "bash", className = "" }) => {
  const [copied, setCopied] = useState(false);
  const codeLines = children.split('\n');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group rounded-xl overflow-hidden shadow-2xl ${className}`}>
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border border-[#3C2613]/50">
        {/* Header with language and copy button */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#2A2A2A] border-b border-[#3C2613]/30">
          <span className="font-['Bricolage'] text-sm text-[#FFDBB5] font-medium">
            {language}
          </span>
          
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3C2613]/40 hover:bg-[#603F26] transition-all duration-200 group/copy"
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4 text-[#FFDBB5]"
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
                <span className="text-xs font-['Inter'] text-[#FFDBB5]">Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 text-[#FFDBB5]"
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
                <span className="text-xs font-['Inter'] text-[#FFDBB5]/80 group-hover/copy:text-[#FFDBB5]">
                  Copy
                </span>
              </>
            )}
          </button>
        </div>

        {/* Code content with line numbers */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-dark custom-scrollbar">
            {/* Line numbers */}
            <div className="text-right pr-4 pl-5 py-4 text-[#FFDBB5]/70 bg-[#1A1A1A] select-none">
              {codeLines.map((_, i) => (
                <div key={i} className="font-mono text-sm">
                  {i + 1}
                </div>
              ))}
            </div>
            
            {/* Actual code */}
            <pre className="flex-1 py-4 pr-5">
              <code className="font-mono text-sm text-[#E0E0E0] leading-relaxed">
                {codeLines.map((line, i) => (
                  <div key={i} className="hover:bg-[#FFDBB5]/20 px-2 rounded">
                    {line}
                  </div>
                ))}
              </code>
            </pre>
          </div>

          
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-xl pointer-events-none border border-[#3C2613]/20" />
    </div>
  );
};