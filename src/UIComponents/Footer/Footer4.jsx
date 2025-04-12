import React from "react";

export default function Footer4() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-purple-400"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22C5.2 15.7 6.65 14 8.33 14h5.33c1.68 0 3.13 1.7 3.67 3.98-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
              <h4 className="text-xl font-semibold tracking-wide">Company X</h4>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 text-center lg:text-left">
              Innovating for tomorrow, delivering excellence today. We build
              digital solutions that empower businesses worldwide.
            </p>
            <div className="flex justify-center lg:justify-start w-full gap-4 flex-wrap py-2">
              {[
                { name: "Facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                { name: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { name: "YouTube", path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="hover:text-purple-400 transition-colors p-1"
                  aria-label={social.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Services", "About Us", "Contact", "Blog"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-purple-400 transition-colors block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold tracking-wide">Resources</h4>
              <ul className="space-y-2">
                {["Help Center", "Documentation", "Support", "API"].map((resource) => (
                  <li key={resource}>
                    <a
                      href="#"
                      className="text-sm hover:text-purple-400 transition-colors block py-1"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-semibold tracking-wide">Stay Updated</h4>
            <form className="flex flex-col space-y-3 w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                aria-label="Email address"
              />
              <button
                type="button"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md py-3 px-6 text-sm font-semibold hover:from-purple-600 hover:to-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Company X. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
