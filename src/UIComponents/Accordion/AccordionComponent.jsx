import React, { useState } from "react";

const AccordionComponent = ({
  accordionData = [
    {
      id: "col-1",
      items: [
        {
          id: "item-1",
          title: "What is a UI component?",
          content:
            "A UI (User Interface) component is a modular, reusable element that serves a specific function within a graphical user interface. Examples include buttons, input fields, dropdown menus, sliders.",
        },
        {
          id: "item-2",
          title: "Why are components important?",
          content:
            "UI components promote consistency, efficiency, and scalability in software development. They allow developers to reuse code, maintain a consistent look and feel across an application.",
        },
        {
          id: "item-3",
          title: "UI Component Traits",
          content:
            "Well-designed UI components should be modular, customizable, and accessible. They should have clear and intuitive functionality, be easily styled to match the overall design language.",
        },
      ],
    },
    {
      id: "col-2",
      items: [
        {
          id: "item-4",
          title: "Does Component Improve UX?",
          content:
            "UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application by using recognizable patterns.",
        },
        {
          id: "item-5",
          title: "Component design challenges?",
          content:
            "Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies with ease of use.",
        },
        {
          id: "item-6",
          title: "Ensure Responsiveness",
          content:
            "Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes.",
        },
      ],
    },
  ],
}) => {
  const [activeItems, setActiveItems] = useState(["item-1", "item-5"]);

  const toggleItem = (itemId) => {
    setActiveItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {accordionData.map((column) => {
          return (
            <div key={column.id} className="space-y-4">
              {column.items.map((item) => {
                const isActive = activeItems.includes(item.id);
                const buttonClass =
                  "w-full flex justify-between items-center p-5 text-left " +
                  (isActive ? "bg-gray-50" : "bg-white");
                const iconClass =
                  "w-5 h-5 text-gray-500 transition-transform duration-200 " +
                  (isActive ? "rotate-180" : "");
                const contentClass =
                  "transition-all duration-300 overflow-hidden " +
                  (isActive ? "max-h-96" : "max-h-0");

                return (
                  <div
                    key={item.id}
                    className="border border-[#6c4e31] rounded-lg overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <button
                      className={buttonClass}
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isActive}
                    >
                      <h3 className="text-sm 2xl:text-base font-medium text-[#101828]">
                        {item.title}
                      </h3>
                      <svg
                        className={iconClass}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className={contentClass}>
                      <div className="p-5 pt-0 text-sm 2xl:text-base text-gray-600">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionComponent;
