import React from "react";

export default function Footer1() {
  return (
    <>
      <footer className="bg-[#F2EFE5] text-[#4A4A4A] border-t border-[#C7C8CC] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex flex-col items-start md:items-center gap-3 mb-4">
                <span className="text-xl font-semibold text-[#4A4A4A]">
                  Company
                </span>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Building digital solutions that create lasting value for
                businesses worldwide.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                {["About", "Careers", "Newsroom", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#4A4A4A] hover:text-[#737373] transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">
                Resources
              </h4>
              <ul className="space-y-2">
                {["Blog", "Help Center", "Documentation", "Status"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[#4A4A4A] hover:text-[#737373] transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">
                Stay Updated
              </h4>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-[#E3E1D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#737373] text-sm bg-[#F2EFE5]"
                />
                <button
                  type="submit"
                  className="bg-[#525252] hover:bg-[#3F3F3F] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#C7C8CC] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#6B6B6B]">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </div>
            <div className="flex gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-[#6B6B6B] hover:text-[#737373] transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
