import React from "react";

function Breadcrumb4() {
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

export default Breadcrumb4;
