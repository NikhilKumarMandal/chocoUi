import React from "react";

const Avatar5 = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "online",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "UX Designer",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      status: "offline",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      imageUrl: "https://randomuser.me/api/portraits/men/67.jpg",
      status: "away",
    },
    {
      id: 4,
      name: "Emily Wilson",
      role: "Marketing Specialist",
      imageUrl: "https://randomuser.me/api/portraits/women/63.jpg",
      status: "online",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "offline":
        return "bg-gray-400";
      case "away":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center">
            <div className="relative">
              <img
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-sm"
                src={user.imageUrl}
                alt={user.name}
              />
              <span
                className={`absolute bottom-1 right-1 w-4 h-4 ${getStatusColor(user.status)} border-2 border-white dark:border-gray-800 rounded-full`}
              ></span>
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avatar5;
