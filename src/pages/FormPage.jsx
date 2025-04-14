import SingIn from "../UIComponents/Forms/Singin";
import ContactUs from "../UIComponents/Forms/ContactUs";
import Loginin from "../UIComponents/Forms/Login";
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
      title: "LoginIn",
      component: <Loginin />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Login() {
            return (
              <>
                <div className="p-5">
                  <form class="max-w-sm mx-auto mt-40 border p-5 bg-gray-900 rounded-md">
                    <div class="mb-5">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        User email
                      </label>
                      <input
                        type="email"
                        id=""
                        class="bg-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-900 dark:focus:border-blue-900"
                        placeholder="name@chcoui.live"
                        required
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        User password
                      </label>
                      <input
                        type="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div class="flex items-start mb-5">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3
                   focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800
                    dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        for="remember"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
               font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </>
            );
          }
          
          export default Login`,
        },
      ],
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto p-6">
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
            isFullWidth={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default FormPage;
