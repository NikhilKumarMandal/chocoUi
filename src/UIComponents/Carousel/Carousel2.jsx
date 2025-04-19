import { useState, useEffect } from "react";

const slides = [
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Carousel2() {
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

export default Carousel2;


