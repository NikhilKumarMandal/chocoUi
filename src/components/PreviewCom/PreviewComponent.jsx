import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { Copy, Check, Code, Eye } from "lucide-react";

export default function PreviewComponent({
  title,
  codeSnippets = [],
  children,
  isFullWidth = false,
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
    <div
      className={`w-full ${
        isFullWidth ? "max-w-full p-4 sm:p-6  " : "max-w-screen-xl px-4 py-4"
      } mx-auto border rounded-xl shadow-sm bg-white  mt-6  overflow-hidden`}
    >
      <div className="px-2 sm:px-4 pt-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center sm:text-left">
          {title}
        </h2>

        <div className="flex flex-wrap justify-center sm:justify-start border-b border-gray-200">
          {[
            { label: "Preview", value: "preview", icon: <Eye size={18} /> },
            { label: "Code", value: "code", icon: <Code size={18} /> },
          ].map(({ label, value, icon }) => (
            <button
              key={value}
              className={`px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-medium flex items-center gap-2 border-b-2 transition-all ${
                activeTab === value
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(value)}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-2 sm:p-4 mt-4 relative">
        {activeTab === "preview" ? (
          <div className="rounded-md bg-gray-50 p-4 overflow-auto max-h-[560px]">
            <div
              className={`${
                isFullWidth ? "w-full" : "flex justify-center"
              } w-full`}
            >
              <div className={`${isFullWidth ? "w-full" : "max-w-md w-full"}`}>
                {children}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full bg-gray-900 rounded-md border border-gray-700 overflow-hidden">
            <div className="max-h-[550px] overflow-auto p-4 custom-scrollbar">
              <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
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
                  {copied ? "Copied" : "Copy"}
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
                    <pre className="text-sm leading-relaxed bg-gray-900 text-white w-full rounded-lg overflow-x-auto whitespace-pre-wrap break-words p-4 border border-gray-700">
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
