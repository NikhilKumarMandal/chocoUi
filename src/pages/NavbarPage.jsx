import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Navbar5 from "../UIComponents/Navbar/Navbar5";
import Navbar6 from "../UIComponents/Navbar/Navbar6";
import Navbar7 from "../UIComponents/Navbar/Navbar7";
import Navbar9 from "../UIComponents/Navbar/Navbar9";
import Navbar10 from "../UIComponents/Navbar/Navbar10";

export default function NavbarComForUser() {
  const navbarVariants = [
    {
      title: "Harmony Bar",
      component: <Navbar10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Navbar = () => {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
          
            const toggleMenu = () => {
              setIsMenuOpen(!isMenuOpen);
            };
          
            const menuIconClass = isMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6";
            const closeIconClass = isMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6";
            const mobileMenuClass = isMenuOpen ? "block md:hidden" : "hidden md:hidden";
          
            return (
              <>
                <header className="bg-white border-b border-gray-100">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-900 text-xl font-bold">
                          Brand
                        </a>
                      </div>
          
                      <nav className="hidden md:flex items-center space-x-6">
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                        >
                          <svg
                            className="w-5 h-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Home
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                        >
                          <svg
                            className="w-5 h-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          About
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                        >
                          <svg
                            className="w-5 h-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          Services
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                        >
                          <svg
                            className="w-5 h-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          Contact
                        </a>
                      </nav>
          
                      <div className="md:hidden flex items-center">
                        <button
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className={menuIconClass}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                          <svg
                            className={closeIconClass}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
          
                  <div className={mobileMenuClass}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                        Home
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        About
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Services
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Contact
                      </a>
                    </div>
                  </div>
                </header>
              </>
            );
          };
          
          export default Navbar;
          `,
        },
      ],
    },

    {
      title: "Shadow Bar",
      component: <Navbar5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Navbar = () => {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
          
            const toggleMenu = () => {
              setIsMenuOpen(!isMenuOpen);
            };
          
            const hamburgerIconClass = isMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6";
            const closeIconClass = isMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6";
            const mobileMenuClass = isMenuOpen ? "block md:hidden" : "hidden md:hidden";
          
            return (
              <>
                <header className="bg-gray-900">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                      <div className="flex items-center">
                        <a href="#" className="text-white text-xl font-bold">
                          Choco
                        </a>
                      </div>
          
                      <nav className="hidden md:flex items-center space-x-4 sm:space-x-8">
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                      </nav>
          
                      <div className="md:hidden flex items-center">
                        <button
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          aria-expanded={isMenuOpen}
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className={hamburgerIconClass}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                          <svg
                            className={closeIconClass}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
          
                  <div className={mobileMenuClass}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</a>
                      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
                      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Services</a>
                      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
                    </div>
                  </div>
                </header>
              </>
            );
          };
          
          export default Navbar;
          `,
        },
      ],
    },
    {
      title: "Breeze Bar",
      component: <Navbar6 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const Navbar = () => {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
          
            const toggleMenu = () => {
              setIsMenuOpen(!isMenuOpen);
            };
          
            const hamburgerIconClass = isMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6";
            const closeIconClass = isMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6";
            const mobileMenuClass = isMenuOpen ? "block md:hidden" : "hidden md:hidden";
          
            return (
              <>
                <header className="border-b border-gray-200">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-900 text-xl font-bold">
                          Choco
                        </a>
                      </div>
          
                      <nav className="hidden md:flex items-center space-x-4 sm:space-x-8">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                      </nav>
          
                      <div className="md:hidden flex items-center">
                        <button
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                          aria-expanded={isMenuOpen}
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className={hamburgerIconClass}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                          <svg
                            className={closeIconClass}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
          
                  <div className={mobileMenuClass}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Home</a>
                      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">About</a>
                      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Services</a>
                      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Contact</a>
                    </div>
                  </div>
                </header>
              </>
            );
          };
          
          export default Navbar;`,
        },
      ],
    },
  ];

  return (
    <div className=" mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-[#603F26]">Navbar Components</h1>
      <p className="text-[#1a1a1a] mt-2">
      A sleek and adaptive navigation bar
      </p>
      <div className="mt-6 space-y-6">
        {navbarVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}
