import React from "react";

const Badge2 = () => {
  const badges = [
    {
      id: 1,
      label: "New",
      bg: "#E3D5CA",
      text: "#4B2E2B",
      description: "Latest product release with new features",
    },
    {
      id: 2,
      label: "In Stock",
      bg: "#DAD7CD", 
      text: "#3E3E3E",
      description: "Product is available for immediate shipping",
    },
    {
      id: 3,
      label: "20% Off",
      bg: "#F2D0A7", 
      text: "#5C2E00",
      description: "Limited time discount on selected items",
    },
  ];

  return (
    <div className="w-full p-8">
      <div className="p-6 rounded-lg shadow-md bg-[#FDF6F0]">
        <div className="space-y-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center p-3 rounded-lg"
              style={{ backgroundColor: "#FAF3EC" }}
            >
              <span
                className="px-2 py-0.5 text-xs font-semibold rounded"
                style={{
                  backgroundColor: badge.bg,
                  color: badge.text,
                }}
              >
                {badge.label}
              </span>
              <span className="ml-3 text-sm text-[#3F2B2B]">
                {badge.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badge2;
