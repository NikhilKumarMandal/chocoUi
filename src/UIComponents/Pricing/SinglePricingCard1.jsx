import React from 'react';

const FreePlanCard = () => {
  return (
    <div className="w-64">
      <div className="rounded-2xl bg-white px-5 py-10 shadow">
        <p className="text-center text-2xl font-bold text-black">Free</p>

        <h3 className="mt-4 text-center text-sm font-normal text-gray-800">
          <p>Slate helps you see how many</p>
          <p>more days you need</p>
        </h3>

        <div className="mt-5 flex justify-center text-black">
          <div className="text-6xl font-medium">0</div>
          <div className="ml-2 flex flex-col">
            <p className="text-lg font-bold">$</p>
            <p>per Month</p>
          </div>
        </div>

        <div className="ml-3 mt-8">
          <ul className="grid gap-4">
            {[
              { text: 'Unlimited updates', enabled: true },
              { text: 'Slate helps you see how', enabled: true },
              { text: 'Amazing offers', enabled: true },
              { text: '1 GB Storage', enabled: false },
              { text: 'Community Support', enabled: false },
            ].map((item, index) => (
              <li
                key={index}
                className="inline-flex items-center text-black"
              >
                <svg
                  className={`mr-3 h-4 w-4 fill-current ${
                    item.enabled ? 'text-green-400' : 'text-gray-400'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z" />
                </svg>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <button className="w-full rounded-lg bg-black px-3 py-2 text-base font-medium text-white hover:bg-gray-800">
            Try For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreePlanCard;
