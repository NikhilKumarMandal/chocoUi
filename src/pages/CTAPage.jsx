import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import ResponsiveCTA from "../UIComponents/CTA/ResponsiveCTA";
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
              <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-sm">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Take the next step with confidence
                  </h2>
          
                  <p className="text-gray-600 mb-8 md:text-lg">
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                      />
                    </div>
          
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={
                        "px-6 py-3 font-medium rounded-lg transition duration-200 " +
                        (isSubmitting
                          ? "bg-blue-400 text-white cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white")
                      }
                    >
                      {isSubmitting ? "Submitting..." : "Get Started"}
                    </button>
                  </form>
          
                  {submitted && (
                    <div className="mt-4 text-green-600 font-medium animate-fade-in">
                      Thank you! We'll be in touch soon.
                    </div>
                  )}
          
                  <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
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
          
                  <p className="mt-6 text-xs text-gray-400">
                    By signing up, you agree to our{" "}
                    <a href="#" className="underline hover:text-gray-600">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline hover:text-gray-600">
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
