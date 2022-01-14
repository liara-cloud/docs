import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import PlatformIcon from "../components/PlatformIcon";
import DatabaseIcon from "../components/DatabaseIcon";

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
          <PlatformIcon platform="react" />
          <span>React</span>
        </a>
      </Link>
      <Link href="/app-deploy/vue/getting-started">
        <a>
          <PlatformIcon platform="vue" />
          <span>Vue</span>
        </a>
      </Link>
      <Link href="/app-deploy/angular/getting-started">
        <a>
          <PlatformIcon platform="angularjs" />
          <span>Angular</span>
        </a>
      </Link>
      <Link href="/instructions/gatsbyjs">
        <a>
          <PlatformIcon platform="gatsby" />
          <span>GatsbyJS</span>
        </a>
      </Link>
      <Link href="/app-deploy/static/getting-started">
        <a>
          <PlatformIcon platform="HTML5" />
          <span>Static</span>
        </a>
      </Link>
      <Link href="/app-deploy/nodejs/getting-started">
        <a>
          <PlatformIcon platform="nodejs" />
          <span>NodeJS</span>
        </a>
      </Link>
      <Link href="/instructions/nestjs">
        <a>
          <PlatformIcon platform="nest" />
          <span>NestJS</span>
        </a>
      </Link>
      <Link href="/instructions/nextjs">
        <a>
          <PlatformIcon platform="next" />
          <span>NextJS</span>
        </a>
      </Link>
      <Link href="/instructions/nuxtjs">
        <a>
          <PlatformIcon platform="nuxt" />
          <span>NuxtJS</span>
        </a>
      </Link>
      <Link href="/instructions/strapi">
        <a>
          <PlatformIcon platform="strapi" />
          <span>Strapi</span>
        </a>
      </Link>
      <Link href="/instructions/adonis">
        <a>
          <PlatformIcon platform="adonisjs" />
          <span>Adonis</span>
        </a>
      </Link>
      <Link href="/app-deploy/php/getting-started">
        <a>
          <PlatformIcon platform="php" />
          <span>PHP</span>
        </a>
      </Link>

      <Link href="/app-deploy/laravel/getting-started">
        <a>
          <PlatformIcon platform="laravel" />
          <span>Laravel</span>
        </a>
      </Link>
      <Link href="/app-deploy/laravel/getting-started">
        <a>
          <PlatformIcon platform="lumen" />
          <span>Lumen</span>
        </a>
      </Link>
      <Link href="/instructions/yii">
        <a>
          <PlatformIcon platform="yii" />
          <span>Yii</span>
        </a>
      </Link>

      <Link href="/app-deploy/django/getting-started">
        <a>
          <PlatformIcon platform="django" />
          <span>Django</span>
        </a>
      </Link>
      <Link href="/app-deploy/flask/getting-started">
        <a>
          <PlatformIcon platform="flask" />
          <span>Flask</span>
        </a>
      </Link>
      <Link href="/app-deploy/netcore/getting-started">
        <a>
          <PlatformIcon platform="netcore" />
          <span>.Net</span>
        </a>
      </Link>
      <Link href="/app-deploy/docker/getting-started">
        <a>
          <PlatformIcon platform="docker" />
          <span>Docker</span>
        </a>
      </Link>
      <Link href="/instructions/golang">
        <a>
          <PlatformIcon platform="go" />
          <span>Go</span>
        </a>
      </Link>
      <Link href="/instructions/nginx">
        <a>
          <img src="/static/platformicons/nginx.svg" alt="Nginx" />
          <span>Nginx</span>
        </a>
      </Link>
    </div>
    <h3>دیتابیس‌هایی که پشتیبانی می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای اجرای هر دیتابیس، صفحه‌ی مربوط به آن را دنبال کنید.
    </p>
    <div className="platforms">
      <Link href="/databases/mysql-mariadb/install">
        <a>
          <DatabaseIcon database="mysql" />
          <span>MySQL</span>
        </a>
      </Link>
      <Link href="/databases/mysql-mariadb/install">
        <a>
          <DatabaseIcon database="mariadb" />
          <span>MariaDB</span>
        </a>
      </Link>
      <Link href="/databases/postgresql/install">
        <a>
          <DatabaseIcon database="postgres" />
          <span>PostgreSQL</span>
        </a>
      </Link>
      <Link href="/databases/sqlserver/install">
        <a>
          <DatabaseIcon database="mssql" />
          <span>SQL Server</span>
        </a>
      </Link>
      <Link href="/databases/mongodb/install">
        <a>
          <DatabaseIcon database="mongodb" />
          <span>MongoDB</span>
        </a>
      </Link>
      <Link href="/databases/redis/install">
        <a>
          <DatabaseIcon database="redis" />
          <span>Redis</span>
        </a>
      </Link>
      <Link href="/instructions/rabbitmq">
        <a>
          <DatabaseIcon database="rabbitmq" />
          <span>RabbitMQ</span>
        </a>
      </Link>
      <Link href="/instructions/elasticsearch">
        <a>
          <DatabaseIcon database="elastic" />
          <span>Elastic</span>
        </a>
      </Link>
      <Link href="/instructions/arangodb">
        <a>
          <DatabaseIcon database="arangodb" />
          <span>ArangoDB</span>
        </a>
      </Link>
    </div>

    <h3>برنامه‌های آماده‌ای که ارائه می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای نصب هر برنامه آماده، صفحه‌ی مربوط به آن را دنبال
      کنید.
    </p>
    <div className="platforms">
      <Link href="/one-click-apps/wordpress/install">
        <a>
          <PlatformIcon platform="wordpress" />
          <span>WordPress</span>
        </a>
      </Link>
      <Link href="/one-click-apps/others">
        <a>
          <PlatformIcon platform="ghost" />
          <span>Ghost</span>
        </a>
      </Link>
      <Link href="/instructions/prestashop">
        <a>
          <PlatformIcon platform="prestashop" />
          <span>Prestashop</span>
        </a>
      </Link>
      <Link href="/one-click-apps/pusher/install">
        <a>
          <PlatformIcon platform="pusher" />
          <span>Pusher</span>
        </a>
      </Link>
      <Link href="/one-click-apps/metabase">
        <a>
          <PlatformIcon platform="metabase" />
          <span>Metabase</span>
        </a>
      </Link>
      <Link href="/instructions/grafana">
        <a>
          <PlatformIcon platform="grafana" />
          <span>Grafana</span>
        </a>
      </Link>
      <Link href="/instructions/kibana">
        <a>
          <PlatformIcon platform="kibana" />
          <span>Kibana</span>
        </a>
      </Link>
      <Link href="/instructions/mattermost">
        <a>
          <PlatformIcon platform="mattermost" />
          <span>Mattermost</span>
        </a>
      </Link>
      <Link href="/one-click-apps/rocketchat">
        <a>
          <PlatformIcon platform="rocketchat" />
          <span>Rocket.Chat</span>
        </a>
      </Link>
      <Link href="/one-click-apps/gitea">
        <a>
          <PlatformIcon platform="gitea" />
          <span>Gitea</span>
        </a>
      </Link>
      <Link href="/one-click-apps/nextcloud">
        <a>
          <PlatformIcon platform="nextcloud" />
          <span>NextCloud</span>
        </a>
      </Link>
      <Link href="/one-click-apps/imgproxy">
        <a>
          <PlatformIcon platform="imgproxy" />
          <span>Imgproxy</span>
        </a>
      </Link>
      <Link href="/one-click-apps/headless-chrome/install">
        <a>
          <PlatformIcon platform="chrome" />
          <span>Chrome</span>
        </a>
      </Link>
    </div>
  </Layout>
);

export default Index;
