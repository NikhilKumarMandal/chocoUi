import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Textarea1 from "../UIComponents/Textarea/Textarea1"
import Textarea2 from "../UIComponents/Textarea/Textarea2"
import Textarea3 from "../UIComponents/Textarea/Textarea3"
import Textarea4 from "../UIComponents/Textarea/Textarea4"
import Textarea5 from "../UIComponents/Textarea/Textarea6"

function TextAreaPage() {
      const TextareaVariants = [
    {
      title: "Calendar",
      component: <Textarea1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Textarea2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Textarea3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Textarea4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
          },
        {
      title: "Calendar",
      component: <Textarea5 />,
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
            {TextareaVariants.map((variant, index) => (
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
  )
}

export default TextAreaPage