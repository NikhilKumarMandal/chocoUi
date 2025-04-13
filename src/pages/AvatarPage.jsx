import Avatar1 from "../UIComponents/Avatar/Avatar1";
import Avatar2 from "../UIComponents/Avatar/Avatar2";
import Avatar3 from "../UIComponents/Avatar/Avatar3";
import Avatar4 from "../UIComponents/Avatar/Avatar4";
import Avatar5 from "../UIComponents/Avatar/Avatar5";
import Avatar6 from "../UIComponents/Avatar/Avatar6";
import Avatar7 from "../UIComponents/Avatar/Avatar7";
import Avatar8 from "../UIComponents/Avatar/Avatar8";
// import Avatar9 from "../UIComponents/Avatar/Avatar9";
// import Avatar10 from "../UIComponents/Avatar/Avatar10";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function AvatarPage() {
  const avatarVariants = [
    {
      title: "Avatar 1",
      component: <Avatar1 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Avatar 2",
      component: <Avatar2 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Avatar 3",
      component: <Avatar3 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Avatar 4",
      component: <Avatar4 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Avatar 5",
      component: <Avatar5 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Avatar 6",
      component: <Avatar6 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Avatar 7",
      component: <Avatar7 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Avatar 8",
      component: <Avatar8 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    // {
    //   title: "Avatar 9",
    //   component: <Avatar9 />,
    //   codeSnippets: [
    //     { language: "html", code: `` },
    //     { language: "jsx", code: `` },
    //   ],
    // },
    // {
    //   title: "Avatar 10",
    //   component: <Avatar10 />,
    //   codeSnippets: [
    //     { language: "html", code: `` },
    //     { language: "jsx", code: `` },
    //   ],
    // },
  ];
  return (
    <div className="max-w-4xl mt-20 mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">Component Previews</h1>
      <p className="text-gray-600 mt-2">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {avatarVariants.map((variant, index) => (
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

export default AvatarPage;
