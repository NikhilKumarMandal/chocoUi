import React from "react";

function Avatar3() {
  return (
    <>

        <div class="relative">
          <img
            class="w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/127339696?v=4"
            alt=""
          />
          <span
            class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white
                     dark:border-gray-800 rounded-full"
          ></span>
        </div>
        <div class="relative">
          <img
            class="w-10 h-10 rounded-sm"
            src="https://avatars.githubusercontent.com/u/115567883?v=4"
            alt=""
          />
          <span
            class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2
                     border-white dark:border-gray-800 rounded-full"
          ></span>
        </div>
        <div class="relative">
          <img
            class="w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/32175682?v=4"
            alt=""
          />
          <span
            class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white
                     dark:border-gray-800 rounded-full"
          ></span>
        </div>
        <div class="relative">
          <img
            class="w-10 h-10 rounded-sm"
            src="https://avatars.githubusercontent.com/u/154448136?v=4"
            alt=""
          />
          <span
            class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5
                     bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
          ></span>
        </div>
    </>
  );
}

export default Avatar3;
