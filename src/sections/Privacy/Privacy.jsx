import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.style.display = "none";
    document.body.offsetHeight;
    document.body.style.display = "";

    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const privacySections = [
    {
      title: "Cookie Policy",
      description:
        "We use cookies to make your experience sweeter than a chocolate chip. By continuing to use our site, you agree to our cookie policy. Don't worry, we don't eat your cookies - we just use them to remember your preferences!",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Data Collection",
      description:
        "We collect data like a chocolate factory collects cocoa beans - with care and precision. Your data is stored in our secure chocolate vault, protected by our trained chocolate security guards.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.45801 12C3.73201 7.943 7.52301 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.52301 19 3.73201 16.057 2.45801 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Third-Party Sharing",
      description:
        "We share your data with third parties about as often as we share our secret chocolate recipe - which is never! Your information stays with us, like a chocolate bar in a child's pocket.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3765 17.7642 20.3765 18.295C20.3765 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2965 18.375 20.2965C17.8442 20.2965 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 8.97 19.4C8.35293 19.1277 7.63224 19.2583 7.15 19.73L7.09 19.79C6.71485 20.1656 6.20581 20.3765 5.675 20.3765C5.14419 20.3765 4.63515 20.1656 4.26 19.79C3.88435 19.4149 3.67346 18.9058 3.67346 18.375C3.67346 17.8442 3.88435 17.3351 4.26 16.96L4.32 16.9C4.79167 16.4178 4.92231 15.6971 4.65 15.08C4.39093 14.4755 3.79764 14.0826 3.14 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 8.97C4.87231 8.35293 4.74167 7.63224 4.27 7.15L4.21 7.09C3.83435 6.71485 3.62346 6.20581 3.62346 5.675C3.62346 5.14419 3.83435 4.63515 4.21 4.26C4.58515 3.88435 5.09419 3.67346 5.625 3.67346C6.15581 3.67346 6.66485 3.88435 7.04 4.26L7.1 4.32C7.58224 4.79167 8.30293 4.92231 8.92 4.65H9C9.60447 4.39093 9.99738 3.79764 10 3.14V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87231 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83435 17.7642 3.62346 18.295 3.62346C18.8258 3.62346 19.3349 3.83435 19.71 4.21C20.0856 4.58515 20.2965 5.09419 20.2965 5.625C20.2965 6.15581 20.0856 6.66485 19.71 7.04L19.65 7.1C19.1783 7.58224 19.0477 8.30293 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Your Rights",
      description:
        "You have the right to access, modify, or delete your data. Just like you have the right to choose between milk chocolate, dark chocolate, or white chocolate. We're here to serve your preferences!",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 11L12 14L22 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-[#fcedd2]/30 to-white overflow-hidden py-16 md:py-24">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] rounded-full bg-[#FFDBB5]/20 blur-3xl -z-10 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-[#6C4E31]/10 blur-3xl -z-10 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#FFEAC5]/15 blur-3xl -z-10 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-[#603F26] text-white rounded-lg hover:bg-[#4A3019] transition-colors duration-300 font-['Inter'] text-sm shadow-md"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12 text-center"
        >
          <div className="inline-block mb-2 px-3 py-1 bg-[#FFEAC5]/50 rounded-full">
            <span className="text-xs font-medium text-[#603F26] font-['Inter']">
              Privacy Policy
            </span>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900 font-['Bricolage']">
            <span className="font-['InstrumentSerif'] text-[#603F26] font-normal italic">
              Sweet
            </span>{" "}
            Privacy
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-lg mx-auto font-['Inter'] leading-relaxed">
            Our commitment to protecting your data is as strong as our
            chocolate. We value your privacy and ensure your information is
            handled with care.
          </p>
        </motion.div>

        {/* Privacy sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-xl border border-[#3C2613]/10 bg-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:scale-[1.01] overflow-hidden text-[#603F26] group-hover:bg-[#3C2613] group-hover:border-[#3C2613]/80">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-white/20 border border-white/30 transition-all duration-300 group-hover:bg-[#FFDBB5]/30">
                  <div className="text-lg group-hover:text-white">
                    {section.icon}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-[#603F26] transition-colors duration-300 font-['Bricolage'] group-hover:text-white">
                  {section.title}
                </h3>
                <p className="text-[#6C4E31]/90 text-sm font-['Inter'] leading-relaxed group-hover:text-white/90">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600 font-['Inter'] italic">
            Last updated: When the chocolate factory's clock struck midnight
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Privacy;
