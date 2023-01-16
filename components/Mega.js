import React, { useContext, useState } from "react";
import PlatformIcon from "./PlatformIcon";
import { ThemeContext } from "./root/theme.context";

const products = [
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
  {
    title: "دیتابیس‌",
    badge: "DBaaS",
    href: "/",
    hasChildren: true,
    style: { width: "600", right: "50", height: "270" },
    children: [
      {
        title: "MySQL",
        href: "https://liara.ir/landing/dbaas/mysql",
        alt: "دیتابیس مای‌اس‌کیو‌ال",
        icon: <PlatformIcon platform="mysql" />,
      },
      {
        title: "MariaDB",
        href: "https://liara.ir/landing/dbaas/mariadb",
        alt: "دیتابیس ماریا",
        icon: <PlatformIcon platform="mariadb" />,
      },
      {
        title: "PostgreSQL",
        href: "https://liara.ir/landing/dbaas/postgre-sql",
        alt: "دیتابیس پستگرس",
        icon: <PlatformIcon platform="postgres" />,
      },
      {
        title: "MSSQL",
        href: "https://liara.ir/landing/dbaas/sql-server",
        alt: "دیتابیس اس کیو ال سرور",
        icon: <PlatformIcon platform="mssql" />,
      },
      {
        title: "MongoDB",
        href: "https://liara.ir/landing/dbaas/mongo",
        alt: "دیتابیس مونگو",
        icon: <PlatformIcon platform="mongodb" />,
      },
      {
        title: "Redis",
        href: "https://liara.ir/landing/dbaas/redis",
        alt: "دیتابیس ردیس",
        icon: <PlatformIcon platform="redis" />,
      },
      {
        title: "RabbitMQ",
        href: "https://liara.ir/landing/dbaas/rabbit",
        alt: "دیتابیس ربیت ام کیو",
        icon: <PlatformIcon platform="rabbitmq" />,
      },
      {
        title: "Elastic",
        href: "https://liara.ir/landing/dbaas/elastic",
        alt: "دیتابیس الاستیک",
        icon: <PlatformIcon platform="elastic" />,
      },
    ],
  },
  {
    title: "پلتفرم",
    badge: "PaaS",
    href: "/",
    hasChildren: true,
    style: { width: "600", right: "0", height: "400" },
    children: [
      {
        title: "PHP",
        href: "https://liara.ir/landing/هاست-پی-اچ-پی-php/",
        alt: "هاست ابری پی‌اچ‌چی‌",
        icon: <PlatformIcon platform="php" />,
      },
      {
        title: "VueJS",
        href: "https://liara.ir/landing/هاست-ویو-جی-اس-vue/",
        alt: "هاست ابری ویو",
        icon: <PlatformIcon platform="vue" />,
      },
      {
        title: "Flask",
        href: "https://liara.ir/landing/هاست-فلسک-flask/",
        alt: "هاست ابری فلسک",
        icon: <PlatformIcon platform="flask" />,
      },
      {
        title: ".Net",
        href: "https://liara.ir/landing/هاست-دات-نت-dotnet/",
        alt: "هاست ابری دات‌نت‌",
        icon: <PlatformIcon platform="netcore" />,
      },
      {
        title: "ReactJS",
        href: "https://liara.ir/landing/هاست-ری-اکت-react/",
        alt: "هاست ابری ری‌اکت",
        icon: <PlatformIcon platform="react" />,
      },
      {
        title: "Angular",
        href: "https://liara.ir/landing/هاست-انگولار-angular/",
        alt: "هاست ابری انگولار",
        icon: <PlatformIcon platform="angularjs" />,
      },
      {
        title: "NodeJS",
        href: "https://liara.ir/landing/هاست-نود-جی-اس-node/",
        alt: "هاست ابری نودجی‌اس",
        icon: <PlatformIcon platform="nodejs" />,
      },
      {
        title: "Laravel",
        href: "https://liara.ir/landing/هاست-لاراول-laravel/",
        alt: "هاست ابری لاراول",
        icon: <PlatformIcon platform="laravel" />,
      },
      {
        title: "Python",
        href: "https://liara.ir/landing/هاست-پایتون-python/",
        alt: "هاست ابری پایتون",
        icon: <PlatformIcon platform="python" />,
      },
      {
        title: "Django",
        href: "https://liara.ir/landing/هاست-جنگو-django/",
        alt: "هاست ابری جنگو",
        icon: <PlatformIcon platform="django" />,
      },
      {
        title: "NextJS",
        href: "https://liara.ir/landing/هاست-نکست-جی-اس-next",
        alt: "هاست ابری نکست",
        icon: <PlatformIcon platform="next" />,
      },
      {
        title: "NuxtJS",
        href: "https://liara.ir/landing/هاست-ناکست-جی-اس-nuxt",
        alt: "هاست ابری ناکست",
        icon: <PlatformIcon platform="nuxt" />,
      },
      {
        title: "Golang",
        href: "https://liara.ir/landing/هاست-گولنگ-golang",
        alt: "هاست ابری گولنگ",
        icon: <PlatformIcon platform="go" />,
      },
      {
        title: "Docker",
        href: "https://liara.ir/landing/هاست-داکر-docker",
        alt: "هاست ابری داکر",
        icon: <PlatformIcon platform="docker" />,
      },
    ],
  },
];

const Mega = () => {
  const [style, setStyle] = useState({});
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    <section id="menu">
      <div className={`bg-app ${theme === "dark" && "dark"}`}>
        <button
          title="Toggle Theme"
          className="theme-mode"
          onClick={handleTheme}
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
            <a href={item.href}>
              {item.title}
              {item.hasChildren && (
                <img
                  src={"/static/arrow-mega.svg"}
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    width: "12px",
                    marginTop: "0px",
                  }}
                />
              )}

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
                <a key={id} href={child.href} title={child.alt}>
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
        >
          <span
            id="menu-arrow"
            style={{ right: `${Number(style.right) + 18}px` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Mega;
