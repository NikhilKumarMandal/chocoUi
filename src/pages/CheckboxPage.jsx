import Checkbox from "../UIComponents/Checkbox/Checkbox";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
function CheckboxPage() {
  const CheckboxVariants = [
    {
      title: "Calendar",
      component: <Checkbox />,
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
        {CheckboxVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default CheckboxPage;
