import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { Copy, Check, Code, Eye } from "lucide-react";

export default function PreviewComponent({
  title,
  codeSnippets = [],
  children,
}) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const defaultLanguage =
    codeSnippets.length > 0 ? codeSnippets[0].language : "jsx";
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const handleCopy = () => {
    const activeCode =
      codeSnippets.find((snippet) => snippet.language === selectedLanguage)
        ?.code || "";
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const availableLanguages = [
    ...new Set(codeSnippets.map((snippet) => snippet.language)),
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 border rounded-lg shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center sm:text-left">
        {title}
      </h2>

      {/* Tabs */}
      <div className="flex border-b flex-wrap">
        {[
          { label: "Preview", value: "preview", icon: <Eye size={18} /> },
          { label: "Code", value: "code", icon: <Code size={18} /> },
        ].map(({ label, value, icon }) => (
          <button
            key={value}
            className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all text-gray-600 hover:text-blue-500 sm:text-base ${
              activeTab === value
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
            onClick={() => setActiveTab(value)}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      <div className="p-4 mt-3 relative">
        {activeTab === "preview" ? (
          <div className="rounded-md border bg-gray-50 overflow-hidden">
            <div className="max-h-[650px] overflow-y-auto p-4">
              {/* Center and limit component */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {children}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full rounded-md border bg-gray-900 overflow-hidden">
            <div className="max-h-[550px] overflow-auto p-2 sm:p-4">
              <div className="mb-4 flex justify-between items-center flex-wrap gap-2">
                {availableLanguages.length > 1 && (
                  <div className="flex gap-2 flex-wrap">
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                          selectedLanguage === lang
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}

                <button
                  onClick={handleCopy}
                  className="bg-gray-700 text-gray-200 px-3 py-1.5 rounded-md text-sm flex items-center gap-1 hover:bg-gray-600"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {codeSnippets.length > 0 ? (
                <Highlight
                  code={
                    codeSnippets
                      .find((snippet) => snippet.language === selectedLanguage)
                      ?.code.trim() || ""
                  }
                  language={selectedLanguage}
                >
                  {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className="rounded-lg overflow-auto text-sm leading-relaxed bg-gray-900 text-white border border-gray-700 w-full p-4">
                      {tokens.map((line, i) => (
                        <div
                          key={i}
                          {...getLineProps({ line })}
                          className="whitespace-pre-wrap"
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
