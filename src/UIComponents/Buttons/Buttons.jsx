const Button = () => {
  const baseStyles =
    "px-6 py-2 rounded-xl text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95";

  return (
    <div className="flex flex-wrap gap-4 p-8 bg-gradient-to-br from-gray-50 to-white min-h-screen items-center justify-center">
      <button
        type="button"
        className={`${baseStyles} bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-md hover:shadow-lg`}
        aria-label="Primary Button"
      >
        Primary
      </button>

      <button
        type="button"
        className={`${baseStyles} border border-blue-500 text-blue-600 bg-white/60 backdrop-blur-md hover:bg-blue-100 focus-visible:ring-blue-400 shadow-sm hover:shadow-md`}
        aria-label="Outline Button"
      >
        Outline
      </button>

      <button
        type="button"
        className={`${baseStyles} text-blue-600 bg-white/30 backdrop-blur-md hover:bg-blue-50 focus-visible:ring-blue-300 hover:shadow-inner`}
        aria-label="Ghost Button"
      >
        Ghost
      </button>

      <button
        type="button"
        className={`${baseStyles} bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow-md hover:shadow-lg`}
        aria-label="Delete Button"
      >
        Delete
      </button>

      <button
        type="button"
        className={`flex items-center gap-2 ${baseStyles} bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-400 shadow-sm hover:shadow-md`}
        aria-label="Add Item Button"
        title="Add Item"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Item
      </button>
    </div>
  );
};

export default Button;
