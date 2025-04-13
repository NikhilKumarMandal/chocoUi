import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import Feature from "../sections/Feature/Feature";
import CTA from "../sections/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Hero2 from "../sections/Hero2/Hero2";
import Team from "../sections/Team/Team";
function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
