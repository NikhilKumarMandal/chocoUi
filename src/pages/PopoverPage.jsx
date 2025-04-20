import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Popover1 from "../UIComponents/Popover/Popover1";
import Popover2 from "../UIComponents/Popover/Popover2";
import Popover3 from "../UIComponents/Popover/Popover3";
import Popover4 from "../UIComponents/Popover/Popover4";

function PopoverPage() {
  const PopoverVariants = [
    {
      title: "Click Popover",
      component: <Popover1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState, useRef, useEffect } from "react";
          
          const Popover = () => {
            const [isOpen, setIsOpen] = useState(false);
            const popoverRef = useRef(null);
            const buttonRef = useRef(null);
          
            useEffect(() => {
              const handleClickOutside = (event) => {
                if (
                  popoverRef.current &&
                  !popoverRef.current.contains(event.target) &&
                  !buttonRef.current.contains(event.target)
                ) {
                  setIsOpen(false);
                }
              };
          
              document.addEventListener("mousedown", handleClickOutside);
              return () => document.removeEventListener("mousedown", handleClickOutside);
            }, []);
          
            return (
              <div className="flex justify-center h-70">
                <div className="relative">
                  <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-4 py-2 bg-[#603F26] text-white rounded-lg 
                             hover:bg-gray-700 transition-colors duration-200 
                             focus:outline-none focus:ring-2 focus:ring-gray-500 
                             focus:ring-offset-2"
                  >
                    Click me
                  </button>
          
                  {isOpen && (
                    <div
                      ref={popoverRef}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 
                               bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                    >
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div
                          className="w-4 h-4 bg-white rotate-45 border-l border-t 
                                     border-gray-200"
                        ></div>
                      </div>
          
                      <div className="px-4 py-3 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-[#603F26]">
                          Popover Title
                        </h3>
                      </div>
          
                      <div className="px-4 py-3">
                        <p className="text-gray-600">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Doloremque, reprehenderit.
                        </p>
                      </div>
          
                      <div
                        className="px-4 py-3 bg-gray-50 rounded-b-lg border-t 
                                   border-gray-200"
                      >
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-1.5 bg-gray-200 text-[#603F26]rounded 
                                     hover:bg-gray-300 transition-colors duration-200"
                          >
                            Close
                          </button>
                          <button
                            className="px-3 py-1.5 bg-[#603F26] text-white rounded 
                                     hover:bg-gray-700 transition-colors duration-200"
                          >
                            Action
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          };
          
          export default Popover;`,
        },
      ],
    },
    {
      title: "Info Popover",
      component: <Popover3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState, useRef, useEffect } from "react";
          
          const Popover = () => {
            const [isOpen, setIsOpen] = useState(false);
            const popoverRef = useRef(null);
            const triggerRef = useRef(null);
          
            useEffect(() => {
              const handleClickOutside = (event) => {
                if (
                  popoverRef.current &&
                  !popoverRef.current.contains(event.target) &&
                  !triggerRef.current.contains(event.target)
                ) {
                  setIsOpen(false);
                }
              };
          
              document.addEventListener("mousedown", handleClickOutside);
              return () => document.removeEventListener("mousedown", handleClickOutside);
            }, []);
          
            return (
              <div className="flex justify-center items-center bg-gray-50">
                <div className="relative">
                  <button
                    ref={triggerRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className={
                      "px-6 py-2.5 bg-white text-[#603F26] rounded-full hover:bg-gray-50 transition-all duration-200 " +
                      "shadow-sm hover:shadow border border-gray-100 flex items-center space-x-2 group"
                    }
                  >
                    <span className="font-medium">Information</span>
                    <svg
                      className={
                        "w-4 h-4 transition-transform duration-200 " +
                        (isOpen ? "rotate-180" : "")
                      }
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
          
                  {isOpen && (
                    <div
                      ref={popoverRef}
                      className={
                        "absolute left-1/2 transform -translate-x-1/2 mt-3 " +
                        "w-72 bg-white rounded-2xl shadow-lg border border-[#603F26] " +
                        "backdrop-blur-sm transition-all duration-200 z-50"
                      }
                    >
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-3 h-3 bg-[#603F26] rotate-45 border-l border-t border-gray-100" />
                      </div>
          
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-gray-50 rounded-lg">
                            <svg
                              className="w-5 h-5 text-[#603F26]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-[#603F26] font-medium">Quick Information</h3>
                        </div>
          
                        <p className="text-[#603F26] text-sm leading-relaxed">
                          Here's some helpful information that provides context the user.
                          Keep it brief and meaningful.
                        </p>
          
                        <div className="mt-4 flex justify-end">
                          <button
                            onClick={() => setIsOpen(false)}
                            className={
                              "px-4 py-2 text-sm text-gray-600 hover:text-[#603F26] " +
                              "transition-colors duration-200"
                            }
                          >
                            Got it
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          };
          
          export default Popover;`,
        },
      ],
    },
    {
      title: "Expandable Info",
      component: <Popover4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState, useRef, useEffect } from "react";
          
          const Popover = () => {
            const [isOpen, setIsOpen] = useState(false);
            const popoverRef = useRef(null);
            const triggerRef = useRef(null);
          
            useEffect(() => {
              const handleClickOutside = (event) => {
                if (
                  popoverRef.current &&
                  !popoverRef.current.contains(event.target) &&
                  !triggerRef.current.contains(event.target)
                ) {
                  setIsOpen(false);
                }
              };
          
              document.addEventListener("mousedown", handleClickOutside);
              return () => document.removeEventListener("mousedown", handleClickOutside);
            }, []);
          
            return (
              <div className="flex justify-center items-center">
                <div className="relative">
                  <button
                    ref={triggerRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className={
                      "px-5 py-2 bg-[#603F26] text-neutral-300 rounded-lg " +
                      "hover:bg-[#be885e] transition-all duration-200 " +
                      "border border-neutral-700 flex items-center space-x-2"
                    }
                  >
                    <span className="font-medium">Read More</span>
                    <svg
                      className={
                        "w-4 h-4 transition-transform duration-200 " +
                        (isOpen ? "rotate-180" : "")
                      }
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
          
                  {isOpen && (
                    <div
                      ref={popoverRef}
                      className={
                        "absolute left-1/2 transform -translate-x-1/2 mt-3 " +
                        "w-80 bg-neutral-800 rounded-lg border border-neutral-700 " +
                        "shadow-xl transition-all duration-200 z-50"
                      }
                    >
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div
                          className={
                            "w-3 h-3 bg-neutral-800 rotate-45 " +
                            "border-l border-t border-neutral-700"
                          }
                        />
                      </div>
          
                      <div className="p-5 space-y-4">
                        <p className="text-neutral-300 text-sm leading-relaxed">
                          Minimal design focuses on the essential elements of a user
                          interface. It emphasizes simplicity and clarity, removing
                          unnecessary decorative elements that don't serve a functional
                          purpose.
                        </p>
          
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          This approach not only creates a clean and modern aesthetic but
                          also improves usability by reducing cognitive load and helping
                          users focus on what's important. The careful use of space,
                          typography, and contrast guides the user's attention.
                        </p>
          
                        <div className="pt-2 flex justify-end border-t border-neutral-700">
                          <button
                            onClick={() => setIsOpen(false)}
                            className={
                              "px-4 py-1.5 text-sm text-neutral-400 " +
                              "hover:text-neutral-200 transition-colors duration-200"
                            }
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          };
          
          export default Popover;`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Popover Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        A Popover can be used to display some content on top of another.
      </p>
      <div className="mt-6 space-y-6">
        {PopoverVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            fixPreviewHeight={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default PopoverPage;
