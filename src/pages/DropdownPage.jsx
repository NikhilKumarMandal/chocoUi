import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Dropdown1 from "../UIComponents/Dropdown/Dropdown1"
import Dropdown2 from "../UIComponents/Dropdown/Dropdown2"
import Dropdown3 from "../UIComponents/Dropdown/Dropdown3"
import Dropdown4 from "../UIComponents/Dropdown/Dropdown4"

function DropdownPage() {
        const DropdownVariants = [
            {
              title: "Calendar",
              component: <Dropdown1/>,
              codeSnippets: [
                {
                  language: "jsx",
                  code: ``,
                },
              ],
        },
                    {
              title: "Calendar",
              component: <Dropdown2/>,
              codeSnippets: [
                {
                  language: "jsx",
                  code: ``,
                },
              ],
        },
                                {
              title: "Calendar",
              component: <Dropdown3/>,
              codeSnippets: [
                {
                  language: "jsx",
                  code: ``,
                },
              ],
        },
                                            {
              title: "Calendar",
              component: <Dropdown4/>,
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
                       {DropdownVariants.map((variant, index) => (
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

export default DropdownPage