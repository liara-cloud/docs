import React from "react";

const Button = ({ children, className, variant = "fill", ...props }) => {
  const classes = {
    link: "bg-[#0001] hover:bg-[#0002] text-[#181818]",
    fill: "bg-[#333]  hover:bg-[#555] text-white"
  };

  return (
    <button
      id="button"
      className={`text-[14px] transition-all rounded-md py-1 px-2 ${classes[
        variant
      ]} ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
