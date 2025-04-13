import SingIn from "../UIComponents/Forms/Singin";
import ContactUs from "../UIComponents/Forms/ContactUs";

import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function FormPage() {
  const FormVariants = [
    {
      title: "Sign in",
      component: <SingIn />,
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
      title: "Contact Us",
      component: <ContactUs />,
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
      <h1 className="text-3xl font-bold text-black">
        Discover Beautifully Crafted Components
      </h1>
      <p className="text-gray-600 mt-2">
        Browse through a collection of clean, reusable, and responsive UI
        components that you can plug directly into your projects.
      </p>
      <div className="mt-6 space-y-6">
        {FormVariants.map((variant, index) => (
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

export default FormPage;
