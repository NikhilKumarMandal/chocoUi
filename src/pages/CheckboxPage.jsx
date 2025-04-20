import Checkbox from "../UIComponents/Checkbox/Checkbox";
import Check from "../UIComponents/Checkbox/Check";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
function CheckboxPage() {
  const CheckboxVariants = [
    {
      title: "Checkbox Variations",
      component: <Checkbox />,
      codeSnippets: [
        {
          language: "jsx",
          code: `const Checkbox = () => (
  <div className="space-y-6 p-6 max-w-md mx-auto bg-[#FDF9F4]/70 backdrop-blur-md rounded-2xl shadow-xl border border-[#E8DCCF]">
    <label className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-md border-2 border-[#D7C3AE] transition-colors duration-200 checked:bg-[#A9745A] checked:border-[#A9745A] focus:outline-none focus:ring-2 focus:ring-[#EFDAC5]"
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-white pointer-events-none hidden peer-checked:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="text-[#5B4634] group-hover:text-[#A9745A] transition-colors">
        Default checkbox
      </span>
    </label>

    <label className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          defaultChecked
          className="peer appearance-none w-5 h-5 rounded-md border-2 border-[#A9745A] bg-[#A9745A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#EFDAC5]"
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-white pointer-events-none peer-checked:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="text-[#A9745A] font-medium group-hover:text-[#8A5C47] transition-colors">
        Pre-checked
      </span>
    </label>

    <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
      <div className="relative">
        <input
          type="checkbox"
          disabled
          className="w-5 h-5 rounded-md border-2 border-[#DCCFC3] bg-[#F2ECE6]"
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-[#BFAF9D] pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="text-[#9D8975]">Disabled checkbox</span>
    </label>
  </div>
);

export default Checkbox;
`,
        },
      ],
    },

    {
      title: "Checks Variations",
      component: <Check />,
      codeSnippets: [
        {
          language: "jsx",
          code: `const Checkbox = () => (
  <div className="space-y-6 p-6 max-w-md mx-auto bg-[#FDF9F4]/70 backdrop-blur-md rounded-2xl shadow-xl border border-[#E8DCCF]">
    {/* Choco Gradient Checkbox */}
    <label className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-full border-2 border-[#D7C3AE] checked:border-transparent checked:bg-gradient-to-br from-[#A9745A] to-[#7C4E3C] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#EFDAC5]"
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-white pointer-events-none hidden peer-checked:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="text-[#5B4634] group-hover:text-[#A9745A] transition-colors">
        Gradient checkbox
      </span>
    </label>

    {/* Choco Terms Checkbox */}
    <label className="flex items-start gap-3 group cursor-pointer">
      <div className="relative mt-1">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-md border-2 border-[#D7C3AE] checked:bg-[#A9745A] checked:border-[#A9745A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#EFDAC5]"
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-white pointer-events-none hidden peer-checked:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <div className="flex-1">
        <span className="block text-[#5B4634] group-hover:text-[#A9745A] font-medium transition-colors">
          Terms and conditions
        </span>
        <span className="block text-sm text-[#9D8975] group-hover:text-[#7C4E3C] transition-colors">
          You agree to our terms of service and privacy policy
        </span>
      </div>
    </label>
  </div>
);

export default Checkbox;
`,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Checkbox Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Enhance user decisions with consistent, responsive checkbox interactions
      </p>
      <div className="mt-6 space-y-6">
        {CheckboxVariants.map((variant, index) => (
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

export default CheckboxPage;
