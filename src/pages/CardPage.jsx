import Card1 from "../UIComponents/Card/Card1";
import Card2 from "../UIComponents/Card/Card2";
import Card3 from "../UIComponents/Card/Card3";
import Card4 from "../UIComponents/Card/Card4";
import Card5 from "../UIComponents/Card/Card5";
import Card7 from "../UIComponents/Card/Card7";
import Card10 from "../UIComponents/Card/Card10";
import PricingCard from "../UIComponents/Card/PricingCard";
import PricingCard2 from "../UIComponents/Card/PricingCard2";
import DollyGatesCard from "../UIComponents/Card/DollyGatesCard";
import PreviewComponent from "../components/PreviewCom/PreviewComponent";
import ProductCard from "../UIComponents/Card/ProductCard";

function CardPage() {
  const cardsVariants = [
    {
      title: "Choco Card",
      component: <DollyGatesCard />,
      codeSnippets: [
        {
          language: "jsx",
          code: `
          import React from 'react';
  const DollyGatesCard = () => {
            return (
              <div className="flex justify-center items-center">
                <div className="w-full max-w-md rounded-3xl overflow-hidden bg-white shadow-lg">
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                    <div className="relative h-full">
                      <img 
                        src="https://i.ytimg.com/vi/WX7DBPcsiEs/maxresdefault.jpg" 
                        alt="Dolly Chaiwala and Bill Gates" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">When $100B Meets $2 Chai</h3>
                        <p className="text-xs sm:text-sm opacity-90">The only time Windows crashed for a good reason</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative p-4 sm:p-6">
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs mb-3 sm:mb-4">
                      ChocoUI
                    </span>
                    
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                      Everyone Deserves a Choco
                    </h2>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
                      When Microsoft's founder realized the best way to debug life is with a cup of Dolly's magic potion. 
                      "Your system needs a chai break" - Dolly Chaiwala, probably.
                    </p>
                    
                    <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </button>
                      
                      <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </button>
                      
                      <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                          <polyline points="16 6 12 2 8 6"></polyline>
                          <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          
          export default DollyGatesCard;
          `,
        },
      ],
    },
    {
      title: "Simple Card",
      component: <Card1 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          export default function Card() {
            return (
              <div className="max-w-sm p-6  border border-gray-200 rounded-lg shadow-sm bg-[#FFDBB5] dark:border-[#cec4ba] mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#152f3d]">
                    Choco ui
                  </h5>
                </a>
                <p className="mb-3 font-normal text-[#102733] ">
                  Here are the full information of choco ui and tech-wizard team{" "}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6C4E31] rounded-lg hover:bg-[#6C4E31] focus:ring-4 focus:outline-none focus:ring-[#6C4E31] dark:bg-[#6C4E31] dark:hover:bg-[#6C4E31] dark:focus:ring-[#6C4E31]"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            );
          }
          `,
        },
      ],
    },
    {
      title: "Melted Delight",
      component: <Card2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Card() {
            return (
              <div className="max-w-sm rounded-2xl border-1 overflow-hidden shadow-lg mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
                <img
                  className="p-3 rounded-3xl w-full h-64"
                  src="https://plus.unsplash.com/premium_photo-1683120880375-074c4ba3f775?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Rich, velvety brown chocolate flows smoothly, melting into a decadent
                    treat
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                    nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Choco 🍫
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #ChocoAddict 😍
                  </span>
                </div>
              </div>
            );
          }
          
          export default Card;
          `,
        },
      ],
    },

    {
      title: "Pro Plan Card",
      component: <Card3 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Card() {
            return (
              <div class="max-w-xs rounded-lg shadow-lg p-3 border-1 border-amber-200 bg-white text-gray-600 mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
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
          
          export default Card;
          `,
        },
      ],
    },

    {
      title: "Ammol Delight Card",
      component: <Card4 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          function Card() {
            return (
              <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border-1 border-blue-300 bg-white shadow-md mx-auto  sm:m-4 md:m-4 lg:m-4 xl:m-4">
                <a class="relative mx-3 mt-3  h-60 overflow-hidden rounded-xl" href="#">
                  <img
                    class="object-cover"
                    src="https://images.unsplash.com/photo-1646168932800-e48f378d37bb?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="product image"
                  />
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    39% OFF
                  </span>
                </a>
                <div class="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl tracking-tight text-slate-900">Ammol Chocolate</h5>
                  </a>
                  <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span class="text-3xl font-bold text-slate-900">$449</span>
                      <span class="text-sm text-slate-900 line-through">$699</span>
                    </p>
                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        class="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        5.0
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </a>
                </div>
              </div>
            );
          }
          
          export default Card;
          `,
        },
      ],
    },

    {
      title: "The Grand Card",
      component: <Card5 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          export default function Card() {
            return (
              <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
                <div class="flex flex-col items-center pb-10 mt-9">
                  <img
                    class="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://images.pexels.com/users/avatars/97941/hitesh-choudhary-291.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2"
                    alt="Bonnie image"
                  />
                  <h5 class="mb-1 text-xl font-snas text-gray-900 dark:text-white">
                    Hitesh choudhary
                  </h5>
                  <span class="text-sm text-gray-500 dark:text-gray-400 ">Ex techie</span>
                  <div class="flex mt-4 md:mt-6 ">
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add friend
                    </a>
                    <a
                      href="#"
                      class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </div>
            );
          }
          `,
        },
      ],
    },

    {
      title: "Image Background Card (Hitesh Sir Edition)",
      component: <Card7 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          export default function Card() {
            return (
              <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg max-w-96 mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/1739941/pexels-photo-1739941.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  className="absolute inset-0 h-full w-full object-cover"
                />
          
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <time datetime="2022-10-10" className="block text-xs text-white/90">
                      {" "}
                      2 March 2025{" "}
                    </time>
          
                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-white font-bold">
                        Haanji, kaisi lagi ChocoUI?
                      </h3>
                    </a>
          
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                      dolores, possimus pariatur animi temporibus nesciunt praesentium
                      dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
                      minus soluta, voluptates neque explicabo tempora nisi culpa eius
                      atque dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                  </div>
                </div>
              </article>
            );
          }
          `,
        },
      ],
    },

    {
      title: "Premium Selection Card",
      component: <Card10 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `import React from "react";
          
          const Card = () => {
            return (
              <div className="group max-w-sm w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden mx-auto m-4 sm:m-4 md:m-4 lg:m-4 xl:m-4">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 transform group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-white opacity-80"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                      <path d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </div>
                </div>
          
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Chocolate Bliss</h3>
                      <p className="text-gray-600">Premium Selection</p>
                    </div>
                    <div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  </div>
          
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Dark Chocolate</span>
                      <span className="text-gray-800 font-semibold">$12.99</span>
                    </div>
          
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-amber-500 rounded-full transform origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
          
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300">
                        <span className="text-sm text-gray-600">100g</span>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300">
                        <span className="text-sm text-gray-600">70%</span>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300">
                        <span className="text-sm text-gray-600">Belgium</span>
                      </div>
                    </div>
          
                    <button className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          };
          
          export default Card;
          `,
        },
      ],
    },
    {
      title: "Image Background Card (Hitesh Sir Edition)",
      component: <ProductCard />,
      codeSnippets: [
        {
          language: "jsx",
          code: `
          `,
        },
      ],
    },

    {
      title: "Image Background Card (Hitesh Sir Edition)",
      component: <PricingCard />,
      codeSnippets: [
        {
          language: "jsx",
          code: `
          `,
        },
      ],
    },

    {
      title: "Image Background Card (Hitesh Sir Edition)",
      component: <PricingCard2 />,
      codeSnippets: [
        {
          language: "jsx",
          code: `
          `,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold font-['Bricolage'] tracking-tight text-gray-900">
        Card Components
      </h1>
      <p className="text-gray-700 mt-2 font-['Inter']">
        Explore a curated selection of sleek, responsive card components
      </p>
      <div className="mt-6 space-y-6">
        {cardsVariants.map((variant, index) => (
          <PreviewComponent
            key={index}
            title={variant.title}
            codeSnippets={variant.codeSnippets}
          >
            {variant.component}
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}

export default CardPage;
