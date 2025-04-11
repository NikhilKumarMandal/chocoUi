import React from "react";
const CTA2 = () => {
  return (
    <div className="space-y-10 p-10">
      <section className="rounded-lg bg-gray-100 p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[gray-900]">
              Explore Differently.
            </h2>
            <p className="text-gray-600 mt-2">
              Sign up for all of the latest news, updates and releases.
            </p>
          </div>
          <form className="w-full md:w-1/2">
            <div className="flex items-center bg-white rounded-md overflow-hidden border border-gray-300">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none bg-white"
              />
              <button className="px-4 h-full bg-gray-200 hover:bg-gray-300 text-gray-700">
                →
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Managed in accordance with the{" "}
              <a href="#" className="underline">
                Privacy policy
              </a>
              . You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};
export default CTA2;
