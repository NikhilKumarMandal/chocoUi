import React from 'react'

const Loader_18 = ({ size = "md", color = "blue" }) => {
    const sizeClasses = {
        sm: "w-6 h-6",
        md: "w-10 h-10",
        lg: "w-16 h-16",
        xl: "w-24 h-24",
      };
    
      const colorClasses = {
        blue: "bg-blue-500",
        indigo: "bg-indigo-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
        red: "bg-red-500",
        orange: "bg-orange-500",
        amber: "bg-amber-500",
        yellow: "bg-yellow-500",
        lime: "bg-lime-500",
        green: "bg-green-500",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        sky: "bg-sky-500",
        gray: "bg-gray-500",
      };
    
      return (
        <div className="flex justify-center items-center">
          <div className={`${sizeClasses[size]} flex space-x-1`}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1/5 h-full ${colorClasses[color]} rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      );
}

export default Loader_18