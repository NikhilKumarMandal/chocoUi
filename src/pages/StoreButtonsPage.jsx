import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import PlayStore from "../UIComponents/StoreButtons/PlayStore";
import Window from "../UIComponents/StoreButtons/Window";

function StoreButtonsPage() {
  const StoreButtonVariants = [
    {
      title: "Microsoft Download",
      component: <Window />,
      codeSnippets: [
        {
          language: "jsx",
          code: `const Window = () => {
  return (
    <div className="flex w-fit cursor-pointer items-center justify-center gap-6 rounded-[10px] bg-[#603F26] py-5 pl-8 pr-10 hover:bg-gray-800 px-">
      <svg
        width="29"
        height="27"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2778 15.6471C11.2778 15.153 10.9556 14.8236 10.4722 14.8236H0.805556C0.322222 14.8236 0 15.153 0 15.6471V23.8824C0 24.3765 0.322222 24.7059 0.805556 24.8706L10.4722 26.0235C10.9556 26.0235 11.2778 25.6941 11.2778 25.3647V15.6471V15.6471ZM13.6944 14.8236C13.2111 14.8236 12.8889 15.153 12.8889 15.6471V25.3647C12.8889 25.8588 13.2111 26.1883 13.6944 26.353L28.1944 28C28.6778 28 29 27.6706 29 27.3412V15.8118C29 15.3177 28.6778 14.9883 28.1944 14.9883L13.6944 14.8236V14.8236ZM11.2778 2.80002C11.2778 2.30591 10.9556 1.97649 10.4722 2.1412L0.805556 3.29414C0.322222 3.29414 0 3.62355 0 4.11767V12.353C0 12.8471 0.322222 13.1765 0.805556 13.1765H10.4722C10.9556 13.1765 11.2778 12.8471 11.2778 12.353V2.80002ZM13.6944 1.81179C13.2111 1.81179 12.8889 2.30591 12.8889 2.80002V12.5177C12.8889 13.0118 13.2111 13.3412 13.6944 13.3412H28.1944C28.6778 13.3412 29 13.0118 29 12.5177V0.988259C29 0.494141 28.6778 0.16473 28.1944 0.329435L13.6944 1.81179V1.81179Z"
          fill="#ffffff"
        />
      </svg>
      <div className="flex flex-col text-white">
        <p className="text-sm font-bold">Download on the</p>
        <h1 className="text-xl font-medium tracking-wide">Windows Store</h1>
      </div>
    </div>
  );
};

export default Window;`,
        },
      ],
    },
    {
      title: "Android Store",
      component: <PlayStore />,
      codeSnippets: [
        {
          language: "jsx",
          code: `const PlayStore = () => {
  return (
    <button className="rounded-[10px]">
      <div className="flex w-fit cursor-pointer items-center justify-center gap-6 rounded-[10px] bg-[#603F26] py-5 pl-8 pr-10 hover:bg-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          stroke="currentColor"
          fill="#ffffff"
          className="w-[35px]"
        >
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
        </svg>
        <div className="flex flex-col text-white">
          <p className="text-sm font-bold">Download on the</p>
          <h1 className="text-xl font-medium tracking-wide">Google Play</h1>
        </div>
      </div>
    </button>
  );
};

export default PlayStore;
`,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Store Button Components</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
       Buttons let users take actions and make choices with a single tap.
      </p>
      <div className="mt-6 space-y-6">
        {StoreButtonVariants.map((variant, index) => (
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

export default StoreButtonsPage;
