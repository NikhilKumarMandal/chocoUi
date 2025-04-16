import React from "react";

function Textarea() {
  return (
      <div className="relative w-2/5">
        <textarea
          id="message"
          rows="4"
          placeholder="Your message"
          className="peer w-full p-4 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <label
          for="message"
          className="absolute left-4 top-4 text-gray-500 text-base transition-all bg-white px-1
           peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
           peer-focus:top-1 peer-focus:text-sm
           peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-sm
           peer-focus:text-blue-500 peer-[&:not(:placeholder-shown)]:text-gray-700"
        >
          Your Message
        </label>
      </div>
  );
}

export default Textarea;
