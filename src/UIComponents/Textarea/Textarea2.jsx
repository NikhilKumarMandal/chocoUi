import React from 'react'

function Textarea2() {
  return (
    <div className="flex justify-center flex-col  items-center min-h-screen">
      <textarea
        className=" w-2/5 p-4 rounded-xl shadow-inner bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Enter your thoughts..."
      ></textarea>
    </div>
  )
}

export default Textarea2
