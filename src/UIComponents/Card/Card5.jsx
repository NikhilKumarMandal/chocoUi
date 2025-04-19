import React from "react";

function Card5({ name, jobTitle, imageUrl, className }) {
  const handleAddFriend = () => {
    alert("Friend added!");
  };

  const handleMessage = () => {
    alert("Message sent!");
  };

  return (
    <div
      className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4 ${className}`}
    >
      <div className="flex flex-col items-center pb-10 mt-9">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={imageUrl}
          alt={`${name} image`}
        />
        <h5 className="mb-1 text-xl font-sans text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {jobTitle}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            onClick={handleAddFriend}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            onClick={handleMessage}
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card5;
