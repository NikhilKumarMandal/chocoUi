import React, { useState } from 'react';

const Pagination3 = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(2); 

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center">
      
      <div className="flex items-center gap-1">

        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-stone-800 hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Previous
        </button>

       
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md ${
                isActive
                  ? 'shadow-sm hover:shadow-md bg-stone-800 border-stone-800 text-stone-50 hover:bg-stone-700 hover:border-stone-700'
                  : 'bg-transparent border-transparent text-stone-800 hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none'
              }`}
            >
              {page}
            </button>
          );
        })}

        
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 bg-transparent border-transparent text-stone-800 hover:bg-stone-800/5 hover:border-stone-800/5 shadow-none hover:shadow-none"
        >
          Next
          <svg
            width="1.5em"
            height="1.5em"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="ml-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination3;
