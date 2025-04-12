import React from "react";

const Avatar8 = () => {
  const users = [
    {
      id: 1,
      name: "Katherine Johnson",
      role: "Frontend Developer",
      email: "katherine.johnson@example.com",
      imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
      online: true,
    },
    {
      id: 2,
      name: "Marcus Wilson",
      role: "UI/UX Designer",
      email: "marcus.wilson@example.com",
      imageUrl: "https://randomuser.me/api/portraits/men/36.jpg",
      online: false,
    },
    {
      id: 3,
      name: "Sophia Chen",
      role: "Product Manager",
      email: "sophia.chen@example.com",
      imageUrl: "https://randomuser.me/api/portraits/women/79.jpg",
      online: true,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Team Members
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Connect and collaborate with your team
          </p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150"
            >
              <div className="flex items-center space-x-4">
                <div className="relative flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
                    src={user.imageUrl}
                    alt={user.name}
                  />
                  <span
                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800 ${user.online ? "bg-green-500" : "bg-gray-300 dark:bg-gray-500"}`}
                  ></span>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </p>
                  <div className="flex items-center">
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {user.role}
                    </p>
                    <span className="mx-1 text-gray-500 dark:text-gray-400">
                      •
                    </span>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="flex flex-shrink-0 space-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full p-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg
                      className="h-5 w-5"
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
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full p-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg
                      className="h-5 w-5"
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
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full p-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="p-4 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add Team Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar8;
