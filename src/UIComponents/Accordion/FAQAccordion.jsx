import React, { useState } from "react";

const Accordion = ({
  items = [
    {
      id: "item-1",
      title: "What is a UI component?",
      content:
        "A UI (User Interface) component is a modular, reusable element that serves a specific function within a graphical user interface. Examples include buttons, input fields, dropdown menus, sliders, and checkboxes.",
    },
    {
      id: "item-2",
      title: "Why are UI components important?",
      content:
        "UI components promote consistency, efficiency, and scalability in software development. They allow developers to reuse code, maintain a consistent look and feel across an application, and easily make updates or modifications without affecting the entire system.",
    },
    {
      id: "item-3",
      title: "Key characteristics of UI components?",
      content:
        "Well-designed UI components should be modular, customizable, and accessible. They should have clear and intuitive functionality, be easily styled to match the overall design language of the application.",
    },
  ],
  allowMultiple,
}) => {
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (itemId) => {
    if (allowMultiple) {
      setActiveItems((prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setActiveItems((prev) => (prev.includes(itemId) ? [] : [itemId]));
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#fefaf5] rounded-2xl shadow-sm border border-[#e6d5c2]">
      {items.map((item) => {
        const isActive = activeItems.includes(item.id);
        const buttonClass =
          "w-full flex justify-between items-center py-5 px-6 text-left transition-colors duration-200 " +
          (isActive
            ? "bg-[#fefaf5] text-[#3e2712]"
            : "bg-white text-[#3e2712] hover:bg-[#fdf3e5]");
        const iconClass =
          "ml-4 transition-transform duration-300 text-[#7c6f66] " +
          (isActive ? "rotate-180" : "");
        const panelId = "panel-" + item.id;
        const panelClass =
          "overflow-hidden transition-all duration-300 bg-white " +
          (isActive ? "max-h-96" : "max-h-0");

        return (
          <div
            key={item.id}
            className="border-b border-[#e6d5c2] last:border-b-0"
          >
            <button
              className={buttonClass}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isActive}
              aria-controls={panelId}
            >
              <span className="text-lg font-medium flex-1">{item.title}</span>
              <span className={iconClass}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-current"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div id={panelId} className={panelClass} role="region">
              <div className="pb-5 px-6 text-[#7c6f66] text-sm 2xl:text-base">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
