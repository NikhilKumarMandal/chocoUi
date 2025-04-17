import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1664651205193-bfb6bfdd3b09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 39,
      name: "Modern Smartphone",
      description:
        "Latest smartphone with advanced camera features and sleek design.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1564931768869-c66430fe1162?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 45,
      name: "Wireless Headphones",
      description:
        "Premium wireless headphones with noise cancellation and long battery life.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1696834137489-74a760ff8240?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 55,
      name: "Smart Watch",
      description:
        "Feature-rich smartwatch with health monitoring and stylish design.",
    },
  ];

  const toggleLike = () => setIsLiked(!isLiked);
  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="w-full max-w-sm mx-auto px-2 sm:px-0">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative aspect-[4/5] sm:aspect-[4/3]">
          <button
            className={`absolute top-3 right-3 z-10 p-2 rounded-full bg-black/30 transition-transform ${
              isLiked ? "scale-110" : "scale-100"
            }`}
            onClick={toggleLike}
            aria-label={isLiked ? "Unlike product" : "Like product"}
          >
            <Heart
              className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-white"}`}
            />
          </button>

          <div className="relative h-full overflow-hidden">
            <div
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full h-full flex-shrink-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-3 left-0 right-0">
            <div className="flex justify-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-medium text-lg text-blue-500">
              {products[currentSlide].name}
            </h2>
            <span className="font-medium text-blue-500">
              ${products[currentSlide].price}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {products[currentSlide].description}
          </p>

          <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
