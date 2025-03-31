import { useState } from "react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: "This is the introduction section.",
  },
  {
    id: "installation",
    title: "Installation",
    content: "This is the installation guide.",
  },
  {
    id: "usage",
    title: "Usage",
    content: "This section explains how to use the component.",
  },
  {
    id: "api",
    title: "API Reference",
    content: "Detailed API reference documentation.",
  },
];

export default function DocsComponent() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <nav className="w-1/4 p-4 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Documentation</h2>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Section */}
      <main className="flex-1 p-6 overflow-auto">
        {sections.map(
          (section) =>
            section.id === activeSection && (
              <div key={section.id}>
                <h1 className="text-2xl font-bold mb-4">{section.title}</h1>
                <p className="text-gray-700">{section.content}</p>
              </div>
            )
        )}
      </main>
    </div>
  );
}
