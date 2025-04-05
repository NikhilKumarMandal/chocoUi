import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white p-4 w-48 transform ${
          isOpen ? "translate-x-0" : "-translate-x-48"
        } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg overflow-y-auto z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">ChocoUi</h2>
          <button className="md:hidden p-1" onClick={toggleSidebar}>
            <X size={22} className="text-white" />
          </button>
        </div>

        <nav className="space-y-3">
          {[
            { name: "Home", path: "/" },
            { name: "Navbar", path: "/dashboard/navbar" },
            { name: "Footer", path: "/dashboard/footer" },
            { name: "Bento", path: "/dashboard/bento" },
            { name: "Cards", path: "/dashboard/card" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block p-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-gray-800"
                  : "hover:bg-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-3 shadow-md">
        <button className="p-1" onClick={toggleSidebar}>
          <Menu size={24} className="text-white" />
        </button>
        <h2 className="text-lg font-semibold">ChocoUi</h2>
        <div className="w-6"></div>
      </div>
    </div>
  );
}

export default Sidebar;
