import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";

import { ThemeContext } from "./root/theme.context";
import PlatformIcon from "./PlatformIcon";

const SmMenu = ({ showSidebar }) => {
  const { theme } = useContext(ThemeContext);

  const [showChild, setShowChild] = useState({ isOpen: false, index: "-1" });

  const handleShowChild = (index, hasChildren) => {
    if (!hasChildren) return;
    if (showChild.isOpen) return setShowChild({ isOpen: false, index: "-1" });
    setShowChild({ isOpen: true, index });
  };

  const links = [
    { title: "پلن ها", href: "https://liara.ir/pricing" },
    { title: "وبلاگ", href: "https://liara.ir/blog" },
    { title: "مستندات", href: "https://docs.liara.ir" },
    {
      title: "پلتفرم",
      href: "#",
      hasChildren: true,
      children: [
        {
          title: "PHP",
          href: "https://liara.ir/landing/هاست-پی-اچ-پی-php/",
          alt: "هاست ابری پی‌اچ‌چی‌",
          icon: "php",
        },
        {
          title: "VueJS",
          href: "https://liara.ir/landing/هاست-ویو-جی-اس-vue/",
          alt: "هاست ابری ویو",
          icon: "vue",
        },
        {
          title: "Flask",
          href: "https://liara.ir/landing/هاست-فلسک-flask/",
          alt: "هاست ابری فلسک",
          icon: "flask",
        },
        {
          title: ".Net",
          href: "https://liara.ir/landing/هاست-دات-نت-dotnet/",
          alt: "هاست ابری دات‌نت‌",
          icon: "netcore",
        },
        {
          title: "ReactJS",
          href: "https://liara.ir/landing/هاست-ری-اکت-react/",
          alt: "هاست ابری ری‌اکت",
          icon: "react",
        },
        {
          title: "Angular",
          href: "https://liara.ir/landing/هاست-انگولار-angular/",
          alt: "هاست ابری انگولار",
          icon: "angularjs",
        },
        {
          title: "NodeJS",
          href: "https://liara.ir/landing/هاست-نود-جی-اس-node/",
          alt: "هاست ابری نودجی‌اس",
          icon: "nodejs",
        },
        {
          title: "Laravel",
          href: "https://liara.ir/landing/هاست-لاراول-laravel/",
          alt: "هاست ابری لاراول",
          icon: "laravel",
        },
        {
          title: "Python",
          href: "https://liara.ir/landing/هاست-پایتون-python/",
          alt: "هاست ابری پایتون",
          icon: "python",
        },
        {
          title: "Django",
          href: "https://liara.ir/landing/هاست-جنگو-django/",
          alt: "هاست ابری جنگو",
          icon: "django",
        },
        {
          title: "NextJS",
          href: "https://liara.ir/landing/هاست-نکست-جی-اس-next",
          alt: "هاست ابری نکست",
          icon: "next",
        },
        {
          title: "NuxtJS",
          href: "https://liara.ir/landing/هاست-ناکست-جی-اس-nuxt",
          alt: "هاست ابری ناکست",
          icon: "nuxt",
        },
        {
          title: "Golang",
          href: "https://liara.ir/landing/هاست-گولنگ-golang",
          alt: "هاست ابری گولنگ",
          icon: "go",
        },
        {
          title: "Docker",
          href: "https://liara.ir/landing/هاست-داکر-docker",
          alt: "هاست ابری داکر",
          icon: "docker",
        },
      ],
    },
    {
      title: "دیتابیس",
      href: "#",
      hasChildren: true,
      children: [
        {
          title: "MySQL",
          href: "https://liara.ir/landing/dbaas/mysql",
          alt: "دیتابیس مای‌اس‌کیو‌ال",
          icon: "mysql",
        },
        {
          title: "MariaDB",
          href: "https://liara.ir/landing/dbaas/mariadb",
          alt: "دیتابیس ماریا",
          icon: "mariadb",
        },
        {
          title: "PostgreSQL",
          href: "https://liara.ir/landing/dbaas/postgre-sql",
          alt: "دیتابیس پستگرس",
          icon: "postgres",
        },
        {
          title: "MSSQL",
          href: "https://liara.ir/landing/dbaas/sql-server",
          alt: "دیتابیس اس کیو ال سرور",
          icon: "mssql",
        },
        {
          title: "MongoDB",
          href: "https://liara.ir/landing/dbaas/mongo",
          alt: "دیتابیس مونگو",
          icon: "mongodb",
        },
        {
          title: "Redis",
          href: "https://liara.ir/landing/dbaas/redis",
          alt: "دیتابیس ردیس",
          icon: "redis",
        },
        {
          title: "RabbitMQ",
          href: "https://liara.ir/landing/dbaas/rabbit",
          alt: "دیتابیس ربیت ام کیو",
          icon: "rabbitmq",
        },
        {
          title: "Elastic",
          href: "https://liara.ir/landing/dbaas/elastic",
          alt: "دیتابیس الاستیک",
          icon: "elastic",
        },
      ],
    },
    {
      title: "سامانه نام دامنه",
      badge: "DNS",
      href: "https://liara.ir/landing/products/dns",
    },
    {
      title: " ایمیل",
      badge: "Email",
      href: "https://liara.ir/landing/products/email",
    },
    {
      title: "وردپرس پلاس",
      badge: "WP Plus",
      href: "https://liara.ir/landing/products/wp-plus",
    },
    {
      title: "ذخیره‌سازی ابری",
      badge: "Object Storage",
      href: "https://liara.ir/landing/products/object-storage",
    },
  ];

  return (
    <Fragment>
      <div
        className="sm-menu-container"
        style={{ transform: `translateX(${showSidebar ? 0 : `77vw`})` }}
      >
        <a href="https://liara.ir/" className="sm-logo">
          <img src={`/static/liara-logo-${theme}.svg`} alt="liara logo" />
        </a>

        <div className="to-console">
          <a href="https://console.liara.ir/register">
            <button
              className="grad"
              style={{
                fontSize: "14px !important",
                fontWeight: "600 !important",
                padding: "8px 20px",
              }}
            >
              ایجاد حساب کاربری
            </button>
          </a>

          <a href="https://console.liara.ir/login" className="gradient-text">
            ورود
          </a>
        </div>
        <ul className="page-links">
          {links.map((item, id) => (
            <li
              key={id}
              className="main-li"
              onClick={() => handleShowChild(id, item.hasChildren)}
            >
              <a href={item.href}>
                {item.title}{" "}
                {item.hasChildren && (
                  <span style={{ color: "#ccc", margin: "5px 7px 0px" }}>
                    {" "}
                    &#9662;{" "}
                  </span>
                )}
                {item.hasChildren && (
                  <div className="children-container">
                    {/* <ul  style={showChild.index === id  ? {height : "max-content"} : {height : 0}}> */}
                    <ul
                      style={
                        showChild.index === id
                          ? { opacity: 1, height: "max-content" }
                          : { opacity: 0, height: "0" }
                      }
                    >
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <a href={child.href}>
                            <PlatformIcon platform={child.icon} />
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default SmMenu;
