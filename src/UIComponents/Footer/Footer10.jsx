import React from "react";

function Footer10() {
  return (
    <>
      <footer className="w-screen bg-white text-black py-6 border-t border-gray-100">
        <div className="w-full px-0">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <a href="#" className="font-bold text-lg tracking-tight">
                  MONO
                </a>
              </div>

              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Work
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Blog
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="Dribbble"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.01-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.175.15.35.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Mono Studio. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-black transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-black transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-black transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer10;
