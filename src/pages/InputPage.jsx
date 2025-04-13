import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Input_01 from "../UIComponents/Input/Input_01";
import Input_02 from "../UIComponents/Input/Input_02";
import Input_03 from "../UIComponents/Input/Input_03";
function InputPage() {
  const InputVariants = [
    {
      title: "Input",
      component: <Input_01 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { X } from "lucide-react";
          import { useState } from "react";
          
          const Input = () => {
            const [value, setValue] = useState("");
          
            return (
              <div className="w-96 mx-auto">
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
      title: "Input",
      component: <Input_02 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { Search, X } from "lucide-react";
import { useState } from "react";

const Input = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-96 mx-auto">
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
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">Component Previews</h1>
      <p className="text-gray-600 mt-2">
        Explore different UI components you can use in your project.
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
