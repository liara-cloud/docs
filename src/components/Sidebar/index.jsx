import React, { Fragment, useEffect, useState } from "react";
import data from "./data";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({ setShowSidebar, showSidebar }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const handleSidebarContent = () => {
    const route = router.route.substring(1);
    const [_, sidebar_name] = route.split("/");

    if (router.route.startsWith("/paas/")) {
      return data.paas[sidebar_name];
    }
    if (router.route.startsWith("/iaas/")) {
      return data.iaas[sidebar_name];
    }

    if (router.route.startsWith("/one-click-apps/")) {
      return data.one_click_apps[sidebar_name];
    }

    if (router.route.startsWith("/dbaas/")) {
      return data.dbaas[sidebar_name];
    }

    if (router.route.startsWith("/email-server/")) {
      return data.email_server[sidebar_name];
    }

    if (router.route.startsWith("/object-storage/")) {
      return data.object_storage[sidebar_name];
    }

    if (router.route.startsWith("/dns-management-system/")) {
      return data.dns[sidebar_name];
    }

    if (router.route.startsWith("/overview/")) {
      return data.overview[sidebar_name];
    }

    if (router.route.startsWith("/references/")) {
      return data.references[sidebar_name];
    }

    return data.home;
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Fragment>
      {showSidebar &&
        <div
          onClick={() => setShowSidebar(false)}
          className="bg-[#0006] z-[40] backdrop-blur-sm fixed top-0 left-0 w-full h-full"
        />}
      <sidebar
        className={`py-4 ${showSidebar
          ? "block"
          : "hidden"} z-50 p-8 overflow-auto bg-[#fbfbfb] top-0 fixed md:block w-[300px] h-[100vh] border-l border-[#00000015]`}
      >
        <div
          className={`transition-all duration-300 ease-in-out transform ${!isVisible
            ? " opacity-50"
            : " opacity-100"} `}
        >
          <Link href="/" className="flex mb-3 items-center gap-2 font-semibold">
            <img className="logo-sidebar" src={"/static/logo.svg"} width="55" />

            <span className="text-[11px] px-1 py-0 font-medium text-[#fff] bg-[#333] rounded">
              مستندات
            </span>
          </Link>
          <div id="sidebar-items">
            <ul className="mt-8">
              {handleSidebarContent().length &&
                handleSidebarContent().map(item => {
                  if (item.hr) {
                    return <hr className="my-4" />;
                  }
                  if (item.badge) {
                    return (
                      <span className="badge flex w-[max-content] text-[12px] border border-[#d4d4d4] px-3 rounded-full">
                        {item.badge}
                      </span>
                    );
                  }

                  const isActive = router.pathname === item.link;

                  return (
                    <Link href={item.link}>
                      <li
                        className={`flex mt-3  pr-2 items-center gap-3 ${isActive &&
                          "text-[#2196f3] border-r-2 border-[#2196f3]"}`}
                      >
                        {item.icon}
                        {item.title}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      </sidebar>
    </Fragment>
  );
};

export default Sidebar;
