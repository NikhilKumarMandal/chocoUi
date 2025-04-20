import React, { useState } from "react";

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
