import React, { useState } from 'react';
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
            alt={`Slide ${current + 1}`}
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
                className={`w-4 h-4 border-2 border-black transition-all ${
                  current === idx 
                    ? 'bg-black transform scale-125' 
                    : 'bg-white hover:bg-gray-200'
                }`}
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

export default NeoCarousel;
