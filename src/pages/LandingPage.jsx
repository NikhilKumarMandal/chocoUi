import {React, useEffect} from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import Feature from "../sections/Feature/Feature";
import CTA from "../sections/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Hero2 from "../sections/Hero2/Hero2";

const BetaBanner = () => {
  return (
    <div className="w-full bg-gradient-to-br bg-[#603F26] text-[#FFDBB5] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-2">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FFDBB5] text-[#603F26]">
              <svg
                className="w-3 h-3 mr-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              BETA
            </span>
            <p className="text-xs sm:text-sm text-[#FFDBB5] text-center">
              We're in beta! Help us improve by sharing your feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function LandingPage() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <BetaBanner />
      <Navbar />
      <main className="flex-grow">
        <div>
          <Hero />
        </div>
        <div>
          <Hero2 />
        </div>
        <Feature />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
