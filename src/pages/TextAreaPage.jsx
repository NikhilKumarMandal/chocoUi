import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Textarea from "../UIComponents/Textarea/Textarea6";

function TextAreaPage() {
  const TextareaVariants = [
    {
      title: "Post Input",
      component: <Textarea />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Textarea() {
            return (
              <div class="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-md p-4 space-y-4 md:flex md:space-x-4 md:space-y-0">
                <div class="flex-shrink-0 flex justify-center md:justify-start">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1743932492~exp=1743936092~hmac=2b64d4f276e1e88a0729512e8104eadba3fbc6772cac0b9abbebadc6448b2fe0&w=740"
                    alt="Avatar"
                    class="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                <div class="flex-1">
                  <textarea
                    class="w-full resize-none p-3 border bg-amber-100 border-amber-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-800"
                    rows="3"
                    placeholder="What's on your mind?"
                  ></textarea>
                  <div class="flex md:justify-end justify-center mt-2">
                    <button class="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            );
          }
          
          export default Textarea;`,
        },
      ],
      componentProps: [
        {
          name: "placeholder",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "",
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        TextArea Component
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Textarea component gives you a textarea HTML element that automatically
        adjusts its height to match the length of the content within.
      </p>
      <div className="mt-6 space-y-6">
        {TextareaVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
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

export default TextAreaPage;
