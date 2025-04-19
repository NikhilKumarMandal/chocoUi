import React from "react";

const Card10 = ({
  productName = "Chocolate Bliss",
  description = "Premium Selection",
  price = "12.99",
  category = "Dark Chocolate",
  size = "100g",
  percentage = "70%",
  origin = "Belgium",
  imageUrl = "https://images.pexels.com/photos/1739941/pexels-photo-1739941.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
}) => {
  return (
    <div className="group max-w-sm w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-20 h-20 text-white opacity-80"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            <path d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{productName}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">
            New
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">{category}</span>
            <span className="text-gray-800 font-semibold">${price}</span>
          </div>

          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-amber-500 rounded-full transform origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300">
              <span className="text-sm text-gray-600">{size}</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300">
              <span className="text-sm text-gray-600">{percentage}</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300">
              <span className="text-sm text-gray-600">{origin}</span>
            </div>
          </div>

          <button className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card10;
