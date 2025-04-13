import { useState } from "react";

const Banners3 = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 z-10 bg-white/80 backdrop-blur-sm 
                   p-1.5 rounded-full text-gray-600 hover:text-gray-900
                   transition-colors duration-200"
          aria-label="Close banner"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/5 relative h-64 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3"
              alt="Banner Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>

          <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-12">
            <div className="max-w-lg">
              <span
                className="inline-block px-4 py-1 mb-4 text-sm 
                           bg-gray-100 text-gray-700 rounded-full"
              >
                New Collection
              </span>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Discover Our Latest Collection
              </h2>

              <p className="text-gray-600 mb-6">
                Explore our newest arrivals featuring modern designs and premium
                quality. Limited time offer with exclusive deals.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  className="px-6 py-2.5 bg-gray-900 text-white 
                                rounded-lg hover:bg-gray-800 transition-colors 
                                duration-200"
                >
                  Shop Now
                </button>
                <button
                  className="px-6 py-2.5 border border-gray-300 
                                text-gray-700 rounded-lg hover:bg-gray-50 
                                transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                *Free shipping on orders over $50
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners3;
