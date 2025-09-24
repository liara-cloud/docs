import React, { useEffect, useRef, useState } from "react";
import ReactHighlight from "react-highlight";
import Button from "./button";

const Highlight = ({ children, className }) => {
  const [isCopy, setIsCopy] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setNeedsReadMore(containerRef.current.scrollHeight > 500);
    }
  }, [children]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative mb-2 highlight-container">
      <span
        onClick={handleCopyToClipboard}
        className="absolute copy z-10 right-2 top-2 text-sm bg-[#fff] border border-[#0002] cursor-pointer hover:bg-[#efefef] px-2 rounded-[6px] text-[gray]"
      >
        {isCopy ? "!کپی شد" : "کپی"}
      </span>

      <div
        ref={containerRef}
        className={`highlight-content relative ${
          !needsReadMore || isExpanded ? "expanded" : "max-h-[500px]"
        }`}
        style={{
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            overflowX: "auto", 
            whiteSpace: "pre", 
          }}
        >
          <ReactHighlight className={className}>{children}</ReactHighlight>
        </div>
      </div>

      {needsReadMore && !isExpanded && (
        <Button
          onClick={toggleReadMore}
          className="absolute left-[50%] translate-x-[-50%] bottom-5"
        >
          دیدن بیشتر
        </Button>
      )}
    </div>
  );
};

export default Highlight;
