import React from "react";

function Card2({
  imageUrl = "https://plus.unsplash.com/premium_photo-1683120880375-074c4ba3f775?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt = "Sunset in the mountains",
  title = "Rich, velvety brown chocolate flows smoothly, melting into a decadent treat",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  tags = ["#Choco 🍫", "#ChocoAddict 😍"],
}) {
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg mx-auto m-4 bg-[#FFF8F2] border border-[#F1E6D9]">
      <img
        className="p-3 rounded-3xl w-full h-64 object-cover"
        src={imageUrl}
        alt={imageAlt}
      />

      <div className="px-6 py-4">
        <div className="font-semibold text-lg sm:text-xl text-[#5C371B] mb-2">
          {title}
        </div>
        <p className="text-sm sm:text-base text-[#7A4D28] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="px-6 pt-3 pb-5 flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-[#F3E3D3] text-[#5C371B] rounded-full px-3 py-1 text-xs sm:text-sm font-medium mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card2;
