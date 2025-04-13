import React from "react";

function Table2() {
  return (
    <div className="container p-4 w-200">
      <h2 className="mb-4 text-lg font-semibold text-[#464646]">
        Heading Title
      </h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-[#ECECEC] text-[#464646] border border-[#E1E1E1]">
              ID
            </th>
            <th className="px-4 py-2 bg-[#ECECEC] text-[#464646] border border-[#E1E1E1]">
              Name
            </th>
            <th className="px-4 py-2 bg-[#ECECEC] text-[#464646] border border-[#E1E1E1]">
              Age
            </th>
            <th className="px-4 py-2 bg-[#ECECEC] text-[#464646] border border-[#E1E1E1]">
              Occupation
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-[#E1E1E1]">
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              1
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              John Doe
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              30
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              Engineer
            </td>
          </tr>
          <tr className="hover:bg-[#E1E1E1]">
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              2
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              Jane Smith
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              25
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              Designer
            </td>
          </tr>
          <tr className="hover:bg-[#E1E1E1]">
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              3
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              Bob Johnson
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              40
            </td>
            <td className="px-4 py-2 border border-[#E1E1E1] text-[#545454]">
              Manager
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
