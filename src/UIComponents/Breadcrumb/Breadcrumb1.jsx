function Breadcrumb1() {
  return (
    <nav
      aria-label="breadcrumb"
      className="w-full px-4 py-3 bg-white dark:bg-gray-100 dark:text-gray-800"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm dark:text-gray-800">
        <li className="flex items-center">
          <a
            href="#"
            title="Back to homepage"
            className="hover:underline whitespace-nowrap"
          >
            Home
          </a>
        </li>

        <li className="flex items-center gap-x-1">
          <span className="text-gray-500">/</span>
          <a
            href="#"
            className="capitalize hover:underline whitespace-nowrap"
          >
            Parent
          </a>
        </li>

        <li className="flex items-center gap-x-1">
          <span className="text-gray-500">/</span>
          <a
            href="#"
            className="capitalize hover:underline whitespace-nowrap"
          >
            Parent
          </a>
        </li>

        <li className="flex items-center gap-x-1">
          <span className="text-gray-500">/</span>
          <span className="capitalize text-gray-500 cursor-default whitespace-nowrap">
            Current
          </span>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb1;