export function ImageHero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Premium Products
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            illum sequi quasi tempora, placeat consectetur odio incidunt! Alias
            tenetur quam beatae odio ipsam autem officia deserunt dicta, commodi
            error veniam.
          </p>
          <button className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            alt="Headphones"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
