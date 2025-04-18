import SingIn from "../UIComponents/Forms/Singin";
import Loginin from "../UIComponents/Forms/Login";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function FormPage() {
  const FormVariants = [
    {
      title: "Elegant Sign-In Form",
      component: <SingIn />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          export default function SignIn() {
            return (
              <>
                <div className="flex flex-col max-w-md p-6 m-4 mx-auto justify-center items-center rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
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
          }
          `,
        },
      ],
    },

    {
      title: "Elegant Login Form",
      component: <Loginin />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Login() {
            return (
              <div className="w-full max-w-md mx-auto p-8 m-4 space-y-6 rounded-xl bg-white dark:bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form noValidate action="" className="space-y-6">
                  <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-600">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <div className="flex justify-end text-xs text-gray-600">
                      <a href="#" className="hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="block w-full p-3 text-center rounded-sm text-white bg-green-600 hover:bg-green-700"
                  >
                    Sign in
                  </button>
                </form>
          
                <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
          
               <div className="flex justify-center space-x-4">
          
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                <path
                  fill="#4285F4"
                  d="M24 9.5c3.32 0 6.07 1.16 8.3 3.07l6.2-6.2C34.34 2.37 29.6 0 24 0 14.95 0 7.34 5.8 3.94 14.03l7.22 5.61C12.7 13.66 17.91 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.1 24.55c0-1.4-.13-2.77-.38-4.05H24v7.7h12.4c-.52 2.8-2.05 5.15-4.3 6.7l6.76 5.26c3.96-3.65 6.24-9.05 6.24-15.6z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.16 28.27a9.84 9.84 0 01-.51-3.02c0-1.05.18-2.07.51-3.02l-7.22-5.61A15.95 15.95 0 002.05 24c0 2.55.61 4.97 1.69 7.13l7.42-2.86z"
                />
                <path
                  fill="#EA4335"
                  d="M24 48c6.48 0 11.9-2.14 15.86-5.82l-6.76-5.26c-2.17 1.44-4.94 2.28-9.1 2.28-6.09 0-11.3-4.16-13.06-9.84l-7.42 2.86C7.34 42.2 14.95 48 24 48z"
                />
              </svg>
            </button>
          
            <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M459.4 151.7c.3 4.5.3 9 .3 13.5 0 138.7-105.6 298.7-298.7 298.7-59.5 0-114.8-17.2-161.2-47 8.4 1 16.8 1.6 25.6 1.6 49.3 0 94.6-16.8 130.7-45-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.7-1.3 27.5-3.6-48.1-9.7-84.3-52.1-84.3-103v-1.3c14.1 7.8 30.3 12.7 47.5 13.3-28.3-18.9-46.8-51-46.8-87.4 0-19.4 5.2-37.4 14.1-52.9 51.3 62.9 128 104.1 214.5 108.4-1.6-7.8-2.6-15.9-2.6-24 0-58.7 47.6-106.3 106.3-106.3 30.6 0 58.3 12.9 77.7 33.7 24.3-4.5 47.2-13.5 67.6-25.7-8.1 25.4-25.4 46.7-48.1 60.2 21.5-2.3 42.1-8.1 61.1-16.2-14.3 21.2-32.4 39.8-53 54.7z"
                />
              </svg>
            </button>
          
          
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.25c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.92 1.23 3.23 0 4.6-2.8 5.61-5.47 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 0z"
                />
              </svg>
            </button>
          </div>
          
          
                <p className="text-xs text-center text-gray-600">
                  Don't have an account?{" "}
                  <a href="#" className="underline text-gray-800 hover:text-green-600">
                    Sign up
                  </a>
                </p>
              </div>
            );
          }
          
          export default Login;`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Form Components</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Streamline user input with responsive, accessible form elements
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
