import { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { Copy, Check, Code, Eye } from "lucide-react";

export default function PreviewComponent({
  title,
  codeSnippets = [],
  children,
  isFullWidth = false,
  previewBg = "white",
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
    <div
      className={`w-full ${
        isFullWidth ? "max-w-full p-0" : "max-w-screen-xl px-4 py-2"
      } mx-auto border rounded-lg shadow-md mt-6 overflow-hidden bg-white`}
    >
      <div className="px-4 pt-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center sm:text-left">
          {title}
        </h2>

        <div className="flex border-b border-gray-200 flex-wrap">
          {[
            { label: "Preview", value: "preview", icon: <Eye size={18} /> },
            { label: "Code", value: "code", icon: <Code size={18} /> },
          ].map(({ label, value, icon }) => (
            <button
              key={value}
              className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all text-gray-900 hover:text-blue-500 sm:text-base ${
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
      </div>

      <div className="p-4 mt-3 relative">
        {activeTab === "preview" ? (
          <div className="rounded-md border bg-gray-50 overflow-hidden">
            <div
              className={`max-h-[600px] overflow-y-auto p-4 ${
                isFullWidth ? "" : "flex justify-center"
              } ${fixPreviewHeight ? "min-h-[300px] overflow-y-auto flex justify-center" : ""}`}
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

// import { useState, useEffect } from "react";
// import { Highlight } from "prism-react-renderer";
// import { Copy, Check, Code, Eye } from "lucide-react";

// export default function PreviewComponent({
//   title,
//   codeSnippets = [],
//   children,
//   isFullWidth = false,
//   previewBg = "bg-white",
//   fixPreviewHeight = false,
// }) {
//   const [activeTab, setActiveTab] = useState("preview");
//   const [copied, setCopied] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const defaultLanguage =
//     codeSnippets.length > 0 ? codeSnippets[0].language : "jsx";
//   const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

//   const handleCopy = () => {
//     const activeCode =
//       codeSnippets.find((snippet) => snippet.language === selectedLanguage)
//         ?.code || "";
//     navigator.clipboard.writeText(activeCode);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const availableLanguages = [
//     ...new Set(codeSnippets.map((snippet) => snippet.language)),
//   ];

//   const getPreviewHeight = () => {
//     if (fixPreviewHeight) {
//       return isMobile ? "h-[250px]" : "h-[350px]";
//     }
//     return "min-h-[100px] max-h-[70vh]";
//   };

//   return (
//     <div
//       className={`w-full ${
//         isFullWidth ? "max-w-full " : "max-w-4xl"
//       } mx-auto border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white
//       mb-8 `}
//     >
//       <div className="px-4 pt-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center">
//           {title}
//         </h2>

//         <div className="flex border-b border-gray-200">
//           {[
//             {
//               label: "Preview",
//               value: "preview",
//               icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
//             },
//             {
//               label: "Code",
//               value: "code",
//               icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
//             },
//           ].map(({ label, value, icon }) => (
//             <button
//               key={value}
//               className={`flex-1 py-3 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium transition-all ${
//                 activeTab === value
//                   ? "border-b-2 border-blue-500 text-blue-500"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab(value)}
//             >
//               {icon}
//               <span className="whitespace-nowrap">{label}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="relative">
//         {activeTab === "preview" ? (
//           <div className={`rounded-b-lg ${previewBg} overflow-hidden`}>
//             <div
//               className={`${getPreviewHeight()} w-full overflow-auto p-2 sm:p-4 flex items-center justify-center`}
//             >
//               <div
//                 className={`${isFullWidth ? "w-full" : "w-full"} flex justify-center`}
//               >
//                 <div className="flex justify-center w-full">{children}</div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="w-full rounded-b-lg bg-gray-900 overflow-hidden">
//             <div className="max-h-[70vh] overflow-auto">
//               <div className="sticky top-0 z-10 bg-gray-800 p-2 sm:p-3 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-gray-700">
//                 {availableLanguages.length > 1 && (
//                   <div className="flex gap-1 sm:gap-2 flex-wrap justify-center sm:justify-start">
//                     {availableLanguages.map((lang) => (
//                       <button
//                         key={lang}
//                         onClick={() => setSelectedLanguage(lang)}
//                         className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium ${
//                           selectedLanguage === lang
//                             ? "bg-blue-600 text-white"
//                             : "bg-gray-700 text-gray-200 hover:bg-gray-600"
//                         }`}
//                       >
//                         {lang.toUpperCase()}
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 <button
//                   onClick={handleCopy}
//                   className="bg-gray-700 text-gray-200 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm flex items-center gap-1 hover:bg-gray-600 transition-colors"
//                   aria-label="Copy code"
//                 >
//                   {copied ? (
//                     <>
//                       <Check className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span>Copied</span>
//                     </>
//                   ) : (
//                     <>
//                       <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span>Copy</span>
//                     </>
//                   )}
//                 </button>
//               </div>

//               {codeSnippets.length > 0 ? (
//                 <div className="flex justify-center">
//                   <div className="w-full max-w-4xl">
//                     <Highlight
//                       code={
//                         codeSnippets
//                           .find(
//                             (snippet) => snippet.language === selectedLanguage
//                           )
//                           ?.code.trim() || ""
//                       }
//                       language={selectedLanguage}
//                     >
//                       {({ tokens, getLineProps, getTokenProps }) => (
//                         <pre className="text-xs sm:text-sm leading-relaxed p-2 sm:p-4 overflow-x-auto">
//                           <code className="font-mono block">
//                             {tokens.map((line, i) => (
//                               <div
//                                 key={i}
//                                 {...getLineProps({ line })}
//                                 className="table-row hover:bg-gray-800"
//                               >
//                                 <span className="table-cell text-right pr-2 sm:pr-4 select-none opacity-50 w-6 sm:w-8">
//                                   {i + 1}
//                                 </span>
//                                 <span className="table-cell">
//                                   {line.map((token, key) => (
//                                     <span
//                                       key={key}
//                                       {...getTokenProps({ token })}
//                                     />
//                                   ))}
//                                 </span>
//                               </div>
//                             ))}
//                           </code>
//                         </pre>
//                       )}
//                     </Highlight>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="p-4 text-center text-gray-400">
//                   No code available.
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
