import React, { useState, useEffect } from "react";

const Table_03 = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      occupation: "Engineer",
      status: "Active",
      initials: "JD",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      age: 25,
      occupation: "Designer",
      status: "Active",
      initials: "JS",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      age: 40,
      occupation: "Manager",
      status: "On Leave",
      initials: "BJ",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice.williams@example.com",
      age: 28,
      occupation: "Developer",
      status: "Active",
      initials: "AW",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      age: 35,
      occupation: "Analyst",
      status: "On Leave",
      initials: "CB",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleAddEmployee = () => {
    alert("Add Employee functionality would be implemented here");
  };

  const handleEditEmployee = (e, employeeId) => {
    e.stopPropagation();
    alert(`Edit employee ID: ${employeeId}`);
  };

  const handleDeleteEmployee = (e, employeeId) => {
    e.stopPropagation();
    if (
      window.confirm(
        `Are you sure you want to delete employee ID: ${employeeId}?`
      )
    ) {
      setEmployees(employees.filter((employee) => employee.id !== employeeId));
    }
  };

  // Filter and sort employees
  const filteredAndSortedEmployees = employees
    .filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.occupation.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const renderMobileCard = (employee) => (
    <div className="bg-white p-4 rounded-lg shadow mb-4 border border-gray-200">
      <div className="flex items-center mb-3">
        <div
          className={`h-10 w-10 rounded-full ${employee.bgColor} flex items-center justify-center ${employee.textColor} font-medium`}
        >
          {employee.initials}
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {employee.name}
          </div>
          <div className="text-sm text-gray-500">{employee.email}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <div>
          <div className="text-xs text-gray-500">Age</div>
          <div className="text-sm text-gray-900 mt-1">{employee.age}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Occupation</div>
          <div className="text-sm text-gray-900 mt-1">
            {employee.occupation}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Status</div>
          <div className="mt-1">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.statusColor}`}
            >
              {employee.status}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200 flex justify-end">
        <button
          className="text-blue-600 hover:text-blue-900 mr-3"
          onClick={(e) => handleEditEmployee(e, employee.id)}
        >
          Edit
        </button>
        <button
          className="text-red-600 hover:text-red-900"
          onClick={(e) => handleDeleteEmployee(e, employee.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <div className="container p-4 sm:p-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Employee Directory
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg
              className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={handleAddEmployee}
          >
            Add Employee
          </button>
        </div>
      </div>

      {isMobileView ? (
        <div>
          {filteredAndSortedEmployees.map((employee) =>
            renderMobileCard(employee)
          )}
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("id")}
                >
                  <div className="flex items-center">
                    <span>ID</span>
                    {sortColumn === "id" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("name")}
                >
                  <div className="flex items-center">
                    <span>Name</span>
                    {sortColumn === "name" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("age")}
                >
                  <div className="flex items-center">
                    <span>Age</span>
                    {sortColumn === "age" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("occupation")}
                >
                  <div className="flex items-center">
                    <span>Occupation</span>
                    {sortColumn === "occupation" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("status")}
                >
                  <div className="flex items-center">
                    <span>Status</span>
                    {sortColumn === "status" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.id}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className={`h-8 w-8 rounded-full ${employee.bgColor} flex items-center justify-center ${employee.textColor} font-medium`}
                      >
                        {employee.initials}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {employee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.age}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.occupation}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.statusColor}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={(e) => handleEditEmployee(e, employee.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={(e) => handleDeleteEmployee(e, employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          Showing {filteredAndSortedEmployees.length} of {employees.length}{" "}
          employees
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table_03;
