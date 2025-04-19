import { useState } from "react";

const PricingCard = ({
  title = "Premium Plan",
  price = 49.99,
  currency = "$",
  billingCycle = "month",
  features = [
    "10 Team Members",
    "Unlimited Projects",
    "500GB Storage",
    "Priority Support",
    "Advanced Analytics",
  ],
  featured = false,
  buttonText = "Get Started",
  buttonVariant = "primary",
  onButtonClick = () => {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-white hover:bg-gray-100 text-blue-600 border border-blue-600",
    dark: "bg-gray-800 hover:bg-gray-900 text-white",
  };

  return (
    <div
      className={`relative w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
        featured
          ? "border-2 border-blue-500 transform md:scale-105 z-10"
          : "border border-gray-200"
      } ${isHovered ? "shadow-xl" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}

      <div
        className={`p-6 ${featured ? "bg-gradient-to-b from-blue-50 to-white" : "bg-white"}`}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 mb-6">Perfect for growing businesses</p>

        <div className="mb-6">
          <span className="text-4xl font-extrabold text-gray-900">
            {currency}
            {price}
          </span>
          <span className="text-gray-500">/{billingCycle}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onButtonClick}
          className={`w-full py-3 px-6 rounded-lg font-bold transition-colors duration-200 ${
            buttonClasses[buttonVariant] || buttonClasses.primary
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
