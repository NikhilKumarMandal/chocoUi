import Table1 from "../UIComponents/Table/Table_01";
import Table6 from "../UIComponents/Table/Table_06";
import Table7 from "../UIComponents/Table/Table_07";
import Table8 from "../UIComponents/Table/Table_08";
import Table9 from "../UIComponents/Table/Table_09";
import Table11 from "../UIComponents/Table/Table_11";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function TablePage() {
  const TableVariants = [
    {
      title: "Table 1",
      component: <Table1 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },

    {
      title: "Table 6",
      component: <Table6 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Table 7",
      component: <Table7 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Table 8",
      component: <Table8 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Table 9",
      component: <Table9 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
      ],
    },
    {
      title: "Table 11",
      component: <Table11 />,
      codeSnippets: [
        { language: "html", code: `` },
        { language: "jsx", code: `` },
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
        {TableVariants.map((variant, index) => (
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

export default TablePage;
