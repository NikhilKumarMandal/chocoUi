import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Badge1 from "../UIComponents/Badge/Badge1";
import Badge2 from "../UIComponents/Badge/Badge2";

function Badge() {
  const Badge1Variants = [
    {
      title: "Status Badges",
      component: <Badge1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";

const badges = [
  { label: "Choco", bgColor: "#FFEAC5", textColor: "black" },
  { label: "Light", bgColor: "#ECECEC", textColor: "black" },
  { label: "Success", bgColor: "#198754", textColor: "white" },
  { label: "Danger", bgColor: "#DC3545", textColor: "white" },
  { label: "Warning", bgColor: "#FFC107", textColor: "#212529" },
  { label: "Dark", bgColor: "#212529", textColor: "white", border: "1px solid white" },
];

const Badge1 = () => {
  return (
    <div className="w-full p-8">
      <div className="p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-3">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium"
              style={{
                backgroundColor: badge.bgColor,
                color: badge.textColor,
                border: badge.border || "none",
              }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badge1;
`,
        },
      ],
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "''",
        },
      ],
    },

    {
      title: "Product Status Badges",
      component: <Badge2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
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
          `,
        },
      ],
      componentProps: [
        {
          name: "label",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "''",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Badge Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Highlight important information with subtle visual cues
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
