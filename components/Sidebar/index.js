import React, {Component} from 'react'

import NavTitle from './NavTitle'
import ActiveLink from './ActiveLink'

export default class Sidebar extends Component {
  state = {
    isNavOpen: false,
  };

  componentDidMount() {
    this.setState({ defaultActive: document.querySelectorAll('.nav__title--active').length === 0 });
  }

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
            <NavTitle active={this.state.defaultActive} href="/app-deploy">برنامه‌ها</NavTitle>
            <ul className="nav__list">
              <li><NavTitle href="/app-deploy/nodejs">NodeJS</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/nodejs/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/envs">تنظیم متغیرها (env)</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/nodejs/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/laravel">Laravel</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/laravel/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/envs">تنظیم متغیرها (env)</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/https">پیکربندی HTTPS</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/migrations">اجرای migration ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/laravel/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/php">PHP</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/php/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/envs">تنظیم متغیرها (env)</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/php/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/django">Django</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/django/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/envs">تنظیم متغیرها (env)</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/migrations">اجرای migration ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/django/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/flask">Flask</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/flask/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/envs">تنظیم متغیرها (env)</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/flask/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/netcore">Net Core.</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/netcore/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/envs">تنظیم متغیرها (env)</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/dbs">اتصال به دیتابیس</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/netcore/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/react">React</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/react/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/react/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/react/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/react/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/react/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/react/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/react/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/angular">Angular</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/angular/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/angular/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/angular/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/angular/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/angular/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/angular/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/angular/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/vue">Vue</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/vue/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/vue/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/vue/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/vue/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/vue/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/vue/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/vue/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/static">Static</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/static/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/static/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/static/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/static/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/static/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/static/domain">اتصال دامنه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/static/tips">توضیحات و نکات تکمیلی</ActiveLink></li>
                </ul>
              </li>
              <li><NavTitle href="/app-deploy/docker">Docker</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/app-deploy/docker/getting-started">شروع به کار</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/docker/deploy">استقرار اولین برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/docker/envs">تنظیم متغیرها (env)</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/docker/logs">مشاهده لاگ‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/docker/liarajson">استفاده از فایل liara.json</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/docker/update">به‌روزرسانی برنامه</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/docker/disks">استفاده از دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/app-deploy/docker/domain">اتصال دامنه</ActiveLink></li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/app-features">ویژگی‌های برنامه</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/app-features/file-system">فایل سیستم</ActiveLink></li>
              <li><ActiveLink href="/app-features/logs">لاگ‌ها</ActiveLink></li>
              <li><ActiveLink href="/app-features/environment-variables">متغیرهای محیطی (env ها)</ActiveLink></li>
              <li><ActiveLink href="/app-features/console">خط فرمان</ActiveLink></li>
              <li><ActiveLink href="/app-features/cron-jobs">Cron Job ها</ActiveLink></li>
              <li><ActiveLink href="/app-features/fixed-ip">آی‌پی ثابت</ActiveLink></li>
              <li><ActiveLink href="/app-features/ignore">نادیده‌گرفتن فایل‌ها</ActiveLink></li>
              <li><ActiveLink href="/app-features/zero-downtime-deployment">استقرار بدون اختلال</ActiveLink></li>
              <li><ActiveLink href="/app-features/health-check">بررسی سلامت</ActiveLink></li>
              <li><ActiveLink href="/app-features/applets">برنامک‌ها</ActiveLink></li>
              <li><ActiveLink href="/app-features/email">ایمیل</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/cicd">راه‌اندازی CI/CD</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/cicd/about">درباره CI/CD</ActiveLink></li>
              <li><ActiveLink href="/cicd/gitlab">استفاده از GitLab</ActiveLink></li>
              <li><ActiveLink href="/cicd/github">استفاده از GitHub</ActiveLink></li>
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
            <NavTitle href="/instructions">دستورالعمل‌ها</NavTitle>
            <ul className="nav__list">
              {/* <li><ActiveLink href="/instructions/nextjs">NextJS</ActiveLink></li>
              <li><ActiveLink href="/instructions/nuxtjs">NuxtJS</ActiveLink></li>
              <li><ActiveLink href="/instructions/gatsbyjs">GatsbyJS</ActiveLink></li>
              <li><ActiveLink href="/instructions/strapi">Strapi</ActiveLink></li> */}
              <li><ActiveLink href="/instructions/golang">Golang</ActiveLink></li>
              <li><ActiveLink href="/instructions/dotnet-published">استقرار فایل DLL</ActiveLink></li>
              <li><ActiveLink href="/instructions/rabbitmq">RabbitMQ</ActiveLink></li>
              <li><ActiveLink href="/instructions/elasticsearch">Elasticsearch</ActiveLink></li>
              <li><ActiveLink href="/instructions/kibana">Kibana</ActiveLink></li>
              <li><ActiveLink href="/instructions/grafana">Grafana</ActiveLink></li>
              <li><ActiveLink href="/instructions/prestashop">Prestashop</ActiveLink></li>
              <li><ActiveLink href="/instructions/mattermost">Mattermost</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/databases">دیتابیس‌ها</NavTitle>
            <ul className="nav__list">
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

              <li><NavTitle href="/databases/sqlserver">SQL Server</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/sqlserver/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/sqlserver/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/sqlserver/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/sqlserver/restore">Restore</ActiveLink></li>
                </ul>
              </li>

              <li><NavTitle href="/databases/mongodb">MongoDB</NavTitle>
                <ul className="nav__list">
                  <li><ActiveLink href="/databases/mongodb/install">نصب و راه‌اندازی</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/connections">راه‌های اتصال</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/backup">Backup</ActiveLink></li>
                  <li><ActiveLink href="/databases/mongodb/restore">Restore</ActiveLink></li>
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
              <li><ActiveLink href="/databases/tunnel">اتصال امن به دیتابیس‌ها</ActiveLink></li>

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
                  <li><ActiveLink href="/storage/disks/reduce-size">کاهش حجم دیسک‌ها</ActiveLink></li>
                  <li><ActiveLink href="/storage/disks/ftp">اتصال به دیسک‌ها با FTP</ActiveLink></li>
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
              <li><ActiveLink href="/domains/ssl">مدیریت SSL‌ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <NavTitle href="/cli">لیارا CLI</NavTitle>
            <ul className="nav__list">
              <li><ActiveLink href="/cli/install">نصب و به‌روزرسانی</ActiveLink></li>
              <li><ActiveLink href="/cli/commands">خلاصه دستورات</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <ActiveLink href="/migrate">انتقال بین موقعیت‌ها</ActiveLink>
          </nav>
        </div>
      </aside>
    );
  }
}
