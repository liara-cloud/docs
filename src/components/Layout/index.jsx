import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  return (
    <main>
      <div>
        <div className="flex">
          <Sidebar />
          <div className="w-[1350px] pr-[300px] mt-[100px] mx-auto pb-10">
            {children}
          </div>
        </div>
        <Header />
      </div>
    </main>
  );
};

export default Layout;
