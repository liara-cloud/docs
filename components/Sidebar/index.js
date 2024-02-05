import Link from "next/link";
import NavTitle from "./NavTitle";
import ActiveLink from "./ActiveLink";
import MeiliSearch from "meilisearch";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import UAParser from "ua-parser-js";
import PlatformIcon from "../../components/PlatformIcon";
import { ThemeContext } from "../root/theme.context";

import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useContext,
} from "react";

const client = new MeiliSearch({
  host: "https://search.liara.ir",
  apiKey: "99d6377d6dc5499ecc31451349b8957ebb2e29e67a5d92eb445737e25c1e7bb2",
});

const Sidebar = ({ searchOpen, setSearchOpen }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [defaultActive, setDefaultActive] = useState(false);
  const [current, setCurrent] = useState("");
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();
  const valueRef = useRef();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setDefaultActive(
      document.querySelectorAll(".nav__title--active").length === 0
    );
    document.addEventListener("keyup", e => {
      const { keyCode } = e;
      switch (keyCode) {
        case 191:
          setSearchOpen(true);
          break;
        case 27:
          setSearchOpen(false);
          break;
      }
    });
  }, []);

  const handleMeiliSearch = value => {
    const userAgent = new UAParser(window.navigator.userAgent);
    const eventData = {
      term: value,
      browser: userAgent.getBrowser().name,
      browserVersion: userAgent.getBrowser().version,
      os: userAgent.getOS().name,
      osVersion: userAgent.getOS().version,
    };

    return client
      .index("docs")
      .search(value, { limit: 10 })
      .then(res => {
        setResults(res.hits);
        setNotFound(value != "" && res.hits.length == 0);
        if (res.hits.length == 0) {
          setCurrent(undefined);
        }
      });
  };

  const handleChangeValue = e => {
    const { value } = e.target;
    setValue(value);
    if (value != "") {
      handleMeiliSearch(value);
    }
    setResults("");
  };
  const debouncedSave = useCallback(debounce(handleChangeValue, 150), []);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleArrow = arrow => {
    switch (arrow.keyCode) {
      case 38:
        const Negative = index > 0 ? index - 1 : results.length - 1;
        setIndex(Negative);
        break;
      case 40:
        const Positive = index < results.length - 1 ? index + 1 : 0;
        setIndex(Positive);
        break;
      case 13:
        const path =
          current != undefined && current.element
            ? current.url + current.element
            : current != undefined && current.url;

        current != undefined && router.push(path);
        setSearchOpen(false);
        break;
    }
  };
  useEffect(() => {
    if (results.length == 0) return;
    setCurrent(results.filter((_, idx) => idx == index)["0"]);
    if (value == "") {
      setValue(false);
    }
  }, [results, index]);

  const handleHover = item => {
    setCurrent(results.filter((_, idx) => idx == item)["0"]);
  };
  const handleSuggestion = value => {
    handleMeiliSearch(value);
    return (valueRef.current.value = value);
  };

  return (
    <aside className="sidebar">
      <button type="button" className="menu-button" onClick={toggleNav}>
        <img
          src="/static/icons/menu.svg"
          alt=""
          className="menu-button__icon"
        />
        فهرست
      </button>
      <button className="search-sidebar" onClick={handleSearch}>
        <div className="placeholder-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span className="">جستجو</span>
        </div>
        <span className="shortcut">/</span>
      </button>
      {searchOpen && (
        <>
          <div className="search-box" onKeyDown={e => handleArrow(e)}>
            <input
              ref={valueRef}
              placeholder="جستجو"
              className="search-input"
              autoFocus
              onChange={debouncedSave}
            />
            <div className="suggestion">
              <button onClick={() => handleSuggestion("cors")}>cors</button>
              <button onClick={() => handleSuggestion("php.ini")}>
                php.ini
              </button>
              <button onClick={() => handleSuggestion("اتصال دامنه")}>
                اتصال دامنه
              </button>
              <button onClick={() => handleSuggestion("ci/cd")}>ci/cd</button>
              <button onClick={() => handleSuggestion("ارسال ایمیل")}>
                ارسال ایمیل
              </button>
              <button onClick={() => handleSuggestion("شبکه‌ی خصوصی")}>
                شبکه‌ی خصوصی
              </button>
              <button onClick={() => handleSuggestion("cron job")}>
                cron job
              </button>
            </div>
            <div className="results">
              <ul>
                {results != "" &&
                  results.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.element ? item.url + item.element : item.url}
                        onClick={() => setSearchOpen(false)}
                        className={`url_results ${
                          current != undefined &&
                          item.id == current.id &&
                          `current-result `
                        }`}
                        onMouseEnter={() => handleHover(index)}
                      >
                        <div className="platform_container">
                          {item.platform && (
                            <div className="platform-search_logo" width="25">
                              <PlatformIcon platform={item.platform} />
                            </div>
                          )}
                          <p className="">{item.title}</p>
                        </div>
                        <img
                          src="/static/icons/arrow.svg"
                          className="arrow-icon_result"
                        />
                      </Link>
                    </li>
                  ))}
                {notFound && (
                  <li>
                    <a className="url_results">
                      <div className="platform_container">
                        <p className="">
                          متاسفانه نتیجه‌ای برای عبارتی که وارد کردید پیدا
                          نکردیم.
                        </p>
                      </div>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <span className="search-box-effect" onClick={handleSearch}></span>
        </>
      )}
      <div className={navOpen ? "" : "hide-nav"}>
        <nav className="nav">
          <ActiveLink href="/">صفحه‌ی اصلی مستندات</ActiveLink>
        </nav>
        <nav className="nav">
          <NavTitle active={defaultActive} href="/app-deploy">
            پلتفرم
          </NavTitle>
          <ul className="nav__list">
            <li>
              <NavTitle href="/app-deploy/nodejs">
                <PlatformIcon platform="nodejs" />
                NodeJS
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/nodejs/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/dbs">
                    اتصال به دیتابیس
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/disks">
                    استفاده از دیسک‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/object-storage">
                    اتصال به ذخیره‌سازی ابری
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/email">
                    ارسال ایمیل
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nodejs/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/nextjs">
                <PlatformIcon platform="next" />
                NextJS
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/nextjs/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/dbs">
                    اتصال به دیتابیس
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/object-storage">
                    اتصال به ذخیره‌سازی ابری
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/email">
                    ارسال ایمیل
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/nextjs/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/laravel">
                <PlatformIcon platform="laravel" />
                Laravel
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/laravel/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/dbs">
                    اتصال به دیتابیس
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/migrations">
                    اجرای migration ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/disks">
                    استفاده از دیسک‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/email">
                    ارسال ایمیل
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/object-storage">
                    اتصال به ذخیره‌سازی ابری
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/soketi">
                    اتصال به Soketi
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/laravel/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/php">
                <PlatformIcon platform="php" />
                PHP
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/php/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/dbs">
                    اتصال به دیتابیس
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/disks">
                    استفاده از دیسک‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/object-storage">
                    اتصال به ذخیره‌سازی ابری
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/email">
                    ارسال ایمیل
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/php/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/django">
                <PlatformIcon platform="django" />
                Django
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/django/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/dbs">
                    اتصال به دیتابیس
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/migrations">
                    اجرای migration ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/disks">
                    استفاده از دیسک‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/object-storage">
                    اتصال به ذخیره‌سازی ابری
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/email">
                    ارسال ایمیل
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/django/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/flask">
                <PlatformIcon platform="flask" />
                Flask
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/flask/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/dbs">
                    اتصال به دیتابیس
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/disks">
                    استفاده از دیسک‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/object-storage">
                    اتصال به ذخیره‌سازی ابری
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/email">
                    ارسال ایمیل
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/flask/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/netcore">
                <PlatformIcon platform="netcore" />
                Net.
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/netcore/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/dbs">
                    اتصال به دیتابیس
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/disks">
                    استفاده از دیسک‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/object-storage">
                    اتصال به ذخیره‌سازی ابری
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/email">
                    ارسال ایمیل
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/netcore/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/react">
                <PlatformIcon platform="react" />
                React
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/react/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/react/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/react/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/react/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/react/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/react/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/react/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/angular">
                <PlatformIcon platform="angularjs" />
                Angular
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/angular/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/angular/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/angular/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/angular/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/angular/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/angular/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/angular/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/vue">
                <PlatformIcon platform="vue" />
                Vue
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/vue/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/vue/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/vue/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/vue/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/vue/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/vue/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/vue/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/static">
                <PlatformIcon platform="HTML5" />
                Static
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/static/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/static/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/static/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/static/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/static/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/static/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/static/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/docker">
                <PlatformIcon platform="docker" />
                Docker
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/docker/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/deploy-image">
                    استقرار Image از DockerHub
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/compose">
                    استقرار Docker Compose
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/disks">
                    استفاده از دیسک‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/docker/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/app-deploy/golang">
                <PlatformIcon platform="go" />
                Golang
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/app-deploy/golang/getting-started">
                    شروع به کار
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/desktop">
                    استقرار با Liara Desktop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/cli">
                    استقرار با Liara CLI
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/envs">
                    تنظیم متغیرها (env)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/logs">
                    مشاهده لاگ‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/liarajson">
                    استفاده از فایل liara.json
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/update">
                    به‌روزرسانی برنامه
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/dbs">
                    اتصال به دیتابیس
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/disks">
                    استفاده از دیسک‌ها
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/object-storage">
                    اتصال به ذخیره‌سازی ابری
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/app-deploy/golang/email">
                    ارسال ایمیل
                  </ActiveLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/one-click-apps">برنامه‌های آماده</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/one-click-apps/about">
                درباره برنامه‌های آماده
              </ActiveLink>
            </li>
            <li>
              <NavTitle href="/one-click-apps/headless-chrome">
                <PlatformIcon platform="chrome" />
                Headless Chrome
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/one-click-apps/headless-chrome/install">
                    راه‌اندازی
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/one-click-apps/headless-chrome/puppeteer">
                    اتصال از طریق Puppeter
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/one-click-apps/headless-chrome/selenium">
                    اتصال از طریق Selenium
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/one-click-apps/headless-chrome/playwright">
                    اتصال از طریق Playwright
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/one-click-apps/headless-chrome/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <NavTitle href="/one-click-apps/soketi">
                <PlatformIcon platform="soketi" />
                Soketi
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/one-click-apps/soketi/install">
                    راه‌اندازی
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/one-click-apps/soketi/laravel">
                    اتصال از طریق Laravel
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/one-click-apps/soketi/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/imgproxy">
                <PlatformIcon platform="imgproxy" />
                Imgproxy
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/rocketchat">
                <PlatformIcon platform="rocketchat" />
                RocketChat
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/metabase">
                <PlatformIcon platform="metabase" />
                Metabase
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/nextcloud">
                <PlatformIcon platform="nextcloud" />
                NextCloud
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/gitea">
                <PlatformIcon platform="gitea" />
                Gitea
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/mattermost">
                <PlatformIcon platform="mattermost" />
                Mattermost
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/kibana">
                <PlatformIcon platform="kibana" />
                Kibana
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/grafana">
                <PlatformIcon platform="grafana" />
                Grafana
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/prestashop">
                <PlatformIcon platform="prestashop" />
                Prestashop
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/vscode">
                <PlatformIcon platform="vscode" />
                Code Server
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/odoo">
                <PlatformIcon platform="odoo" />
                Odoo
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/ghost">
                <PlatformIcon platform="ghost" />
                Ghost
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/n8n">
                <PlatformIcon platform="n8n" />
                n8n
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/pocketbase">
                <PlatformIcon platform="pocketbase" />
                PocketBase
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/matomo">
                <PlatformIcon platform="matomo" />
                Matomo
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/unleash">
                <PlatformIcon platform="unleash" />
                Unleash
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/uptime-kuma">
                <PlatformIcon platform="uptimekuma" />
                Uptime Kuma
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/ackee">
                <PlatformIcon platform="ackee" />
                Ackee
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/appsmith">
                <PlatformIcon platform="appsmith" />
                Appsmith
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/varnish">
                <PlatformIcon platform="varnish" />
                Varnish Cache
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/rabbitmq">
                <PlatformIcon platform="rabbitmq" />
                RabbitMQ
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/one-click-apps/apacheanswer">
                <PlatformIcon platform="apacheanswer" />
                Apache Answer
              </ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/wp-plus">وردپرس پلاس</NavTitle>

          <ul className="nav__list">
            <li>
              <ActiveLink href="/wp-plus/install">راه‌اندازی</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/wp-plus/email">ارسال ایمیل</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/wp-plus/migrate-from-cpanel">
                انتقال از cPanel
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/wp-plus/wp-rocket">
                افزونه WP Rocket (رایگان)
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/wp-plus/object-storage">
                اتصال به ذخیره‌سازی ابری
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/wp-plus/duplicator">
                بسته نصب آسان (duplicator)
              </ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/instructions">دستورالعمل‌ها</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/instructions/nuxtjs">
                <PlatformIcon platform="nuxt" />
                NuxtJS
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/svelte">
                <PlatformIcon platform="svelte" />
                Svelte
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/sveltekit">
                <PlatformIcon platform="svelte" />
                SvelteKit
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/nestjs">
                <PlatformIcon platform="nest" />
                NestJS
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/fastify">
                <PlatformIcon platform="fastify" />
                Fastify
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/remix">
                <PlatformIcon platform="remix" />
                Remix
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/blitzjs">
                <PlatformIcon platform="blitz" />
                BlitzJS
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/strapi">
                <PlatformIcon platform="strapi" />
                Strapi
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/gatsbyjs">
                <PlatformIcon platform="gatsby" />
                GatsbyJS
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/gridsome">
                <PlatformIcon platform="gridsome" />
                Gridsome
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/eleventy">
                <PlatformIcon platform="eleventy" />
                Eleventy
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/hugo">
                <PlatformIcon platform="hugo" />
                Hugo
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/jekyll">
                <PlatformIcon platform="jekyll" />
                Jekyll
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/adonis">
                <PlatformIcon platform="adonisjs" />
                Adonis
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/prisma">
                <PlatformIcon platform="prisma" />
                Prisma
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/flutter">
                <PlatformIcon platform="flutter" />
                Flutter
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/nginx">
                <PlatformIcon platform="nginx" />
                Nginx
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/fastapi">
                <PlatformIcon platform="fastapi" />
                FastAPI
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/golang">
                <PlatformIcon platform="go" />
                Golang
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/python">
                <PlatformIcon platform="python" />
                Python
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/streamlit">
                <PlatformIcon platform="streamlit" />
                Streamlit
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/rabbitmq">
                <PlatformIcon platform="rabbitmq" />
                RabbitMQ
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/yii">
                <PlatformIcon platform="yii" />
                Yii
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/arangodb">
                <PlatformIcon platform="arangodb" />
                ArangoDB
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/seq">
                <PlatformIcon platform="seq" />
                Seq
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/celery">
                <PlatformIcon platform="celery" />
                Celery
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/dotnet-published">
                <PlatformIcon platform="netcore" />
                استقرار فایل DLL
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/voyager">
                <PlatformIcon platform="laravel" />
                Voyager
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/vite">
                <PlatformIcon platform="vite" />
                Vite
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/json-server">
                JSON Server
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/websocket">WebSocket</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/instructions/basic-auth">
                Basic auth
              </ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/databases">دیتابیس</NavTitle>
          <ul className="nav__list">
            <li>
              <NavTitle href="/databases/mysql">
                <PlatformIcon platform="mysql" />
                MySQL
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/databases/mysql/install">
                    نصب و راه‌اندازی
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mysql/connections">
                    راه‌های اتصال
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mysql/backup">
                    تهیه فایل پشتیبان
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mysql/restore">
                    بازیابی فایل پشتیبان
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mysql/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>

            <li>
              <NavTitle href="/databases/mariadb">
                <PlatformIcon platform="mariadb" />
                MariaDB
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/databases/mariadb/install">
                    نصب و راه‌اندازی
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mariadb/connections">
                    راه‌های اتصال
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mariadb/backup">
                    تهیه فایل پشتیبان
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mariadb/restore">
                    بازیابی فایل پشتیبان
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mariadb/tips">
                    توضیحات و نکات تکمیلی
                  </ActiveLink>
                </li>
              </ul>
            </li>

            <li>
              <NavTitle href="/databases/postgresql">
                <PlatformIcon platform="postgres" />
                PostgreSQL
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/databases/postgresql/install">
                    نصب و راه‌اندازی
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/postgresql/connections">
                    راه‌های اتصال
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/postgresql/backup">
                    تهیه فایل پشتیبان
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/postgresql/restore">
                    بازیابی فایل پشتیبان
                  </ActiveLink>
                </li>
              </ul>
            </li>

            <li>
              <NavTitle href="/databases/sqlserver">
                <PlatformIcon platform="mssql" />
                SQL Server
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/databases/sqlserver/install">
                    نصب و راه‌اندازی
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/sqlserver/connections">
                    راه‌های اتصال
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/sqlserver/backup">
                    تهیه فایل پشتیبان
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/sqlserver/restore">
                    بازیابی فایل پشتیبان
                  </ActiveLink>
                </li>
              </ul>
            </li>

            <li>
              <NavTitle href="/databases/mongodb">
                <PlatformIcon platform="mongodb" />
                MongoDB
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/databases/mongodb/install">
                    نصب و راه‌اندازی
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mongodb/connections">
                    راه‌های اتصال
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mongodb/backup">
                    تهیه فایل پشتیبان
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/mongodb/restore">
                    بازیابی فایل پشتیبان
                  </ActiveLink>
                </li>
              </ul>
            </li>

            <li>
              <NavTitle href="/databases/redis">
                <PlatformIcon platform="redis" />
                Redis
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/databases/redis/install">
                    نصب و راه‌اندازی
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/redis/connections">
                    راه‌های اتصال
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/redis/backup">
                    تهیه فایل پشتیبان
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/databases/redis/restore">
                    بازیابی فایل پشتیبان
                  </ActiveLink>
                </li>
              </ul>
            </li>

            <li>
              <NavTitle href="/databases/elasticsearch">
                <PlatformIcon platform="elastic" />
                Elastic
              </NavTitle>
              <ul className="nav__list">
                <li>
                  <ActiveLink href="/databases/elasticsearch/install">
                    نصب و راه‌اندازی
                  </ActiveLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/app-features">ویژگی‌های برنامه</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/app-features/file-system">
                فایل سیستم
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/logs">لاگ‌ها</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/environment-variables">
                متغیرهای محیطی (env ها)
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/private-network">
                شبکه‌ی خصوصی
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/private-registry">
                رجیستری خصوصی
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/console">خط فرمان</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/cron-jobs">
                Cron Job ها
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/ffmpeg">ماژول FFMPEG</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/fixed-ip">آی‌پی ثابت</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/ignore">
                نادیده‌گرفتن فایل‌ها
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/zero-downtime-deployment">
                استقرار بدون اختلال
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/health-check">
                بررسی سلامت
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/events">رویدادها</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/app-features/build-location">
                تعیین موقعیت build
              </ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/storage/disks">دیسک‌ها</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/storage/disks/about">درباره دیسک</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/storage/disks/management">
                مدیریت دیسک‌ها
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/storage/disks/increase-size">
                افزایش حجم دیسک‌ها
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/storage/disks/reduce-size">
                کاهش حجم دیسک‌ها
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/storage/disks/ftp">
                اتصال به دیسک‌ها با FTP
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/storage/disks/backup-restore">
                تهیه و بازیابی فایل پشتیبان
              </ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/buckets">ذخیره‌سازی ابری</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/buckets/about">
                درباره ذخیره‌سازی ابری
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/buckets/console">
                مدیریت فایل‌ها با رابط کاربری
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/buckets/aws-sdk">اتصال با AWS SDK</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/buckets/keys">مدیریت کلیدها</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/buckets/resize">تغییر اندازه</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/buckets/access-policy">
                تغییر سطح دسترسی
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/buckets/migrate">
                ثبت درخواست انتقال
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/buckets/backup">تهیه فایل پشتیبان</ActiveLink>
            </li>
            {/*
            <li>
              <ActiveLink href="/buckets/domain">اتصال دامنه</ActiveLink>
            </li>
              */}
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/cicd">راه‌اندازی CI/CD</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/cicd/about">درباره CI/CD</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cicd/github">استفاده از GitHub</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cicd/gitlab">استفاده از GitLab</ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/dns">DNS</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/dns/add-zone">افزودن دامنه</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/dns/records">رکوردهای DNS</ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/email">ایمیل</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/email/create-mail-server">
                ساخت سرور ایمیل
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/email/send-email">ارسال ایمیل</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/email/inbound-email">دریافت ایمیل</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/email/tips">توضیحات و نکات تکمیلی</ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/desktop">Desktop</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/desktop/install">نصب و به‌روزرسانی</ActiveLink>
            </li>
            {/* <li>
              <ActiveLink href="/desktop/login">ورود به حساب کاربری</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/desktop/deploy">استقرار برنامه</ActiveLink>
            </li> */}
          </ul>
        </nav>

        <nav className="nav">
          <NavTitle href="/cli">CLI</NavTitle>
          <ul className="nav__list">
            <li>
              <ActiveLink href="/cli/install">نصب و به‌روزرسانی</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/login">ورود به حساب کاربری</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/deploy">استقرار برنامه</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/disk">مدیریت دیسک‌ها</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/app">مدیریت برنامه‌ها</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/env">مدیریت متغیرهای محیطی</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/plan">پلن‌های سرویس برنامه</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/account">
                مدیریت حساب‌های کاربری
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/auto-complete">
                تکمیل خودکار دستورات
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cli/commands">خلاصه دستورات</ActiveLink>
            </li>
          </ul>
        </nav>

        <nav className="nav">
          <ActiveLink href="/openapi">API</ActiveLink>
        </nav>

        <nav className="nav">
          <ActiveLink href="/domains">مدیریت دامنه‌ها</ActiveLink>
        </nav>

        <nav className="nav">
          <ActiveLink href="/migrate">انتقال سرویس‌‌‌ها</ActiveLink>
        </nav>

        <nav className="nav">
          <ActiveLink href="/production-checklist">
            چک‌لیست Production
          </ActiveLink>
        </nav>

        <nav className="nav">
          <ActiveLink href="/managing-multiple-accounts">
            مدیریت حساب‌های کاربری
          </ActiveLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
