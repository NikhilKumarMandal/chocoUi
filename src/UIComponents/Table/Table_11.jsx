import React from "react";

export default function Table3() {
  const plans = ["Plan A", "Plan B", "Plan C"];
  const features = [
    ["Shared inbox", true, true, true],
    ["Inbox views", true, true, true],
    ["Basic chatbots and automations", false, true, true],
    ["AI Compose", false, true, true],
    ["Ticketing system", false, false, true],
    ["Help center customization", false, false, true],
  ];

  return (
    <div className="px-4 py-12 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h2 className="text-2xl font-bold text-gray-900">Feature List</h2>
          <p className="text-sm text-gray-600 mt-1">
            Compare our plans to find the perfect fit for your needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-800 border-b border-gray-200">
                <th className="py-4 px-6 text-left font-semibold w-1/3">
                  Features
                </th>
                {plans.map((plan, index) => (
                  <th
                    key={plan}
                    className="py-4 px-6 text-center font-semibold"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-lg mb-1">{plan}</span>
                      <span className="text-xs font-normal text-gray-500">
                        {index === 0
                          ? "Basic"
                          : index === 1
                            ? "Standard"
                            : "Premium"}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map(([feature, a, b, c], index) => (
                <tr
                  key={feature}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="py-4 px-6 border-t border-gray-200">
                    {feature}
                  </td>
                  <td className="py-4 px-6 text-center border-t border-gray-200">
                    {a ? (
                      <span className="text-green-500 text-lg">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-t border-gray-200">
                    {b ? (
                      <span className="text-green-500 text-lg">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-t border-gray-200">
                    {c ? (
                      <span className="text-green-500 text-lg">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
