import React from "react";

export default function Card7({ imageUrl, date, title, description }) {
  return (
    <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg max-w-96 mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
      <img
        alt=""
        src={imageUrl}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time datetime={date} className="block text-xs text-white/90">
            {new Date(date).toLocaleDateString()}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white font-bold">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
