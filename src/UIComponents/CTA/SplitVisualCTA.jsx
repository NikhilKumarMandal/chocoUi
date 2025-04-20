import React, { useState } from "react";

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
                  className={`w-full py-3 px-4 rounded-lg font-medium text-[#FFEAC5] ${
                    submitting
                      ? "bg-[#7F6450]/80"
                      : "bg-[#603F26] hover:bg-[#7F6450]"
                  } transition duration-200 flex justify-center items-center`}
                >
                  {submitting ? (
                    <>
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
                    </>
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
