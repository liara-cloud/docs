import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import Mega from "./Mega";
import { ThemeContext } from "./root/theme.context";

export default function Header({ setSearchOpen }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showSidebar, setShowSidebar] = useState(false);

  const links = [
    { title: "قیمت‌ها", href: "/pricing" },
    { title: "مستندات", href: "/" },
    { title: "وبلاگ", href: "/blog" },
    { title: "ورود", href: "/" },
  ];

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <header className="header">
        <div className="mian-menu" style={{ position: "relative", zIndex: 2 }}>
          <Link href="/">
            <a>
              <img src={`static/liara-logo-${theme}.svg`} alt="logo" />
            </a>
          </Link>
          <ul>
            {links.map(item => (
              <li key={item.title}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
            <button className="grad">ایجاد حساب کاربری</button>
            <div className={`bg-app ${theme === "dark" && "dark"}`}>
              <button
                title="Toggle Theme"
                className="theme-mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    pathLength="1"
                    class="moon-icon"
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  ></path>

                  <circle
                    pathLength="1"
                    class="sun-icon"
                    cx="12"
                    cy="12"
                    r="5"
                  ></circle>
                  <line
                    pathLength="1"
                    class="sun-icon"
                    x1="12"
                    y1="1"
                    x2="12"
                    y2="3"
                  ></line>
                  <line
                    pathLength="1"
                    class="sun-icon"
                    x1="12"
                    y1="21"
                    x2="12"
                    y2="23"
                  ></line>
                  <line
                    pathLength="1"
                    class="sun-icon"
                    x1="4.22"
                    y1="4.22"
                    x2="5.64"
                    y2="5.64"
                  ></line>
                  <line
                    pathLength="1"
                    class="sun-icon"
                    x1="18.36"
                    y1="18.36"
                    x2="19.78"
                    y2="19.78"
                  ></line>
                  <line
                    pathLength="1"
                    class="sun-icon"
                    x1="1"
                    y1="12"
                    x2="3"
                    y2="12"
                  ></line>
                  <line
                    pathLength="1"
                    class="sun-icon"
                    x1="21"
                    y1="12"
                    x2="23"
                    y2="12"
                  ></line>
                  <line
                    pathLength="1"
                    class="sun-icon"
                    x1="4.22"
                    y1="19.78"
                    x2="5.64"
                    y2="18.36"
                  ></line>
                  <line
                    pathLength="1"
                    class="sun-icon"
                    x1="18.36"
                    y1="5.64"
                    x2="19.78"
                    y2="4.22"
                  ></line>
                </svg>
              </button>
            </div>
          </ul>
        </div>
        <nav>
          <Mega />
        </nav>
        <div className="menu-sm-device">
          <Link href="/">
            <img src={`static/liara-logo-${theme}.svg`} alt="logo" />
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
