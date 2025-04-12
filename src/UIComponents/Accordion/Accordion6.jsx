import React, { useState } from "react";

const Accordion6 = () => {
  const accordionItems = [
    {
      id: "item1",
      heading: "Flexible Pricing Plans",
      content:
        "Choose from our range of pricing plans designed to fit businesses of all sizes. From startups to enterprises, we have options that scale with your needs. All plans include core features with premium add-ons available as you grow.",
    },
    {
      id: "item2",
      heading: "Dedicated Account Manager",
      content:
        "Enterprise customers receive a dedicated account manager to ensure smooth onboarding, provide personalized support, and help optimize your experience with our platform. Regular check-ins and quarterly reviews keep everything on track.",
    },
    {
      id: "item3",
      heading: "Regular Feature Updates",
      content:
        "We continuously improve our platform with monthly feature updates based on customer feedback and industry trends. Stay ahead of the competition with access to cutting-edge tools and capabilities.",
    },
    {
      id: "item4",
      heading: "Comprehensive Documentation",
      content:
        "Access our extensive knowledge base with detailed guides, video tutorials, and API documentation. Everything you need to make the most of our platform is available at your fingertips.",
    },
    {
      id: "item5",
      heading: "Community Support",
      content:
        "Join our thriving community of users to share best practices, get inspiration, and connect with peers. Our moderated forums and regular webinars provide additional learning opportunities.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <div className="grid gap-3">
        {accordionItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={activeId === item.id}
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {item.heading}
              </h3>
              <span
                className={`ml-6 flex-shrink-0 text-gray-400 transition-transform duration-300 ${activeId === item.id ? "rotate-180" : ""}`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${activeId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="p-5 border-t border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion6;
