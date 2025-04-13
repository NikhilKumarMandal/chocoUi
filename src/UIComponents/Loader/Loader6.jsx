import React from "react";

const Loader_06 = () => {
  return (
    <div className="flex space-x-1 items-end h-10">
      {[...Array(5)].map((_, i) => {
        const bounceClass =
          "w-2 bg-cyan-500 animate-[bounce_1s_ease-in-out_infinite]";
        const delayStyle = {
          animationDelay: (i * 0.2).toString() + "s",
          height: "100%",
        };

        return <div key={i} className={bounceClass} style={delayStyle} />;
      })}
    </div>
  );
};

export default Loader_06;
