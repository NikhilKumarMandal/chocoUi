import Carousel1 from "../UIComponents/Carousel/Carousel1";
import Carousel2 from "../UIComponents/Carousel/Carousel2";
import NeoCarousel from "../UIComponents/Carousel/NeoCarousel";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";

function CarouselPage() {
  const carouselVariants = [
    {
      title: "Photo Carousel",
      component: <Carousel1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  const containerClass = "relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg";
  const imageClass = "w-full object-cover transition duration-500";
  const buttonBase = "absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 text-black p-2 rounded-full transition-all duration-300 shadow-md";
  const buttonLeft = "left-4";
  const buttonRight = "right-4";

  return (
    <div className={containerClass}>
      <img
        src={images[current]}
        className={imageClass}
        alt={"Slide " + (current + 1)}
      />
      <button
        onClick={prev}
        className={[buttonBase, buttonLeft].join(" ")}
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={next}
        className={[buttonBase, buttonRight].join(" ")}
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
}

export default Carousel;`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["lucide-react"],
      usageInstructions: "Import the Photo Carousel component.",
    },
    {
      title: "Auto SlideShow",
      component: <Carousel2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import { useState, useEffect } from "react";
          
          const slides = [
            "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ];
          
          function Carousel() {
            const [index, setIndex] = useState(0);
          
            useEffect(() => {
              const timer = setTimeout(() => {
                setIndex((index + 1) % slides.length);
              }, 3000);
              return () => clearTimeout(timer);
            }, [index]);
          
            return (
              <div style={{ position: "relative", width: "100%", maxWidth: "960px", margin: "0 auto", overflow: "hidden", borderRadius: "16px" }}>
                <img
                  src={slides[index]}
                  alt="Slide"
                  style={{ width: "100%", transition: "all 0.7s", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px" }}>
                  {slides.map((_, i) => {
                    return (
                      <div
                        key={i}
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: i === index ? "white" : "#B0BEC5"
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          }
          
          export default Carousel;`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["lucide-react"],
      usageInstructions: "Import the Auto SlideShow component.",
    },
    {
      title: "Neo-Brutalist Carousel",
      component: <NeoCarousel />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
];

const NeoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 font-mono">
      <div className="relative bg-[#FF90E8] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
        
        {/* Header/Title Bar */}
        <div className="flex justify-between items-center mb-4 border-b-4 border-black pb-2 bg-white px-4 py-2">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-black bg-[#FF5D5D]" />
            <div className="w-4 h-4 rounded-full border-2 border-black bg-[#FFC900]" />
            <div className="w-4 h-4 rounded-full border-2 border-black bg-[#23A094]" />
          </div>
          <div className="font-black uppercase tracking-widest">Gallery_View.exe</div>
        </div>

        {/* Image Container */}
        <div className="relative aspect-video border-4 border-black bg-white overflow-hidden group">
          <img
            src={images[current]}
            alt={\`Slide \${current + 1}\`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDAsMCwwLDAuMSkiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prev}
            className="bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={\`w-4 h-4 border-2 border-black transition-all \${
                  current === idx 
                    ? 'bg-black transform scale-125' 
                    : 'bg-white hover:bg-gray-200'
                }\`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Status Bar */}
        <div className="mt-4 bg-black text-white p-2 font-bold text-sm flex justify-between items-center">
          <span>IMG_{current + 1}.JPG</span>
          <span>{(current + 1).toString().padStart(2, '0')} / {images.length.toString().padStart(2, '0')}</span>
        </div>

      </div>
    </div>
  );
};

export default NeoCarousel;`,
        },
      ],
      requiresInstallation: true,
      dependencies: ["lucide-react"],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Component Previews
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {carouselVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
            isFullWidth={true}
            requiresInstallation={variant.requiresInstallation}
            dependencies={variant.dependencies}
            usageInstructions={variant.usageInstructions}
            componentProps={variant.componentProps}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default CarouselPage;
