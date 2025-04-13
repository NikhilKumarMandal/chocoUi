import React from "react";

function Footer5() {
  return (
    <>
      <footer className="w-full bg-white border-t border-gray-200 py-12 md:py-16">
        <div className="w-full px-0">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-lg font-semibold">Choco UI</span>
                  </div>
                </div>

                <div className="max-w-sm space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building beautiful interfaces shouldn't be so difficult. Choco
                    UI provides a set of accessible, reusable, and composable
                    React components for faster development.
                  </p>

                  <form className="flex mt-6">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 min-w-0 px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-r-md hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      Subscribe
                    </button>
                  </form>

                  <div className="flex items-center space-x-3 mt-6">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      <span className="sr-only">YouTube</span>
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-black mb-4">
                    Product
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Changelog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Docs
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-black mb-4">
                    Company
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Customers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Brand
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-black mb-4">
                    Resources
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Community
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        DPA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                © 2025 Choco UI, Inc. All rights reserved.
              </p>

              <p className="text-sm text-gray-500 mt-4 sm:mt-0">
                Designed with <span className="text-black">♥</span> for modern
                interfaces
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer5;
