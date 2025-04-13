import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Navbar5 from "../UIComponents/Navbar/Navbar5";
import Navbar6 from "../UIComponents/Navbar/Navbar6";
import Navbar7 from "../UIComponents/Navbar/Navbar7";
import Navbar9 from "../UIComponents/Navbar/Navbar9";
import Navbar10 from "../UIComponents/Navbar/Navbar10";

export default function NavbarComForUser() {
  const navbarVariants = [
    {
      title: "NavBar 1",
      component: <Navbar10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },

    {
      title: "NavBar 1",
      component: <Navbar5 />,
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
      title: "NavBar 1",
      component: <Navbar6 />,
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
      title: "NavBar 1",
      component: <Navbar7 />,
      codeSnippets: [
        {
          language: "html",
          code: ``,
        },
      ],
    },

    {
      title: "NavBar 1",
      component: <Navbar9 />,
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
        {navbarVariants.map((variant, index) => (
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
