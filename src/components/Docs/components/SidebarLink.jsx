export const SidebarLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-300 font-['Inter'] text-sm
      ${
        active 
          ? "text-[#603F26] font-medium bg-gradient-to-r from-[#FFEAC5]/20 to-transparent pl-3 border-l-2 border-[#603F26]"
          : "text-[#6C4E31]/70 hover:text-[#603F26] hover:bg-[#FFEAC5]/10 hover:pl-4"
      }`
    }
  >
    <div className="flex items-center gap-2">
      <span className={`w-1.5 h-1.5 rounded-full ${
        active ? "bg-[#603F26]" : "bg-[#FFDBB5]/50 group-hover:bg-[#603F26]"
      } transition-colors`} />
      <span className="truncate">{children}</span>
    </div>
  </button>
);