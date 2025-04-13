import React, { useState } from "react";

function Textarea5() {
  const [text, setText] = useState("");
  return (
    <div className="flex justify-center flex-col  items-center min-h-screen">
      <div className="relative w-2/5 h-32">
        <textarea
          maxLength={200}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-32 p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Max 200 chars..."
        />
        <div className="text-sm text-right text-gray-500 mt-1">
          {text.length}/200
        </div>
      </div>
    </div>
  );
}

export default Textarea5;
