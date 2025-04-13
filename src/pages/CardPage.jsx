import Card1 from "../UIComponents/Card/Card1";
import Card2 from "../UIComponents/Card/Card2";
import Card3 from "../UIComponents/Card/Card3";
import Card4 from "../UIComponents/Card/Card4";
import Card5 from "../UIComponents/Card/Card5";
import Card6 from "../UIComponents/Card/Card6";
import Card7 from "../UIComponents/Card/Card7";
import Card10 from "../UIComponents/Card/Card10";

import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function CardPage() {
  const cardsVariants = [
    {
      title: "Card 1",
      component: <Card1 />,
      codeSnippets: [
        {
          language: "html",
          code: `<div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm bg-[#FFDBB5] dark:border-[#cec4ba]">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#152f3d]">Choco UI</h5>
        </a>
        <p class="mb-3 font-normal text-[#102733]">Here are the full information of Choco UI and Tech-Wizard team.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#6C4E31] rounded-lg hover:bg-[#5a3e29] focus:ring-4 focus:outline-none focus:ring-[#6C4E31]">
            Read more
            <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>`,
        },
        {
          language: "jsx",
          code: `export default function Card1() {
  return (
        <div className="max-w-sm p-6  border border-gray-200 rounded-lg shadow-sm bg-[#FFDBB5] dark:border-[#cec4ba]">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#152f3d]">Choco ui</h5>
            </a>
            <p className="mb-3 font-normal text-[#102733] ">Here are the full  information of choco ui and tech-wizard team </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6C4E31] rounded-lg hover:bg-[#6C4E31] focus:ring-4 focus:outline-none focus:ring-[#6C4E31] dark:bg-[#6C4E31] dark:hover:bg-[#6C4E31] dark:focus:ring-[#6C4E31]">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
  )
}`,
        },
      ],
    },
    {
      title: "Card",
      component: <Card2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Card",
      component: <Card3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Card",
      component: <Card4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Card",
      component: <Card5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Card",
      component: <Card6 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Card",
      component: <Card7 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },

    {
      title: "Card",
      component: <Card10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-black">
        Elegant Card Component Previews
      </h1>
      <p className="text-gray-600 mt-2">
        Dive into a variety of beautifully designed card components tailored for
        modern web interfaces. Copy, customize, and elevate your UI instantly.
      </p>
      <div className="mt-6 space-y-6">
        {cardsVariants.map((variant, index) => (
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

export default CardPage;
