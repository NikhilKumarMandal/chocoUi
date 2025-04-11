import { useState } from 'react';

const Dropdown4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState([]);

  const menuItems = [
    {
      id: 1,
      label: 'Products',
      submenu: [
        { id: 'sub1-1', label: 'Electronics' },
        { id: 'sub1-2', label: 'Clothing' },
        { id: 'sub1-3', label: 'Books' },
      ],
    },
    {
      id: 2,
      label: 'Services',
      submenu: [
        { id: 'sub2-1', label: 'Consulting' },
        { id: 'sub2-2', label: 'Design' },
        { id: 'sub2-3', label: 'Development' },
      ],
    },
    {
      id: 3,
      label: 'Categories',
      submenu: [
        { id: 'sub3-1', label: 'Featured' },
        { id: 'sub3-2', label: 'Trending' },
        { id: 'sub3-3', label: 'New Arrivals' },
      ],
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOpenSubMenus([]);
    }
  };

  const toggleSubMenu = (id) => {
    setOpenSubMenus((prev) =>
      prev.includes(id)
        ? prev.filter((menuId) => menuId !== id)
        : [...prev, id]
    );
  };

  const ChevronIcon = ({ isOpen }) => (
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isOpen ? 'transform rotate-180' : ''
      }`}
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

  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className="relative w-72">
      {/* Main dropdown button */}
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-3 bg-blue-900 text-white rounded-lg 
                 flex items-center justify-between hover:bg-blue-800 
                 transition-colors duration-200 shadow-lg"
      >
        <span>Menu</span>
        <ChevronIcon isOpen={isOpen} />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border border-gray-200 
                      rounded-lg shadow-xl z-50">
          {menuItems.map((item) => (
            <div key={item.id} className="border-b border-gray-100 last:border-none">
              {/* Main menu item */}
              <div
                onClick={() => toggleSubMenu(item.id)}
                className="flex items-center justify-between px-4 py-3 
                         cursor-pointer hover:bg-blue-50 transition-colors duration-150"
              >
                <span className="text-blue-900 font-medium">{item.label}</span>
                <ChevronIcon isOpen={openSubMenus.includes(item.id)} />
              </div>

              {/* Submenu items */}
              {openSubMenus.includes(item.id) && (
                <div className="bg-blue-50/50 border-t border-blue-100">
                  {item.submenu.map((subItem) => (
                    <div
                      key={subItem.id}
                      className="px-8 py-2 cursor-pointer hover:bg-blue-100 
                               transition-colors duration-150 text-blue-900/80"
                    >
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
    </div>
  );
};

export default Dropdown4;
