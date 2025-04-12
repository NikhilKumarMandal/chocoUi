import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import CTA1 from "../UIComponents/CTA/CTA1"
import CTA2 from "../UIComponents/CTA/CTA2"
import CTA3 from "../UIComponents/CTA/CTA3"
import CTA4 from "../UIComponents/CTA/CTA4"
function CTAPage() {
    const CTAVariants = [
            {
              title: "Calendar",
              component: <CTA1/>,
              codeSnippets: [
                {
                  language: "jsx",
                  code: ``,
                },
              ],
        },
                    {
              title: "Calendar",
              component: <CTA2/>,
              codeSnippets: [
                {
                  language: "jsx",
                  code: ``,
                },
              ],
        },
                                {
              title: "Calendar",
              component: <CTA3/>,
              codeSnippets: [
                {
                  language: "jsx",
                  code: ``,
                },
              ],
        },
                                            {
              title: "Calendar",
              component: <CTA4/>,
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
                       {CTAVariants.map((variant, index) => (
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
  )
}

export default CTAPage