import { useState } from "react";

const Toggle1 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);
  return (
    <>
      <button
        onClick={toggle}
        className={
          "relative w-14 h-8 rounded-full transition-colors duration-300 px-1 " +
          (isOn ? "bg-yellow-400" : "bg-gray-600")
        }
      >
        <span
          className={
            "absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center text-[16px] " +
            (isOn ? "translate-x-6" : "")
          }
        >
          {isOn ? "🌞" : "🌙"}
        </span>
      </button>
    </>
  );
};

export default Toggle1;
