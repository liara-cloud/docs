import React, { isValidElement, useEffect, useRef, useState } from "react";
import TabPanel from "./TabPanel";

const containsId = (node, id) => {
  if (Array.isArray(node)) return node.some((child) => containsId(child, id));
  if (!isValidElement(node)) return false;
  return node.props.id === id || containsId(node.props.children, id);
};

const TabComponent = ({ tabs, content }) => {
  const [activeTab, setActiveTab] = useState(0);
  const hashChecked = useRef(false);
  const pendingScroll = useRef(null);

  useEffect(() => {
    if (hashChecked.current) return;
    hashChecked.current = true;

    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    if (!id || !Array.isArray(content)) return;

    const index = content.findIndex((item) => containsId(item, id));
    if (index > 0) {
      pendingScroll.current = { index, id };
      setActiveTab(index);
    }
  }, [content]);

  useEffect(() => {
    if (pendingScroll.current?.index !== activeTab) return;
    document.getElementById(pendingScroll.current.id)?.scrollIntoView();
    pendingScroll.current = null;
  }, [activeTab]);

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
        {Array.isArray(content) &&
          content.map((item, index) => (
            <TabPanel key={index} active={activeTab === index}>
              {item}
            </TabPanel>
          ))}
      </div>
    </div>
  );
};

export default TabComponent;
