import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "./root/theme.context";

const socialMediaList = [
  {
    icon: <img src="/static/social/twitter.svg" />,
    title: "توییتر",
    link: "#twitter",
  },
  {
    icon: <img src="/static/social/instagram.svg" />,
    title: "اینستاگرام",
    link: "#instagram",
  },
  {
    icon: <img src="/static/social/telegram.svg" />,
    title: "تلگرام",
    link: "#telegram",
  },
  {
    icon: <img src="/static/social/github.svg" />,
    title: "گیتهاب",
    link: "#github",
  },
];
const cols = [
  {
    id: 0,
    title: "برنامه ها (PaaS)",
    children: [
      { title: "react", link: "/landing/هاست-ری-اکت-react/" },
      { title: "PostgreSQL", link: "/" },
      { title: "NodeJS", link: "/" },
      { title: "NodeJS", link: "/" },
      { title: "NodeJS", link: "/" },
      { title: "NodeJS", link: "/" },
      { title: "NodeJS", link: "/" },
      { title: "PostgreSQL", link: "/" },
      { title: "MariaDB", link: "/" },
      { title: "PostgreSQL", link: "/" },
    ],
  },
  {
    id: 1,
    title: "دیتابیس‌ها (DBaaS)",
    children: [
      { title: "MySQL", link: "/landing/dbaas/mysql" },
      { title: "MariaDB", link: "/" },
      { title: "PostgreSQL", link: "/" },
      { title: "MSSQL", link: "/" },
      { title: "Redis", link: "/" },
      { title: "RabbitMQ", link: "/" },
      { title: "Elastic", link: "/" },
    ],
  },
  {
    id: 2,
    title: "برنامه های آماده (1-Click Apps)",
    children: [
      { title: "Wordpress", link: "/" },
      { title: "Wordpress", link: "/" },
      { title: "Wordpress", link: "/" },
      { title: "Wordpress", link: "/" },
      { title: "Wordpress", link: "/" },
      { title: "Wordpress", link: "/" },
      { title: "Wordpress", link: "/" },
      { title: "Wordpress", link: "/" },
    ],
  },
  {
    id: 3,
    title: "سایر محصولات",
    children: [
      { title: "سرویس ایمیل", link: "/" },
      { title: "سامانه نام دامنه", link: "/landing/products/dns" },
      {
        title: "سرویس ذخیره سازی ابری",
        link: "/landing/products/object-storage",
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
      { title: "پلن‌ها", link: "/pricing" },
      { title: "وبلاگ", link: "/blog" },
      { title: "مستندات", link: "/" },
      { title: "درباره ما", link: "/about" },
      { title: "ارتباط با ما", link: "/contact" },
      { title: "قوانین و مقررات", link: "/terms" },
      { title: "توافق‌نامه سطح کیفیت", link: "/sla" },
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
                  <Link href={link.link}>{link.title}</Link>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
