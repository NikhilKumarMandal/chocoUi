import React from "react";

export default function Card7({ imageUrl, date, title, description }) {
  return (
    <article className="relative overflow-hidden rounded-3xl shadow-md transition hover:shadow-lg max-w-96 mx-auto m-4 bg-[#FFF8F2]">
      <img
        alt=""
        src={imageUrl}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-[#3E1F0D]/70 to-[#3E1F0D]/40 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime={date} className="block text-xs text-[#F3E3D3]/90">
            {new Date(date).toLocaleDateString()}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white font-bold">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#F3E3D3]/95">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
