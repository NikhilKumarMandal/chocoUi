import Carousel1 from "../UIComponents/Carousel/Carousel1";
import Carousel2 from "../UIComponents/Carousel/Carousel2";
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
import { ArrowLeft, ArrowRight } from "lucide-react"; // install with: npm i lucide-react

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
    }
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">Component Previews</h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore different UI components you can use in your project.
      </p>
      <div className="mt-6 space-y-6">
        {carouselVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default CarouselPage;
