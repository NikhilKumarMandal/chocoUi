import React from "react";
import { MoveRight } from "lucide-react";

const GridButton = ({
  label = "Explore More",
  icon: Icon = MoveRight,
  bgColor = "#603F26",
  hoverBgColor = "#7a4f2f",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        display: "inline-flex",
        height: "3rem",
        margin: "1rem",
        marginLeft: "20rem",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "0.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        fontWeight: "500",
        color: "#ffffff",
        transition: "all 300ms ease",
        backgroundColor: bgColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBgColor;
        e.currentTarget.style.paddingLeft = "1.25rem";
        e.currentTarget.style.paddingRight = "3rem";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
        e.currentTarget.style.paddingLeft = "1.5rem";
        e.currentTarget.style.paddingRight = "1.5rem";
      }}
    >
      <span
        style={{
          transition: "transform 300ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-0.25rem)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
        }}
      >
        {label}
      </span>
      {Icon && (
        <Icon
          style={{
            position: "absolute",
            right: "1rem",
            height: "1.25rem",
            width: "1.25rem",
            transform: "translateX(2.5rem)",
            opacity: "0",
            transition: "all 300ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(2.5rem)";
            e.currentTarget.style.opacity = "0";
          }}
        />
      )}
    </button>
  );
};

export default GridButton;
