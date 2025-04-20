import AccordionComponent from "../UIComponents/Accordion/AccordionComponent";
import FAQAccordion from "../UIComponents/Accordion/FAQAccordion";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function Accordion() {
  const AccordianVariants = [
    {
      title: "Basic Accordion",
      component: <AccordionComponent />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#fefaf5]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {accordionData.map((column) => {
                    return (
                      <div key={column.id} className="space-y-4">
                        {column.items.map((item) => {
                          const isActive = activeItems.includes(item.id);
                          const buttonClass =
                            "w-full flex justify-between items-center p-5 text-left transition-colors duration-200 " +
                            (isActive ? "bg-[#fefaf5]" : "bg-white");
                          const iconClass =
                            "w-5 h-5 text-[#7c6f66] transition-transform duration-200 " +
                            (isActive ? "rotate-180" : "");
                          const contentClass =
                            "transition-all duration-300 overflow-hidden " +
                            (isActive ? "max-h-96" : "max-h-0");
          
                          return (
                            <div
                              key={item.id}
                              className="border border-[#d8bfa4] rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md bg-white"
                            >
                              <button
                                className={buttonClass}
                                onClick={() => toggleItem(item.id)}
                                aria-expanded={isActive}
                              >
                                <h3 className="text-sm 2xl:text-base font-semibold text-[#3e2712]">
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
                                <div className="p-5 pt-0 text-sm 2xl:text-base text-[#7c6f66]">
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
          `,
        },
      ],
      componentProps: [
        {
          name: "accordionData",
          type: "Array",
          default: "[]",
          description:
            "Accordion content structured in columns. Each column contains an array of items with `id`, `title`, and `content`.",
          example: `[{
            id: 'col-1',
            items: [{ id: 'item-1', title: '...', content: '...' }]
          }]`,
        },
        {
          name: "activeItems",
          type: "Array",
          default: "['item-1', 'item-5']",
          description: "Array of item IDs which are expanded by default.",
          example: `['item-1', 'item-3']`,
          note: "Not directly passed as prop, but you can extract it as a controlled prop if needed.",
        },
      ],
    },
    {
      title: "Basic Accordion",
      component: <FAQAccordion />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
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
          `,
        },
      ],
      componentProps: [
        {
          name: "accordionData",
          type: "Array<{ id: string, items: { id: string, title: string, content: string }[] }>",
          default:
            "[{ id: 'col-1', items: [...] }, { id: 'col-2', items: [...] }]",
          description:
            "Array of columns containing accordion items. Each item should have a unique `id`, `title`, and `content`. Accordion is rendered in a 2-column layout on medium screens and above.",
          example: `[
            {
              id: 'col-1',
              items: [
                { id: 'item-1', title: 'What is a UI component?', content: '...' },
                { id: 'item-2', title: 'Why are components important?', content: '...' }
              ]
            }
          ]`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Component Previews
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {AccordianVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
