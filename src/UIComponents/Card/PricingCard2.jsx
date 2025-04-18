import { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

const PricingCard2 = ({ 
  tier = "Professional", 
  price = 99, 
  billingPeriod = "monthly", 
  description = "Perfect for growing businesses and professionals who need more features.",
  features = [
    { name: "Unlimited projects", included: true },
    { name: "Dedicated support", included: true },
    { name: "Advanced analytics", included: true },
    { name: "Custom branding", included: true },
    { name: "API access", included: false },
    { name: "White labeling", included: false },
  ],
  ctaText = "Get Started",
  popular = false,
  accentColor = "#4f46e5"
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const yearlyDiscount = billingPeriod === "yearly" ? 0.8 : 1; 
  const finalPrice = price * yearlyDiscount;
  
  return (
    <div className="flex flex-col h-full w-full max-w-sm mx-auto overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:shadow-lg bg-white relative">
      {popular && (
        <div 
          className="absolute top-0 right-0 px-4 py-1 text-xs font-semibold text-white rounded-bl-lg" 
          style={{ backgroundColor: accentColor }}
        >
          Most Popular
        </div>
      )}
      
      <div className="p-6 border-b">
        <h3 className="text-xl font-bold">{tier}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-extrabold">${finalPrice}</span>
          <span className="ml-1 text-xl text-gray-500">/{billingPeriod === "yearly" ? "year" : "month"}</span>
        </div>
        {billingPeriod === "yearly" && (
          <p className="mt-1 text-sm text-green-600">Save 20% with annual billing</p>
        )}
        <p className="mt-3 text-sm text-gray-500">{description}</p>
      </div>
      
      <div className="flex-grow p-6">
        <h4 className="font-medium mb-4">What's included:</h4>
        <ul className="space-y-3">
          {features.slice(0, expanded ? features.length : 4).map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check size={20} className="mr-2 text-green-500 flex-shrink-0" />
              ) : (
                <X size={20} className="mr-2 text-gray-400 flex-shrink-0" />
              )}
              <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        
        {features.length > 4 && (
          <button 
            className="mt-4 flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Show less <ChevronUp size={16} className="ml-1" />
              </>
            ) : (
              <>
                Show all features <ChevronDown size={16} className="ml-1" />
              </>
            )}
          </button>
        )}
      </div>
      
      <div className="p-6 pt-0">
        <button 
          className="w-full py-3 px-4 rounded-md font-medium text-white transition-colors duration-200"
          style={{ backgroundColor: accentColor }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = adjustBrightness(accentColor, -20)}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = accentColor}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}

function adjustBrightness(hex, percent) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  
  r = Math.max(0, Math.min(255, r + percent));
  g = Math.max(0, Math.min(255, g + percent));
  b = Math.max(0, Math.min(255, b + percent));
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export default PricingCard2;