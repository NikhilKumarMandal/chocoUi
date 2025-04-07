import { useState } from "react";

const Toggle2 = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
          isOn ? "bg-black" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
            isOn ? "translate-x-6" : ""
          }`}
        />
      </button>
    </>
  );
};

export default Toggle2;
