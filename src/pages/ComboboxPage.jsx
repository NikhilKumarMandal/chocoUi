import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Combobox1 from "../UIComponents/Combobox/Combobox1"
import Combobox2 from "../UIComponents/Combobox/Combobox2"
function ComboboxPage() {
                  const ComboboxVariants = [
            {
              title: "Calendar",
              component: <Combobox1 />,
              codeSnippets: [
                {
                  language: "jsx",
                  code: ``,
                },
              ],
                      },
                                  {
              title: "Calendar",
              component: <Combobox2 />,
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
                      {ComboboxVariants.map((variant, index) => (
                        <PreviewComponent
                          key={index}
                          title={variant.title}
                          codeSnippets={variant.codeSnippets}
                          fixPreviewHeight={true}
                        >
                          {variant.component}
                        </PreviewComponent>
                      ))}
                    </div>
                  </div>
  )
}

export default ComboboxPage