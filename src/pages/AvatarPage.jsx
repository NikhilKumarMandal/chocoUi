import Avatar2 from "../UIComponents/Avatar/Avatar2"
import Avatar3 from "../UIComponents/Avatar/Avatar3"
import Avatar4 from "../UIComponents/Avatar/Avatar4"
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function AvatarPage() {
    const avatarVariants = [
        {
          title: "Calendar",
          component: < Avatar2 />,
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
          component: < Avatar3 />,
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
          component: < Avatar4 />,
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
            {avatarVariants.map((variant, index) => (
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

export default AvatarPage