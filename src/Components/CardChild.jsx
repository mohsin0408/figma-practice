import React from "react";
import { FaPen } from "react-icons/fa";

const CardChild = ({ text }) => {
  return (
    <div className="child">
      <FaPen className="icon" />
      <h3 className="child-heading">{text}</h3>
      <p
        style={{
          color: "#5D6970",
          lineHeight: "18px",
          fontSize: "16px",
        }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p>
    </div>
  );
};

export default CardChild;
