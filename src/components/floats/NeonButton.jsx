const ActionButton = ({ text = "Get Started" }) => {
    return (
      <button className="group relative">
        <div
          className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full
          bg-gradient-to-r dark:from-[#0a1f2e] dark:to-[#1a3650] from-[#e6fffa] to-[#ccfff5] 
          dark:border-[#2dd4bf] border-2 border-teal-300 bg-transparent px-8 font-medium 
          dark:text-teal-100 text-teal-900 transition-all duration-300 group-hover:-translate-x-2 
          group-hover:-translate-y-2"
        >
          {text}
        </div>
        <div 
          className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 
          group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:[box-shadow:3px_3px_#5eead4,6px_6px_#2dd4bf,9px_9px_#14b8a6]
          dark:group-hover:[box-shadow:3px_3px_#164e63,6px_6px_#0e7490,9px_9px_#0891b2]"
        ></div>
      </button>
    );
  };
  
  export default ActionButton;