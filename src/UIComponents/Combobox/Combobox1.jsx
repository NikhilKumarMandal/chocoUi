import { useState } from "react";

const options = ["Ocean Blue", "Sky Blue", "Navy Blue", "Light Blue", "Deep Blue", "Baby Blue"];

export default function ComboBox1() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (option) => {
    setSelected(option);
    setQuery(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-72 mx-auto mt-10">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onClick={() => setIsOpen(true)}
        placeholder="Select a shade of blue..."
        className="w-full rounded-md border border-black bg-blue py-3 px-4 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black shadow"
      />

      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-black rounded-md mt-1 shadow-lg max-h-60 overflow-auto">
          {filteredOptions.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 hover:bg-blue-50 text-black transition rounded-md"
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {isOpen && filteredOptions.length === 0 && (
        <div className="absolute z-10 w-full bg-white border border-black rounded-md mt-1 shadow-lg px-4 py-2 text-black">
          No results found.
        </div>
      )}
    </div>
  );
}
