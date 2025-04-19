import React, { useState, useRef, useEffect } from "react";

const ImageGrid = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const gridItems = gridRef.current?.querySelectorAll(".grid-item");
    gridItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="container mx-auto p-4">
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {items.map((item) => {
          const isVisible = visibleItems.includes(item.id);
          const baseClass =
            "grid-item relative rounded-lg overflow-hidden shadow-md transition-all duration-300 ";
          const animationClass = isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4";

          return (
            <div
              key={item.id}
              data-id={item.id}
              className={baseClass + animationClass}
              onClick={() => handleImageClick(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-medium text-sm md:text-base">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h2 className="text-xl font-bold">{selectedImage.title}</h2>
              {selectedImage.description && (
                <p className="mt-2 text-gray-300">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function CreativeGallery() {
  const sampleItems = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1920",
      title: "Mountain Landscape",
      description: "Beautiful view of mountain ranges at sunset",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1920",
      title: "Modern Workspace",
      description: "Clean and productive work environment",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1920",
      title: "Abstract Art",
      description: "Colorful abstract painting exhibition",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1920",
      title: "Urban Architecture",
      description: "Modern city buildings architecture",
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1920",
      title: "Creative Design",
      description: "Innovative product design concepts",
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920",
      title: "Tech Setup",
      description: "Minimalist workspace with technology",
    },
    {
      id: "7",
      url: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80&w=1920",
      title: "Abstract Colors",
      description: "Vibrant color patterns and textures",
    },
    {
      id: "8",
      url: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?auto=format&fit=crop&q=80&w=1920",
      title: "Nature Photography",
      description: "Wildlife in natural habitat",
    },
  ];

  return <ImageGrid items={sampleItems} />;
}
