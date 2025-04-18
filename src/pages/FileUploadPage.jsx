import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import FileUpload1 from "../UIComponents/FileUpload/FileUpload1";
import FileUpload2 from "../UIComponents/FileUpload/FileUpload2";

function FileUploadPage() {
  const FileVariants = [
    {
      title: "Drag Drop Upload",
      component: <FileUpload1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
    {
      title: "Image Drop Zone",
      component: <FileUpload2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: ``,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Component Previews</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {FileVariants.map((variant, index) => (
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

export default FileUploadPage;
