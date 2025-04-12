import React from "react";

const Avatar6 = () => {
  const members = [
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
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex flex-wrap items-center gap-2">
        {members.map((member) => (
          <div key={member.id} className="relative group">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-12 h-12 rounded-full border-2 border-white object-cover transition-transform duration-300 group-hover:scale-110 shadow-sm"
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
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 opacity-0 group-hover:opacity-100 group-hover:bottom-[-30px] transition-all duration-300 z-10">
              <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                {member.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avatar6;
