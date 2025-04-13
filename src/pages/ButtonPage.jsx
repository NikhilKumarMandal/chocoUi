import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import Button_02 from "../UIComponents/Buttons/Button_02";
import Button_03 from "../UIComponents/Buttons/Button_03";
import Button_05 from "../UIComponents/Buttons/Button_05";
import Button_07 from "../UIComponents/Buttons/Button_07";
import Button_08 from "../UIComponents/Buttons/Button_08";
import Button_10 from "../UIComponents/Buttons/Button_10";
import Button_12 from "../UIComponents/Buttons/Button_12";
import Button_13 from "../UIComponents/Buttons/Button_13";
import Button_19 from "../UIComponents/Buttons/Button_19";
import Button_21 from "../UIComponents/Buttons/Button_21";
import Button_23 from "../UIComponents/Buttons/Button_23";
import Button_24 from "../UIComponents/Buttons/Button_24";
import Button_25 from "../UIComponents/Buttons/Button_25";
import Button_26 from "../UIComponents/Buttons/Button_26";
import Button_27 from "../UIComponents/Buttons/Button_27";

function ButtonPage() {
  const ButtonVariants = [
    {
      title: "Calendar",
      component: <Button_02 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_03 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_05 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_07 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_08 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
   
    {
      title: "Calendar",
      component: <Button_10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },

    {
      title: "Calendar",
      component: <Button_12 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_13 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_19 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_21 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_23 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_24 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_25 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_26 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Calendar",
      component: <Button_27 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    }
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">Component Previews</h1>
      <p className="text-gray-600 mt-2">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {ButtonVariants.map((variant, index) => (
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

export default ButtonPage;
