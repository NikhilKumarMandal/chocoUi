import React from "react";

function Breadcrumb2() {
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

export default Breadcrumb2;
