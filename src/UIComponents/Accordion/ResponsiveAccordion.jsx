import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ResponsiveAccordion = () => {
  const accordionItems = [
    { title: "Who is nikhil?", content: "Nikhil is Nikhil" },
    { title: "What is chocoUi", content: "ChocoUi is a modern ui liabry " },
    {
      title: "How to use choco ui",
      content: "if you want to use choco ui simple copy and paste component",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {accordionItems.map((item, index) => {
        const isOpen = openIndex === index;

        const iconClass = isOpen
          ? "h-5 w-5 transition-transform rotate-180"
          : "h-5 w-5 transition-transform rotate-0";

        const contentClass = isOpen
          ? "overflow-hidden transition-all duration-300 max-h-40 p-4"
          : "overflow-hidden transition-all duration-300 max-h-0 p-0";

        return (
          <div key={index} className="border border-gray-700 rounded-lg mb-3">
            <button
              className="w-full flex justify-between px-4 py-3 text-lg text-white bg-gray-900 hover:bg-gray-800"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <ChevronDown className={iconClass} />
            </button>
            <div className={contentClass}>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsiveAccordion;
