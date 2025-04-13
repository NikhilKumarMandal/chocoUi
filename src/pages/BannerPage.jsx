import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Banner1 from "../UIComponents/Banner/Banner1";
import Banner2 from "../UIComponents/Banner/Banner2";
import Banner3 from "../UIComponents/Banner/Banner3";

function Banner() {
  const BannerVariants = [
    {
      title: "Calendar",
      component: <Banner1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Banner2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Banner3 />,
      codeSnippets: [
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
        {BannerVariants.map((variant, index) => (
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

export default Banner;
