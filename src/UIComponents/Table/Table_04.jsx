import React, { useState, useEffect } from "react";

const Table_04 = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      team: [
        { name: "John Doe", avatar: "JD", color: "bg-blue-100 text-blue-600" },
        {
          name: "Jane Smith",
          avatar: "JS",
          color: "bg-purple-100 text-purple-600",
        },
        {
          name: "Bob Johnson",
          avatar: "BJ",
          color: "bg-yellow-100 text-yellow-600",
        },
      ],
      status: "In Progress",
      progress: 75,
      dueDate: "2024-04-15",
      statusColor: "bg-blue-100 text-blue-800",
      progressColor: "bg-blue-600",
    },
    {
      id: 2,
      name: "Mobile App",
      team: [
        {
          name: "Alice Williams",
          avatar: "AW",
          color: "bg-green-100 text-green-600",
        },
        {
          name: "Charlie Brown",
          avatar: "CB",
          color: "bg-red-100 text-red-600",
        },
      ],
      status: "Completed",
      progress: 100,
      dueDate: "2024-03-30",
      statusColor: "bg-green-100 text-green-800",
      progressColor: "bg-green-600",
    },
    {
      id: 3,
      name: "Backend API",
      team: [
        { name: "John Doe", avatar: "JD", color: "bg-blue-100 text-blue-600" },
        {
          name: "Alice Williams",
          avatar: "AW",
          color: "bg-green-100 text-green-600",
        },
      ],
      status: "On Hold",
      progress: 30,
      dueDate: "2024-05-01",
      statusColor: "bg-yellow-100 text-yellow-800",
      progressColor: "bg-yellow-600",
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

  const handleAddProject = () => {
    alert("Add Project functionality would be implemented here");
  };

  const handleEditProject = (e, projectId) => {
    e.stopPropagation();
    alert(`Edit project ID: ${projectId}`);
  };

  const handleDeleteProject = (e, projectId) => {
    e.stopPropagation();
    if (
      window.confirm(
        `Are you sure you want to delete project ID: ${projectId}?`
      )
    ) {
      setProjects(projects.filter((project) => project.id !== projectId));
    }
  };

  // Filter and sort projects
  const filteredAndSortedProjects = projects
    .filter(
      (project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.status.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const renderMobileCard = (project) => (
    <div className="bg-white p-4 rounded-lg shadow mb-4 border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.statusColor}`}
        >
          {project.status}
        </span>
      </div>

      <div className="mb-3">
        <div className="text-sm text-gray-500 mb-1">Team Members</div>
        <div className="flex -space-x-2">
          {project.team.map((member, index) => (
            <div
              key={index}
              className={`h-8 w-8 rounded-full ${member.color} flex items-center justify-center text-sm font-medium border-2 border-white`}
            >
              {member.avatar}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <div className="text-sm text-gray-500 mb-1">Progress</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${project.progressColor}`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {project.progress}% complete
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-3">
        Due Date: {new Date(project.dueDate).toLocaleDateString()}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200 flex justify-end">
        <button
          className="text-blue-600 hover:text-blue-900 mr-3"
          onClick={(e) => handleEditProject(e, project.id)}
        >
          Edit
        </button>
        <button
          className="text-red-600 hover:text-red-900"
          onClick={(e) => handleDeleteProject(e, project.id)}
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
          Project Dashboard
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search projects..."
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
            onClick={handleAddProject}
          >
            Add Project
          </button>
        </div>
      </div>

      {isMobileView ? (
        <div>
          {filteredAndSortedProjects.map((project) =>
            renderMobileCard(project)
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
                  onClick={() => toggleSort("name")}
                >
                  <div className="flex items-center">
                    <span>Project</span>
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
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team
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
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("progress")}
                >
                  <div className="flex items-center">
                    <span>Progress</span>
                    {sortColumn === "progress" && (
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
                  onClick={() => toggleSort("dueDate")}
                >
                  <div className="flex items-center">
                    <span>Due Date</span>
                    {sortColumn === "dueDate" && (
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
              {filteredAndSortedProjects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {project.name}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex -space-x-2">
                      {project.team.map((member, index) => (
                        <div
                          key={index}
                          className={`h-8 w-8 rounded-full ${member.color} flex items-center justify-center text-sm font-medium border-2 border-white`}
                        >
                          {member.avatar}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${project.progressColor}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {project.progress}% complete
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(project.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={(e) => handleEditProject(e, project.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={(e) => handleDeleteProject(e, project.id)}
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
          Showing {filteredAndSortedProjects.length} of {projects.length}{" "}
          projects
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

export default Table_04;
