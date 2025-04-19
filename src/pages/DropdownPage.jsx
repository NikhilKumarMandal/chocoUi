import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Dropdown2 from "../UIComponents/Dropdown/Dropdown2";
import Dropdown3 from "../UIComponents/Dropdown/Dropdown3";

function DropdownPage() {
  const DropdownVariants = [
    {
      title: "Multi Select Dropdown",
      component: (
        <div className="flex  justify-center h-70">
          <Dropdown2 />
        </div>
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
          
          const Dropdown = ({
            options = [
              { id: 1, label: "Option 1" },
              { id: 2, label: "Option 2" },
              { id: 3, label: "Option 3" },
              { id: 4, label: "Option 4" }
            ]
          }) => {
            const [isOpen, setIsOpen] = useState(false);
            const [selectedItems, setSelectedItems] = useState([]);
          
            const toggleDropdown = () => {
              setIsOpen(!isOpen);
            };
          
            const toggleOption = (optionId) => {
              setSelectedItems((prev) =>
                prev.includes(optionId)
                  ? prev.filter((id) => id !== optionId)
                  : [...prev, optionId]
              );
            };
          
            return (
              <div className="relative w-72 m-4">
                <button
                  onClick={toggleDropdown}
                  className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg flex items-center justify-between hover:bg-purple-700 transition-colors duration-200 shadow-md"
                >
                  <span>
                    {selectedItems.length === 0
                      ? "Select Options"
                      : selectedItems.length + " Selected"}
                  </span>
                  <svg
                    className={
                      isOpen
                        ? "w-5 h-5 transition-transform duration-200 transform rotate-180"
                        : "w-5 h-5 transition-transform duration-200"
                    }
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
          
                {isOpen && (
                  <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-100">
                    {options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                        onClick={() => toggleOption(option.id)}
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(option.id)}
                            onChange={() => {}}
                            className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-purple-500 text-purple-600 cursor-pointer"
                          />
                          {selectedItems.includes(option.id) && (
                            <svg
                              className="absolute w-4 h-4 text-green-500 pointer-events-none"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="ml-3 text-gray-700">{option.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          };
          
          export default Dropdown;`,
        },
      ],
    },
    {
      title: "Single Select Dropdown",
      component: (
        <div className="flex justify-center h-70">
          <Dropdown3 />
        </div>
      ),
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
          
          const Dropdown = ({
            options = ["Option 1", "Option 2", "Option 3", "Option 4"],
            width = "w-64",
            color = "indigo" 
          }) => {
            const [isOpen, setIsOpen] = useState(false);
            const [selected, setSelected] = useState("Select option");
          
            const toggleDropdown = () => {
              setIsOpen(!isOpen);
            };
          
            const handleSelect = (option) => {
              setSelected(option);
              setIsOpen(false);
            };
          
            const containerClass = "relative " + width + " m-4";
            const buttonClass =
              "w-full px-4 py-2 bg-" +
              color +
              "-600 text-white rounded-lg flex items-center justify-between hover:bg-" +
              color +
              "-700 transition-colors duration-200";
          
            const iconClass = isOpen
              ? "w-5 h-5 transition-transform duration-200 transform rotate-180"
              : "w-5 h-5 transition-transform duration-200";
          
            const dropdownClass =
              "absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg";
          
            const optionClass =
              "px-4 py-2 cursor-pointer hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg";
          
            return (
              <div className={containerClass}>
                <button onClick={toggleDropdown} className={buttonClass}>
                  <span>{selected}</span>
                  <svg
                    className={iconClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
          
                {isOpen && (
                  <div className={dropdownClass}>
                    {options.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelect(option)}
                        className={optionClass}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          };
          
          export default Dropdown;
`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Dropdown Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Elegant, accessible dropdowns for seamless user selections
      </p>
      <div className="mt-6 space-y-6">
        {DropdownVariants.map((variant, index) => (
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

export default DropdownPage;
