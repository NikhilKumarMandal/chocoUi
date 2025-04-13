

import { useState } from "react"

const Pricing1 = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Pricing</h1>
          <h2 className="text-xl text-gray-700 mb-4">Pricing that grows with you</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
            loyalty, and driving sales.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-gray-100 border border-gray-200">
            <button
              className={`px-4 md:px-2 md:py-2 text-sm sm:px-6 sm:text-base rounded-full font-medium transition-all ${
                !isAnnual ? "text-white bg-gray-800" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 md:2 py-2 text-sm sm:px-6 sm:text-base rounded-full font-medium transition-all ${
                isAnnual ? "text-white bg-gray-800" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annually <span className="text-gray-500">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hobby</h3>
              <p className="text-gray-600 mb-4">The essentials to provide your best work for clients.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">{isAnnual ? "$15" : "$19"}</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full py-2 px-4 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white transition-all">
                Buy plan
              </button>
              <ul className="mt-6 space-y-3">
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 5 products
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> Up to 1,000 subscribers
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> Basic analytics
                </li>
              </ul>
            </div>
          </div>

          
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 relative flex flex-col h-full">
            <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-gray-800 text-white rounded-full text-xs font-medium">
              Popular
            </span>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Freelancer</h3>
              <p className="text-gray-600 mb-4">The essentials to provide your best work for clients.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">{isAnnual ? "$23" : "$29"}</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full py-2 px-4 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all">
                Buy plan
              </button>
              <ul className="mt-6 space-y-3">
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 5 products
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> Up to 1,000 subscribers
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> Basic analytics
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 48-hour support response time
                </li>
              </ul>
            </div>
          </div>

          
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Startup</h3>
              <p className="text-gray-600 mb-4">A plan that scales with your rapidly growing business.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">{isAnnual ? "$47" : "$59"}</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full py-2 px-4 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white transition-all">
                Buy plan
              </button>
              <ul className="mt-6 space-y-3">
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 25 products
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> Up to 10,000 subscribers
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> Advanced analytics
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> 24-hour support response time
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span> Marketing automations
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Pricing1
