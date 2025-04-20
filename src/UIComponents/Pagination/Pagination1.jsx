import React, { useState } from "react";

const Pagination1 = ({ totalPages = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex space-x-1 justify-center items-center">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#603F26] hover:text-white hover:bg-[#603F26] hover:border-[#603F26] focus:text-white focus:bg-[#603F26] focus:border-[#603F26] active:border-[#603F26] active:text-white active:bg-[#603F26] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={
              "min-w-9 rounded-full py-2 px-3.5 text-center text-sm transition-all ml-2 " +
              (isActive
                ? "bg-[#603F26] text-white border border-transparent shadow-md hover:bg-[#603F26] focus:bg-[#603F26]"
                : "border border-slate-300 text-[#603F26] hover:text-white hover:bg-[#603F26] hover:border-[#603F26] focus:text-white focus:bg-[#603F26] focus:border-[#603F26]") +
              " hover:shadow-lg focus:shadow-none active:shadow-none active:bg-[#603F26] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            }
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#603F26] hover:text-white hover:bg-[#603F26] hover:border-[#603F26] focus:text-white focus:bg-[#603F26] focus:border-[#603F26] active:border-[#603F26] active:text-white active:bg-[#603F26] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination1;
