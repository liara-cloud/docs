import React, { useState } from "react";
import PlatformIcon from "./PlatformIcon";

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

  return (
    <section id="menu">
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
