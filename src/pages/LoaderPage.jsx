import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Loader1 from "../UIComponents/Loader/Loader1";
import Loader2 from "../UIComponents/Loader/Loader2";
import Loader3 from "../UIComponents/Loader/Loader3";
import Loader4 from "../UIComponents/Loader/Loader4";
import Loader5 from "../UIComponents/Loader/Loader5";
import Loader6 from "../UIComponents/Loader/Loader6";
import Loader7 from "../UIComponents/Loader/Loader7";
import Loader8 from "../UIComponents/Loader/Loader8";
import Loader9 from "../UIComponents/Loader/Loader9";
import Loader10 from "../UIComponents/Loader/Loader10";
import Loader11 from "../UIComponents/Loader/Loader11";
import Loader12 from "../UIComponents/Loader/Loader12";
import Loader13 from "../UIComponents/Loader/Loader13";
import Loader14 from "../UIComponents/Loader/Loader14";
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
      component: <Loader2 />,
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
      component: <Loader7 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Loader8 />,
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
      component: <Loader10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Loader11 />,
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
      component: <Loader14 />,
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
            isFullWidth={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default LoaderPage;
