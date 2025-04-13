import React, { useState, useEffect } from "react";

const Table_09 = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Update homepage design",
      description: "UI/UX improvements",
      assignee: "John Doe",
      initials: "JD",
      dueDate: "Sep 25, 2023",
      status: "In Progress",
      priority: "High",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fix navigation bugs",
      description: "Mobile responsiveness",
      assignee: "Jane Smith",
      initials: "JS",
      dueDate: "Sep 20, 2023",
      status: "Completed",
      priority: "Medium",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Implement new API",
      description: "Backend integration",
      assignee: "Bob Johnson",
      initials: "BJ",
      dueDate: "Oct 05, 2023",
      status: "Pending",
      priority: "Low",
      isCompleted: false,
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTaskToggle = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          const isCompleted = !task.isCompleted;
          return {
            ...task,
            isCompleted,
            status: isCompleted
              ? "Completed"
              : task.status === "Completed"
                ? "In Progress"
                : task.status,
          };
        }
        return task;
      })
    );
  };

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: "New Task",
      description: "Task description",
      assignee: "Unassigned",
      initials: "UN",
      dueDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      status: "Pending",
      priority: "Medium",
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "active":
        return !task.isCompleted;
      case "completed":
        return task.isCompleted;
      default:
        return true;
    }
  });

  const renderMobileCard = (task) => (
    <div
      key={task.id}
      className="bg-white p-4 rounded-lg shadow mb-4 border border-gray-100"
    >
      <div className="flex items-center mb-3">
        <div className="flex-shrink-0 h-5 w-5 mr-3">
          <input
            type="checkbox"
            className="h-4 w-4 text-gray-800 border-gray-300 rounded focus:ring-gray-500"
            checked={task.isCompleted}
            onChange={() => handleTaskToggle(task.id)}
          />
        </div>
        <div>
          <div
            className={`text-sm font-medium text-gray-900 ${task.isCompleted ? "line-through" : ""}`}
          >
            {task.title}
          </div>
          <div className="text-xs text-gray-500">{task.description}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <div>
          <div className="text-xs text-gray-500">Assignee</div>
          <div className="flex items-center mt-1">
            <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium">
              {task.initials}
            </div>
            <div className="ml-2 text-sm text-gray-900">{task.assignee}</div>
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Due Date</div>
          <div className="text-sm text-gray-900 mt-1">{task.dueDate}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Status</div>
          <div className="mt-1">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(task.status)}`}
            >
              {task.status}
            </span>
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Priority</div>
          <div className="flex items-center mt-1">
            <div
              className={`h-2 w-2 rounded-full mr-2 ${getPriorityColor(task.priority)}`}
            ></div>
            <span className="text-sm text-gray-900">{task.priority}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container p-4 sm:p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Task Management
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="flex rounded-md overflow-hidden border border-gray-200 w-full sm:w-auto">
                <button
                  className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium transition-colors ${filter === "all" ? "bg-gray-100 text-gray-800" : "text-gray-500 hover:bg-gray-50"}`}
                  onClick={() => setFilter("all")}
                >
                  All
                </button>
                <button
                  className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium transition-colors ${filter === "active" ? "bg-gray-100 text-gray-800" : "text-gray-500 hover:bg-gray-50"}`}
                  onClick={() => setFilter("active")}
                >
                  Active
                </button>
                <button
                  className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium transition-colors ${filter === "completed" ? "bg-gray-100 text-gray-800" : "text-gray-500 hover:bg-gray-50"}`}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </button>
              </div>
              <button
                className="w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div className="p-4">
            {filteredTasks.map((task) => renderMobileCard(task))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Task
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignee
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredTasks.map((task) => (
                  <tr
                    key={task.id}
                    className={`transition-all duration-200 ${hoveredRow === task.id ? "bg-gray-50" : ""}`}
                    onMouseEnter={() => setHoveredRow(task.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-5 w-5">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-gray-800 border-gray-300 rounded focus:ring-gray-500"
                            checked={task.isCompleted}
                            onChange={() => handleTaskToggle(task.id)}
                          />
                        </div>
                        <div className="ml-3">
                          <div
                            className={`text-sm font-medium text-gray-900 ${task.isCompleted ? "line-through" : ""}`}
                          >
                            {task.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {task.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium">
                          {task.initials}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm text-gray-900">
                            {task.assignee}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {task.dueDate}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(task.status)}`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`h-2 w-2 rounded-full ${getPriorityColor(task.priority)} mr-2`}
                        ></div>
                        <span className="text-sm text-gray-900">
                          {task.priority}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table_09;
