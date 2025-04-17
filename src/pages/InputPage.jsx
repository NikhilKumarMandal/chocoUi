import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Input_01 from "../UIComponents/Input/Input_01";
import Input_02 from "../UIComponents/Input/Input_02";
import Input_03 from "../UIComponents/Input/Input_03";
function InputPage() {
  const InputVariants = [
    {
      title: "The Clearable Input",
      component: <Input_01 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { X } from "lucide-react";
          import { useState } from "react";
          
          const Input = () => {
            const [value, setValue] = useState("");
          
            return (
              <div className="w-full max-w-sm mx-auto px-4">
                <label htmlFor="text" className="text-sm font-normal">
                  Text Input
                </label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Type something..."
                    className="bg-background w-full outline-none focus-within:border-blue-700 rounded-md p-2 border-2"
                  />
                  {value && (
                    <X
                      size={18}
                      onClick={() => setValue("")}
                      className="absolute right-3 top-3.5 text-gray-400 cursor-pointer hover:text-gray-600"
                    />
                  )}
                </div>
              </div>
            );
          };
          
          export default Input;
          `,
        },
      ],
    },
    {
      title: "The Search Box",
      component: <Input_02 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { Search, X } from "lucide-react";
import { useState } from "react";

const Input = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      <label htmlFor="search" className="text-sm font-normal">
        Search
      </label>
      <div className="relative mt-1">
        <input
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="bg-background w-full outline-none focus-within:border-blue-700 rounded-md p-2 pl-10 border-2"
        />
        <Search size={18} className="absolute left-3 top-3.5 text-gray-400" />
        {query && (
          <X
            size={18}
            onClick={() => setQuery("")}
            className="absolute right-3 top-3.5 text-gray-400 cursor-pointer hover:text-gray-600"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
`,
        },
      ],
    },

    {
      title: "The Search Box",
      component: <Input_03 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `
import { Check, Mail } from "lucide-react";
import { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@") && email.includes(".");

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      <label htmlFor="email" className="text-sm font-normal">
        Email
      </label>
      <div className="relative mt-1">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@example.com"
          className="bg-background w-full outline-none focus-within:border-blue-700 rounded-md p-2 pl-10 border-2"
        />
        <Mail size={18} className="absolute left-3 top-3.5 text-gray-400" />
        {isValid && (
          <Check
            size={18}
            className="absolute right-3 top-3.5 text-green-500"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#603F26]">Input Components</h1>
      <p className="text-[#1a1a1a] mt-2">
        Versatile input fields for seamless data collection and user interaction
      </p>
      <div className="mt-6 space-y-6">
        {InputVariants.map((variant, index) => (
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

export default InputPage;
