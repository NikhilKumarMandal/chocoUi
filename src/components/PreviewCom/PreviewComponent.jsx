import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { Copy, Check, Code, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function PreviewComponent({
  title,
  codeSnippets = [],
  children,
  isFullWidth = false,
  previewBg = "bg-white",
  fixPreviewHeight = false,
}) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const codeSnippet = codeSnippets[0] || { language: "jsx", code: "" };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet.code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${
        isFullWidth ? "max-w-full p-0" : "max-w-screen-xl px-4 py-2"
      } mx-auto border rounded-lg shadow-md mt-6 overflow-hidden`}
    >
      <div className="px-4 pt-4">
        <h2 className="text-2xl font-bold font-['Bricolage'] tracking-tight text-gray-900 mb-2 text-center sm:text-left">
          {title}
        </h2>

        <div className="flex border-b border-gray-200 flex-wrap">
          {[
            { label: "Preview", value: "preview", icon: <Eye size={18} /> },
            { label: "Code", value: "code", icon: <Code size={18} /> },
          ].map(({ label, value, icon }) => (
            <button
              key={value}
              className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all text-gray-900 hover:text-[#603F26] hover:font-bold sm:text-base ${
                activeTab === value
                  ? "border-b-2 border-[#603F26] text-gray-900"
                  : ""
              }`}
              onClick={() => setActiveTab(value)}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 mt-3 relative">
        {activeTab === "preview" ? (
          <div className="rounded-md border overflow-hidden">
            <div
              className={`max-h-[600px] overflow-y-auto p-4 ${previewBg} ${
                isFullWidth ? "" : "flex justify-center"
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
          <div className="w-full rounded-md border bg-gray-900 overflow-hidden">
            <div className="max-h-[550px] overflow-auto p-2 sm:p-4">
              <div className="mb-4 flex justify-end">
                <button
                  onClick={handleCopy}
                  className="bg-gray-700 text-gray-200 px-3 py-1.5 rounded-md text-sm flex items-center gap-1 hover:bg-gray-600"
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
                    <pre className="rounded-lg overflow-x-auto whitespace-pre-wrap break-words text-sm leading-relaxed bg-gray-900 text-white border border-gray-700 w-full p-4">
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
    </motion.div>
  );
}
