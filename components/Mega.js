import React, { useContext, useState } from "react";
import PlatformIcon from "./PlatformIcon";
import { ThemeContext } from "./root/theme.context";

const products = [
  { title: "سامانه نام دامنه", badge: "DNS", href: "/" },
  { title: "ذخیره‌سازی ابری", badge: "Object Storage", href: "/" },
  // {title : "برنامه‌های آماده" ,badge: "1-Click Apps", href: '/' , hasChildren: true , style: {width: "650" , right: "100" , height: "350"} , children: []},
  {
    title: "دیتابیس‌ها",
    badge: "DBAAS",
    href: "/",
    hasChildren: true,
    style: { width: "550", right: "50", height: "270" },
    children: [
      {
        title: "MySQL",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/dbaas/mysql",
      },
      {
        title: "MySQL",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/dbaas/mysql",
      },
      {
        title: "MySQL",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/dbaas/mysql",
      },
      {
        title: "MySQL",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/dbaas/mysql",
      },
      {
        title: "MySQL",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/dbaas/mysql",
      },
      {
        title: "MySQL",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/dbaas/mysql",
      },
      {
        title: "MySQL",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/dbaas/mysql",
      },
      {
        title: "MySQL",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/dbaas/mysql",
      },
    ],
  },
  {
    title: "برنامه‌ها",
    badge: "PAAS",
    href: "/",
    hasChildren: true,
    style: { width: "550", right: "0", height: "350" },
    children: [
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
      {
        title: "React",
        icon: <PlatformIcon platform="react" />,
        href: "/landing/هاست-ری-اکت-react/",
      },
    ],
  },
];

const Mega = () => {
  const [style, setStyle] = useState({});
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section id="menu">
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
      {products.map(item => (
        <div
          className={!item.hasChildren ? "field-menu" : "menu-item"}
          onMouseEnter={() => item.hasChildren && setStyle(item.style)}
        >
          <div className="menu-text">
            <a href="#">
              {item.title}
              <span>({item.badge})</span>
            </a>
          </div>

          {item.hasChildren && (
            <ul
              className="sub-menu triple"
              style={{
                width: `${style.width}px`,
                height: `${style.height}px`,
                right: `-${style.right}px`,
              }}
            >
              {item.children.map((child, id) => (
                <a key={id} href={child.href}>
                  <li className="item-list-container">
                    {child.icon}
                    <p>{child.title}</p>
                  </li>
                </a>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div id="sub-menu-container">
        <div
          className="sub-menu-holder"
          id={"sub-menu-holder"}
          style={{
            width: `${style.width}px`,
            height: `${style.height}px`,
            right: `${style.right}px`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Mega;
