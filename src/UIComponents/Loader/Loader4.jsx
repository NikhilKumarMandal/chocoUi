import React from "react";

const Loader_04 = () => {
  return (
    <div className="flex space-x-2 justify-center">
      {[...Array(5)].map((_, i) => {
        const bounceClass = "w-3 h-3 bg-cyan-400 rounded-full animate-bounce";
        const delayStyle = { animationDelay: (i * 0.1).toString() + "s" };

        return <div key={i} className={bounceClass} style={delayStyle} />;
      })}
    </div>
  );
};

export default Loader_04;
