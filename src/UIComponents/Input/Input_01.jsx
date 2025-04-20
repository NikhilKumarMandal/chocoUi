import { X } from "lucide-react";
import { useState } from "react";

const Input_01 = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      <label htmlFor="text" className="text-sm font-normal">
        Text Input
      </label>
      <div className="relative mt-1">
        <input
          type="text"
          id="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          className="bg-background w-full outline-none focus-within:border-[#603F26] rounded-md p-2 border-2"
        />
        {value && (
          <X
            size={18}
            onClick={() => setValue("")}
            className="absolute right-3 top-3.5 text-gray-400 cursor-pointer hover:text-gray-600"
          />
        )}
      </div>
    </div>
  );
};

export default Input_01;
