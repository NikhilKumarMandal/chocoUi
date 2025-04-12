import React from "react";

export default function Footer1() {
  return (
    <>
      <footer className="w-screen bg-[#F2EFE5] text-[#4A4A4A] border-t border-[#C7C8CC] font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex flex-col items-start md:items-center gap-3 mb-4">
                <span className="text-xl font-medium tracking-wide text-[#4A4A4A]">
                  Company
                </span>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed font-light">
                Building digital solutions that create lasting value for
                businesses worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider text-[#6B6B6B] mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                {["About", "Careers", "Newsroom", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#4A4A4A] hover:text-[#737373] transition-colors text-sm font-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider text-[#6B6B6B] mb-3">
                Resources
              </h4>
              <ul className="space-y-2">
                {["Blog", "Help Center", "Documentation", "Status"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[#4A4A4A] hover:text-[#737373] transition-colors text-sm font-light"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider text-[#6B6B6B] mb-3">
                Stay Updated
              </h4>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-[#E3E1D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#737373] text-sm bg-[#F2EFE5] font-light"
                  aria-label="Email for newsletter"
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

          <div className="border-t border-[#C7C8CC] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#6B6B6B] font-light">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </div>
            <div className="flex gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-[#6B6B6B] hover:text-[#737373] transition-colors font-light"
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
