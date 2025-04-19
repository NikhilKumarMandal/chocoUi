import React from "react";
import Footer4 from "../UIComponents/Footer/Footer4";
import Footer7 from "../UIComponents/Footer/Footer7";
import Footer9 from "../UIComponents/Footer/Footer9";
import Footer10 from "../UIComponents/Footer/Footer10";
import Footer6 from "../UIComponents/Footer/Footer6";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function FooterPage() {
  const FooterVariants = [
    // Footer - 1
    {
      title: "Footer Hub",
      component: <Footer4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          export default function Footer() {
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
                        <h4 className="text-xl font-semibold tracking-wide">ChocoUi</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-400 text-center lg:text-left">
                        Innovating for tomorrow, delivering excellence today. We build
                        digital solutions that empower businesses worldwide.
                      </p>
                      <div className="flex justify-center lg:justify-start w-full gap-4 flex-wrap py-2">
                        {[
                          {
                            name: "Facebook",
                            path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                          },
                          {
                            name: "LinkedIn",
                            path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                          },
                          {
                            name: "Instagram",
                            path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                          },
                          {
                            name: "YouTube",
                            path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
                          },
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
                        <h4 className="text-lg font-semibold tracking-wide">
                          Quick Links
                        </h4>
                        <ul className="space-y-2">
                          {["Home", "Services", "About Us", "Contact", "Blog"].map(
                            (link) => (
                              <li key={link}>
                                <a
                                  href="#"
                                  className="text-sm hover:text-purple-400 transition-colors block py-1"
                                >
                                  {link}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-wide">Resources</h4>
                        <ul className="space-y-2">
                          {["Help Center", "Documentation", "Support", "API"].map(
                            (resource) => (
                              <li key={resource}>
                                <a
                                  href="#"
                                  className="text-sm hover:text-purple-400 transition-colors block py-1"
                                >
                                  {resource}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
          
                    <div className="lg:col-span-3 space-y-4">
                      <h4 className="text-lg font-semibold tracking-wide">
                        Stay Updated
                      </h4>
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
                        © {2025} Company Choco. All rights reserved.
                      </p>
                      <div className="flex gap-4">
                        {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
                          (item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                            >
                              {item}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            );
          }`,
        },
      ],
    },

    // Footer 2
    {
      title: "Modern Footer",
      component: <Footer6 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Footer() {
            return (
              <footer className="w-screen bg-black text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(50,50,50,0.4),rgba(0,0,0,0)_70%)]"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          
                <div className="w-full px-0 relative z-10">
                  <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                      <div className="lg:w-1/3 space-y-8">
                        <div>
                          <a href="#" className="text-2xl font-bold tracking-tighter">
                            Choco<span className="text-gray-500">UI</span>
                          </a>
                        </div>
          
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Create stunning interfaces with our glass morphism inspired UI
                          components. Perfect for modern web applications.
                        </p>
          
                        <div className="pt-2">
                          <a
                            href="#"
                            className="inline-flex items-center text-sm font-medium text-white hover:text-gray-300 transition-colors"
                          >
                            <span>Explore Documentation</span>
                            <svg
                              className="ml-1 w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
          
                      <div className="lg:w-2/3">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                          <div>
                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-5">
                              Products
                            </h3>
                            <ul className="space-y-3">
                              {["Components", "Templates", "Pricing", "FAQ"].map(
                                (item) => (
                                  <li key={item}>
                                    <a
                                      href="#"
                                      className="text-base text-white hover:text-gray-300 transition-colors"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
          
                          <div>
                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-5">
                              Company
                            </h3>
                            <ul className="space-y-3">
                              {["About", "Blog", "Jobs", "Partners"].map((item) => (
                                <li key={item}>
                                  <a
                                    href="#"
                                    className="text-base text-white hover:text-gray-300 transition-colors"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
          
                          <div>
                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-5">
                              Resources
                            </h3>
                            <ul className="space-y-3">
                              {["Docs", "Learn", "Showcase", "GitHub"].map((item) => (
                                <li key={item}>
                                  <a
                                    href="#"
                                    className="text-base text-white hover:text-gray-300 transition-colors"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
          
                          <div>
                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-5">
                              Legal
                            </h3>
                            <ul className="space-y-3">
                              {["Privacy", "Terms", "License", "Cookies"].map((item) => (
                                <li key={item}>
                                  <a
                                    href="#"
                                    className="text-base text-white hover:text-gray-300 transition-colors"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                      <p className="text-gray-400 text-sm">
                        © {2025} ChocoUI. All rights reserved.
                      </p>
          
                      <div className="flex space-x-6 mt-4 md:mt-0">
                        {[
                          {
                            name: "Twitter",
                            icon: (
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            ),
                          },
                          {
                            name: "GitHub",
                            icon: (
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            ),
                          },
                          {
                            name: "Dribbble",
                            icon: (
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                clipRule="evenodd"
                              />
                            ),
                          },
                        ].map((social) => (
                          <a
                            key={social.name}
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <span className="sr-only">{social.name}</span>
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              {social.icon}
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            );
          }
          
          export default Footer;
`,
        },
      ],
    },

    // Footer - 3
    {
      title: "Glass Footer",
      component: <Footer7 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Footer() {
            return (
              <>
                <footer className="w-full bg-white py-12 border-t border-gray-100">
                  <div className="w-full px-0">
                    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-8">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H7.50003C7.22389 8 7.00003 7.77614 7.00003 7.5V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                                fill="white"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
          
                        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
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
                            Features
                          </a>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition-colors"
                          >
                            Pricing
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
                            Support
                          </a>
                        </nav>
          
                        <div className="flex justify-center space-x-5 mb-8">
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Twitter"
                          >
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
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Instagram"
                          >
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="GitHub"
                          >
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                          </a>
                        </div>
          
                        <div className="w-full max-w-md mx-auto">
                          <div className="flex flex-col sm:flex-row border border-gray-200 rounded-lg overflow-hidden">
                            <input
                              type="email"
                              placeholder="Enter your email"
                              className="flex-1 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none"
                            />
                            <button
                              type="submit"
                              className="bg-black text-white px-5 py-3 text-sm font-medium"
                            >
                              Subscribe
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-3 text-center">
                            Get product updates and company announcements.
                          </p>
                        </div>
          
                        <div className="w-full mt-12 pt-8 border-t border-gray-100">
                          <p className="text-sm text-center text-gray-500">
                            © {2025} ChocoUi. All rights reserved.
                          </p>
          
                          <div className="flex justify-center mt-4 space-x-6">
                            <a
                              href="#"
                              className="text-xs text-gray-500 hover:text-gray-600 transition-colors"
                            >
                              Privacy Policy
                            </a>
                            <a
                              href="#"
                              className="text-xs text-gray-500 hover:text-gray-600 transition-colors"
                            >
                              Terms of Service
                            </a>
                            <a
                              href="#"
                              className="text-xs text-gray-500 hover:text-gray-600 transition-colors"
                            >
                              Cookies
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </>
            );
          }
          
          export default Footer;`,
        },
      ],
    },

    // Footer - 4
    {
      title: "Centered Footer",
      component: <Footer9 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `function Footer() {
  return (
    <>
      <footer className="w-screen bg-white text-black border-t border-gray-200 py-8">
        <div className="w-full px-0">
          <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4 w-full md:w-auto">
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="black" />
                  <path
                    d="M7 12H17M12 7V17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="ml-2 font-semibold text-xl">Choco</span>
              </div>
              <p className="text-gray-600 text-sm max-w-xs">
                Clean, simple, and functional designs for the modern web.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
              <div className="space-y-3">
                <h4 className="font-medium text-sm uppercase tracking-wider">
                  Company
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-black transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-black transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-black transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm uppercase tracking-wider">
                  Support
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-black transition-colors"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-black transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-black transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 col-span-2 md:col-span-1">
                <h4 className="font-medium text-sm uppercase tracking-wider">
                  Newsletter
                </h4>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white rounded px-4 py-2 text-sm font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-200 mt-8 pt-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2025 Choco. All rights reserved.
              </p>

              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
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
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;`,
        },
      ],
    },

    {
      title: "Clean Footer",
      component: <Footer10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Footer() {
            return (
              <>
                <footer className="w-screen bg-white text-black py-6 border-t border-gray-100">
                  <div className="w-full px-0">
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex items-center">
                          <a href="#" className="font-bold text-lg tracking-tight">
                            CHOCO
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
                          © {2025} ChocoUi. All rights reserved.
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
          
          export default Footer;
          `,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Component Previews
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {FooterVariants.map((variant, index) => (
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

export default FooterPage;
