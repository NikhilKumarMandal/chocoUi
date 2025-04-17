import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "“The new planning and tracking functionality keeps my project management close to my code. I no longer find myself needing to reach for spreadsheets or 3P tools which go stale instantly.”",
      name: "Grace Godfrey",
      title: "Development Manager",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=512&q=80",
      companyLogo:
        "https://images.unsplash.com/photo-1633410189542-36d96e3762b8?q=80&w=50",
      companyName: "ABC Enterprise",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div className="max-w-xl">
              <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed italic mb-4">
                {t.quote}
              </p>
              <div className="text-sm text-gray-500 font-medium">
                {t.name} <span className="text-gray-400">//</span> {t.title}
              </div>
              <div className="mt-2 inline-flex items-center gap-2 justify-center md:justify-start">
                <img
                  src={t.companyLogo}
                  alt={t.companyName}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-gray-900 font-semibold">
                  {t.companyName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
