import Breadcrumb1 from "../UIComponents/Breadcrumb/Breadcrumb1";
import Breadcrumb2 from "../UIComponents/Breadcrumb/Breadcrumb2";
import Breadcrumb3 from "../UIComponents/Breadcrumb/Breadcrumb3";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function Breadcrumb() {
  const breadcrumbVariants = [
    {
      title: "The Navigator",
      component: <Breadcrumb1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `function Breadcrumb() {
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

export default Breadcrumb;
`,
        },
      ],
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "The Breadcrumb content",
          example: "'Home'",
        },
      ],
    },

    {
      title: "Symbolic Path",
      component: <Breadcrumb2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Breadcrumb() {
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
          
          export default Breadcrumb;
          `,
        },
      ],
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "'Parent'",
        },
      ],
    },

    {
      title: "Routed Breadcrumb",
      component: <Breadcrumb3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Breadcrumb() {
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
          
          export default Breadcrumb;
           `,
        },
      ],
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "'ChocoUI'",
        },
      ],
    },
  ];
  return (
    <div className="mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Breadcrumb Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Keep users oriented with clear navigation paths
      </p>
      <div className="mt-6 space-y-6">
        {breadcrumbVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;
