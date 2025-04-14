import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Badge1 from "../UIComponents/Badge/Badge1";
import Badge2 from "../UIComponents/Badge/Badge2";

function Badge() {
  const Badge1Variants = [
    {
      title: "Badge",
      component: <Badge1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Badge = () => {
            return (
              <div className="w-full p-8">
                <div className="p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#FFEAC5] text-black">
                      Choco
                    </span>
                    <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#ECECEC] text-black">
                      Light
                    </span>
                    <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#198754] text-white">
                      Success
                    </span>
                    <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#DC3545] text-white">
                      Danger
                    </span>
                    <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#FFC107] text-[#212529]">
                      Warning
                    </span>
                    <span className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium bg-[#212529] text-white border border-white">
                      Dark
                    </span>
                  </div>
                </div>
              </div>
            );
          };
          
          export default Badge;`,
        },
      ],
    },
    {
      title: "Badge",
      component: <Badge2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";

const Badge = () => {
  const badges = [
    { id: 1, label: "New", color: "bg-blue-500 text-white" },
    { id: 2, label: "Featured", color: "bg-purple-500 text-white" },
    { id: 3, label: "Sale", color: "bg-red-500 text-white" },
    { id: 4, label: "Popular", color: "bg-amber-500 text-white" },
    { id: 5, label: "Limited", color: "bg-green-500 text-white" },
    { id: 6, label: "Sold Out", color: "bg-gray-500 text-white" },
  ];

  return (
    <div className="w-full p-8">
      <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Product Status Badges
        </h3>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span
              key={badge.id}
              className={"px-3 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium " + badge.color + " shadow-sm transform transition-transform duration-200 hover:scale-105"}
            >
              {badge.label}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Badge Usage Examples
          </h3>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded">
                New
              </span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                Latest product release with new features
              </span>
            </div>

            <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded">
                In Stock
              </span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                Product is available for immediate shipping
              </span>
            </div>

            <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 rounded">
                20% Off
              </span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                Limited time discount on selected items
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
`,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">Component Previews</h1>
      <p className="text-gray-600 mt-2">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {Badge1Variants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default Badge;
