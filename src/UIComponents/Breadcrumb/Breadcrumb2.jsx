import React from "react";

function Breadcrumb2() {
  const breadcrumbItems = [
    { label: "Parent", href: "/parent" },
    { label: "Child", href: "/parent/child" },
    { label: "Current" },
  ];

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="w-2 h-2 mt-1 rotate-90 fill-current text-gray-400"
    >
      <path d="M32 30.031h-32l16-28.061z" />
    </svg>
  );

  return (
    <nav
      aria-label="breadcrumb"
      className="w-full px-4 py-3 bg-white dark:bg-gray-100 dark:text-gray-800"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {/* Home Icon */}
        <li className="flex items-center">
          <a
            href="/"
            title="Back to homepage"
            className="hover:underline flex items-center"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </a>
        </li>
        
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-x-1">
              <ArrowIcon />
              {isLast ? (
                <span className="capitalize text-gray-500 cursor-default whitespace-nowrap">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || "#"}
                  className="capitalize hover:underline whitespace-nowrap"
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

export default Breadcrumb2;
