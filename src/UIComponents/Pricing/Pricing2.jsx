function Pricing2() {
  return (
    <div className="bg-[#2A1B10] min-h-screen flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-1  gap-8">
        <div className="bg-[#3C2613] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#6C4E31] rounded-lg">
              <svg
                className="w-6 h-6 text-[#FFDBB5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-[0.2px]  md:text-2xl font-bold text-[#FFDBB5]">
              For Individuals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 text-[9px] sm:text-xl">
            <div className="bg-[#2A1B10] rounded-lg p-6 hover:border-[#6C4E31] border border-[#3C2613] transition-all duration-200 hover:scale-[1.02]">
              <div className="flex items-center  gap-2 mb-3 text-[#FFDBB5]/80">
                <svg
                  className="w-4 h-4 text-[#FFDBB5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Monthly</span>
              </div>
              <div className="flex items-end mb-1">
                <span className="text-xl ls:text-4xl font-bold text-[#FFDBB5]">
                  $39
                </span>
                <span className="text-sm text-[#FFDBB5]/60 ml-1 mb-1">/month</span>
              </div>

              <div className="border-t border-[#3C2613] my-5"></div>

              <ul className="text-[#FFDBB5]/80 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access all in-depth courses</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Interactive workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Mobile app access</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-[#6C4E31] text-[#FFDBB5] rounded-lg hover:bg-[#8A6A4A] transition-colors font-medium flex items-center justify-center gap-2 mb-4">
                Start Learning
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="block text-center text-[#FFDBB5] hover:text-[#FFDBB5]/80 text-sm font-medium"
              >
                Try a free 7-Day trial →
              </a>
            </div>

            <div className="bg-[#2A1B10] rounded-lg p-6 border-2 border-[#6C4E31] relative hover:scale-[1.02] transition-all duration-200">
              <div className="absolute top-4 right-4 bg-[#6C4E31] text-[#FFDBB5] text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span>Save 17%</span>
              </div>

              <div className="flex items-center gap-2 mb-3 text-[#FFDBB5]/80">
                <svg
                  className="w-4 h-4 text-[#FFDBB5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Yearly</span>
              </div>
              <div className="flex items-end mb-1">
                <span className=" text-2xl ls:text-4xl font-bold text-[#FFDBB5]">
                  $390
                </span>
                <span className="text-sm text-[#FFDBB5]/60 ml-1 mb-1">/year</span>
              </div>

              <div className="text-sm text-[#FFDBB5]/60 mb-4">($32.50/month)</div>

              <div className="border-t border-[#3C2613] my-5"></div>

              <ul className="text-[#FFDBB5]/80 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>All monthly benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Exclusive yearly content</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-[#6C4E31] text-[#FFDBB5] rounded-lg hover:bg-[#8A6A4A] transition-colors font-medium flex items-center justify-center gap-2 mb-4">
                Get Yearly Access
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="block text-center text-[#FFDBB5] hover:text-[#FFDBB5]/80 text-sm font-medium"
              >
                Try a free 7-Day trial →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#3C2613] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#6C4E31] rounded-lg">
              <svg
                className="w-6 h-6 text-[#FFDBB5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#FFDBB5]">For Teams</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 text-[9px] sm:text-xl">
            <div className="bg-[#2A1B10] rounded-lg p-6 hover:border-[#6C4E31] border border-[#3C2613] transition-all duration-200 hover:scale-[1.02]">
              <div className="flex items-center flex-wrap gap-2 mb-3 text-[#FFDBB5]/80">
                <svg
                  className="w-4 h-4 text-[#FFDBB5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Monthly</span>
              </div>
              <div className="flex items-end mb-1">
                <span className=" text-xl ls:text-4xl font-bold text-[#FFDBB5]">
                  $24.50
                </span>
                <span className="text-[9px] sm:text-sm text-[#FFDBB5]/60 ml-1 mb-1">/month</span>
              </div>

              <div className="text-sm text-[#FFDBB5]/60 mb-1">Minimum 10 seats</div>

              <div className="border-t border-[#3C2613] my-5"></div>

              <ul className="text-[#FFDBB5]/80 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access for 10+ users</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Detailed usage reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Reassignable seats</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-[#6C4E31] text-[#FFDBB5] rounded-lg hover:bg-[#8A6A4A] transition-colors font-medium flex items-center justify-center gap-2">
                Get Team Access
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-[#2A1B10] rounded-lg p-6 border-2 border-[#6C4E31] relative hover:scale-[1.02] transition-all duration-200">
              <div className="absolute top-4 right-4 bg-[#6C4E31] text-[#FFDBB5] text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span>Save 37%</span>
              </div>

              <div className="flex items-center gap-2 mb-3 text-[#FFDBB5]/80">
                <svg
                  className="w-4 h-4 text-[#FFDBB5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Yearly</span>
              </div>
              <div className="flex items-end mb-1">
                <span className="text-xl ls:text-4xl font-bold text-[#FFDBB5]">
                  $245
                </span>
                <span className="text-sm text-[#FFDBB5]/60 ml-1 mb-1">
                  /year
                </span>
              </div>

              <div className="text-sm text-[#FFDBB5]/60 mb-4">($20.42/month)</div>

              <div className="border-t border-[#3C2613] my-5"></div>

              <ul className="text-[#FFDBB5]/80 mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>All monthly team benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#6C4E31] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom learning paths</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-[#6C4E31] text-[#FFDBB5] rounded-lg hover:bg-[#8A6A4A] transition-colors font-medium flex items-center justify-center gap-2">
                Get Yearly Team Access
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-center text-[#FFDBB5]/60 text-sm mt-6">
            Need custom enterprise solutions? Email{" "}
            <a
              href="mailto:support@chocoui.com"
              className="text-[#FFDBB5] font-medium hover:text-[#FFDBB5]/80 transition-colors"
            >
              support@chocoui.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing2;
