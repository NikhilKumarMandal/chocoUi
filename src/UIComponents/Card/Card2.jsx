import React from "react";

function Card2({
  imageUrl = "https://plus.unsplash.com/premium_photo-1683120880375-074c4ba3f775?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt = "Sunset in the mountains",
  title = "Rich, velvety brown chocolate flows smoothly, melting into a decadent treat",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  tags = ["#Choco 🍫", "#ChocoAddict 😍"],
}) {
  return (
    <div className="max-w-sm rounded-2xl border-1 overflow-hidden shadow-lg mx-auto m-4">
      <img
        className="p-3 rounded-3xl w-full h-64 object-cover"
        src={imageUrl}
        alt={imageAlt}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card2;
