import React, { useState } from "react";

const Accordion5 = () => {
  const accordionItems = [
    {
      id: 1,
      title: "How do I get started with your service?",
      content:
        "Getting started is simple. Sign up for an account, choose your plan, and follow our step-by-step onboarding process. Our team is available to assist you at every step.",
    },
    {
      id: 2,
      title: "What payment methods do you accept?",
      content:
        "We accept all major credit cards, PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payment options with flexible terms.",
    },
    {
      id: 3,
      title: "Is there a free trial available?",
      content:
        "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-4">
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="flex items-center justify-between w-full p-5 text-left bg-white dark:bg-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <p className="text-gray-600 dark:text-gray-300">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion5;
