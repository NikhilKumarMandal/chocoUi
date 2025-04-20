import Pricing2 from "../UIComponents/Pricing/Pricing2";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function PricingSection() {
  const PricingVariants = [
    {
      title: "Pricing Cards",
      component: <Pricing2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `function Pricing2() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="bg-[#7F6450] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#FFEAC5] rounded-lg">
              <svg
                className="w-6 h-6 text-[#603F26]"
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
            <h2 className="text-[0.2px] md:text-2xl font-bold text-[#FFEAC5]">
              For Individuals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 text-[9px] sm:text-xl">
            <div className="bg-[#603F26] rounded-lg p-6 hover:border-[#FFEAC5] border border-[#7F6450] transition-all duration-200 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-3 text-[#FFEAC5]">
                <svg
                  className="w-4 h-4 text-[#FFEAC5]"
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
                <span className="text-xl ls:text-4xl font-bold text-[#FFEAC5]">
                  $39
                </span>
                <span className="text-sm text-[#FFEAC5]/80 ml-1 mb-1">
                  /month
                </span>
              </div>

              <div className="border-t border-[#7F6450] my-5"></div>

              <ul className="text-[#FFEAC5] mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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

              <button className="w-full py-3 bg-[#FFEAC5] text-[#603F26] rounded-lg hover:bg-[#FFEAC5]/90 transition-colors font-medium flex items-center justify-center gap-2 mb-4">
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
                className="block text-center text-[#FFEAC5] hover:text-[#FFEAC5]/80 text-sm font-medium"
              >
                Try a free 7-Day trial →
              </a>
            </div>

            <div className="bg-[#603F26] rounded-lg p-6 border-2 border-[#FFEAC5] relative hover:scale-[1.02] transition-all duration-200">
              <div className="absolute top-4 right-4 bg-[#FFEAC5] text-[#603F26] text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
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

              <div className="flex items-center gap-2 mb-3 text-[#FFEAC5]">
                <svg
                  className="w-4 h-4 text-[#FFEAC5]"
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
                <span className="text-2xl ls:text-4xl font-bold text-[#FFEAC5]">
                  $390
                </span>
                <span className="text-sm text-[#FFEAC5]/80 ml-1 mb-1">
                  /year
                </span>
              </div>

              <div className="text-sm text-[#FFEAC5]/80 mb-4">
                ($32.50/month)
              </div>

              <div className="border-t border-[#7F6450] my-5"></div>

              <ul className="text-[#FFEAC5] mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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

              <button className="w-full py-3 bg-[#FFEAC5] text-[#603F26] rounded-lg hover:bg-[#FFEAC5]/90 transition-colors font-medium flex items-center justify-center gap-2 mb-4">
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
                className="block text-center text-[#FFEAC5] hover:text-[#FFEAC5]/80 text-sm font-medium"
              >
                Try a free 7-Day trial →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#7F6450] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#FFEAC5] rounded-lg">
              <svg
                className="w-6 h-6 text-[#603F26]"
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
            <h2 className="text-2xl font-bold text-[#FFEAC5]">For Teams</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 text-[9px] sm:text-xl">
            <div className="bg-[#603F26] rounded-lg p-6 hover:border-[#FFEAC5] border border-[#7F6450] transition-all duration-200 hover:scale-[1.02]">
              <div className="flex items-center flex-wrap gap-2 mb-3 text-[#FFEAC5]">
                <svg
                  className="w-4 h-4 text-[#FFEAC5]"
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
                <span className="text-xl ls:text-4xl font-bold text-[#FFEAC5]">
                  $24.50
                </span>
                <span className="text-[9px] sm:text-sm text-[#FFEAC5]/80 ml-1 mb-1">
                  /month
                </span>
              </div>

              <div className="text-sm text-[#FFEAC5]/80 mb-1">
                Minimum 10 seats
              </div>

              <div className="border-t border-[#7F6450] my-5"></div>

              <ul className="text-[#FFEAC5] mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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

              <button className="w-full py-3 bg-[#FFEAC5] text-[#603F26] rounded-lg hover:bg-[#FFEAC5]/90 transition-colors font-medium flex items-center justify-center gap-2">
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

            <div className="bg-[#603F26] rounded-lg p-6 border-2 border-[#FFEAC5] relative hover:scale-[1.02] transition-all duration-200">
              <div className="absolute top-4 right-4 bg-[#FFEAC5] text-[#603F26] text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
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

              <div className="flex items-center gap-2 mb-3 text-[#FFEAC5]">
                <svg
                  className="w-4 h-4 text-[#FFEAC5]"
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
                <span className="text-xl ls:text-4xl font-bold text-[#FFEAC5]">
                  $245
                </span>
                <span className="text-sm text-[#FFEAC5]/80 ml-1 mb-1">
                  /year
                </span>
              </div>

              <div className="text-sm text-[#FFEAC5]/80 mb-4">
                ($20.42/month)
              </div>

              <div className="border-t border-[#7F6450] my-5"></div>

              <ul className="text-[#FFEAC5] mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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
                    className="w-4 h-4 text-[#FFEAC5] mt-0.5 flex-shrink-0"
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

              <button className="w-full py-3 bg-[#FFEAC5] text-[#603F26] rounded-lg hover:bg-[#FFEAC5]/90 transition-colors font-medium flex items-center justify-center gap-2">
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

          <div className="text-center text-[#FFEAC5]/80 text-sm mt-6">
            Need custom enterprise solutions? Email{" "}
            <a
              href="mailto:support@chocoui.com"
              className="text-[#FFEAC5] font-medium hover:text-[#FFEAC5]/80 transition-colors"
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
        {PricingVariants.map((variant, index) => (
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

export default PricingSection;
