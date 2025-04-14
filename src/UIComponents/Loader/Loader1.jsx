import React from "react";

const Loader_01 = () => {
  return (
    <div className="flex space-x-2 justify-center m-4">
      {[...Array(3)].map((_, i) => {
        const bounceClass = "w-4 h-4 bg-cyan-400 rounded-full animate-bounce";
        const delayStyle = { animationDelay: (i * 0.2).toString() + "s" };

        return <span key={i} className={bounceClass} style={delayStyle} />;
      })}
    </div>
  );
};

export default Loader_01;
