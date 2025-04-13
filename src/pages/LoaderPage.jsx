import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Loader1 from "../UIComponents/Loader/Loader1";
import Loader3 from "../UIComponents/Loader/Loader3";
import Loader4 from "../UIComponents/Loader/Loader4";
import Loader5 from "../UIComponents/Loader/Loader5";
import Loader6 from "../UIComponents/Loader/Loader6";
import Loader9 from "../UIComponents/Loader/Loader9";
import Loader12 from "../UIComponents/Loader/Loader12";
import Loader13 from "../UIComponents/Loader/Loader13";
import Loader15 from "../UIComponents/Loader/Loader15";

function LoaderPage() {
  const LoaderVariants = [
    {
      title: "Calendar",
      component: <Loader1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },

    {
      title: "Calendar",
      component: <Loader3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Loader4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Loader5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Loader6 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Loader9 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Loader12 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Loader13 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },

    {
      title: "Calendar",
      component: <Loader15 />,
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
        {LoaderVariants.map((variant, index) => (
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

export default LoaderPage;
