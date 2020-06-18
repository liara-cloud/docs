import React, { Component } from 'react';

import './style.css'
import NavTitle from './NavTitle'
import ActiveLink from './ActiveLink'

export default class Sidebar extends Component {
  state = {
    isNavOpen: false,
  };

  toggleNav = () => {
    this.setState(prevState => ({ isNavOpen: !prevState.isNavOpen }));
  };

  render() {
    const { isNavOpen } = this.state;
    return (
      <aside className="sidebar">
        <button type="button" className="menu-button" onClick={this.toggleNav}>
          <img src="/static/icons/menu.svg" alt="" className="menu-button__icon" />
          فهرست
        </button>

        <div className={isNavOpen ? '' : 'hide-nav'}>
          <nav className="nav">
            <ActiveLink href="/">صفحه‌ی اصلی مستندات</ActiveLink>
          </nav>

          <nav className="nav">
            <NavTitle href="/apps">برنامه‌ها</NavTitle>
            <ul className="nav__list">
              <li><NavTitle href="/apps/nodejs">NodeJS</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/nodejs/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/envs">پیکربندی ENV ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/laravel">Laravel</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/laravel/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/envs">پیکربندی ENV ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/https">پیکربندی HTTPS</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/migrations">اجرای migration ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/php">PHP</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/php/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/envs">پیکربندی ENV ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/django">Django</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/django/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/envs">پیکربندی ENV ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/migrations">اجرای migration ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/django/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/flask">Flask</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/flask/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/envs">پیکربندی ENV ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/flask/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/netcore">Net Core.</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/netcore/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/envs">پیکربندی ENV ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/netcore/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/react">React</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/react/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/react/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/react/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/react/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/react/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/react/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/react/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/angular">Angular</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/angular/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/angular/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/angular/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/angular/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/angular/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/angular/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/angular/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/vue">Vue</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/vue/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/vue/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/vue/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/vue/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/vue/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/vue/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/vue/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/apps/static">Static</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/static/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/static/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/static/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/static/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/static/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/static/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/static/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/app-features">امکانات برنامه</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/app-features/logs">لاگ‌ها</ActiveLink></li>
              <li><ActiveLink href="/app-features/environment-variables">متغیرهای محیطی (ENV ها)</ActiveLink></li>
              <li><ActiveLink href="/app-features/console">خط فرمان</ActiveLink></li>
              <li><ActiveLink href="/app-features/fixed-ip">آی‌پی ثابت</ActiveLink></li>
              <li><ActiveLink href="/app-features/ignore">نادیده‌گرفتن فایل‌ها</ActiveLink></li>
              <li><ActiveLink href="/app-features/zero-downtime-deployment">استقرار بدون اختلال</ActiveLink></li>
              <li><ActiveLink href="/app-features/health-check">بررسی سلامت</ActiveLink></li>
              <li><ActiveLink href="/app-features/applets">برنامک‌ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/cicd">راه‌اندازی CI/CD</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/cicd/about">درباره CI/CD</ActiveLink></li>
              <li><ActiveLink href="/cicd/gitlab">استفاده از Gitlab</ActiveLink></li>
              <li><ActiveLink href="/cicd/github">استفاده از Github</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/one-click-apps">برنامه‌های آماده</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/one-click-apps/about">درباره برنامه‌های آماده</ActiveLink></li>
              <li><ActiveLink href="/one-click-apps/wordpress">WordPress</ActiveLink></li>
              <li><ActiveLink href="/one-click-apps/rocketchat">RocketChat</ActiveLink></li>
              <li><ActiveLink href="/one-click-apps/gitea">Gitea</ActiveLink></li>
              <li><ActiveLink href="/one-click-apps/others">دیگر برنامه‌ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/databases">دیتابیس‌ها</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/databases/tunnel">اتصال امن به دیتابیس‌ها</ActiveLink></li>
              <li><NavTitle href="/databases/mongodb">MongoDB</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/mongodb/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/restore">Restore</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/databases/mysql-mariadb">MySQL / MariaDB</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/mysql-mariadb/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/mysql-mariadb/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/mysql-mariadb/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/mysql-mariadb/restore">Restore</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/databases/postgresql">PostgreSQL</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/postgresql/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/postgresql/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/postgresql/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/postgresql/restore">Restore</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/databases/redis">Redis</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/redis/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/redis/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/redis/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/redis/restore">Restore</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/databases/sqlserver">SQL Server</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/sqlserver/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/sqlserver/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/sqlserver/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/sqlserver/restore">Restore</ActiveLink></li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/storage">ذخیره‌سازی</NavTitle>
            <ul className="nav__list">
              <li><NavTitle href="/storage/disks">دیسک‌ها (Disks)</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/storage/disks/about">درباره دیسک</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/management">مدیریت دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/increase-size">افزایش حجم دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/FTP">اتصال به دیسک‌ها با FTP</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/backup-restore">Backup / Restore</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/storage/object-storage">Object Storage</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/storage/object-storage/about">درباره آبجکت استوریج</ActiveLink></li>
                  <li><ActiveLink href="/storage/object-storage/management">مدیریت آبجکت استوریج</ActiveLink></li>
                  <li><ActiveLink href="/storage/object-storage/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/storage/object-storage/increase-size">افزایش حجم</ActiveLink></li>
                  <li><ActiveLink href="/storage/object-storage/cli">MinIO CLI</ActiveLink></li>
                  <li><ActiveLink href="/storage/object-storage/backup-restore">Backup / Restore</ActiveLink></li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/domains">دامنه‌ها</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/domains/management">مدیریت دامنه‌ها</ActiveLink></li>
              <li><ActiveLink href="/domains/ssl">مدیریت SSL‌ ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/cli">لیارا CLI</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/cli/install">نصب و به‌روزرسانی</ActiveLink></li>
              <li><ActiveLink href="/cli/commands">خلاصه دستورات</ActiveLink></li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}
