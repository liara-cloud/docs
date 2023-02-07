import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "./root/theme.context";

const socialMediaList = [
  {
    icon: <img src="/static/social/twitter.svg" />,
    title: "توییتر",
    link: "https://twitter.com/liara_cloud",
  },
  {
    icon: <img src="/static/social/instagram.svg" />,
    title: "اینستاگرام",
    link: "https://www.instagram.com/liara_cloud/",
  },
  {
    icon: <img src="/static/social/telegram.svg" />,
    title: "تلگرام",
    link: "https://t.me/liara_cloud",
  },
  {
    icon: <img src="/static/social/github.svg" />,
    title: "گیتهاب",
    link: "https://github.com/liara-cloud",
  },
];
7;
const cols = [
  {
    id: 0,
    title: "پلتفرم (PaaS)",
    children: [
      {
        title: "PHP",
        link: "https://liara.irhttps://liara.ir/landing/هاست-پی-اچ-پی-php/",
        alt: "هاست ابری پی‌اچ‌چی‌",
      },
      {
        title: "VueJS",
        link: "https://liara.ir/landing/هاست-ویو-جی-اس-vue/",
        alt: "هاست ابری ویو",
      },
      {
        title: "Flask",
        link: "https://liara.ir/landing/هاست-فلسک-flask/",
        alt: "هاست ابری فلسک",
      },
      {
        title: ".Net",
        link: "https://liara.ir/landing/هاست-دات-نت-dotnet/",
        alt: "هاست ابری دات‌نت‌",
      },
      {
        title: "ReactJS",
        link: "https://liara.ir/landing/هاست-ری-اکت-react/",
        alt: "هاست ابری ری‌اکت",
      },
      {
        title: "Angular",
        link: "https://liara.ir/landing/هاست-انگولار-angular/",
        alt: "هاست ابری انگولار",
      },
      {
        title: "NodeJS",
        link: "https://liara.ir/landing/هاست-نود-جی-اس-node/",
        alt: "هاست ابری نودجی‌اس",
      },
      {
        title: "Laravel",
        link: "https://liara.ir/landing/هاست-لاراول-laravel/",
        alt: "هاست ابری لاراول",
      },
      {
        title: "Python",
        link: "https://liara.ir/landing/هاست-پایتون-python/",
        alt: "هاست ابری پایتون",
      },
      {
        title: "Django",
        link: "https://liara.ir/landing/هاست-جنگو-django/",
        alt: "هاست ابری جنگو",
      },
      {
        title: "NextJS",
        link: "https://liara.ir/landing/هاست-نکست-جی-اس-next",
        alt: "هاست ابری نکست",
      },
      {
        title: "NuxtJS",
        link: "https://liara.ir/landing/هاست-ناکست-جی-اس-nuxt",
        alt: "هاست ابری ناکست",
      },
      {
        title: "Golang",
        link: "https://liara.ir/landing/هاست-گولنگ-golang",
        alt: "هاست ابری گولنگ",
      },
      {
        title: "Docker",
        link: "https://liara.ir/landing/هاست-داکر-docker",
        alt: "هاست ابری داکر",
      },
    ],
  },
  {
    id: 1,
    title: "دیتابیس‌ (DBaaS)",
    children: [
      {
        title: "MySQL",
        link: "https://liara.ir/landing/هاست-ابری-mysql",
        alt: "دیتابیس مای‌اس‌کیو‌ال",
      },
      {
        title: "MariaDB",
        link: "https://liara.ir/landing/هاست-ابری-mariadb",
        alt: "دیتابیس ماریا",
      },
      {
        title: "PostgreSQL",
        link: "https://liara.ir/landing/هاست-ابری-postgre-sql",
        alt: "دیتابیس پستگرس",
      },
      {
        title: "SQL Server",
        link: "https://liara.ir/landing/هاست-ابری-sql-server",
        alt: "دیتابیس اس کیو ال سرور",
      },
      {
        title: "MongoDB",
        link: "https://liara.ir/landing/هاست-ابری-mongo",
        alt: "دیتابیس مونگو",
      },
      {
        title: "Redis",
        link: "https://liara.ir/landing/هاست-ابری-redis",
        alt: "دیتابیس ردیس",
      },
      {
        title: "RabbitMQ",
        link: "https://liara.ir/landing/هاست-ابری-rabbit",
        alt: "دیتابیس ربیت ام کیو",
      },
      {
        title: "Elastic",
        link: "https://liara.ir/landing/هاست-ابری-elastic-search",
        alt: "دیتابیس الاستیک",
      },
    ],
  },
  {
    id: 2,
    title: "برنامه‌های‌ آماده (One Click Apps)",
    children: [
      { title: "Ghost", link: "/one-click-apps/others", alt: "هاست ابری گوست" },
      { title: "Gitea", link: "/one-click-apps/gitea", alt: "هاست ابری گیتی" },
      {
        title: "Soketi",
        link: "/one-click-apps/soketi/install",
        alt: "هاست ابری سوکتی",
      },
      {
        title: "Grafana",
        link: "/one-click-apps/grafana",
        alt: "هاست ابری گرافانا",
      },
      { title: "Odoo", link: "/one-click-apps/odoo", alt: "هاست ابری اودو" },
      {
        title: "Code",
        link: "/one-click-apps/vscode",
        alt: "هاست ابری کد سرور",
      },
      {
        title: "Metabase",
        link: "/one-click-apps/metabase",
        alt: "هاست ابری متابیس",
      },
      {
        title: "Kibana",
        link: "/one-click-apps/kibana",
        alt: "هاست ابری کیبانا",
      },
      {
        title: "Mattermost",
        link: "/one-click-apps/mattermost",
        alt: "هاست ابری مترموست",
      },
      {
        title: "RocketChat",
        link: "/one-click-apps/rocketchat",
        alt: "هاست ابری راکت‌چت‌",
      },
      {
        title: "Nextcloud",
        link: "/one-click-apps/nextcloud",
        alt: "هاست ابری نکست کلود",
      },
      {
        title: "Imgproxy",
        link: "/one-click-apps/imgproxy",
        alt: "هاست ابری ای‌ام‌جی پروکسی",
      },
      {
        title: "Prestashop",
        link: "/one-click-apps/prestashop",
        alt: "هاست ابری پرستاشاپ",
      },
      {
        title: "Chrome",
        link: "/one-click-apps/headless-chrome/install",
        alt: "هاست ابری کروم",
      },
    ],
  },
  {
    id: 3,
    title: "سایر محصولات",
    children: [
      {
        title: "ایمیل",
        link: "https://liara.ir/products/email/",
        alt: "ایمیل لیارا",
      },
      {
        title: "وردپرس پلاس",
        link: "https://liara.ir/products/wp-plus/",
        alt: "وردپرس پلاس لیارا",
      },
      {
        title: "سامانه مدیریت دامنه",
        link: "https://liara.ir/products/dns/",
        alt: "سامانه مدیریت دامنه لیارا",
      },
      {
        title: "ذخیره سازی ابری",
        link: "https://liara.ir/products/object-storage/",
        alt: "ذخیره سازی ابری لیارا",
      },
    ],
  },
  {
    id: 4,
    title: "",
    children: [],
  },
  {
    id: 5,
    title: "دسترسی سریع",
    children: [
      {
        title: "پلن‌ها",
        link: "https://liara.ir/pricing",
        alt: "پلن های لیارا",
      },
      { title: "وبلاگ", link: "https://liara.ir/blog", alt: "وبلاگ لیارا" },
      { title: "مستندات", link: "/", alt: "مستندات لیارا" },
      {
        title: "درباره ما",
        link: "https://liara.ir/about",
        alt: "درباره لیارا",
      },
      {
        title: "ارتباط با ما",
        link: "https://liara.ir/contact",
        alt: "ارتباط با لیارا",
      },
      {
        title: "قوانین و مقررات",
        link: "https://liara.ir/terms",
        alt: "قوانین و مقررات لیارا",
      },
      {
        title: "توافق‌نامه سطح کیفیت",
        link: "https://liara.ir/sla",
        alt: "توافق‌نامه سطح کیفیت لیارا",
      },
    ],
  },
];

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <div
        style={{
          maxWidth: 1400,
          paddingRight: 30,
          margin: "0 auto",
          position: "relative",
          zIndex: 11,
        }}
      >
        <div className="footer-container">
          <div>
            <img src={`/static/liara-logo-${theme}.svg`} alt="liara-logo" />
            <div>
              {socialMediaList.map(item => (
                <a key={item.link} href={item.link}>
                  {item.icon}
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {cols.map(item => (
            <div
              className={`footer-col-container col-${item.id}`}
              key={item.id}
            >
              <h5>{item.title}</h5>
              <div>
                {item.children.map(link => (
                  <Link href={link.link} title={link.alt}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="footer-col-container">
            <h5>ارتباط با ما</h5>
            <div>
              <h6>آدرس:</h6>
              <p style={{ marginTop: 12, lineHeight: "28px" }}>
                قم، میدان جانبازان، خیابان شهیدان فاطمی، نبش کوچه ۱۲، پلاک ۴،
                طبقه سوم، واحد ۳
              </p>
              <h6>ایمیل واحد پشتیبانی:</h6>
              <p style={{ marginTop: 12 }}>support[@]liara.ir</p>
              <h6>ایمیل واحد پشتیبانی:</h6>
              <p style={{ marginTop: 12 }}>support[@]liara.ir</p>
            </div>
          </div>
        </div>
      </div>
      <div className="animate-play-container">
        <div className="footer-animate-container">
          <div className="footer-animate-grid">
            <div className="animate-fade" />
            <div className="footer-animate-lines" />
            <div className="footer-bg-container" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
