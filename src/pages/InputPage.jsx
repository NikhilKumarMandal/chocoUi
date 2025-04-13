import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Input_01 from "../UIComponents/Input/Input_01";
import Input_02 from "../UIComponents/Input/Input_02";
import Input_03 from "../UIComponents/Input/Input_03";
function InputPage() {
  const InputVariants = [
    {
      title: "Calendar",
      component: <Input_01 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Input_02 />,
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
        {InputVariants.map((variant, index) => (
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

export default InputPage;
