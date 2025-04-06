import Breadcrumb1 from "../UIComponents/Breadcrumb/Breadcrumb1";
import Breadcrumb2 from "../UIComponents/Breadcrumb/Breadcrumb2";
import Breadcrumb3 from "../UIComponents/Breadcrumb/Breadcrumb3";
import Breadcrumb4 from "../UIComponents/Breadcrumb/Breadcrumb4";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function Breadcrumb() {
  const breadcrumbVariants = [
    {
      title: "Calendar",
      component: <Breadcrumb1 />,
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
      component: <Breadcrumb2 />,
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
      component: <Breadcrumb3 />,
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
      component: <Breadcrumb4 />,
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
        {breadcrumbVariants.map((variant, index) => (
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

export default Breadcrumb;
