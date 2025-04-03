import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { Copy, Check, Code, Eye } from "lucide-react";

export default function PreviewComponent({ title, code, language = "jsx", children }) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-xl shadow-xl bg-gradient-to-br from-[#FFEAC5] to-[#FFDBB5]/70 border border-[#6C4E31]/20 mt-8 group">
      {/* Header with accent bar */}
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-xl font-bold text-[#603F26] px-3 py-1 bg-[#FFDBB5]/50 rounded-lg inline-block">
          {title}
        </h2>
        <div className="h-1 w-16 bg-[#F7374F] rounded-full mt-2 group-hover:w-24 transition-all duration-500"></div>
      </div>

      {/* Premium Tabs */}
      <div className="flex border-b border-[#6C4E31]/20">
        {[
          { label: "Preview", value: "preview", icon: <Eye size={18} className="text-[#6C4E31]" /> },
          { label: "Code", value: "code", icon: <Code size={18} className="text-[#6C4E31]" /> },
        ].map(({ label, value, icon }) => (
          <button
            key={value}
            className={`flex-1 py-3 flex items-center justify-center gap-2 font-medium transition-all relative overflow-hidden ${
              activeTab === value 
                ? "text-[#603F26] font-semibold" 
                : "text-[#6C4E31] hover:text-[#603F26]"
            }`}
            onClick={() => setActiveTab(value)}
          >
            {icon} {label}
            {activeTab === value && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#603F26] rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="mt-4 relative">
        {activeTab === "preview" ? (
          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-[#6C4E31]/10 shadow-inner">
            <div className="flex flex-wrap justify-center gap-6 w-full">{children}</div>
          </div>
        ) : (
          <div className="relative">
            {/* Enhanced Copy Button */}
            <button
              onClick={handleCopy}
              className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm font-medium transition-all ${
                copied
                  ? "bg-[#6C4E31] text-[#FFEAC5]"
                  : "bg-[#603F26] text-[#FFDBB5] hover:bg-[#6C4E31] hover:text-[#FFEAC5]"
              } shadow-md hover:shadow-lg`}
            >
              {copied ? (
                <>
                  <Check size={16} className="shrink-0" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="shrink-0" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* Premium Code Block */}
            <Highlight code={code.trim()} language={language}>
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre className="p-6 rounded-lg overflow-auto text-sm leading-relaxed bg-[#222] backdrop-blur-sm text-[#FFDBB5] border border-[#6C4E31]/30 shadow-inner">
                  {tokens.map((line, i) => (
                    <div 
                      key={i} 
                      {...getLineProps({ line })} 
                      className="whitespace-pre-wrap hover:bg-[#f3f3f3]/30 transition-colors px-2 py-1 rounded"
                    >
                      {line.map((token, key) => (
                        <span 
                          key={key} 
                          {...getTokenProps({ token })} 
                          className="token"
                        />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>

      
    </div>
  );
}