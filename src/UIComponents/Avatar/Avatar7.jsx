import React from "react";

const Avatar7 = () => {
  const avatarGroups = [
    {
      id: "group1",
      title: "Project Alpha Team",
      members: [
        {
          id: 1,
          name: "Thomas Wilson",
          imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
        },
        {
          id: 2,
          name: "Lisa Johnson",
          imageUrl: "https://randomuser.me/api/portraits/women/63.jpg",
        },
        {
          id: 3,
          name: "Michael Brown",
          imageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
        },
        {
          id: 4,
          name: "Emma Davis",
          imageUrl: "https://randomuser.me/api/portraits/women/47.jpg",
        },
        {
          id: 5,
          name: "David Miller",
          imageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
        },
        {
          id: 6,
          name: "Sarah Wilson",
          imageUrl: "https://randomuser.me/api/portraits/women/21.jpg",
        },
        {
          id: 7,
          name: "Robert Taylor",
          imageUrl: "https://randomuser.me/api/portraits/men/76.jpg",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {avatarGroups.map((group) => (
        <div key={group.id} className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {group.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {group.members.slice(0, 5).map((member) => (
              <div key={member.id} className="relative group">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover transition-transform duration-300 group-hover:scale-110 shadow-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-black rounded-full opacity-50"></div>
                  <svg
                    className="w-6 h-6 text-white relative z-10"
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
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 opacity-0 group-hover:opacity-100 group-hover:bottom-[-30px] transition-all duration-300 z-10">
                  <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                    {member.name}
                  </div>
                </div>
              </div>
            ))}

            {group.members.length > 5 && (
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium text-sm">
                +{group.members.length - 5}
              </div>
            )}

            <button className="ml-2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300">
              <svg
                className="w-5 h-5"
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
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {group.members.map((member) => (
              <div
                key={member.id}
                className="flex items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {member.name}
                </span>
                <button className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
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
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Avatar7;
