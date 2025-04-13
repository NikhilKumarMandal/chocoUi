export const SidebarLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 font-['Inter'] ${
      active
        ? "bg-[#FFEAC5] text-[#603F26] font-medium shadow-sm border-l-4 border-[#603F26]"
        : "text-[#6C4E31] hover:bg-[#FFEAC5]/30 hover:text-[#603F26]"
    }`}
  >
    {children}
  </button>
);
