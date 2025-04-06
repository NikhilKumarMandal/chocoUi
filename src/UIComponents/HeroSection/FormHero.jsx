export function FormHero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-600 p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="mb-6">
                Get exclusive access to our resources and updates
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="md:w-1/2 p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Create Account
              </h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
