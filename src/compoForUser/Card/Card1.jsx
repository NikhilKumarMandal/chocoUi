import React from 'react'

export default function Card1() {
  return (
        <div className="max-w-sm p-6  border border-gray-200 rounded-lg shadow-sm bg-[#FFDBB5] dark:border-[#cec4ba]">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#152f3d]">Choco ui</h5>
            </a>
            <p className="mb-3 font-normal text-[#102733] ">Here are the full  information of choco ui and tech-wizard team </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6C4E31] rounded-lg hover:bg-[#6C4E31] focus:ring-4 focus:outline-none focus:ring-[#6C4E31] dark:bg-[#6C4E31] dark:hover:bg-[#6C4E31] dark:focus:ring-[#6C4E31]">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
  )
}
