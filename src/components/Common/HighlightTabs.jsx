import React, { useEffect, useRef, useState } from "react";
import ReactHighlight from "react-highlight";
import Button from "./button";

const HighlightTabs = ({ tabs }) => {
  if (!tabs || tabs.length === 0) return null;

  const [activeTab, setActiveTab] = useState(0);
  const [isCopy, setIsCopy] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const containerRef = useRef(null);

  const currentTab = tabs?.[activeTab] ?? null;

  useEffect(() => {
    if (containerRef.current && currentTab?.code) {
      setNeedsReadMore(containerRef.current.scrollHeight > 500);
    }
  }, [activeTab, currentTab?.code]);

  const handleCopyToClipboard = () => {
    if (currentTab?.code) {
      navigator.clipboard.writeText(currentTab.code);
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 3000);
    }
  };

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full mt-10" dir="rtl" id="tab">
      {/* Tabs */}
      <div className="flex overflow-auto border-b justify-start">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              setIsExpanded(false);
            }}
            className={`w-auto py-2 px-4 flex items-center gap-2 whitespace-nowrap ${
              activeTab === index
                ? "active border-b-2 border-[#181818] text-[#181818]"
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.icon && <span className="text-xl">{tab.icon}</span>}
            <span className="!mt-[6px]">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Code block with copy + read more */}
      {currentTab && (
        <div className="relative mt-5 highlight-container" dir="ltr">
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
            style={{ overflow: "hidden", width: "100%", boxSizing: "border-box" }}
          >
            <div style={{ overflowX: "auto", whiteSpace: "pre" }}>
              <ReactHighlight className={currentTab.language}>
                {currentTab.code}
              </ReactHighlight>
            </div>
          </div>

          {/* Moved "دیدن بیشتر" here, outside absolute layout */}
          {needsReadMore && !isExpanded && (
            <div className="text-center mt-4">
              <Button onClick={toggleReadMore}>دیدن بیشتر</Button>
            </div>
          )}

          {currentTab.description && (
            <div className="mt-4 text-right" dir="rtl">
              {typeof currentTab.description === "string" ? (
                <p>{currentTab.description}</p>
              ) : (
                currentTab.description
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HighlightTabs;
