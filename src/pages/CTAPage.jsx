import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import CTA3 from "../UIComponents/CTA/CTA3";
function CTAPage() {
  const CTAVariants = [
    {
      title: "Go To CTA",
      component: <CTA3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          const CTA = () => {
            return (
              <div className="space-y-16 p-10">
                <section className="text-center px-6 py-16 bg-white rounded-lg">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                    Join teams around the world getting{" "}
                    <span className="text-orange-500">90%+ engagement</span> with their
                    benefits programmes
                  </h2>
                  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                    Get any benefit, in any country, and make it flexible, all without the
                    painful admin. Budget-friendly. No hidden fees. No surprises.
                  </p>
          
                  <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-md">
                      <div className="pl-3 text-gray-500">@</div>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 focus:outline-none text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <button className="px-6 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-700">
                      Get started
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-gray-400">
                    By submitting you agree to our privacy policy.
                  </p>
                </section>
              </div>
            );
          };
          export default CTA;`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">CTA Component</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore different UI components you can use in your project CTA component.
      </p>
      <div className="mt-6 space-y-6">
        {CTAVariants.map((variant, index) => (
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

export default CTAPage;
