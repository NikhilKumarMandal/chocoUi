import React from "react";

function Textarea6() {
  return (
    <div class="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-md p-4 space-y-4 md:flex md:space-x-4 md:space-y-0">
      <div class="flex-shrink-0 flex justify-center md:justify-start">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1743932492~exp=1743936092~hmac=2b64d4f276e1e88a0729512e8104eadba3fbc6772cac0b9abbebadc6448b2fe0&w=740"
          alt="Avatar"
          class="w-14 h-14 rounded-full object-cover"
        />
      </div>
      <div class="flex-1">
        <textarea
          class="w-full resize-none p-3 border bg-amber-100 border-amber-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-800"
          rows="3"
          placeholder="What's on your mind?"
        ></textarea>
        <div class="flex md:justify-end justify-center mt-2">
          <button class="bg-[#603F26] text-white px-4 py-2 rounded-lg ">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Textarea6;
