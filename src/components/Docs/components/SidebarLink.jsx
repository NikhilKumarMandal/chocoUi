export const SidebarLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
      active
        ? "bg-blue-100 text-blue-700 font-medium"
        : "text-gray-700 hover:bg-gray-100  "
    }`}
  >
    {children}
  </button>
);
