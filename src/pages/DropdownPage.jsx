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

const Dropdown2 = ({
  options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
    { id: 4, label: "Option 4" },
  ],
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
        className="w-full px-4 py-3 bg-[#4B2E2B] text-white rounded-lg flex items-center justify-between hover:bg-[#3C241F] transition-colors duration-200 shadow-md"
      >
        <span>
          {selectedItems.length === 0
            ? "Select Options"
            : selectedItems.length + " Selected"}
        </span>
        <svg
          className={"w-5 h-5 transition-transform duration-200 " + (isOpen ? "rotate-180" : "")}
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
        <div className="absolute w-full mt-2 bg-[#F5ECE4] border border-[#D7C2B4] rounded-lg shadow-lg divide-y divide-[#E8D7C7] z-10">
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center px-4 py-3 hover:bg-[#EADFD3] cursor-pointer transition-colors duration-150"
              onClick={() => toggleOption(option.id)}
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(option.id)}
                  onChange={() => {}}
                  className="w-4 h-4 border-2 border-[#C6A27E] rounded focus:ring-[#C6A27E] text-[#C6A27E] cursor-pointer"
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
              <span className="ml-3 text-[#4B2E2B]">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown2;`,
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

const Dropdown3 = ({
  options = ["Option 1", "Option 2", "Option 3", "Option 4"],
  width = "w-64",
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

  return (
    <div className={"relative " + width + " m-4"}>
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-3 bg-[#4B2E2B] text-white rounded-lg flex items-center justify-between hover:bg-[#3C241F] transition-colors duration-200 shadow-md"
      >
        <span>{selected}</span>
        <svg
          className={"w-5 h-5 transition-transform duration-200 " + (isOpen ? "rotate-180" : "")}
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
        <div className="absolute w-full mt-2 bg-[#F5ECE4] border border-[#D7C2B4] rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-[#EADFD3] text-[#4B2E2B] first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown3;`,
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
