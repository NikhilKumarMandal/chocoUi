import React, { useState } from 'react';

const Accordion = ({ items, allowMultiple }) => {
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (itemId) => {
    if (allowMultiple) {
      setActiveItems(prev =>
        prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setActiveItems(prev =>
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 last:border-b-0">
          <button
            className={`w-full flex justify-between items-center py-5 px-6 text-left hover:bg-gray-50 transition-colors duration-200 ${
              activeItems.includes(item.id) ? 'text-blue-600' : 'text-gray-800'
            }`}
            onClick={() => toggleItem(item.id)}
            aria-expanded={activeItems.includes(item.id)}
            aria-controls={`panel-${item.id}`}
          >
            <span className="text-lg font-medium flex-1">{item.title}</span>
            <span className={`ml-4 transition-transform duration-200 ${
              activeItems.includes(item.id) ? 'rotate-180' : ''
            }`}>
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
          <div
            id={`panel-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ${
              activeItems.includes(item.id) ? 'max-h-96' : 'max-h-0'
            }`}
            role="region"
          >
            <div className="pb-5 px-6 text-gray-600">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FAQAccordion = () => {
  const faqItems = [
    {
      id: 'item-1',
      title: 'What is a UI component?',
      content: 'A UI (User Interface) component is a modular, reusable element that serves a specific function within a graphical user interface. Examples include buttons, input fields, dropdown menus, sliders, and checkboxes.'
    },
    {
      id: 'item-2',
      title: 'Why are UI components important?',
      content: 'UI components promote consistency, efficiency, and scalability in software development. They allow developers to reuse code, maintain a consistent look and feel across an application, and easily make updates or modifications without affecting the entire system.'
    },
    {
      id: 'item-3',
      title: 'Key characteristics of UI components?',
      content: 'Well-designed UI components should be modular, customizable, and accessible. They should have clear and intuitive functionality, be easily styled to match the overall design language of the application.'
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Accordion items={faqItems} allowMultiple={false} />
    </div>
  );
};

export default FAQAccordion;