function Breadcrumb1() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Parent", href: "/parent" },
    { label: "Child", href: "/parent/child" },
    { label: "Current" }, // current page — no href
  ];

  return (
    <nav
      aria-label="breadcrumb"
      className="w-full px-4 py-3 bg-white dark:bg-gray-100 dark:text-gray-800"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm dark:text-gray-800">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-x-1">
              {index > 0 && <span className="text-gray-500">/</span>}
              {isLast ? (
                <span className="capitalize text-gray-500 cursor-default whitespace-nowrap">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || "#"}
                  className="capitalize hover:underline whitespace-nowrap"
                  title={item.title || item.label}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb1;
