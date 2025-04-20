import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import ResponsiveCTA from "../UIComponents/CTA/ResponsiveCTA";
import SplitVisualCTA from "../UIComponents/CTA/SplitVisualCTA";
function CTAPage() {
  const CTAVariants = [
    {
      title: "CTA",
      component: <ResponsiveCTA />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";
          
          const ResponsiveCTA = () => {
            const [email, setEmail] = useState("");
            const [isSubmitting, setIsSubmitting] = useState(false);
            const [submitted, setSubmitted] = useState(false);
          
            const handleSubmit = (e) => {
              e.preventDefault();
              setIsSubmitting(true);
          
              setTimeout(() => {
                setIsSubmitting(false);
                setSubmitted(true);
                setEmail("");
          
                setTimeout(() => setSubmitted(false), 3000);
              }, 1000);
            };
          
            return (
              <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-[#FDF9F4] to-[#F7EFE7] rounded-xl shadow-sm border border-[#E8DCCF]">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4B3621] mb-4">
                    Take the next step with confidence
                  </h2>
          
                  <p className="text-[#7D6651] mb-8 md:text-lg">
                    Join thousands of satisfied customers who've transformed their
                    experience. Start your journey today.
                  </p>
          
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 mx-auto max-w-lg"
                  >
                    <div className="relative flex-grow">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#D7C3AE] focus:ring-2 focus:ring-[#D9B99B] focus:border-transparent outline-none transition duration-200 bg-white text-[#4B3621] placeholder:text-[#BBAA99]"
                      />
                    </div>
          
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={
                        "px-6 py-3 font-medium rounded-lg transition duration-200 " +
                        (isSubmitting
                          ? "bg-[#B08968] text-white cursor-not-allowed"
                          : "bg-[#7C4E3C] hover:bg-[#5C3B2E] text-white")
                      }
                    >
                      {isSubmitting ? "Submitting..." : "Get Started"}
                    </button>
                  </form>
          
                  {submitted && (
                    <div className="mt-4 text-green-700 font-medium animate-fade-in">
                      Thank you! We'll be in touch soon.
                    </div>
                  )}
          
                  <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-[#7D6651]">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>No credit card required</span>
                    </div>
          
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Cancel anytime</span>
                    </div>
          
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>24/7 support</span>
                    </div>
                  </div>
          
                  <p className="mt-6 text-xs text-[#BCAFA2]">
                    By signing up, you agree to our{" "}
                    <a href="#" className="underline hover:text-[#7C4E3C]">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline hover:text-[#7C4E3C]">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            );
          };
          
          export default ResponsiveCTA;
          `,
        },
      ],
    },
    {
      title: "CTA",
      component: <SplitVisualCTA />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from "react";

const SplitVisualCTA = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setEmail("");

      setTimeout(() => setSubmitted(false), 3000);
    }, 800);
  };

  return (
    <div className="w-full max-w-6xl m-4 mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#603F26] text-[#FFEAC5] p-8 md:p-12 flex items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Powerful Features</h2>
            <p className="text-[#FFEAC5]/80 mb-8 text-lg">
              Our UI library is built with the developer experience in mind,
              making it easy to create beautiful interfaces that delight your
              users.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#7F6450] flex items-center justify-center mt-1">
                  <svg
                    className="h-4 w-4 text-[#FFEAC5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Modular Components</h3>
                  <p className="mt-1 text-[#FFEAC5]/70">
                    Fully customize online services and users
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#7F6450] flex items-center justify-center mt-1">
                  <svg
                    className="h-4 w-4 text-[#FFEAC5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Customizable</h3>
                  <p className="mt-1 text-[#FFEAC5]/70">
                    Easily customize colors, spacing, and more to match your
                    design system with minimal effort.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#7F6450] flex items-center justify-center mt-1">
                  <svg
                    className="h-4 w-4 text-[#FFEAC5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Performance First</h3>
                  <p className="mt-1 text-[#FFEAC5]/70">
                    Our components are optimized for speed and efficiency to
                    ensure the best user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#FFEAC5] p-8 md:p-12 flex items-center">
          <div className="w-full">
            <h3 className="text-2xl font-semibold text-[#603F26] mb-2">
              Contact us for customized components
            </h3>
            <p className="text-[#7F6450] mb-6">
              Get in touch to discuss how we can tailor our components to your
              specific needs.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Thanks! We'll be in touch soon.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#7F6450] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-[#7F6450]/50 rounded-lg focus:ring-2 focus:ring-[#603F26] focus:border-transparent bg-[#FFEAC5] placeholder-[#7F6450]/70"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={"w-full py-3 px-4 rounded-lg font-medium text-[#FFEAC5] " + (submitting ? "bg-[#7F6450]/80" : "bg-[#603F26] hover:bg-[#7F6450]") + " transition duration-200 flex justify-center items-center"}
                >
                  {submitting ? (
                    <React.Fragment>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#FFEAC5]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </React.Fragment>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-[#7F6450]/30">
              <h4 className="text-sm font-medium text-[#7F6450] mb-4">
                Trusted by teams at
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center justify-center text-[#7F6450] font-bold">
                  ACME
                </div>
                <div className="flex items-center justify-center text-[#7F6450] font-bold">
                  XYZ
                </div>
                <div className="flex items-center justify-center text-[#7F6450] font-bold">
                  123 Inc
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SplitVisualCTA;
          `,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        CTA Component
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore different UI components you can use in your project CTA
        component.
      </p>
      <div className="mt-6 space-y-6">
        {CTAVariants.map((variant, index) => (
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

export default CTAPage;
