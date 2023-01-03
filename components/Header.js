import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import Mega from "./Mega";
import { ThemeContext } from "./root/theme.context";

export default function Header({ setSearchOpen }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showSidebar, setShowSidebar] = useState(false);

  const links = [
    { title: "قیمت‌ها", href: "https://liara.ir/pricing/" },
    { title: "مستندات", href: "/" },
    { title: "وبلاگ", href: "https://liara.ir/blog/" },
    { title: "ورود", href: "https://console.liara.ir/login" },
  ];

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <header className="header">
        <div className="mian-menu" style={{ position: "relative", zIndex: 2 }}>
          <Link href="https://liara.ir/">
            <a>
              <img src={`/static/liara-logo-${theme}.svg`} alt="logo" />
            </a>
          </Link>
          <ul>
            {links.map(item => (
              <li key={item.title}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
            <button className="grad">
              <a
                style={{ color: "#181818 !important" }}
                href="https://console.liara.ir/register"
              >
                ایجاد حساب کاربری
              </a>
            </button>
          </ul>
        </div>
        <nav>
          <Mega />
        </nav>
        <div className="menu-sm-device">
          <Link href="/">
            <img src={`/static/liara-logo-${theme}.svg`} alt="logo" />
          </Link>
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
      </header>
      <div
        className="sm-sidebar"
        style={{ transform: `translateX(${showSidebar ? 0 : `70vw`})` }}
      />
    </Fragment>
  );
}
