import React from "react";

const CTA1 = () => {
  return (
    <div className="flex flex-col space-y-8 bg-gradient-to-br from-[#b8d4ff] via-white to-[#b8d4ff]">
      <section className="px-4 py-10 sm:px-6 md:px-8 lg:px-16 rounded-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4">
              Make Business in action
            </h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quas
              vitae fugit asperiores perspiciatis ullam veritatis ad doloremque
              laboriosam in minus animi, eum nesciunt amet vel perferendis
              sapiente ea dolore corrupti rem. Aperiam quis ex inventore! A
              itaque ex minima.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="mt-6 md:mt-0 md:ml-10">
              <button className="bg-blue-200 hover:bg-blue-300 text-black py-3 px-6 rounded-full font-medium transition-colors text-center">
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA1;
