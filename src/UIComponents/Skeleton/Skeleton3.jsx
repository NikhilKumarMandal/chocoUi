import React from 'react'

function Skeleton3() {
  return (
    <div className="w-full max-w-[340px] p-4 border rounded-lg shadow-md animate-pulse bg-white mx-auto">
      <div className="h-40 bg-gray-300 rounded-lg w-full"></div>
      <div className="mt-4 h-6 w-3/4 bg-gray-300 rounded"></div>
      <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
    </div>
  )
}

export default Skeleton3