import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

const Index = () => (
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
      <Link href="/app-deploy/react/getting-started">
        <a>
          <img src="/static/platformicons/react.svg" alt="react" />
          <span>React</span>
        </a>
      </Link>
      <Link href="/app-deploy/vue/getting-started">
        <a>
          <img src="/static/platformicons/vue.svg" alt="vue" />
          <span>Vue</span>
        </a>
      </Link>
      <Link href="/app-deploy/angular/getting-started">
        <a>
          <img src="/static/platformicons/angularjs.svg" alt="angularjs" />
          <span>Angular</span>
        </a>
      </Link>
      <Link href="/instructions/gatsbyjs">
        <a>
          <img src="/static/platformicons/Gatsby.svg" alt="gatsby" />
          <span>GatsbyJS</span>
        </a>
      </Link>
      <Link href="/app-deploy/static/getting-started">
        <a>
          <img src="/static/platformicons/HTML5.svg" alt="HTML5" />
          <span>Static</span>
        </a>
      </Link>
    </div>

    <div className="platforms">
      <Link href="/app-deploy/nodejs/getting-started">
        <a>
          <img src="/static/platformicons/nodejs.svg" alt="nodejs" />
          <span>NodeJS</span>
        </a>
      </Link>
      <a href="/instructions/nestjs">
        <img src="/static/platformicons/nest.svg" alt="nestjs" />
        <span>NestJS</span>
      </a>
      <Link href="/instructions/nextjs">
        <a>
          <img src="/static/platformicons/next.svg" alt="nextjs" />
          <span>NextJS</span>
        </a>
      </Link>
      <Link href="/instructions/nuxtjs">
        <a>
          <img src="/static/platformicons/nuxt.svg" alt="nuxtjs" />
          <span>NuxtJS</span>
        </a>
      </Link>
    </div>

    <div className="platforms">
      <Link href="/app-deploy/php/getting-started">
        <a>
          <img src="/static/platformicons/php.svg" alt="php" />
          <span>PHP</span>
        </a>
      </Link>
      <a href="/app-deploy/laravel/getting-started">
        <img src="/static/platformicons/laravel.svg" alt="laravel" />
        <span>Laravel</span>
      </a>
      <Link href="/one-click-apps/wordpress/install">
        <a>
          <img src="/static/platformicons/wordpress.svg" alt="wordpress" />
          <span>WordPress</span>
        </a>
      </Link>
    </div>
    <div className="platforms">
      <Link href="/app-deploy/django/getting-started">
        <a>
          <img src="/static/platformicons/django.svg" alt="django" />
          <span>Django</span>
        </a>
      </Link>
      <Link href="/app-deploy/flask/getting-started">
        <a>
          <img src="/static/platformicons/flask.svg" alt="flask" />
          <span>Flask</span>
        </a>
      </Link>
    </div>

    <div className="platforms">
      <Link href="/instructions/golang">
        <a>
          <img src="/static/platformicons/Go.svg" alt="golang" />
          <span>Go</span>
        </a>
      </Link>

      <Link href="/app-deploy/docker/getting-started">
        <a>
          <img src="/static/platformicons/docker.svg" alt="Docker" />
          <span>Docker</span>
        </a>
      </Link>
    </div>

    <div className="platforms">
      <Link href="/app-deploy/netcore/getting-started">
        <a>
          <img src="/static/platformicons/netcore.svg" alt="netcore" />
          <span>.Net</span>
        </a>
      </Link>
    </div>

    <h3>برنامه‌های آماده‌ای که پشتیبانی می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای نصب هر برنامه آماده، صفحه‌ی مربوط به آن را دنبال کنید.
    </p>
    <div className="platforms">
      <Link href="/one-click-apps/wordpress/install">
        <a>
          <img src="/static/platformicons/wordpress.svg" alt="wordpress" />
          <span>WordPress</span>
        </a>
      </Link>
      <Link href="/one-click-apps/others">
        <a>
          <img src="/static/platformicons/ghost.svg" alt="ghost" />
          <span>Ghost</span>
        </a>
      </Link>
      <Link href="/one-click-apps/rocketchat">
        <a>
          <img src="/static/platformicons/rocketchat.svg" alt="rocketchat" />
          <span>Rocket.Chat</span>
        </a>
      </Link>
      <Link href="/one-click-apps/gitea">
        <a>
          <img src="/static/platformicons/gitea.svg" alt="gitea" />
          <span>Gitea</span>
        </a>
      </Link>
      <Link href="/one-click-apps/metabase">
        <a>
          <img src="/static/platformicons/metabase.svg" alt="metabase" />
          <span>Metabase</span>
        </a>
      </Link>
      <Link href="/one-click-apps/headless-chrome/install">
        <a>
          <img src="/static/platformicons/chrome.svg" alt="Chrome" />
          <span>Chrome</span>
        </a>
      </Link>
      <Link href="/one-click-apps/nextcloud">
        <a>
          <img src="/static/platformicons/nextcloud.svg" alt="nextcloud" />
          <span>NextCloud</span>
        </a>
      </Link>
    </div>

    <h3>دیتابیس‌هایی که ارائه می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای اجرای هر دیتابیس، صفحه‌ی مربوط به آن را دنبال کنید.
    </p>
    <div className="platforms">
      <Link href="/databases/mysql-mariadb/install">
        <a>
          <img src="/static/platformicons/mysql.svg" alt="mysql" />
          <span>MySQL</span>
        </a>
      </Link>
      <Link href="/databases/mysql-mariadb/install">
        <a>
          <img src="/static/platformicons/mariadb.svg" alt="mariadb" />
          <span>MariaDB</span>
        </a>
      </Link>
      <Link href="/databases/postgresql/install">
        <a>
          <img src="/static/platformicons/postgres.svg" alt="postgres" />
          <span>PostgreSQL</span>
        </a>
      </Link>
      <Link href="/databases/sqlserver/install">
        <a>
          <img src="/static/platformicons/mssql.svg" alt="mssql" />
          <span>SQL Server</span>
        </a>
      </Link>
      <Link href="/databases/mongodb/install">
        <a>
          <img src="/static/platformicons/mongodb.svg" alt="mongodb" />
          <span>MongoDB</span>
        </a>
      </Link>
      <Link href="/databases/redis/install">
        <a>
          <img src="/static/platformicons/redis.svg" alt="redis" />
          <span>Redis</span>
        </a>
      </Link>
    </div>
  </Layout >
);

export default Index;
