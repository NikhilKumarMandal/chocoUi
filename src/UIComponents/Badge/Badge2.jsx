import React from "react";

const Badge2 = () => {
  const badges = [
    {
      id: 1,
      label: "New",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      description: "Latest product release with new features",
    },
    {
      id: 2,
      label: "In Stock",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      description: "Product is available for immediate shipping",
    },
    {
      id: 3,
      label: "20% Off",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      description: "Limited time discount on selected items",
    },
  ];

  return (
    <div className="w-full p-8">
      <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
        <div className="space-y-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              {badge.id === 1 && (
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded">
                  {badge.label}
                </span>
              )}
              {badge.id === 2 && (
                <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded">
                  {badge.label}
                </span>
              )}
              {badge.id === 3 && (
                <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 rounded">
                  {badge.label}
                </span>
              )}
              <span className="ml-2 text-gray-700 dark:text-gray-300">
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
