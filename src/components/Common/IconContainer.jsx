// IconContainer.jsx (or .tsx if using TypeScript)
import React from "react";
import PlatformIcon from "@/components/Common/icons";

const IconContainer = ({ alt }) => {
  return (
    <div className="w-[20px] p-[1px] bg-[#333] rounded-md">
      <PlatformIcon platform={alt} />
    </div>
  );
};

export default IconContainer;
