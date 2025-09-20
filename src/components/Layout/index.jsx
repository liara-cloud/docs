import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PageActionButtons from "@/components/Common/PageActionButtons";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const router = useRouter();

  return (
    <main>
      <div>
        <div className="flex">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="w-[100%] px-4 mt-[80px] md:px-0 overflow-x-hidden md:w-[1350px] layout md:pr-[300px] md:mt-[100px] md:mx-auto pb-10">
            {router.pathname !== "/404" &&
              router.pathname !== "/" &&
              router.pathname !== "/tv" && (
                <div className="flex justify-end md:mb-[-60px]">
                  <PageActionButtons />
                </div>
              )}
            {children}
          </div>
        </div>
        <Header setShowSidebar={setShowSidebar} />
      </div>
    </main>
  );
};

export default Layout;
