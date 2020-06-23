import Layout from '../components/Layout'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات</title>
    </Head>

    <h1>صفحه‌ی اصلی مستندات</h1>

    <h3>معرفی سرویس ابری لیارا</h3>
    <p>
      سرویس ابری لیارا بستری را فراهم می‌کند تا شما بدون نیاز به پیکربندی و تنظیمات، با نهایت سرعت، آسودگی
      و راحتی، برنامه‌ی خود را روی سرور اجرا کنید.
    </p>

    <h3>برنامه‌هایی که پشتیبانی می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای اجرای هر برنامه، صفحه‌ی مربوط به آن را دنبال کنید.
    </p>

    <div className="platforms">
      <a href="app-deploy/nodejs/getting-started">
        <img src="/static/platformicons/nodejs.svg" alt=""/>
        <span>NodeJS</span>
      </a>
      <a href="app-deploy/laravel/getting-started">
        <img src="/static/platformicons/laravel.svg" alt=""/>
        <span>Laravel</span>
      </a>
      <a href="app-deploy/php/getting-started">
        <img src="/static/platformicons/php.svg" alt=""/>
        <span>PHP</span>
      </a>
      <a href="app-deploy/django/getting-started">
        <img src="/static/platformicons/django.svg" alt=""/>
        <span>Django</span>
      </a>
      <a href="app-deploy/flask/getting-started">
        <img src="/static/platformicons/flask.svg" alt=""/>
        <span>Flask</span>
      </a>
      <a href="app-deploy/netcore/getting-started">
        <img src="/static/platformicons/netcore.svg" alt=""/>
        <span>.NetCore</span>
      </a>
      <a href="app-deploy/react/getting-started">
        <img src="/static/platformicons/react.svg" alt=""/>
        <span>React</span>
      </a>
      <a href="app-deploy/angular/getting-started">
        <img src="/static/platformicons/angularjs.svg" alt=""/>
        <span>Angular</span>
      </a>
      <a href="app-deploy/vue/getting-started">
        <img src="/static/platformicons/vue.svg" alt=""/>
        <span>Vue</span>
      </a>
      <a href="app-deploy/static/getting-started">
        <img src="/static/platformicons/HTML5.svg" alt=""/>
        <span>Static</span>
      </a>
      <a href="app-deploy/one-click-apps/wordpress">
        <img src="/static/platformicons/wordpress.svg" alt=""/>
        <span>WordPress</span>
      </a>
    </div>

    <h3>دیتابیس‌هایی که ارائه می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای اجرای هر دیتابیس، صفحه‌ی مربوط به آن را دنبال کنید.
    </p>
    <div className="platforms">
      <a href="/databases/mysql-mariadb/install">
        <img src="/static/platformicons/mysql.svg" alt=""/>
        <span>MySQL</span>
      </a>
      <a href="/databases/mysql-mariadb/install">
        <img src="/static/platformicons/mysql.svg" alt=""/>
        <span>MariaDB</span>
      </a>
      <a href="/databases/postgresql/install">
        <img src="/static/platformicons/postgres.svg" alt=""/>
        <span>PostgreSQL</span>
      </a>
      <a href="/databases/sqlserver/install">
        <img src="/static/platformicons/mssql.svg" alt=""/>
        <span>SQL Server</span>
      </a>
      <a href="/databases/mongodb/install">
        <img src="/static/platformicons/mongodb.svg" alt=""/>
        <span>MongoDB</span>
      </a>
      <a href="/databases/redis/install">
        <img src="/static/platformicons/redis.svg" alt=""/>
        <span>Redis</span>
      </a>
    </div>
  </Layout>
)
