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
      title: "Basic Table",
      component: <Table1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `const Table1 = ({
  title = "Heading Title",
  columns = ["ID", "Name", "Age", "Role"],
  data = [
    { ID: 1, Name: "Alice", Age: 28, Role: "Developer" },
    { ID: 2, Name: "Bob", Age: 34, Role: "Designer" },
  ],
}) => {
  return (
    <div className="p-4 w-full">
      <h2 className="mb-4 text-lg font-semibold text-[#603F26]">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-2 bg-[#FFEAC5] text-[#603F26] border border-[#E1E1E1] whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-[#FFDBB5]">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 border border-[#E1E1E1] text-[#545454] whitespace-nowrap"
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table1;`,
        },
      ],
      componentProps: [
        {
          name: "name",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "",
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Component Previews
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {TableVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default TablePage;
