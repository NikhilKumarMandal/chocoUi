import React from "react";

function Card2() {
  return (
    <div className="max-w-sm rounded-2xl border-1 overflow-hidden shadow-lg mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
      <img
        className="p-3 rounded-3xl w-full h-64"
        src="https://plus.unsplash.com/premium_photo-1683120880375-074c4ba3f775?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Rich, velvety brown chocolate flows smoothly, melting into a decadent
          treat
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Choco 🍫
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #ChocoAddict 😍
        </span>
      </div>
    </div>
  );
}

export default Card2;
