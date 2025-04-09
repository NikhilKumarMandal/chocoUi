import React from 'react'

function Textarea3() {
  return (
    <div className="flex justify-center flex-col  items-center min-h-screen">
      <textarea
        class="w-2/5 h-32 p-2 border-b-2 rounded-2xl border-gray-300 bg-gray-50 focus:outline-none focus:border-amber-500"
        placeholder="Type here..."
      ></textarea>
    </div>
  )
}

export default Textarea3
