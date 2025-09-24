import React from "react";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      id="card"
      className={`border border-[#0002] cursor-default w-[max-content] p-3 rounded-lg hover:bg-white hover:border-[#0004] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
