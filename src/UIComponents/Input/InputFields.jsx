const InputField = () => (
  <div className="space-y-6 p-6 max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200">
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full px-5 py-3 text-sm rounded-xl bg-white/60 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-300"
    />

    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        Email
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full px-5 py-3 text-sm rounded-xl bg-white/60 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-300"
      />
    </div>

    <input
      type="text"
      disabled
      placeholder="Disabled field"
      className="w-full px-5 py-3 text-sm rounded-xl bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed"
    />

    <div>
      <input
        type="text"
        placeholder="Error input"
        className="w-full px-5 py-3 text-sm rounded-xl bg-white/60 border border-red-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-red-400 transition duration-300"
      />
      <p className="mt-1 text-sm text-red-600 font-medium">
        This field is required
      </p>
    </div>

    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="pl-12 pr-5 py-3 w-full text-sm rounded-xl bg-white/60 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-300"
      />
    </div>
  </div>
);

export default InputField;
