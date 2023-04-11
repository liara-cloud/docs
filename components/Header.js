import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import Mega from "./Mega";
import { ThemeContext } from "./root/theme.context";
import SmMenu from "./SmMenu";
import { useRouter } from "next/router";

export default function Header({ setSearchOpen }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  const links = [
    { title: "قیمت‌ها", href: "https://liara.ir/pricing/" },
    {
      title: "ویدیوها",
      href: "/tv",
      isActive: router.pathname.includes("/tv"),
    },
    { title: "مستندات", href: "/", isActive: !router.pathname.includes("/tv") },
    { title: "وبلاگ", href: "https://liara.ir/blog/" },
    {
      title: "ورود",
      href: "https://console.liara.ir/login",
      isGradientLink: true,
    },
  ];

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <header className="header">
        <div className="mian-menu" style={{ position: "relative", zIndex: 2 }}>
          <Link href="https://liara.ir/">
            <img src={`/static/liara-logo-${theme}.svg`} alt="logo" />
          </Link>
          <ul>
            {links.map(item => (
              <li
                key={item.title}
                className={
                  item.isGradientLink
                    ? "gradient-text"
                    : item.isActive
                    ? "active-link"
                    : ""
                }
              >
                <Link href={item.href} legacyBehavior>
                  {item.title}
                </Link>
              </li>
            ))}
            <a
              style={{ color: "#181818 !important" }}
              href="https://console.liara.ir/register"
            >
              <button className="grad">ایجاد حساب کاربری</button>
            </a>
          </ul>
        </div>
        <nav>
          <Mega />
        </nav>
        <div className="menu-sm-device">
          <Link
            href="/"
            style={
              !showSidebar
                ? { visibility: "inherit" }
                : { visibility: "hidden" }
            }
          >
            <img src={`/static/liara-logo-${theme}.svg`} alt="logo" />
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/static/icons/search.svg"
              alt=""
              style={showSidebar ? { opacity: "0" } : { opacity: "1" }}
              className="search_header"
              onClick={() => setSearchOpen(true)}
            />
            <div className="action-sm-menu" onClick={handleToggleSidebar}>
              <img
                src={
                  showSidebar
                    ? `/static/menu-close-${theme}.svg`
                    : `/static/menu-open-${theme}.svg`
                }
              />
            </div>
          </div>
        </div>
      </header>
      {/* <div
        className="sm-sidebar"
        style={{ transform: `translateX(${showSidebar ? 0 : `70vw`})` }}
      /> */}
      <SmMenu showSidebar={showSidebar} />
    </Fragment>
  );
}
