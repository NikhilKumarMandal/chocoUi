import React from "react";

const Badge4 = () => {
  const skillBadges = [
    {
      id: 1,
      label: "HTML",
      level: "Advanced",
      color:
        "bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
    },
    {
      id: 2,
      label: "CSS",
      level: "Advanced",
      color:
        "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    },
    {
      id: 3,
      label: "JavaScript",
      level: "Intermediate",
      color:
        "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
    },
    {
      id: 4,
      label: "React",
      level: "Advanced",
      color:
        "bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800",
    },
    {
      id: 5,
      label: "Node.js",
      level: "Intermediate",
      color:
        "bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
    },
    {
      id: 6,
      label: "Python",
      level: "Beginner",
      color:
        "bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800",
    },
    {
      id: 7,
      label: "UI Design",
      level: "Intermediate",
      color:
        "bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
    },
    {
      id: 8,
      label: "Figma",
      level: "Advanced",
      color:
        "bg-pink-100 text-pink-800 border-pink-300 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800",
    },
  ];

  const getLevelBadge = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Advanced":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="w-full p-8">
      <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Skills & Expertise Badges
        </h3>

        <div className="flex flex-wrap gap-2 mb-8">
          {skillBadges.map((badge) => (
            <div
              key={badge.id}
              className={`group relative inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border ${badge.color} transition-all duration-200 hover:shadow-sm`}
            >
              {badge.label}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-300 z-10 whitespace-nowrap">
                <div
                  className={`px-2 py-1 rounded text-xs font-medium ${getLevelBadge(badge.level)}`}
                >
                  {badge.level}
                </div>
                <div className="w-2 h-2 bg-white dark:bg-gray-800 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2 border-t border-l border-gray-200 dark:border-gray-700"></div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Project Status Badges
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  Project Documentation
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Last updated 2 days ago
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
              In Progress
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  UI Design
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Last updated 5 days ago
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
              Completed
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  API Integration
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Last updated 1 day ago
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
              Blocked
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge4;
