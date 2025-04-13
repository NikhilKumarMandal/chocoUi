import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Banner1 from "../UIComponents/Banner/Banner1";
import Banner2 from "../UIComponents/Banner/Banner2";
import Banner3 from "../UIComponents/Banner/Banner3";
import Banner4 from "../UIComponents/Banner/Banner4";
import Banner5 from "../UIComponents/Banner/Banner5";
import Banner6 from "../UIComponents/Banner/Banner6";
import Banner7 from "../UIComponents/Banner/Banner7";
import Banner8 from "../UIComponents/Banner/Banner8";

function Banner() {
  const BannerVariants = [
    {
      title: "Banner 1",
      component: <Banner1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Banner 2",
      component: <Banner2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Banner 3",
      component: <Banner3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Banner 4",
      component: <Banner4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Banner 5",
      component: <Banner5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Banner 6",
      component: <Banner6 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Banner 7",
      component: <Banner7 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Banner 8",
      component: <Banner8 />,
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
