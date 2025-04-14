import React from "react";

function Avatar4() {
  const avatars = [
    {
      image: "https://avatars.githubusercontent.com/u/155902231?v=4",
      name: "Nikhil",
      role: "Developer",
    },
    {
      image: "https://avatars.githubusercontent.com/u/154448136?v=4",
      name: "Suryakanta Sahu",
      role: "Developer",
    },
    {
      image: "https://avatars.githubusercontent.com/u/127339696?v=4",
      name: "Ankit Kumar",
      role: "Developer",
    },
    {
      image: "https://avatars.githubusercontent.com/u/115567883?v=4",
      name: "Sandeep Patel",
      role: "Developer",
    },
    {
      image: "https://avatars.githubusercontent.com/u/175517999?v=4",
      name: "Aditya Kumar",
      role: "Developer",
    },
  ];

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex -space-x-3.5 rtl:space-x-reverse">
        {avatars.map((avatar, index) => (
          <div key={index} className="group relative">
            <img
              className="w-15 h-15 border-2 border-amber-50 rounded-full 
                          transition-all duration-500 ease-in-out
                          group-hover:scale-110 group-hover:-translate-x-0.5 
                          hover:z-10 relative
                          hover:shadow-lg"
              src={avatar.image}
              alt={avatar.name}
            />
            <div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2
                            bg-gray-800 text-white px-3 py-2 rounded-lg
                            opacity-0 group-hover:opacity-100
                            transition-all duration-500 ease-in-out
                            scale-0 group-hover:scale-100
                            whitespace-nowrap text-sm
                            pointer-events-none
                            shadow-lg"
            >
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                              border-[6px] border-transparent border-t-gray-900"
              />
              <span className="font-medium text-center">{avatar.name}</span>
              <p className="font-medium text-center">{avatar.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avatar4;
