import React from "react";

const badges = [
  { label: "Choco", bgColor: "#FFEAC5", textColor: "black" },
  { label: "Light", bgColor: "#ECECEC", textColor: "black" },
  { label: "Success", bgColor: "#198754", textColor: "white" },
  { label: "Danger", bgColor: "#DC3545", textColor: "white" },
  { label: "Warning", bgColor: "#FFC107", textColor: "#212529" },
  {
    label: "Dark",
    bgColor: "#212529",
    textColor: "white",
    border: "1px solid white",
  },
];

const Badge1 = () => {
  return (
    <div className="w-full p-8">
      <div className="p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-3">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 inline-flex items-center justify-center rounded-full text-sm font-medium"
              style={{
                backgroundColor: badge.bgColor,
                color: badge.textColor,
                border: badge.border || "none",
              }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badge1;
