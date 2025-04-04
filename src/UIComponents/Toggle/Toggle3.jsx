import React from "react";

const Toggle3 = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOn(!isOn)}
        className="w-14 h-8 bg-white relative rounded-full shadow-inner"
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-300 ${
            isOn ? "translate-x-6 bg-black shadow-md" : "bg-gray-800"
          }`}
        />
      </button>
    </>
  );
};

export default Toggle3;
