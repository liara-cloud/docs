import React from "react";

const Important = ({ children }) => {
  return (
    <span className="important mt-[1px] inline-block px-1 rounded mx-[3px] bg-[#0002] text-black dark:text-white">
      {children}
    </span>
  );
};

export default Important;
