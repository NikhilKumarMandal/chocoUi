import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=2232&auto=format&fit=crop",
      price: 39,
      name: "Modern Smartphone",
      description:
        "Latest smartphone with advanced camera features and sleek design.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2340&auto=format&fit=crop",
      price: 45,
      name: "Wireless Headphones",
      description:
        "Premium wireless headphones with noise cancellation and long battery life.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=2226&auto=format&fit=crop",
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
      <div className="bg-[#2D1B0E] rounded-lg shadow-md overflow-hidden">
        <div className="relative aspect-[4/5] sm:aspect-[4/3]">
          <button
            className={`absolute top-3 right-3 z-10 p-2 rounded-full bg-[#00000066] transition-transform ${
              isLiked ? "scale-110" : "scale-100"
            }`}
            onClick={toggleLike}
            aria-label={isLiked ? "Unlike product" : "Like product"}
          >
            <Heart
              className={`w-5 h-5 ${
                isLiked ? "fill-[#D85C5C] text-[#D85C5C]" : "text-[#FBEEDC]"
              }`}
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
                    currentSlide === index ? "bg-[#FBEEDC]" : "bg-[#6D4C41]"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 text-[#EEDFC7]">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-lg text-[#FBEEDC]">
              {products[currentSlide].name}
            </h2>
            <span className="font-semibold text-[#FBEEDC]">
              {"$" + products[currentSlide].price}
            </span>
          </div>

          <p className="text-sm text-[#D2BA9B] mb-4 line-clamp-2">
            {products[currentSlide].description}
          </p>

          <button className="w-full bg-[#6D4C41] text-[#FBEEDC] py-2 rounded font-medium hover:bg-[#5D3A2F] transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
