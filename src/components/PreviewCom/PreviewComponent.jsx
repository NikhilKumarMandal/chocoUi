import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import {
  Copy,
  Check,
  Code,
  Eye,
  Package,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function PreviewComponent({
  title,
  codeSnippets = [],
  children,
  isFullWidth = false,
  previewBg = "bg-white",
  fixPreviewHeight = false,
  requiresInstallation = false,
  dependencies = [],
  usageInstructions = "",
  componentProps = [],
}) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showUsage, setShowUsage] = useState(false);

  const codeSnippet = codeSnippets[0] || { language: "jsx", code: "" };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet.code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`w-full ${
        isFullWidth ? "max-w-full p-0" : "max-w-screen-xl px-4 py-2"
      } mx-auto border border-[#3C2613]/20 rounded-lg shadow-md mt-6 overflow-hidden bg-gradient-to-b from-white to-[#fcedd2]/10`}
    >
      <div className="px-4 pt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-['Bricolage'] tracking-tight text-[#3C2613] mb-2 text-center sm:text-left">
            {title}
          </h2>
          <div className="flex gap-2">
            {componentProps.length > 0 && (
              <button
                onClick={() => setShowUsage(!showUsage)}
                className="flex items-center gap-1 text-sm text-[#3C2613]/80 hover:text-[#3C2613] border border-[#3C2613]/20 px-2 py-1 rounded"
              >
                {showUsage ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
                Usage Guide
              </button>
            )}
            {requiresInstallation && (
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center gap-1 text-sm text-[#3C2613]/80 hover:text-[#3C2613]"
              >
                <Info size={16} /> Installation
              </button>
            )}
          </div>
        </div>

        {/* Installation Information */}
        {showInfo && requiresInstallation && (
          <div className="mb-4 p-4 bg-[#fcedd2]/30 rounded-lg border border-[#6C4E31]/30">
            <h3 className="font-bold text-[#3C2613] flex items-center gap-2 mb-2">
              <Package size={18} /> Installation Required
            </h3>
            <div className="mb-3">
              <h4 className="font-medium text-[#3C2613] mb-1">Dependencies:</h4>
              <div className="bg-white p-2 rounded border border-[#3C2613]/20">
                <code className="text-sm">
                  npm install {dependencies.join(" ")}
                </code>
              </div>
            </div>
            {usageInstructions && (
              <div>
                <h4 className="font-medium text-[#3C2613] mb-1">
                  Basic Usage:
                </h4>
                <p className="text-sm text-[#3C2613]/90">{usageInstructions}</p>
              </div>
            )}
          </div>
        )}

        {/* Component Usage Guide */}
        {showUsage && componentProps.length > 0 && (
          <div className="mb-4 p-4 bg-[#fcedd2]/30 rounded-lg border border-[#6C4E31]/30">
            <div className="mt-4">
              <h4 className="font-medium text-[#3C2613] mb-2">
                Example Usage:
              </h4>
              <div className="bg-[#1a1a1a] p-3 rounded border border-[#3C2613]/20 overflow-x-auto">
                <Highlight
                  code={`function Example() {\n  return (\n    <${title.replace(/\s+/g, "")}\n${componentProps.map((prop) => `      ${prop.name}={${prop.example || prop.default || '""'}}`).join("\n")}\n    />\n  );\n}`}
                  language="jsx"
                >
                  {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className="text-sm leading-relaxed text-white/90">
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            </div>
          </div>
        )}

        <div className="flex border-b border-[#3C2613]/20 flex-wrap">
          {[
            { label: "Preview", value: "preview", icon: <Eye size={18} /> },
            { label: "Code", value: "code", icon: <Code size={18} /> },
          ].map(({ label, value, icon }) => (
            <button
              key={value}
              className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all text-[#3C2613] hover:text-[#6C4E31] hover:font-bold sm:text-base ${
                activeTab === value
                  ? "border-b-2 border-[#6C4E31] text-[#3C2613]"
                  : ""
              }`}
              onClick={() => setActiveTab(value)}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 mt-3  relative">
        {activeTab === "preview" ? (
          <div className="rounded-md border border-[#3C2613]/20 overflow-hidden">
            <div
              className={`max-h-[600px] overflow-y-auto p-4  ${previewBg} ${
                isFullWidth ? "" : "flex justify-center "
              } ${
                fixPreviewHeight
                  ? "min-h-[300px] overflow-y-auto flex justify-center"
                  : ""
              }`}
            >
              <div
                className={`${isFullWidth ? "w-full" : "flex justify-center"} w-full`}
              >
                <div
                  className={`${isFullWidth ? "w-full" : "w-full flex justify-center"}`}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full rounded-md border border-[#3C2613]/20 bg-[#1a1a1a] overflow-hidden">
            <div className="max-h-[550px] overflow-auto p-2 sm:p-4">
              <div className="mb-4 flex justify-end">
                <button
                  onClick={handleCopy}
                  className="bg-[#3C2613] text-[#FFDBB5] px-3 py-1.5 rounded-md text-sm flex items-center gap-1 hover:bg-[#6C4E31]"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {codeSnippets.length > 0 ? (
                <Highlight
                  code={codeSnippet.code.trim()}
                  language={codeSnippet.language}
                >
                  {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className="rounded-lg overflow-x-auto whitespace-pre-wrap break-words text-sm leading-relaxed bg-[#1a1a1a] text-white border border-[#3C2613]/20 w-full p-4">
                      {tokens.map((line, i) => (
                        <div
                          key={i}
                          {...getLineProps({ line })}
                          className="whitespace-pre"
                        >
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              ) : (
                <p className="text-gray-400 text-center">No code available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
