import React, { useState } from "react";

const TabComponent = ({ tabs, content }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="tab" dir="ltr" className="w-full mt-10 rtl">
      <div className="flex overflow-auto  border-b flex-row-reverse">
        {tabs.map((tab, index) =>
          <button
            key={index}
            style={{ whiteSpace : "nowrap" }}
            className={`w-28 py-2  px-4 text-center ${activeTab === index
              ? "active border-b-2 border-[#181818] text-[#181818]"
              : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        )}
      </div>
      <div dir="rtl" className="mt-5 p-4">
        <div>
          {content[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
