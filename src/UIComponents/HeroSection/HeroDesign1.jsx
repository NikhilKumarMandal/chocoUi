import React from "react";

const HeroDesign1 = () => {
  return (
    <div className="bg-[#FFEAC5] font-inter min-h-screen antialiased">
      <main className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#603F26] mb-6 leading-tight">
            Elevate Your Development Career
            <br />
            <span className="bg-gradient-to-r from-[#6C4E31] to-[#603F26] bg-clip-text text-transparent">
              With Expert Insights
            </span>
          </h1>

          <p className="text-xl text-[#6C4E31] max-w-3xl mx-auto mb-8">
            Join thousands of developers getting actionable career advice,
            technical deep dives, and industry trends directly in your inbox.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 border border-[#FFDBB5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C4E31] w-full sm:w-96 bg-white placeholder-[#6C4E31]/70"
            />
            <button className="px-8 py-3 bg-[#6C4E31] text-white rounded-lg hover:bg-[#603F26] transition-colors font-medium shadow-md hover:shadow-lg">
              Get Free Access
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-[#6C4E31]">
            {[
              {
                text: "No spam ever",
                icon: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
              },
              {
                text: "Secure & Private",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#603F26]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d={item.icon} />
                </svg>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 fade-in max-w-7xl mx-auto px-4">
          {[
            {
              title: "Career Growth Strategies",
              desc: "Actionable advice from senior developers and hiring managers",
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
            },
            {
              title: "Technical Deep Dives",
              desc: "In-depth analysis of modern technologies and best practices",
              icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
            },
            {
              title: "Community Insights",
              desc: "Learn from real-world experiences of fellow developers",
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-[#FFDBB5]"
            >
              <div className="w-12 h-12 bg-[#FFDBB5] rounded-lg flex items-center justify-center mb-4">
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
                    d={card.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#603F26]">
                {card.title}
              </h3>
              <p className="text-[#6C4E31]">{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HeroDesign1;
