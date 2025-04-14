import Breadcrumb1 from "../UIComponents/Breadcrumb/Breadcrumb1";
import Breadcrumb2 from "../UIComponents/Breadcrumb/Breadcrumb2";
import Breadcrumb3 from "../UIComponents/Breadcrumb/Breadcrumb3";
import Breadcrumb4 from "../UIComponents/Breadcrumb/Breadcrumb4";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function Breadcrumb() {
  const breadcrumbVariants = [
    {
      title: "Breadcrumb",
      component: <Breadcrumb1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `function Breadcrumb() {
  return (
    <nav
      aria-label="breadcrumb"
      className="w-full p-4 dark:bg-gray-100 dark:text-gray-800"
    >
      <ol className="flex h-8 space-x-2 dark:text-gray-800">
        <li className="flex items-center">
          <a
            rel="noopener noreferrer"
            href="#"
            title="Back to homepage"
            className="flex items-center hover:underline"
          >
            Home
          </a>
        </li>
        <li className="flex items-center space-x-1">
          <span className="dark:text-gray-600">/</span>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center px-1 capitalize hover:underline"
          >
            Parent
          </a>
        </li>
        <li className="flex items-center space-x-1">
          <span className="dark:text-gray-600">/</span>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center px-1 capitalize hover:underline"
          >
            Parent
          </a>
        </li>
        <li className="flex items-center space-x-1">
          <span className="dark:text-gray-600">/</span>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default"
          >
            Current
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;

`,
        },
      ],
    },

    {
      title: "Breadcrumb",
      component: <Breadcrumb2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Breadcrumb() {
            return (
              <nav
                aria-label="breadcrumb"
                className="w-full p-4 dark:bg-gray-100 dark:text-gray-800"
              >
                <ol className="flex h-8 space-x-2">
                  <li className="flex items-center">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Back to homepage"
                      className="hover:underline"
                    >
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
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      fill="currentColor"
                      className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
                    >
                      <path d="M32 30.031h-32l16-28.061z"></path>
                    </svg>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-1 capitalize hover:underline"
                    >
                      Parent
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      fill="currentColor"
                      className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
                    >
                      <path d="M32 30.031h-32l16-28.061z"></path>
                    </svg>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-1 capitalize hover:underline"
                    >
                      Parent
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      fill="currentColor"
                      className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
                    >
                      <path d="M32 30.031h-32l16-28.061z"></path>
                    </svg>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default"
                    >
                      Current
                    </a>
                  </li>
                </ol>
              </nav>
            );
          }
          
          export default Breadcrumb;
          
          `,
        },
      ],
    },

    {
      title: "Breadcrumb",
      component: <Breadcrumb3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <>
      <div>
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <Link
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 "
              href="#"
            >
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
              ChocoUI
            </Link>
            <svg
              className="shrink-0 mx-2 size-4 text-gray-400 "
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
          </li>
          <li className="inline-flex items-center">
            <Link
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 "
              href="#"
            >
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
              Component
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
            </Link>
          </li>
          <li
            className="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
            aria-current="page"
          >
            Breadcrumb
          </li>
        </ol>
      </div>
    </>
  );
}

export default Breadcrumb;
          `,
        },
      ],
    },

    {
      title: "Breadcrumb",
      component: <Breadcrumb4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Breadcrumb() {
            return (
              <>
                <div className="bg-white p-4 flex items-center flex-wrap">
                  <ul className="flex items-center">
                    <li className="inline-flex items-center">
                      <a href="#" className="text-gray-600 hover:text-blue-500">
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
                      </a>
                      <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
                    </li>
                    <li className="inline-flex items-center">
                      <a href="#" className="text-gray-600 hover:text-blue-500">
                        Component
                      </a>
                      <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
                    </li>
                    <li className="inline-flex items-center">
                      <a href="#" className="text-gray-600 hover:text-blue-500">
                        Breadcrumb
                      </a>
                      <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
                    </li>
                    <li className="inline-flex items-center">
                      <a href="#" className="text-gray-600 hover:text-blue-500">
                        Slash Design
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            );
          }
          
          export default Breadcrumb;
          `,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">Component Previews</h1>
      <p className="text-gray-600 mt-2">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {breadcrumbVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;
