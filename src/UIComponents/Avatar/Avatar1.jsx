function Avatar() {
  const avatar = {
    name: "Aditya kumar",
    role: "Developer",
    image: "https://avatars.githubusercontent.com/u/175517999?v=4",
  };

  return (
    <div className="group relative flex justify-center items-center">
      <div className="relative">
        <img
          src={avatar.image}
          alt={avatar.name}
          className="w-16 h-16 rounded-full 
                               transition-all duration-300 
                              
                               group-hover:scale-120"
        />
      </div>

      <div
        className="absolute -top-20 left-1/2 transform -translate-x-1/2
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
                                border-8 border-transparent border-t-gray-900"
        />

        <div
          className="  absolute -bottom-2 left-1/2 transform -translate-x-1/2
                          border-[6px] border-transparent border-t-gray-900"
        />
        <span className="font-medium">{avatar.name}</span>
        <p className="font-medium text-center">{avatar.role}</p>
      </div>
    </div>
  );
}

export default Avatar;
