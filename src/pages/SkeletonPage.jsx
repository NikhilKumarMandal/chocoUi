import React from "react";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Skeleton01 from "../UIComponents/Skeleton/Skeleton_01";
import Skeleton03 from "../UIComponents/Skeleton/Skeleton_03";
import Skeleton_04 from "../UIComponents/Skeleton/Skeleton_04";
import Skeleton_05 from "../UIComponents/Skeleton/Skeleton_05";
import Skeleton_07 from "../UIComponents/Skeleton/Skeleton_07";
import Skeleton_10 from "../UIComponents/Skeleton/Skeleton_10";
import Skeleton_14 from "../UIComponents/Skeleton/Skeleton_14";
import Skeleton_17 from "../UIComponents/Skeleton/Skeleton_17";

function FooterPage() {
  const FooterVariants = [
    {
      title: "Footer1",
      component: <Skeleton01 />,
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
      title: "Footer1",
      component: <Skeleton03 />,
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
      title: "Footer1",
      component: <Skeleton_04 />,
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
      title: "Footer1",
      component: <Skeleton_05 />,
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
      title: "Footer1",
      component: <Skeleton_07 />,
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
      title: "Footer1",
      component: <Skeleton_10 />,
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
      title: "Footer1",
      component: <Skeleton_14 />,
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
      title: "Footer1",
      component: <Skeleton_17 />,
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

    ,
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">Component Previews</h1>
      <p className="text-gray-600 mt-2">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {FooterVariants.map((variant, index) => (
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

export default FooterPage;
