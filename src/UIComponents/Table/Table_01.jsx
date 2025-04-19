const Table1 = ({
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

export default Table1;
