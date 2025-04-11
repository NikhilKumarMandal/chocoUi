import React from "react";

const RightSidebar = () => {
  return (
    <aside className="w-45 bg-gray-50 p-4 h-screen overflow-y-auto border-l border-gray-200 hidden lg:block">
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Installation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Customization
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Theming
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                GitHub Repository
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Contributing Guide
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
