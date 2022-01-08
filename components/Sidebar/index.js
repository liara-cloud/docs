import React, { Component } from 'react';

import NavTitle from './NavTitle';
import ActiveLink from './ActiveLink';

export default class Sidebar extends Component {
  state = {
    isNavOpen: false,
  };

  componentDidMount() {
    this.setState({
      defaultActive:
        document.querySelectorAll('.nav__title--active').length === 0,
    });
  }

  toggleNav = () => {
    this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
  };

  render() {
    const { isNavOpen } = this.state;
    return (
      <aside className="sidebar">
        <button
          type="button"
          className="menu-button"
          onClick={this.toggleNav}
        >
          <img
            src="/static/icons/menu.svg"
            alt=""
            className="menu-button__icon"
          />
          فهرست
        </button>

        <div className={isNavOpen ? '' : 'hide-nav'}>
          <nav className="nav">
            <ActiveLink href="/">صفحه‌ی اصلی مستندات</ActiveLink>
          </nav>

          <nav className="nav">
            <NavTitle
              active={this.state.defaultActive}
              href="/app-deploy"
            >
              برنامه‌ها
            </NavTitle>
            <ul className="nav__list">
              <li>
                <NavTitle href="/app-deploy/nodejs">
                  <img
                    src="/static/platformicons/nodejs.svg"
                    alt="nodejs"
                  />
                  NodeJS
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/nodejs/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/nodejs/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/nodejs/domain">
                      اتصال دامنه
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
                <NavTitle href="/app-deploy/laravel">
                  <img
                    src="/static/platformicons/laravel.svg"
                    alt="laravel"
                  />
                  Laravel
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/laravel/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/laravel/deploy">
                      استقرار اولین برنامه
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/laravel/envs">
                      تنظیم متغیرها (env)
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/laravel/https">
                      پیکربندی HTTPS
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
                    <ActiveLink href="/app-deploy/laravel/domain">
                      اتصال دامنه
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/laravel/email">
                      ارسال ایمیل
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/laravel/cloud-storage">
                      اتصال به سرویس فایل
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/laravel/pusher">
                      اتصال به Pusher
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
                  <img
                    src="/static/platformicons/php.svg"
                    alt="php"
                  />
                  PHP
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/php/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/php/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/php/domain">
                      اتصال دامنه
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
                  <img
                    src="/static/platformicons/django.svg"
                    alt="django"
                  />
                  Django
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/django/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/django/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/django/domain">
                      اتصال دامنه
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
                  <img
                    src="/static/platformicons/flask.svg"
                    alt="flask"
                  />
                  Flask
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/flask/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/flask/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/flask/domain">
                      اتصال دامنه
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
                  <img
                    src="/static/platformicons/netcore.svg"
                    alt="netcore"
                  />
                  Net Core.
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/netcore/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/netcore/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/netcore/domain">
                      اتصال دامنه
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
                  <img
                    src="/static/platformicons/react.svg"
                    alt="react"
                  />
                  React
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/react/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/react/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/react/domain">
                      اتصال دامنه
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
                  <img
                    src="/static/platformicons/angularjs.svg"
                    alt="angular"
                  />
                  Angular
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/angular/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/angular/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/angular/domain">
                      اتصال دامنه
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
                  <img
                    src="/static/platformicons/vue.svg"
                    alt="vue"
                  />
                  Vue
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/vue/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/vue/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/vue/domain">
                      اتصال دامنه
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
                  <img
                    src="/static/platformicons/HTML5.svg"
                    alt="static"
                  />
                  Static
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/static/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/static/deploy">
                      استقرار اولین برنامه
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
                    <ActiveLink href="/app-deploy/static/domain">
                      اتصال دامنه
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
                  <img
                    src="/static/platformicons/docker.svg"
                    alt="docker"
                  />
                  Docker
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/app-deploy/docker/getting-started">
                      شروع به کار
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/docker/deploy">
                      استقرار اولین برنامه
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/docker/deploy-image">
                      استقرار Image از DockerHub
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
                    <ActiveLink href="/app-deploy/docker/domain">
                      اتصال دامنه
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/app-deploy/docker/tips">
                      توضیحات و نکات تکمیلی
                    </ActiveLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/one-click-apps">
              برنامه‌های آماده
            </NavTitle>
            <ul className="nav__list">
              <li>
                <ActiveLink href="/one-click-apps/about">
                  درباره برنامه‌های آماده
                </ActiveLink>
              </li>
              <li>
                <NavTitle href="/one-click-apps/wordpress">
                  <img
                    src="/static/platformicons/wordpress.svg"
                    alt="wordpress"
                  />
                  WordPress
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/one-click-apps/wordpress/install">
                      نصب و راه‌اندازی
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/one-click-apps/wordpress/migrate-from-cpanel">
                      انتقال از cPanel
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/one-click-apps/wordpress/domain">
                      اتصال دامنه
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/one-click-apps/wordpress/email">
                      ارسال ایمیل
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavTitle href="/one-click-apps/headless-chrome">
                  <img
                    src="/static/platformicons/chrome.svg"
                    alt="chrome"
                  />
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
                <NavTitle href="/one-click-apps/pusher">
                  <img
                    src="/static/platformicons/pusher.svg"
                    alt="pusher"
                  />
                  Pusher
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/one-click-apps/pusher/install">
                      راه‌اندازی
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/one-click-apps/pusher/laravel">
                      اتصال از طریق Laravel
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li>
                <ActiveLink href="/one-click-apps/imgproxy">
                  <img
                    src="/static/platformicons/imgproxy.svg"
                    alt="imgproxy"
                  />
                  Imgproxy
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/one-click-apps/rocketchat">
                  <img
                    src="/static/platformicons/rocketchat.svg"
                    alt="imgproxy"
                  />
                  RocketChat
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/one-click-apps/metabase">
                  <img
                    src="/static/platformicons/metabase.svg"
                    alt="metabase"
                  />
                  Metabase
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/one-click-apps/nextcloud">
                  <img
                    src="/static/platformicons/nextcloud.svg"
                    alt="nextcloud"
                  />
                  NextCloud
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/one-click-apps/gitea">
                  <img
                    src="/static/platformicons/gitea.svg"
                    alt="gitea"
                  />
                  Gitea
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/one-click-apps/others">
                  دیگر برنامه‌ها
                </ActiveLink>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/instructions">دستورالعمل‌ها</NavTitle>
            <ul className="nav__list">
              <li>
                <ActiveLink href="/instructions/nextjs">
                  <img
                    src="/static/platformicons/next.svg"
                    alt="nextjs"
                  />
                  NextJS
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/nuxtjs">
                  <img
                    src="/static/platformicons/nuxt.svg"
                    alt="nuxtjs"
                  />
                  NuxtJS
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/nestjs">
                  <img
                    src="/static/platformicons/nest.svg"
                    alt="nestjs"
                  />
                  NestJS
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/strapi">
                  <img
                    src="/static/platformicons/strapi.svg"
                    alt="strapi"
                  />
                  Strapi
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/gatsbyjs">
                  <img
                    src="/static/platformicons/Gatsby.svg"
                    alt="gatsbyjs"
                  />
                  GatsbyJS
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/adonis">
                  <img
                    src="/static/platformicons/adonisjs.svg"
                    alt="adonis"
                  />
                  Adonis
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/nginx">
                  <img
                    src="/static/platformicons/Go.svg"
                    alt="nginx"
                  />
                  Nginx
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/golang">
                  <img
                    src="/static/platformicons/Go.svg"
                    alt="golang"
                  />
                  Golang
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/rabbitmq">
                  <img
                    src="/static/platformicons/rabbitmq.svg"
                    alt="rabbitmq"
                  />
                  RabbitMQ
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/elasticsearch">
                  <img
                    src="/static/platformicons/elastic.svg"
                    alt="elasticsearch"
                  />
                  Elasticsearch
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/kibana">
                  <img
                    src="/static/platformicons/kibana.svg"
                    alt="kibana"
                  />
                  Kibana
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/grafana">
                  <img
                    src="/static/platformicons/grafana.svg"
                    alt="grafana"
                  />
                  Grafana
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/prestashop">
                  <img
                    src="/static/platformicons/prestashop.svg"
                    alt="prestashop"
                  />
                  Prestashop
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/mattermost">
                  <img
                    src="/static/platformicons/mattermost.svg"
                    alt="mattermost"
                  />
                  Mattermost
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/yii">
                  <img
                    src="/static/platformicons/yii.svg"
                    alt="yii"
                  />
                  Yii
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/arangodb">
                  <img
                    src="/static/platformicons/arangodb.svg"
                    alt="arangodb"
                  />
                  ArangoDB
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/seq">
                  <img
                    src="/static/platformicons/seq.svg"
                    alt="seq"
                  />
                  Seq
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/celery">
                  <img
                    src="/static/platformicons/celery.svg"
                    alt="celery"
                  />
                  Celery
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/asgi">
                  ASGI
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/dotnet-published">
                  استقرار فایل DLL
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/instructions/voyager">
                  Voyager
                </ActiveLink>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/databases">دیتابیس‌ها</NavTitle>
            <ul className="nav__list">
              <li>
                <NavTitle href="/databases/mysql-mariadb">
                  <img
                    src="/static/platformicons/mysql.svg"
                    alt="mysql"
                  />
                  <img
                    src="/static/platformicons/mariadb.svg"
                    alt="mariadb"
                  />
                  MySQL / MariaDB
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/databases/mysql-mariadb/install">
                      نصب و راه‌اندازی
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/databases/mysql-mariadb/connections">
                      راه‌های اتصال
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/databases/mysql-mariadb/backup">
                      Backup
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/databases/mysql-mariadb/restore">
                      Restore
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/databases/mysql-mariadb/tips">
                      توضیحات و نکات تکمیلی
                    </ActiveLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavTitle href="/databases/postgresql">
                  <img
                    src="/static/platformicons/postgres.svg"
                    alt="postgresql"
                  />
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
                      Backup
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/databases/postgresql/restore">
                      Restore
                    </ActiveLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavTitle href="/databases/sqlserver">
                  <img
                    src="/static/platformicons/mssql.svg"
                    alt="sql-server"
                  />
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
                      Backup
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/databases/sqlserver/restore">
                      Restore
                    </ActiveLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavTitle href="/databases/mongodb">
                  <img
                    src="/static/platformicons/mongodb.svg"
                    alt="mongodb"
                  />
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
                      Backup
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/databases/mongodb/restore">
                      Restore
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavTitle href="/databases/redis">
                  <img
                    src="/static/platformicons/redis.svg"
                    alt="redis"
                  />
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
                      Backup
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/databases/redis/restore">
                      Restore
                    </ActiveLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/app-features">
              ویژگی‌های برنامه
            </NavTitle>
            <ul className="nav__list">
              <li>
                <ActiveLink href="/app-features/file-system">
                  فایل سیستم
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/app-features/logs">
                  لاگ‌ها
                </ActiveLink>
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
                <ActiveLink href="/app-features/console">
                  خط فرمان
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/app-features/cron-jobs">
                  Cron Job ها
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/app-features/ffmpeg">
                  ماژول FFMPEG
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/app-features/fixed-ip">
                  آی‌پی ثابت
                </ActiveLink>
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
                <ActiveLink href="/app-features/applets">
                  برنامک‌ها
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/app-features/email">
                  ایمیل
                </ActiveLink>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/storage">ذخیره‌سازی</NavTitle>
            <ul className="nav__list">
              <li>
                <NavTitle href="/storage/disks">
                  دیسک‌ها (Disks)
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/storage/disks/about">
                      درباره دیسک
                    </ActiveLink>
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
                      Backup / Restore
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavTitle href="/storage/object-storage">
                  Object Storage
                </NavTitle>
                <ul className="nav__list">
                  <li>
                    <ActiveLink href="/storage/object-storage/about">
                      درباره آبجکت استوریج
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/storage/object-storage/management">
                      مدیریت آبجکت استوریج
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/storage/object-storage/connections">
                      راه‌های اتصال
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/storage/object-storage/increase-size">
                      افزایش حجم
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/storage/object-storage/cli">
                      MinIO CLI
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/storage/object-storage/backup-restore">
                      Backup / Restore
                    </ActiveLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/domains">دامنه‌ها</NavTitle>
            <ul className="nav__list">
              <li>
                <ActiveLink href="/domains/management">
                  مدیریت دامنه‌ها
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/domains/ssl">
                  مدیریت SSL‌ها
                </ActiveLink>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/cicd">راه‌اندازی CI/CD</NavTitle>
            <ul className="nav__list">
              <li>
                <ActiveLink href="/cicd/about">
                  درباره CI/CD
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cicd/gitlab">
                  استفاده از GitLab
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cicd/github">
                  استفاده از GitHub
                </ActiveLink>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/cli">لیارا CLI</NavTitle>
            <ul className="nav__list">
              <li>
                <ActiveLink href="/cli/install">
                  نصب و به‌روزرسانی
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cli/login">
                  ورود به حساب کاربری
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cli/deploy">
                  استقرار برنامه
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cli/disk">
                  مدیریت دیسک‌ها
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cli/app">
                  مدیریت برنامه‌ها
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cli/env">
                  مدیریت متغیرهای محیطی
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cli/plan">
                  پلن‌های سرویس برنامه
                </ActiveLink>
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
                <ActiveLink href="/cli/commands">
                  خلاصه دستورات
                </ActiveLink>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/client-api">لیارا API</NavTitle>
            <ul className="nav__list">
              <li>
                <ActiveLink href="/client-api/about">
                  شروع به کار
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/client-api/app">
                  برنامه‌ها
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/client-api/database">
                  دیتابیس‌ها
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/client-api/domain">
                  دامنه‌ها
                </ActiveLink>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <ActiveLink href="/migrate">
              انتقال سرویس‌‌‌ها
            </ActiveLink>
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
  }
}
