import React from "react";

function Card5({ name, jobTitle, imageUrl, className }) {
  const handleAddFriend = () => {
    alert("Friend added!");
  };

  const handleMessage = () => {
    alert("Message sent!");
  };

  return (
    <div
      className={`w-full max-w-sm bg-[#FFF8F2] border border-[#F1E6D9] rounded-3xl shadow-md mx-auto m-4 p-6 ${className}`}
    >
      <div className="flex flex-col items-center text-center">
        <img
          className="w-24 h-24 mb-4 rounded-full shadow-md border-4 border-[#F3E3D3]"
          src={imageUrl}
          alt={`${name} image`}
        />

        <h5 className="text-xl font-semibold text-[#5C371B] mb-1">{name}</h5>

        <span className="text-sm text-[#A3775C]">{jobTitle}</span>

        <div className="flex gap-2 mt-5">
          <button
            onClick={handleAddFriend}
            className="px-4 py-2 rounded-lg bg-[#7B3F00] text-white text-sm font-medium hover:bg-[#5C371B] transition-all duration-200"
          >
            Add Friend
          </button>
          <button
            onClick={handleMessage}
            className="px-4 py-2 rounded-lg bg-[#F3E3D3] text-[#5C371B] text-sm font-medium hover:bg-[#E7D2C0] transition-all duration-200"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card5;
