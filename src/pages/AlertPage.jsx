import React from "react";
import { Info } from "lucide-react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Alert1 from "../UIComponents/Alert/Alert1";
import Alert3 from "../UIComponents/Alert/Alert3";
import Alert4 from "../UIComponents/Alert/Alert4";
import Alert5 from "../UIComponents/Alert/Alert5";

function AlertPage() {
  const AlertVariants = [
    {
      title: "Minimalist Alert",
      component: <Alert1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import Alert from "@/components/Alert/MinimalistAlert";

function Example() {
  return (
    <Alert 
      title="Information"
      message="This is a minimalist alert component"
      variant="info"
    />
  );
}`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["@heroicons/react"],
      usageInstructions:
        "Import the Alert component and use it with title and message props.",
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "The heading text for the alert",
          example: "'Important Notice'",
        },
        {
          name: "message",
          type: "string",
          default: "undefined",
          description: "The main content of the alert",
          example: "'Your changes have been saved'",
        },
        {
          name: "variant",
          type: "'info' | 'success' | 'warning' | 'error'",
          default: "'info'",
          description: "Determines the color scheme and icon",
          example: "'success'",
        },
      ],
    },
    {
      title: "Bordered Alert",
      component: <Alert3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import Alert from "@/components/Alert/BorderedAlert";

function Example() {
  return (
    <Alert 
      variant="success"
      message="Operation completed successfully"
      className="mb-4"
    />
  );
}`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["clsx", "tailwind-merge"],
      usageInstructions: "Uses 'variant' prop to control color scheme.",
      componentProps: [
        {
          name: "message",
          type: "string | ReactNode",
          default: "undefined",
          description: "Alert content (can be string or JSX)",
          example: "'Update successful'",
        },
        {
          name: "variant",
          type: "'info' | 'success' | 'warning' | 'error'",
          default: "'info'",
          description: "Color and border style variant",
          example: "'error'",
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "Additional CSS classes",
          example: "'mb-4'",
        },
      ],
    },
    {
      title: "Icon Alert",
      component: <Alert4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import Alert from "@/components/Alert/IconAlert";

function Example() {
  return (
    <Alert 
      type="warning"
      title="Warning"
      message="This action cannot be undone"
      iconSize={20}
    />
  );
}`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["lucide-react"],
      usageInstructions: "Automatically shows appropriate icon based on type.",
      componentProps: [
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "Alert heading",
          example: "'System Alert'",
        },
        {
          name: "message",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "'Maintenance scheduled for tonight'",
        },
        {
          name: "type",
          type: "'info' | 'success' | 'warning' | 'error'",
          default: "'info'",
          description: "Determines icon and color scheme",
          example: "'warning'",
        },
        {
          name: "iconSize",
          type: "number",
          default: "18",
          description: "Size of the icon in pixels",
          example: "24",
        },
      ],
    },
    {
      title: "Dismissible Alert",
      component: <Alert5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import Alert from "@/components/Alert/DismissibleAlert";

function Example() {
  const [showAlert, setShowAlert] = useState(true);
  
  return showAlert ? (
    <Alert 
      message="You can dismiss this alert"
      onDismiss={() => setShowAlert(false)}
      dismissText="Got it"
    />
  ) : null;
}`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["framer-motion"],
      usageInstructions: "Includes animation on appear/disappear.",
      componentProps: [
        {
          name: "message",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "'Session expires in 5 minutes'",
        },
        {
          name: "onDismiss",
          type: "() => void",
          default: "undefined",
          description: "Callback when dismiss button is clicked",
          example: "() => setVisible(false)",
        },
        {
          name: "dismissText",
          type: "string",
          default: "'Dismiss'",
          description: "Text for dismiss button",
          example: "'Got it'",
        },
        {
          name: "duration",
          type: "number",
          default: "undefined",
          description: "Auto-dismiss after milliseconds (optional)",
          example: "5000",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Alert Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Collection of customizable alert components with different styles and
        behaviors
      </p>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
        <h3 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
          <Info size={18} /> General Installation
        </h3>
        <div className="bg-white p-3 rounded border border-blue-200 mb-3">
          <code className="text-sm">
            npm install @heroicons/react lucide-react framer-motion clsx
            tailwind-merge
          </code>
        </div>
        <p className="text-sm text-blue-800">
          Note: Each component may require specific dependencies as shown in
          their individual info sections.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {AlertVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default AlertPage;

// import React from "react";
// import PreviewComponent from "../components/PreviewCom/PreviewComponent";
// import Alert1 from "../UIComponents/Alert/Alert1";
// import Alert3 from "../UIComponents/Alert/Alert3";
// import Alert4 from "../UIComponents/Alert/Alert4";
// import Alert5 from "../UIComponents/Alert/Alert5";

// function AlertPage() {
//   const AlertVariants = [
//     {
//       title: "Minimalist Elegance Bento",
//       component: <Alert1 />,
//       codeSnippets: [
//         {
//           language: "jsx",
//           code: ``,
//         },
//       ],
//     },
//     {
//       title: "Minimalist Elegance Bento",
//       component: <Alert3 />,
//       codeSnippets: [
//         {
//           language: "jsx",
//           code: ``,
//         },
//       ],
//     },
//     {
//       title: "Minimalist Elegance Bento",
//       component: <Alert4 />,
//       codeSnippets: [
//         {
//           language: "jsx",
//           code: ``,
//         },
//       ],
//     },
//     {
//       title: "Minimalist Elegance Bento",
//       component: <Alert5 />,
//       codeSnippets: [
//         {
//           language: "jsx",
//           code: ``,
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
//         Bento Components
//       </h1>
//       <p className="text-gray-700 mt-2 font-['Inter']">
//         Discover modular, grid-based Bento UI components
//       </p>
//       <div className="mt-6 space-y-6">
//         {AlertVariants.map((variant, index) => (
//           <PreviewComponent
//             key={index}
//             title={variant.title}
//             codeSnippets={variant.codeSnippets}
//             isFullWidth={true}
//           >
//             {variant.component}
//           </PreviewComponent>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AlertPage;
