import React, { useEffect, useRef, useState } from "react";
import ReactHighlight from "react-highlight";
import Button from "./button";
import TabPanel from "./TabPanel";

const CodePanel = ({ tab }) => {
  const [isCopy, setIsCopy] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && tab.code) {
      setNeedsReadMore(containerRef.current.scrollHeight > 500);
    }
  }, [tab.code]);

  const handleCopyToClipboard = () => {
    if (tab.code) {
      navigator.clipboard.writeText(tab.code);
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 3000);
    }
  };

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
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
          <ReactHighlight className={tab.language}>{tab.code}</ReactHighlight>
        </div>
      </div>

      {needsReadMore && !isExpanded && (
        <div className="text-center mt-4">
          <Button onClick={toggleReadMore}>دیدن بیشتر</Button>
        </div>
      )}

      {tab.description && (
        <div className="mt-4 text-right" dir="rtl">
          {tab.description}
        </div>
      )}
    </div>
  );
};

const HighlightTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="w-full mt-10" dir="rtl" id="tab">
      {/* Tabs */}
      <div className="flex overflow-auto border-b justify-start">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
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
      {tabs.map((tab, index) => (
        <TabPanel key={index} active={activeTab === index}>
          <CodePanel tab={tab} />
        </TabPanel>
      ))}
    </div>
  );
};

export default HighlightTabs;
