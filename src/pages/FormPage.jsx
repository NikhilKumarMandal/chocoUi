import SingIn from "../UIComponents/Forms/Singin";
import ContactUs from "../UIComponents/Forms/ContactUs";

import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function FormPage() {
  const FormVariants = [
    {
      title: "SignIn",
      component: <SingIn />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          export default function Form() {
            return (
              <>
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                  <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">
                      Sign in to access your account
                    </p>
                  </div>
                  <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="leroy@jenkins.com"
                          className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <label htmlFor="password" className="text-sm">
                            Password
                          </label>
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-xs hover:underline dark:text-gray-600"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="*****"
                          className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <button
                          type="button"
                          className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                        >
                          Sign in
                        </button>
                      </div>
                      <p className="px-6 text-sm text-center dark:text-gray-600">
                        Don't have an account yet?
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:underline dark:text-violet-600"
                        >
                          Sign up
                        </a>
                        .
                      </p>
                    </div>
                  </form>
                </div>
              </>
            );
          }`,
        },
      ],
    },

    {
      title: "ContactForm",
      component: <ContactUs />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          const ContactUs = () => {
            return (
              <div className="max-w-md mx-auto p-6 bg-[#f5f1e9] rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-2 text-[#603F26]">
                  Got a question?
                </h1>
          
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-[#6C4E31] mb-2 font-medium"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email address"
                      className="w-full p-3 border border-[#6C4E31] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C4E31]"
                      required
                    />
                  </div>
          
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-[#6C4E31] mb-2 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Type your message..."
                      rows="4"
                      className="w-full p-3 border border-[#6C4E31] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C4E31]"
                    ></textarea>
                  </div>
          
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#603F26] hover:bg-[#6C4E31] text-[#FFEAC5] font-medium rounded-lg transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            );
          };
          
          export default ContactUs;`,
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
