import React from "react";
import { GoInfo, GoAlert, GoCheckCircle, GoCircleSlash } from "react-icons/go";

const Alert = ({ variant = "info", className, children }) => {
  const variants = {
    info: {
      classes: "text-blue-600 bg-[#3b82f622]",
      icon: <GoInfo className="text-[18px]" />
    },
    warning: {
      classes: "text-[#ff9800] bg-[#ff980022]",
      icon: <GoAlert className="text-[18px]" />
    },
    success: {
      classes: "text-green-600 bg-[#16a34a22]",
      icon: <GoCheckCircle className="text-[18px]" />
    },
    error: {
      classes: "text-red-600 bg-[#dc262a22]",
      icon: <GoCircleSlash className="text-[18px]" />
    }
  };

  return (
    <div
      className={`p-3 mb-2 rounded-lg md:flex items-center 00 gap-3 ${variants[
        variant
      ].classes} ${className}`}
    >
      {variants[variant].icon}
      {children}
    </div>
  );
};

export default Alert;
