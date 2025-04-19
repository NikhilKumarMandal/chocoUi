import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // install with: npm i lucide-react

const images = [
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Carousel1() {
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

export default Carousel1;
