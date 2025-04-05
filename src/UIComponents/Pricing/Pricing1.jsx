import React, { useState } from "react";

const PricingComponent = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="bg-[#3E5879] py-12 px-4 sm:px-6 lg:px-8 min-h-screen rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-3">Pricing</h1>
          <h2 className="text-xl text-white mb-4">
            Pricing that grows with you
          </h2>
          <p className="max-w-2xl mx-auto text-white">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-[#A1E3F9]">
            <button
              className={`px-6 py-2 rounded-full font-medium ${!isAnnual ? "text-white bg-[#3674B5]" : "text-[#3674B5]"}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium ${isAnnual ? "text-white bg-[#3674B5]" : "text-[#3674B5]"}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually <span className="text-[#578FCA]">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-xl p-6 border border-[#A1E3F9]/50 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#3674B5] mb-2">Hobby</h3>
            <p className="text-[#578FCA] mb-4">
              The essentials to provide your best work for clients.
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-[#3674B5]">
                {isAnnual ? "$15" : "$19"}
              </span>
              <span className="text-[#578FCA]">/month</span>
            </div>
            <button className="w-full py-2 px-4 rounded-lg bg-[#A1E3F9] text-[#3674B5] hover:bg-[#578FCA] hover:text-white">
              Buy plan
            </button>
            <ul className="mt-6 space-y-3">
              <li className="text-[#3674B5]">✔ 5 products</li>
              <li className="text-[#3674B5]">✔ Up to 1,000 subscribers</li>
              <li className="text-[#3674B5]">✔ Basic analytics</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#A1E3F9]/50 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 relative">
            <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#A1E3F9] text-[#3674B5] rounded-full text-xs font-medium">
              Popular
            </span>
            <h3 className="text-xl font-semibold text-[#3674B5] mb-2">
              Freelancer
            </h3>
            <p className="text-[#578FCA] mb-4">
              The essentials to provide your best work for clients.
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-[#3674B5]">
                {isAnnual ? "$23" : "$29"}
              </span>
              <span className="text-[#578FCA]">/month</span>
            </div>
            <button className="w-full py-2 px-4 rounded-lg bg-[#3674B5] text-white hover:bg-[#2a5a94]">
              Buy plan
            </button>
            <ul className="mt-6 space-y-3">
              <li className="text-[#3674B5]">✔ 5 products</li>
              <li className="text-[#3674B5]">✔ Up to 1,000 subscribers</li>
              <li className="text-[#3674B5]">✔ Basic analytics</li>
              <li className="text-[#3674B5]">
                ✔ 48-hour support response time
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#A1E3F9]/50 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#3674B5] mb-2">
              Startup
            </h3>
            <p className="text-[#578FCA] mb-4">
              A plan that scales with your rapidly growing business.
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-[#3674B5]">
                {isAnnual ? "$47" : "$59"}
              </span>
              <span className="text-[#578FCA]">/month</span>
            </div>
            <button className="w-full py-2 px-4 rounded-lg bg-[#A1E3F9] text-[#3674B5] hover:bg-[#578FCA] hover:text-white">
              Buy plan
            </button>
            <ul className="mt-6 space-y-3">
              <li className="text-[#3674B5]">✔ 25 products</li>
              <li className="text-[#3674B5]">✔ Up to 10,000 subscribers</li>
              <li className="text-[#3674B5]">✔ Advanced analytics</li>
              <li className="text-[#3674B5]">
                ✔ 24-hour support response time
              </li>
              <li className="text-[#3674B5]">✔ Marketing automations</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#A1E3F9]/50 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#3674B5] mb-2">
              Enterprise
            </h3>
            <p className="text-[#578FCA] mb-4">
              Dedicated support and infrastructure for your company.
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-[#3674B5]">
                {isAnnual ? "$79" : "$99"}
              </span>
              <span className="text-[#578FCA]">/month</span>
            </div>
            <button className="w-full py-2 px-4 rounded-lg bg-[#A1E3F9] text-[#3674B5] hover:bg-[#578FCA] hover:text-white">
              Buy plan
            </button>
            <ul className="mt-6 space-y-3">
              <li className="text-[#3674B5]">✔ Unlimited products</li>
              <li className="text-[#3674B5]">✔ Unlimited subscribers</li>
              <li className="text-[#3674B5]">✔ Advanced analytics</li>
              <li className="text-[#3674B5]">
                ✔ 1-hour, dedicated support response time
              </li>
              <li className="text-[#3674B5]">✔ Marketing automations</li>
              <li className="text-[#3674B5]">✔ Custom reporting tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
