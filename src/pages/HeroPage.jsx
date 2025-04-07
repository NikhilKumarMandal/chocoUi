import HeroSection1 from "../UIComponents/HeroSection/HeroDesign1";
import HeroSection2 from "../UIComponents/HeroSection/HeroDesign2";
import HeroSection3 from "../UIComponents/HeroSection/HeroDesign3";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function HeroPage() {
  const HerosVariants = [
    {
      title: "Calendar",
      component: <HeroSection1 />,
      codeSnippets: [
        {
          language: "html",
          code: ``,
        },
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <HeroSection2 />,
      codeSnippets: [
        {
          language: "html",
          code: ``,
        },
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <HeroSection3 />,
      codeSnippets: [
        {
          language: "html",
          code: ``,
        },
        {
          language: "jsx",
          code: ``,
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
        {HerosVariants.map((variant, index) => (
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

export default HeroPage;
