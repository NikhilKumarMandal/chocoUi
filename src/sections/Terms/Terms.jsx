import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Terms() {
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

  const termsSections = [
    {
      title: "Acceptance of Terms",
      description:
        "By accessing our chocolate factory of components, you agree to these terms faster than a kid spotting a candy bar. If you don't agree, please exit through the gift shop and leave the chocolate for the rest of us.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "License & Usage",
      description:
        "Our components are licensed like a chocolate recipe - you can use them to create your own delicious creations, but you can't claim they're your original recipe. Attribution is required, just like giving credit to the chocolatier.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 7H18C19.1046 7 20 7.89543 20 9V15C20 16.1046 19.1046 17 18 17H15M9 7H6C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H9M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Prohibited Uses",
      description:
        "Don't use our components for anything illegal, harmful, or that would make Willy Wonka cry. No creating chocolate-covered malware or cocoa-flavored scams. We reserve the right to revoke access faster than a chocolate bar melts in summer.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Modifications",
      description:
        "We may update these terms as often as we update our chocolate recipes. We'll notify you of significant changes, but it's your responsibility to check back occasionally. Think of it as checking if there's a new flavor at your favorite chocolate shop.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M11 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H17C18.1046 19 19 18.1046 19 17V12M17.5 3.5C17.8978 3.10217 18.4374 2.87868 19 2.87868C19.5626 2.87868 20.1022 3.10217 20.5 3.5C20.8978 3.89782 21.1213 4.43739 21.1213 5C21.1213 5.56261 20.8978 6.10217 20.5 6.5L11 16L7 17L8 13L17.5 3.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Limitation of Liability",
      description:
        "We're not responsible for any chocolate-related accidents, sugar rushes, or component-induced coding euphoria. Use our components at your own risk, just like eating an entire box of chocolates in one sitting.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33975 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Termination",
      description:
        "We reserve the right to terminate your access to our chocolate factory of components if you violate these terms. Don't worry, we'll give you a golden ticket to return once you've learned your lesson.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9L9 15M9 9L15 15"
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
              Terms of Service
            </span>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900 font-['Bricolage']">
            <span className="font-['InstrumentSerif'] text-[#603F26] font-normal italic">
              Sweet
            </span>{" "}
            Terms
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-lg mx-auto font-['Inter'] leading-relaxed">
            Our terms are as clear as a chocolate bar wrapper. Please read them
            carefully before using our components.
          </p>
        </motion.div>

        {/* Terms sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {termsSections.map((section, index) => (
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

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl border border-[#3C2613]/10 bg-white/10 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-[#603F26] mb-4 font-['Bricolage']">
            Governing Law
          </h3>
          <p className="text-[#6C4E31]/90 text-sm font-['Inter'] leading-relaxed mb-4">
            These terms shall be governed by the laws of the Chocolate Republic,
            where disputes will be settled by a panel of expert chocolatiers.
            Any legal proceedings will take place in the Court of Cocoa, where
            justice is as sweet as it is fair.
          </p>
          <h3 className="text-xl font-bold text-[#603F26] mb-4 font-['Bricolage']">
            Contact Information
          </h3>
          <p className="text-[#6C4E31]/90 text-sm font-['Inter'] leading-relaxed">
            If you have any questions about these terms, please contact our
            chocolate concierge at{" "}
            <span className="font-medium">support@chocoui.com</span>. We aim to
            respond within 24 hours, or the time it takes to temper a batch of
            chocolate.
          </p>
        </motion.div>

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

export default Terms;
