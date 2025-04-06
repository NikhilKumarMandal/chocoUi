import React from "react";

function Card3() {
  return (
    <div class="max-w-xs rounded-lg shadow-lg p-3 border-1 border-amber-200 bg-white text-gray-600">
      <div class="flex flex-col items-center p-5 pt-10 bg-amber-100 rounded-lg relative">
        <span class="absolute top-0 right-0 bg-amber-200 rounded-l-full px-3 py-2 text-lg font-semibold text-gray-700">
          $49 <small class="text-sm text-gray-500">/ m</small>
        </span>
        <p class="font-semibold text-xl text-gray-700">Professional</p>
        <p class="mt-3 text-center">
          This plan is for those who have a team already and running a large
          business.
        </p>
        <ul class="mt-4 space-y-3 w-full">
          <li class="flex items-center gap-2">
            <span class="bg-teal-500 text-white rounded-full flex items-center justify-center w-5 h-5">
              <svg
                class="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>
              <strong>20</strong> team members
            </span>
          </li>
          <li class="flex items-center gap-2">
            <span class="bg-teal-500 text-white rounded-full flex items-center justify-center w-5 h-5">
              <svg
                class="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>
              Plan <strong>team meetings</strong>
            </span>
          </li>
          <li class="flex items-center gap-2">
            <span class="bg-teal-500 text-white rounded-full flex items-center justify-center w-5 h-5">
              <svg
                class="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>File sharing</span>
          </li>
        </ul>
        <div class="mt-5 w-full">
          <a
            href="#"
            class="block text-center bg-amber-300 hover:bg-amber-400 text-white font-medium text-lg py-2 rounded-md w-full"
          >
            Choose plan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card3;
