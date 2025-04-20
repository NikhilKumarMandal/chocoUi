const Checkbox = () => (
  <div className="space-y-6 p-6 max-w-md mx-auto bg-[#FDF9F4]/70 backdrop-blur-md rounded-2xl shadow-xl border border-[#E8DCCF]">
    <label className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-md border-2 border-[#D7C3AE] transition-colors duration-200 checked:bg-[#A9745A] checked:border-[#A9745A] focus:outline-none focus:ring-2 focus:ring-[#EFDAC5]"
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-white pointer-events-none hidden peer-checked:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="text-[#5B4634] group-hover:text-[#A9745A] transition-colors">
        Default checkbox
      </span>
    </label>

    <label className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          defaultChecked
          className="peer appearance-none w-5 h-5 rounded-md border-2 border-[#A9745A] bg-[#A9745A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#EFDAC5]"
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-white pointer-events-none peer-checked:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="text-[#A9745A] font-medium group-hover:text-[#8A5C47] transition-colors">
        Pre-checked
      </span>
    </label>

    <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
      <div className="relative">
        <input
          type="checkbox"
          disabled
          className="w-5 h-5 rounded-md border-2 border-[#DCCFC3] bg-[#F2ECE6]"
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-[#BFAF9D] pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="text-[#9D8975]">Disabled checkbox</span>
    </label>
  </div>
);

export default Checkbox;
