const Checkbox = () => (
  <div className="space-y-6 p-6 max-w-md mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200">
    <label className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-transparent checked:bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
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
      <span className="text-gray-700 group-hover:text-pink-600 transition-colors">
        Gradient checkbox
      </span>
    </label>

    <label className="flex items-start gap-3 group cursor-pointer">
      <div className="relative mt-1">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-md border-2 border-gray-300 checked:bg-green-500 checked:border-green-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-200"
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
        <span className="block text-gray-800 group-hover:text-green-600 font-medium transition-colors">
          Terms and conditions
        </span>
        <span className="block text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
          You agree to our terms of service and privacy policy
        </span>
      </div>
    </label>
  </div>
);

export default Checkbox;
