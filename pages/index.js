import Layout from "../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>مستندات - سرویس ابری لیارا</title>
    </Head>

    <h1>صفحه‌ی اصلی مستندات</h1>

    <h3>معرفی سرویس ابری لیارا</h3>
    <p>
      سرویس ابری لیارا بستری را فراهم می‌کند تا شما بدون نیاز به پیکربندی و
      تنظیمات، با نهایت سرعت، آسودگی و راحتی، برنامه‌ی خود را روی سرور اجرا
      کنید.
    </p>

    <h3>برنامه‌هایی که پشتیبانی می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای اجرای هر برنامه، صفحه‌ی مربوط به آن را دنبال کنید.
    </p>

    <div className="platforms">
      <a href="app-deploy/nodejs/getting-started">
        <img src="/static/platformicons/nodejs.svg" alt="nodejs" />
        <span>NodeJS</span>
      </a>
      <a href="app-deploy/laravel/getting-started">
        <img src="/static/platformicons/laravel.svg" alt="laravel" />
        <span>Laravel</span>
      </a>
      <a href="app-deploy/php/getting-started">
        <img src="/static/platformicons/php.svg" alt="php" />
        <span>PHP</span>
      </a>
      <a href="app-deploy/django/getting-started">
        <img src="/static/platformicons/django.svg" alt="django" />
        <span>Django</span>
      </a>
      <a href="app-deploy/flask/getting-started">
        <img src="/static/platformicons/flask.svg" alt="flask" />
        <span>Flask</span>
      </a>
      <a href="app-deploy/netcore/getting-started">
        <img src="/static/platformicons/netcore.svg" alt="netcore" />
        <span>.NetCore</span>
      </a>
      <a href="app-deploy/react/getting-started">
        <img src="/static/platformicons/react.svg" alt="react" />
        <span>React</span>
      </a>
      <a href="app-deploy/angular/getting-started">
        <img src="/static/platformicons/angularjs.svg" alt="angularjs" />
        <span>Angular</span>
      </a>
      <a href="app-deploy/vue/getting-started">
        <img src="/static/platformicons/vue.svg" alt="vue" />
        <span>Vue</span>
      </a>
      <a href="app-deploy/static/getting-started">
        <img src="/static/platformicons/HTML5.svg" alt="HTML5" />
        <span>Static</span>
      </a>
      <a href="/one-click-apps/wordpress">
        <img src="/static/platformicons/wordpress.svg" alt="wordpress" />
        <span>WordPress</span>
      </a>
    </div>

    <h3>دیتابیس‌هایی که ارائه می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای اجرای هر دیتابیس، صفحه‌ی مربوط به آن را دنبال کنید.
    </p>
    <div className="platforms">
      <a href="/databases/mysql-mariadb/install">
        <img src="/static/platformicons/mysql.svg" alt="mysql" />
        <span>MySQL</span>
      </a>
      <a href="/databases/mysql-mariadb/install">
        <img src="/static/platformicons/mariadb.svg" alt="mariadb" />
        <span>MariaDB</span>
      </a>
      <a href="/databases/postgresql/install">
        <img src="/static/platformicons/postgres.svg" alt="postgres" />
        <span>PostgreSQL</span>
      </a>
      <a href="/databases/sqlserver/install">
        <img src="/static/platformicons/mssql.svg" alt="mssql" />
        <span>SQL Server</span>
      </a>
      <a href="/databases/mongodb/install">
        <img src="/static/platformicons/mongodb.svg" alt="mongodb" />
        <span>MongoDB</span>
      </a>
      <a href="/databases/redis/install">
        <img src="/static/platformicons/redis.svg" alt="redis" />
        <span>Redis</span>
      </a>
    </div>
  </Layout>
);
