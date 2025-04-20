import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Modal1 from "../UIComponents/Modal/Modal1";
import Modal3 from "../UIComponents/Modal/Modal3";
import Modal4 from "../UIComponents/Modal/Modal4";
import Modal5 from "../UIComponents/Modal/Modal5";

function ModalPage() {
  const ModalVariants = [
    {
      title: "Responsive Modal",
      component: <Modal1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Modal1 = ({
            user = "Nikhil",
            title = "This is a modern modal dialog",
            description = "This modal is fully responsive and works great on all screen sizes.",
            buttonColor = "bg-[#603F26]",
          }) => {
            const [isOpen, setIsOpen] = useState(false);
          
            const confirmButtonClasses =
              "px-4 py-2 " +
              buttonColor +
              " text-white rounded-lg hover:opacity-90 transition-colors duration-300";
          
            return (
              <div className="flex items-center justify-center bg-[#F6ECE4] p-4 ">
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-6 py-3 bg-[#603F26] text-white rounded-lg shadow-lg hover:bg-[#976C4A] transition-colors duration-300"
                >
                  Open Modal
                </button>
          
                {isOpen && (
                  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-[#FFF9F5] rounded-2xl shadow-xl max-w-md w-full transform transition-all duration-300 border border-[#EAD8C0]">
                      <div className="p-6 border-b border-[#EAD8C0]">
                        <h2 className="text-2xl font-bold text-[#4B2E2B]">{title}</h2>
                        <p className="text-[#6B4C3B] mt-2">{description}</p>
                      </div>
          
                      <div className="p-6">
                        <p className="text-[#3F2B2B]">
                          Hello, <span className="font-semibold">{user}</span>!{" "}
                          {description}
                        </p>
                      </div>
          
                      <div className="p-6 border-t border-[#EAD8C0] flex justify-end gap-4">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-[#5C4333] bg-[#EFE6DC] hover:bg-[#e2d6cb] rounded-lg transition-colors duration-300"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className={confirmButtonClasses}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          };
          export default Modal1;
          `,
        },
      ],
    },
    {
      title: "Reveal Modal",
      component: <Modal3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Modal3 = ({
            title = "Bottom Sheet",
            description = "Perfect for mobile interfaces",
            content = "This bottom sheet modal is optimized for mobile devices with a natural swipe-to-dismiss interaction pattern.",
            confirmColor = "bg-[#5C3B28]",
            confirmHover = "hover:bg-[#7B5236]",
          }) => {
            const [isOpen, setIsOpen] = useState(false);
          
            const confirmBtnClass =
              "px-4 py-2 " +
              confirmColor +
              " text-white rounded-lg " +
              confirmHover +
              " transition-colors duration-300";
          
            return (
              <div className="flex items-center justify-center bg-[#F5EEE7] p-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-6 py-3 bg-[#5C3B28] text-white rounded-lg shadow-lg hover:bg-[#7B5236] transition-colors duration-300"
                >
                  Open Bottom Sheet
                </button>
          
                {isOpen && (
                  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-center p-4 z-50">
                    <div className="bg-[#FFF9F5] rounded-t-2xl shadow-xl w-full max-w-md transform transition-all duration-300">
                      <div className="flex justify-center p-2">
                        <div className="w-12 h-1 bg-[#D8C3B0] rounded-full"></div>
                      </div>
          
                      <div className="p-6 border-b border-[#E4D4C6]">
                        <h2 className="text-2xl font-bold text-[#3C2B21]">{title}</h2>
                        <p className="text-[#6B4E3B] mt-2">{description}</p>
                      </div>
          
                      <div className="p-6">
                        <p className="text-[#4E3A2A]">{content}</p>
                      </div>
          
                      <div className="p-6 border-t border-[#E4D4C6] flex justify-end gap-4">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-[#7B5236] hover:bg-[#F2E6DD] rounded-lg transition-colors duration-300"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className={confirmBtnClass}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          };
          export default Modal3;
          `,
        },
      ],
    },
    {
      title: "Immersive Dialog",
      component: <Modal4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Modal4 = ({
            title = "Full Screen Modal",
            description = "A modern take on full-screen dialogs",
            content = "This full-screen modal provides maximum focus on the content while maintaining a clean and modern design. Perfect for important actions or detailed information.",
            confirmColor = "bg-[#603F26]",
            confirmHover = "hover:bg-[#8c6446]",
            triggerText = "Open Full Screen Modal",
          }) => {
            const [isOpen, setIsOpen] = useState(false);
          
            const confirmButtonClass =
              "px-6 py-3 " +
              confirmColor +
              " text-white rounded-lg " +
              confirmHover +
              " transition-colors duration-300";
          
            return (
              <div className="flex items-center justify-center bg-[#F5EEE7] p-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-6 py-3 bg-[#603F26] text-white rounded-lg shadow-lg hover:bg-[#8c6446] transition-colors duration-300"
                >
                  {triggerText}
                </button>
          
                {isOpen && (
                  <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-[#FFF9F5] rounded-2xl shadow-2xl max-w-2xl w-full transform transition-all duration-300">
                      <div className="p-8 border-b border-[#E4D4C6]">
                        <h2 className="text-3xl font-bold text-[#3C2B21]">{title}</h2>
                        <p className="text-[#6B4E3B] mt-2">{description}</p>
                      </div>
          
                      <div className="p-8">
                        <p className="text-[#4E3A2A] text-lg">{content}</p>
                      </div>
          
                      <div className="p-8 border-t border-[#E4D4C6] flex justify-end gap-4">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-6 py-3 text-[#7B5236] hover:bg-[#F2E6DD] rounded-lg transition-colors duration-300"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className={confirmButtonClass}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          };
          export default Modal4;
          `,
        },
      ],
    },
    {
      title: "Immersive Dialog",
      component: <Modal5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
          
          const Modal5 = ({
            title = "Slide Modal",
            description = "A modern slide-in dialog",
            content = "This slide-in modal is perfect for side panels and additional content. It provides a smooth animation and works great on all devices.",
            triggerText = "Open Slide Modal",
            confirmText = "Confirm",
            cancelText = "Cancel",
            confirmColor = "bg-[#603F26]",
            confirmHover = "hover:bg-[#8c6446]",
          }) => {
            const [isOpen, setIsOpen] = useState(false);
          
            const confirmButtonClass =
              "px-4 py-2 " +
              confirmColor +
              " text-white rounded-lg " +
              confirmHover +
              " transition-colors duration-300";
          
            return (
              <div className="flex items-center justify-center bg-[#F5EEE7] p-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-6 py-3 bg-[#603F26] text-white rounded-lg shadow-lg hover:bg-[#8c6446] transition-colors duration-300"
                >
                  {triggerText}
                </button>
          
                {isOpen && (
                  <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-end p-4 z-50">
                    <div className="bg-[#FFF9F5] rounded-l-2xl shadow-xl w-full max-w-md h-full transform transition-all duration-300">
                      <div className="p-6 border-b border-[#E4D4C6] flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold text-[#3C2B21]">{title}</h2>
                          <p className="text-[#6B4E3B] mt-2">{description}</p>
                        </div>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="text-[#A3876C] hover:text-[#3C2B21] transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
          
                      <div className="p-6">
                        <p className="text-[#4E3A2A]">{content}</p>
                      </div>
          
                      <div className="p-6 border-t border-[#E4D4C6] flex justify-end gap-4">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-[#7B5236] hover:bg-[#F2E6DD] rounded-lg transition-colors duration-300"
                        >
                          {cancelText}
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className={confirmButtonClass}
                        >
                          {confirmText}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          };
          export default Modal5;
          `,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Bento Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Discover modular, grid-based Bento UI components
      </p>
      <div className="mt-6 space-y-6">
        {ModalVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default ModalPage;
