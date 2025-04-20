const Checkbox = () => (
  <div className="space-y-6 p-6 max-w-md mx-auto bg-[#FDF9F4]/70 backdrop-blur-md rounded-2xl shadow-xl border border-[#E8DCCF]">
    {/* Choco Gradient Checkbox */}
    <label className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-full border-2 border-[#D7C3AE] checked:border-transparent checked:bg-gradient-to-br from-[#A9745A] to-[#7C4E3C] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#EFDAC5]"
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
        Gradient checkbox
      </span>
    </label>

    {/* Choco Terms Checkbox */}
    <label className="flex items-start gap-3 group cursor-pointer">
      <div className="relative mt-1">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-md border-2 border-[#D7C3AE] checked:bg-[#A9745A] checked:border-[#A9745A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#EFDAC5]"
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
      <div className="flex-1">
        <span className="block text-[#5B4634] group-hover:text-[#A9745A] font-medium transition-colors">
          Terms and conditions
        </span>
        <span className="block text-sm text-[#9D8975] group-hover:text-[#7C4E3C] transition-colors">
          You agree to our terms of service and privacy policy
        </span>
      </div>
    </label>
  </div>
);

export default Checkbox;
