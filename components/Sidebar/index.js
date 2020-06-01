import React, { Component } from 'react';

import './style.css'
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
      <div className="sidebar">
        <a href="https://liara.ir" className="brand">
          <img src="/static/logo.png" alt="liara" className="logo" />
          <div className="brand__text">
            <h2>سرویس ابری لیارا</h2>
            <p>ارائه دهنده خدمات ابری PaaS و DBaaS</p>
          </div>
        </a>

        <button type="button" className="menu-button" onClick={this.toggleNav}>
          <img src="/static/icons/menu.svg" alt="" className="menu-button__icon" />
          فهرست
        </button>

        <div className={isNavOpen ? '' : 'hide-nav'}>
          <nav className="nav">
            <ul className="nav__list">
              <li><ActiveLink href="/">صفحه اصلی</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">برنامه‌ها</span>
            <ul className="nav__list">
              <li><span className="nav__title">NodeJS</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/nodejs/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/envs">پیکربندی ENV‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/nodejs/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Laravel</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/laravel/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/envs">پیکربندی ENV‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/https">پیکربندی HTTPS</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/migrations">اجرای migration ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/objectstorage">اتصال به آبجکت استوریج</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/laravel/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">PHP</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/php/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/envs">پیکربندی ENV‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/domain">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="/apps/php/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Django</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/django/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="">پیکربندی ENV‌ها</ActiveLink></li>
                  <li><ActiveLink href="">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="">اتصال به آبجکت استوریج</ActiveLink></li>
                  <li><ActiveLink href="">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Flask</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/flask/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="">پیکربندی ENV‌ها</ActiveLink></li>
                  <li><ActiveLink href="">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="">اتصال به آبجکت استوریج</ActiveLink></li>
                  <li><ActiveLink href="">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Net Core.</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/netcore/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="">پیکربندی ENV‌ها</ActiveLink></li>
                  <li><ActiveLink href="">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="">اتصال به آبجکت استوریج</ActiveLink></li>
                  <li><ActiveLink href="">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">React</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/react/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Angular</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/angular/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Vue</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/apps/vue/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="">وصل کردن دامنه</ActiveLink></li>
                  <li><ActiveLink href="">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Static</span>
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
            <span className="nav__title">امکانات برنامه</span>
            <ul className="nav__list">
              <li><ActiveLink href="/app-features/logs">لاگ‌ها</ActiveLink></li>
              <li><ActiveLink href="/app-features/environment-variables">متغیرها (ENVها)</ActiveLink></li>
              <li><ActiveLink href="/app-features/console">خط فرمان</ActiveLink></li>
              <li><ActiveLink href="/app-features/fixed-ip">آی‌پی ثابت</ActiveLink></li>
              <li><ActiveLink href="/app-features/ignore">نادیده‌گرفتن فایل‌ها</ActiveLink></li>
              <li><ActiveLink href="/app-features/zero-downtime-deployment">استقرار بدون اختلال</ActiveLink></li>
              <li><ActiveLink href="/app-features/health-check">بررسی سلامت</ActiveLink></li>
              <li><ActiveLink href="/app-features/applets">برنامک‌ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">راه‌اندازی CI/CD</span>
            <ul className="nav__list">
              <li><ActiveLink href="/ci-cd/">استفاده از Gitlab</ActiveLink></li>
              <li><ActiveLink href="/ci-cd/">استفاده از Github</ActiveLink></li>
              <li><ActiveLink href="/ci-cd/">استفاده از Bitbucket</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">برنامه‌های آماده</span>
            <ul className="nav__list">
              <li><ActiveLink href="/one-click-apps/wordpress">Wordpress</ActiveLink></li>
              <li><ActiveLink href="/one-click-apps/">RocketChat</ActiveLink></li>
              <li><ActiveLink href="/one-click-apps/">Wordpress</ActiveLink></li>
              <li><ActiveLink href="/one-click-apps/">دیگر برنامه‌ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">دیتابیس‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/databases/tunnel">اتصال امن به دیتابیس‌ها</ActiveLink></li>
              <li><span className="nav__title">MongoDB</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/mongodb/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/restore">Restore</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">MySQL / MariaDB</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/mysql-mariadb/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/mysql-mariadb/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/mysql-mariadb/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/mysql-mariadb/restore">Restore</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">PostgreSQL</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/postgresql/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/postgresql/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/postgresql/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/postgresql/restore">Restore</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Redis</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/redis/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/redis/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/redis/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/redis/restore">Restore</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">SQL Server</span>
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
            <span className="nav__title">ذخیره‌سازی</span>
            <ul className="nav__list">
              <li><span className="nav__title">دیسک‌ها (Disks)</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/storage/disks/about">درباره دیسک</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/management">مدیریت دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/increase-size">افزایش حجم دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/FTP">اتصال به دیسک‌ها با FTP</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/backup-restore">Backup / Restore</ActiveLink></li>
                </ul>
              </li>
              <li><span className="nav__title">Object Storage</span>
                <ul className="nav__list">
                  <li><ActiveLink href="/storage/object-storage/">درباره آبجکت استوریج</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/object-storage/">مدیریت آبجکت استوریج</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/object-storage/">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/object-storage/">افزایش حجم</ActiveLink></li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">دامنه‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/domains/">مدیریت دامنه‌ها</ActiveLink></li>
              <li><ActiveLink href="/domains/">اتصال DNS‌ها به لیارا</ActiveLink></li>
              <li><ActiveLink href="/domains/">مدیریت SSL‌ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">لیارا CLI</span>
            <ul className="nav__list">
              <li><ActiveLink href="/cli/install">نصب و به‌روزرسانی</ActiveLink></li>
              <li><ActiveLink href="/cli/commands">خلاصه دستورات</ActiveLink></li>
            </ul>
          </nav>
          {/* <nav className="nav">
            <span className="nav__title">کلاینت‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/clients/cli">CLI</ActiveLink></li>
              <li><ActiveLink href="/clients/api">API</ActiveLink></li>
            </ul>
          </nav>


          <nav className="nav">
            <span className="nav__title">برنامه‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/apps/logs">لاگ‌ها</ActiveLink></li>
              <li><ActiveLink href="/apps/environment-variables">متغیرها</ActiveLink></li>
              <li><ActiveLink href="/apps/console">خط فرمان</ActiveLink></li>
              <li><ActiveLink href="/apps/disks">دیسک‌ها</ActiveLink></li>
              <li><ActiveLink href="/apps/fixed-ip">آی‌پی ثابت</ActiveLink></li>
              <li><ActiveLink href="/apps/ignore">نادیده‌گرفتن فایل‌ها</ActiveLink></li>
              <li><ActiveLink href="/apps/zero-downtime-deployment">استقرار بدون اختلال</ActiveLink></li>
              <li><ActiveLink href="/apps/health-check">بررسی سلامت</ActiveLink></li>
              <li><ActiveLink href="/apps/applets">برنامک‌ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">دیتابیس‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/databases/tunnel">ایجاد تونل امن</ActiveLink></li>
              <li><ActiveLink href="/databases/robo3t">اتصال با Robo3T</ActiveLink></li>
              <li><ActiveLink href="/databases/mysql">MySQL</ActiveLink></li>
              <li><ActiveLink href="/databases/mongodb">MongoDB</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">دامنه‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/domains/add-domain">افزودن دامنه</ActiveLink></li>
              <li><ActiveLink href="/domains/ssl-https">تهیه‌ی SSL</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">استقرار برنامه‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink icon="react.svg" href="/deployments/react">React</ActiveLink></li>
              <li><ActiveLink icon="vue.svg" href="/deployments/vue">Vue</ActiveLink></li>
              <li><ActiveLink icon="angularjs.svg" href="/deployments/angular">Angular</ActiveLink></li>
              <li><ActiveLink icon="HTML5.svg" href="/deployments/static">Static</ActiveLink></li>
              <li><ActiveLink icon="nodejs.svg" href="/deployments/nodejs">NodeJS</ActiveLink></li>
              <li><ActiveLink icon="php.svg" href="/deployments/php">PHP</ActiveLink></li>
              <li><ActiveLink icon="laravel.svg" href="/deployments/laravel">Laravel</ActiveLink></li>
              <li><ActiveLink icon="django.svg" href="/deployments/django">Django</ActiveLink></li>
              <li><ActiveLink icon="flask.svg" href="/deployments/flask">Flask</ActiveLink></li>
              <li><ActiveLink icon="netcore.svg" href="/deployments/netcore" textStyle={{ direction: 'ltr' }}>.Net Core</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">برنامه‌های آماده</span>
            <ul className="nav__list">
              <li><ActiveLink href="/one-click-apps/overview">آشنایی</ActiveLink></li>
              <li><ActiveLink icon="wordpress.svg" href="/one-click-apps/wordpress">WordPress</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">سرویس ذخیره‌ی فایل</span>
            <ul className="nav__list">
              <li><ActiveLink href="/storage/overview">آشنایی</ActiveLink></li>
              <li><ActiveLink href="/storage/nodejs">NodeJS SDK</ActiveLink></li>
              <li><ActiveLink href="/storage/laravel">Laravel S3 Driver</ActiveLink></li>
            </ul>
          </nav>*/}
        </div>
      </div>
    );
  }
}
