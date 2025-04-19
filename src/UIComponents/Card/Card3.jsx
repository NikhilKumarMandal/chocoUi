import React from "react";

function Card3({
  plan = "Professional",
  price = "49",
  billingCycle = "m",
  description = "This plan is for those who have a team already and running a large business.",
  features = ["20 team members", "Plan team meetings", "File sharing"],
  buttonText = "Choose plan",
  onClick = () => {},
}) {
  return (
    <div className="max-w-xs rounded-lg shadow-lg p-3 border border-amber-200 bg-white text-gray-600 mx-auto m-4">
      <div className="flex flex-col items-center p-5 pt-10 bg-amber-100 rounded-lg relative">
        <span className="absolute top-0 right-0 bg-amber-200 rounded-l-full px-3 py-2 text-lg font-semibold text-gray-700">
          ${price}{" "}
          <small className="text-sm text-gray-500">/ {billingCycle}</small>
        </span>
        <p className="font-semibold text-xl text-gray-700">{plan}</p>
        <p className="mt-3 text-center">{description}</p>

        <ul className="mt-4 space-y-3 w-full">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="bg-teal-500 text-white rounded-full flex items-center justify-center w-5 h-5">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  />
                </svg>
              </span>
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>

        <div className="mt-5 w-full">
          <button
            onClick={onClick}
            className="block text-center bg-amber-300 hover:bg-amber-400 text-white font-medium text-lg py-2 rounded-md w-full"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card3;
