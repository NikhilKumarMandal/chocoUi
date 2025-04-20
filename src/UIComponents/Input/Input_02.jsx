import { Search, X } from "lucide-react";
import { useState } from "react";

const Input_02 = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      <label htmlFor="search" className="text-sm font-normal">
        Search
      </label>
      <div className="relative mt-1">
        <input
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="bg-background w-full outline-none focus-within:border-[#603F26] rounded-md p-2 pl-10 border-2"
        />
        <Search size={18} className="absolute left-3 top-3.5 text-gray-400" />
        {query && (
          <X
            size={18}
            onClick={() => setQuery("")}
            className="absolute right-3 top-3.5 text-gray-400 cursor-pointer hover:text-gray-600"
          />
        )}
      </div>
    </div>
  );
};

export default Input_02;
