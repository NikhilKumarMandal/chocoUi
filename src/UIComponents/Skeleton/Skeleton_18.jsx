import React from "react";

const Skeleton_18 = () => {
  return (
    <div className="w-full max-w-4xl p-5 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
      <div className="h-8 w-1/4 bg-gray-200 rounded mb-6"></div>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="mr-6 pb-2">
            <div className="h-5 w-16 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center p-2 rounded-lg">
                <div className="h-6 w-6 bg-gray-200 rounded mr-3"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            <div>
              <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item}>
                    <div className="h-4 w-1/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-3">
                {[1, 2].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded mr-3"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="h-10 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton_18;
