import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <main>
      <div>
        <div className="flex">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="w-[100%] px-4 mt-[80px] md:px-0 overflow-x-hidden md:w-[1350px] layout md:pr-[300px] md:mt-[100px] md:mx-auto pb-10">
            {children}
          </div>
        </div>
        <Header setShowSidebar={setShowSidebar} />
      </div>
    </main>
  );
};

export default Layout;
