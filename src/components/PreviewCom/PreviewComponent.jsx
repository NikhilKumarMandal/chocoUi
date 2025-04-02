import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { Copy, Check, Code, Eye } from "lucide-react";

export default function PreviewComponent({ title, codeSnippets = [], children }) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const defaultLanguage = codeSnippets.length > 0 ? codeSnippets[0].language : "jsx";
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const handleCopy = () => {
    const activeCode = codeSnippets.find(snippet => snippet.language === selectedLanguage)?.code || "";
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 border rounded-lg shadow-lg bg-white mt-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center sm:text-left">{title}</h2>

      <div className="flex border-b flex-wrap">
        {[
          { label: "Preview", value: "preview", icon: <Eye size={18} /> },
          { label: "Code", value: "code", icon: <Code size={18} /> },
        ].map(({ label, value, icon }) => (
          <button
            key={value}
            className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all text-gray-600 hover:text-blue-500 sm:text-base ${
              activeTab === value ? "border-b-2 border-blue-500 text-blue-500" : ""
            }`}
            onClick={() => setActiveTab(value)}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      <div className="p-4 mt-4 relative w-full overflow-x-auto">
        {activeTab === "preview" ? (
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full">{children}</div>
        ) : (
          <div className="relative w-full">
            <div className="mb-2 flex justify-between items-center">
              {codeSnippets.length > 1 && (
                <select
                  className="p-2 border rounded-md text-sm bg-gray-100"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  {codeSnippets.map(({ language }) => (
                    <option key={language} value={language}>
                      {language.toUpperCase()}
                    </option>
                  ))}
                </select>
              )}

              <button
                onClick={handleCopy}
                className="bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md text-sm flex items-center gap-1 hover:bg-gray-300"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {codeSnippets.length > 0 ? (
              <Highlight
                code={codeSnippets.find(snippet => snippet.language === selectedLanguage)?.code.trim() || ""}
                language={selectedLanguage}
              >
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre className="p-5 rounded-lg overflow-auto text-sm leading-relaxed bg-gray-900 text-white border border-gray-700 w-full max-w-full">
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })} className="whitespace-pre-wrap">
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            ) : (
              <p className="text-gray-500 text-center">No code available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

