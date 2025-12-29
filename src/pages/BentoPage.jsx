import React from "react";
import BentoGrid from "../UIComponents/Bento/BentoGrid";
import ImageGrid from "../UIComponents/Bento/ImageGrid";
import NeoBento from "../UIComponents/Bento/NeoBento";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function BentoPage() {
  const bentoVariants = [
    {
      title: "Minimalist Elegance Bento",
      component: <BentoGrid />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const images = {
            nature:
              "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1920",
            workspace:
              "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1920",
            minimal:
              "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1920",
            architecture:
              "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1920",
            design:
              "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1920",
            tech: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920",
            abstract:
              "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80&w=1920",
          };
          
          const BentoGrid = () => {
            return (
              <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="sm:col-span-2 lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                        <img
                          src={images.nature}
                          alt="Nature"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                            Explore Nature
                          </h2>
                          <p className="text-sm sm:text-base md:text-lg opacity-90">
                            Discover the beauty of the natural world
                          </p>
                        </div>
                      </div>
                    </div>
          
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                        <img
                          src={images.workspace}
                          alt="Workspace"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                          <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                            Workspace
                          </h2>
                          <p className="text-sm sm:text-base opacity-90">
                            Productive environment
                          </p>
                        </div>
                      </div>
                    </div>
          
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 sm:h-64 md:h-80">
                        <img
                          src={images.minimal}
                          alt="Minimal"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                          <h2 className="text-xl sm:text-2xl font-bold">Minimal</h2>
                        </div>
                      </div>
                    </div>
          
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 sm:h-64 md:h-80">
                        <img
                          src={images.architecture}
                          alt="Architecture"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                          <h2 className="text-xl sm:text-2xl font-bold">Architecture</h2>
                        </div>
                      </div>
                    </div>
          
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 sm:h-64 md:h-80">
                        <img
                          src={images.design}
                          alt="Design"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                          <h2 className="text-xl sm:text-2xl font-bold">Design</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          
          export default BentoGrid;
          `,
        },
      ],
    },
    {
      title: "Neo-Brutalist Bento",
      component: <NeoBento />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from 'react';

const NeoBento = () => {
  return (
    <div className="p-4 bg-yellow-50 min-h-[600px] flex items-center justify-center font-mono">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        
        {/* Card 1: Large Profile/Intro */}
        <div className="md:col-span-2 bg-[#FF90E8] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 rounded-none transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl font-black uppercase mb-4">Neo-Brutalism</h2>
          <p className="text-lg font-bold leading-tight">
            Bold. Raw. Unapologetic. High contrast and hard shadows define this style.
          </p>
          <button className="mt-6 bg-white border-2 border-black px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer">
            LEARN MORE
          </button>
        </div>

        {/* Card 2: Stat/Number */}
        <div className="bg-[#23A094] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col justify-between transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-xl font-bold bg-black text-white w-fit px-2">STATS</span>
          <div className="text-6xl font-black text-white mt-4">99%</div>
          <p className="font-bold mt-2">Awesomeness Level</p>
        </div>

        {/* Card 3: Image/Visual */}
        <div className="bg-[#FFC900] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center justify-center overflow-hidden relative group transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
           <div className="w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center text-4xl animate-bounce">
             🚀
           </div>
        </div>

        {/* Card 4: List/Features */}
        <div className="md:col-span-2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4 border-b-4 border-black inline-block">FEATURES</h3>
          <ul className="space-y-3 font-bold">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black text-white flex items-center justify-center">1</div>
              <span>Hard Shadows</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#FF90E8] border-2 border-black flex items-center justify-center">2</div>
              <span>Vibrant Colors</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#23A094] border-2 border-black flex items-center justify-center">3</div>
              <span>Thick Borders</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default NeoBento;`,
        },
      ],
    },
    {
      title: "Image Grid",
      component: <ImageGrid />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState, useRef, useEffect } from "react";

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
`,
        },
      ],
      componentProps: [
        {
          name: "images",
          type: "string",
          default: "undefined",
          description: "Alert content",
          example: "''",
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Bento Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Discover modular, grid-based Bento UI components
      </p>
      <div className="mt-6 space-y-6">
        {bentoVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
            fixPreviewHeight={true}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default BentoPage;
