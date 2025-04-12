import React from "react";

const Badge5 = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const tagOptions = [
    {
      id: 1,
      label: "React",
      color:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    },
    {
      id: 2,
      label: "Vue",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
    },
    {
      id: 3,
      label: "Angular",
      color:
        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800",
    },
    {
      id: 4,
      label: "Svelte",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    },
    {
      id: 5,
      label: "Next.js",
      color:
        "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700",
    },
    {
      id: 6,
      label: "TypeScript",
      color:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    },
    {
      id: 7,
      label: "TailwindCSS",
      color:
        "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
    },
    {
      id: 8,
      label: "Node.js",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
    },
    {
      id: 9,
      label: "GraphQL",
      color:
        "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800",
    },
    {
      id: 10,
      label: "MongoDB",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
    },
  ];

  const toggleTag = (tagId) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  return (
    <div className="w-full p-8">
      <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Interactive Tag Selection
        </h3>

        <div className="flex flex-wrap gap-2 mb-8">
          {tagOptions.map((tag) => (
            <button
              key={tag.id}
              className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                selectedTags.includes(tag.id)
                  ? `${tag.color} ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-gray-800`
                  : "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              onClick={() => toggleTag(tag.id)}
            >
              {tag.label}
              {selectedTags.includes(tag.id) && (
                <svg
                  className="w-4 h-4 ml-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">
            Selected Tags:
          </h4>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg min-h-[60px]">
            {selectedTags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tagId) => {
                  const tag = tagOptions.find((t) => t.id === tagId);
                  return (
                    <div
                      key={tag.id}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                    >
                      {tag.label}
                      <button
                        className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                        onClick={() => toggleTag(tag.id)}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No tags selected. Click on tags above to select them.
              </p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Animated Badge Examples
          </h3>

          <div className="flex flex-wrap gap-4">
            <div className="relative inline-block">
              <span className="px-3 py-1 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                New Feature
              </span>
              <span className="absolute -top-2 -right-2 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 justify-center items-center text-white text-xs">
                  !
                </span>
              </span>
            </div>

            <div className="relative inline-block">
              <span className="px-3 py-1 rounded-lg text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                Hot Deal
              </span>
              <span className="absolute -top-2 -right-2 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
              </span>
            </div>

            <div className="relative inline-block group">
              <span className="px-3 py-1 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
                Premium
              </span>
              <span className="absolute inset-0 rounded-lg overflow-hidden">
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge5;
