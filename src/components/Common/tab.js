import React, { useState } from "react";

const TabComponent = ({ tabs, content }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="tab" dir="ltr" className="w-full mt-10 rtl">
      {/* Tab buttons */}
      <div className="flex overflow-auto border-b flex-row-reverse">
        {tabs.map((tab, index) => {
          // If tab is a string, convert it to object for backward compatibility
          const isString = typeof tab === "string";
          const label = isString ? tab : tab.label;
          const icon = !isString ? tab.icon : null;

          return (
            <button
              key={index}
              style={{ whiteSpace: "nowrap" }}
              className={`w-auto py-2 px-4 flex items-center gap-2 ${
                activeTab === index
                  ? "active border-b-2 border-[#181818] text-[#181818]"
                  : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {label && <span className="!mt-[6px]">{label}</span>}
              {icon && <span className="text-xl">{icon}</span>}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div dir="rtl" className="mt-5 p-4">
        {Array.isArray(content) && content.length > activeTab && (
          <div key={`highlight-tab-${activeTab}`}>
            {content[activeTab]}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
