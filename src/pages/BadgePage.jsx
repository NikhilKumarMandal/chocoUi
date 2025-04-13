import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Badge1 from "../UIComponents/Badge/Badge1";
import Badge2 from "../UIComponents/Badge/Badge2";

function Badge() {
  const Badge1Variants = [
    {
      title: "Badge 1",
      component: <Badge1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Badge 2",
      component: <Badge2 />,
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
