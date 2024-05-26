import React from "react";
import data from "./data";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const handleSidebarContent = () => {
    if (router.route.startsWith("/paas/")) return "paas";
    return "home";
  };

  return (
    <sidebar className="py-4 p-8 bg-[#fbfbfb] top-0 fixed block w-[300px] h-[100vh] border-l border-[#00000015]">
      <div className="flex mb-3 items-center gap-2 font-semibold">
        <img className="logo-sidebar" src={"/static/logo.svg"} width="55" />

        <span className="text-[11px] px-1 py-0 font-medium text-[#fff] bg-[#333] rounded">
          مستندات
        </span>
      </div>
      <div id="sidebar-items">
        <ul className="mt-8">
          {data[handleSidebarContent()].map(item => {
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

            return (
              <Link href={item.link}>
                <li className="flex mt-3 items-center gap-3">
                  {item.icon}
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </sidebar>
  );
};

export default Sidebar;
