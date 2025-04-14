import React from "react";
const ContactUs = () => {
  return (
    <div className="max-w-md mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4 p-6 bg-[#f5f1e9] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-2 text-[#603F26]">
        Got a question?
      </h1>

      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[#6C4E31] mb-2 font-medium"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="w-full p-3 border border-[#6C4E31] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C4E31]"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-[#6C4E31] mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message..."
            rows="4"
            className="w-full p-3 border border-[#6C4E31] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C4E31]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-[#603F26] hover:bg-[#6C4E31] text-[#FFEAC5] font-medium rounded-lg transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
