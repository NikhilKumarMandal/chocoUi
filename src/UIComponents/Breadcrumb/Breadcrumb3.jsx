import React from "react";

function Breadcrumb3() {
  const breadcrumbItems = [
    {
      label: "ChocoUI",
      href: "/",
      icon: (
        <svg
          className="shrink-0 me-3 size-4"
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
      ),
    },
    {
      label: "Component",
      href: "/component",
      icon: (
        <svg
          className="shrink-0 me-3 size-4"
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
          <rect width={7} height={7} x={14} y={3} rx={1} />
          <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
        </svg>
      ),
    },
    {
      label: "Breadcrumb",
    },
  ];

  const Chevron = () => (
    <svg
      className="shrink-0 mx-2 size-4 text-gray-400"
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  return (
    <div>
      <ol className="flex items-center whitespace-nowrap">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          if (isLast) {
            return (
              <li
                key={index}
                className="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
                aria-current="page"
              >
                {item.label}
              </li>
            );
          }

          return (
            <li key={index} className="inline-flex items-center">
              <a
                href={item.href}
                className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500"
              >
                {item.icon}
                {item.label}
              </a>
              <Chevron />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Breadcrumb3;
