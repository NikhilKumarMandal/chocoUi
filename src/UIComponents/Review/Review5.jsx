import React from "react";

const Review5 = () => {
  return (
    <div className="space-y-20 px-4 py-12 md:px-10 lg:px-20">
      <section className="flex flex-col md:flex-row items-center gap-10 rounded-lg bg-white px-6 py-10">
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=512&q=80"
            alt="testimonial"
            className="w-64 h-64 object-cover rounded-full mx-auto"
          />
        </div>
        <div className="text-center md:text-left max-w-4xl">
          <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
            “The new planning and tracking functionality keeps my project
            management close to my code. I no longer find myself needing to
            reach for spreadsheets or 3P tools which go stale instantly.”
          </p>
          <div className="mt-6 text-sm text-gray-500 font-medium">
            Grace Godfrey // Development Manager
          </div>
          <div className="mt-2 inline-flex items-center gap-2 text-black font-semibold">
            <img
              src="https://images.unsplash.com/photo-1633410189542-36d96e3762b8?q=80&w=50"
              alt="ABC Enterprise"
              className="size-10"
            />
            ABC Enterprise
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review5;
