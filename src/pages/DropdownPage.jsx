import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Dropdown2 from "../UIComponents/Dropdown/Dropdown2";
import Dropdown3 from "../UIComponents/Dropdown/Dropdown3";
import Dropdown4 from "../UIComponents/Dropdown/Dropdown4";

function DropdownPage() {
  const DropdownVariants = [
    {
      title: "Multi Select Dropdown",
      component: <Dropdown2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
          
          const Dropdown = () => {
            const [isOpen, setIsOpen] = useState(false);
            const [selectedItems, setSelectedItems] = useState([]);
          
            const options = [
              { id: 1, label: "Option 1" },
              { id: 2, label: "Option 2" },
              { id: 3, label: "Option 3" },
              { id: 4, label: "Option 4" },
            ];
          
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
          
            const dropdownBtnClass =
              "w-full px-4 py-3 bg-purple-600 text-white rounded-lg flex items-center justify-between hover:bg-purple-700 transition-colors duration-200 shadow-md";
          
            const dropdownIconBase = "w-5 h-5 transition-transform duration-200";
            const dropdownIconOpen = "transform rotate-180";
          
            const dropdownMenuClass =
              "absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-100";
          
            const dropdownItemClass =
              "flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150";
          
            const checkboxClass =
              "w-4 h-4 border-2 border-gray-300 rounded focus:ring-purple-500 text-purple-600 cursor-pointer";
          
            const checkIconClass = "absolute w-4 h-4 text-green-500 pointer-events-none";
          
            const dropdownIconClass = isOpen
              ? dropdownIconBase + " " + dropdownIconOpen
              : dropdownIconBase;
          
            return (
              <div className="relative w-72 m-4">
                <button onClick={toggleDropdown} className={dropdownBtnClass}>
                  <span>
                    {selectedItems.length === 0
                      ? "Select Options"
                      : selectedItems.length + " Selected"}
                  </span>
                  <svg
                    className={dropdownIconClass}
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
                  <div className={dropdownMenuClass}>
                    {options.map((option) => (
                      <div
                        key={option.id}
                        className={dropdownItemClass}
                        onClick={() => toggleOption(option.id)}
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(option.id)}
                            onChange={() => {}}
                            className={checkboxClass}
                          />
                          {selectedItems.includes(option.id) && (
                            <svg
                              className={checkIconClass}
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
          
          export default Dropdown;
`,
        },
      ],
    },
    {
      title: "Single Select Dropdown",
      component: <Dropdown3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
          
          const Dropdown = () => {
            const [isOpen, setIsOpen] = useState(false);
            const [selected, setSelected] = useState("Select option");
          
            const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
          
            const toggleDropdown = () => {
              setIsOpen(!isOpen);
            };
          
            const handleSelect = (option) => {
              setSelected(option);
              setIsOpen(false);
            };
          
            const containerClass = "relative w-64 m-4";
          
            const buttonClass =
              "w-full px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center justify-between hover:bg-indigo-700 transition-colors duration-200";
          
            const iconBaseClass = "w-5 h-5 transition-transform duration-200";
            const iconOpenClass = "transform rotate-180";
            const iconClass = isOpen
              ? iconBaseClass + " " + iconOpenClass
              : iconBaseClass;
          
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
    {
      title: "Nested Dropdown",
      component: <Dropdown4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
          
          const Dropdown = () => {
            const [isOpen, setIsOpen] = useState(false);
            const [openSubMenus, setOpenSubMenus] = useState([]);
          
            const menuItems = [
              {
                id: 1,
                label: "Products",
                submenu: [
                  { id: "sub1-1", label: "Electronics" },
                  { id: "sub1-2", label: "Clothing" },
                  { id: "sub1-3", label: "Books" },
                ],
              },
              {
                id: 2,
                label: "Services",
                submenu: [
                  { id: "sub2-1", label: "Consulting" },
                  { id: "sub2-2", label: "Design" },
                  { id: "sub2-3", label: "Development" },
                ],
              },
              {
                id: 3,
                label: "Categories",
                submenu: [
                  { id: "sub3-1", label: "Featured" },
                  { id: "sub3-2", label: "Trending" },
                  { id: "sub3-3", label: "New Arrivals" },
                ],
              },
            ];
          
            const toggleDropdown = () => {
              setIsOpen(!isOpen);
              if (!isOpen) setOpenSubMenus([]);
            };
          
            const toggleSubMenu = (id) => {
              setOpenSubMenus((prev) =>
                prev.includes(id) ? prev.filter((menuId) => menuId !== id) : [...prev, id]
              );
            };
          
            const ChevronIcon = ({ isOpen }) => {
              const baseClass = "w-5 h-5 transition-transform duration-200";
              const openClass = " transform rotate-180";
              const chevronIconClass = isOpen ? baseClass + openClass : baseClass;
          
              return (
                <svg
                  className={chevronIconClass}
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
              );
            };
          
            const containerClass = "relative w-72 m-4";
            const buttonClass =
              "w-full px-4 py-3 bg-blue-900 text-white rounded-lg flex items-center justify-between hover:bg-blue-800 transition-colors duration-200 shadow-lg";
            const dropdownClass =
              "absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50";
            const menuItemContainerClass = "border-b border-gray-100 last:border-none";
            const menuItemButtonClass =
              "flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors duration-150";
            const menuItemLabelClass = "text-blue-900 font-medium";
            const submenuContainerClass = "bg-blue-50/50 border-t border-blue-100";
            const submenuItemClass =
              "px-8 py-2 cursor-pointer hover:bg-blue-100 transition-colors duration-150 text-blue-900/80";
          
            return (
              <div className={containerClass}>
                <button onClick={toggleDropdown} className={buttonClass}>
                  <span>Menu</span>
                  <ChevronIcon isOpen={isOpen} />
                </button>
          
                {isOpen && (
                  <div className={dropdownClass}>
                    {menuItems.map((item) => (
                      <div key={item.id} className={menuItemContainerClass}>
                        <div
                          onClick={() => toggleSubMenu(item.id)}
                          className={menuItemButtonClass}
                        >
                          <span className={menuItemLabelClass}>{item.label}</span>
                          <ChevronIcon isOpen={openSubMenus.includes(item.id)} />
                        </div>
          
                        {openSubMenus.includes(item.id) && (
                          <div className={submenuContainerClass}>
                            {item.submenu.map((subItem) => (
                              <div key={subItem.id} className={submenuItemClass}>
                                {subItem.label}
                              </div>
                            ))}
                          </div>
                        )}
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
      <h1 className="text-3xl font-bold text-[#603F26]">Dropdown Components</h1>
      <p className="text-[#1a1a1a] mt-2">
        Elegant, accessible dropdowns for seamless user selections
      </p>
      <div className="mt-6 space-y-6">
        {DropdownVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            fixPreviewHeight={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default DropdownPage;
