import React from 'react'

function Textarea4() {
  return (
    <div className="flex justify-center flex-col  items-center min-h-screen">
      <div class="relative w-2/5 h-32">
        <span class="absolute top-3 left-3 text-gray-300">✍️</span>
        <textarea
          class="pl-10 w-full h-32 p-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Start typing..."
        ></textarea>
      </div>
    </div>
  )
}

export default Textarea4
