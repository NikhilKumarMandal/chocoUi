import {useState} from "react";

const Avatar9 = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const users = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Product Designer",
      imageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
      status: "active",
      lastActive: "Now",
    },
    {
      id: 2,
      name: "Ryan Foster",
      role: "Frontend Developer",
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      status: "active",
      lastActive: "Now",
    },
    {
      id: 3,
      name: "Jessica Chen",
      role: "UX Researcher",
      imageUrl: "https://randomuser.me/api/portraits/women/17.jpg",
      status: "inactive",
      lastActive: "2h ago",
    },
    {
      id: 4,
      name: "Michael Wilson",
      role: "Backend Developer",
      imageUrl: "https://randomuser.me/api/portraits/men/42.jpg",
      status: "inactive",
      lastActive: "3h ago",
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Project Manager",
      imageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
      status: "away",
      lastActive: "1d ago",
    },
  ];

  const filteredUsers =
    selectedTab === "all"
      ? users
      : users.filter((user) => user.status === selectedTab);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-gray-400";
      case "away":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Team Members
          </h3>

          <div className="flex space-x-1 rounded-lg bg-gray-100 dark:bg-gray-700 p-1">
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                selectedTab === "all"
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={() => setSelectedTab("all")}
            >
              All
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                selectedTab === "active"
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={() => setSelectedTab("active")}
            >
              Active
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                selectedTab === "inactive"
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={() => setSelectedTab("inactive")}
            >
              Inactive
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                selectedTab === "away"
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={() => setSelectedTab("away")}
            >
              Away
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative">
                {user.imageUrl ? (
                  <img
                    className="w-20 h-20 rounded-full object-cover border-2 border-white dark:border-gray-700"
                    src={user.imageUrl}
                    alt={user.name}
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 text-xl font-semibold">
                    {getInitials(user.name)}
                  </div>
                )}
                <span
                  className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(user.status)} border-2 border-white dark:border-gray-700 rounded-full`}
                ></span>
              </div>

              <h4 className="mt-3 text-base font-medium text-gray-900 dark:text-white">
                {user.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.role}
              </p>

              <div className="mt-2 flex items-center">
                <span
                  className={`w-2 h-2 ${getStatusColor(user.status)} rounded-full mr-2`}
                ></span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {user.status === "active"
                    ? "Online"
                    : `Last active ${user.lastActive}`}
                </span>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avatar9;
