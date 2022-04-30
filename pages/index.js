import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import PlatformIcon from "../components/PlatformIcon";
import Seo from "../components/SEO/Seo";

const Index = () => (
  <Layout>
    <Head>
      <title>مستندات - سرویس ابری لیارا</title>
    </Head>

    {/* <Seo
      title="مستندات"
      desc="سرویس ابری لیارا بستری را فراهم می‌کند تا شما بدون نیاز به پیکربندی و
      تنظیمات، با نهایت سرعت، آسودگی و راحتی، برنامه‌ی خود را روی سرور اجرا
      کنید."
      keyWords="لیارا,مستندات لیارا,سرویس ابری لیارا"
    /> */}

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
      <Link href="/app-deploy/static/getting-started">
        <a>
          <PlatformIcon platform="HTML5" />
          <span>Static</span>
        </a>
      </Link>
      <Link href="/instructions/gatsbyjs">
        <a>
          <PlatformIcon platform="gatsby" />
          <span>GatsbyJS</span>
        </a>
      </Link>
      <Link href="/app-deploy/nodejs/getting-started">
        <a>
          <PlatformIcon platform="nodejs" />
          <span>NodeJS</span>
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
      <Link href="/instructions/python">
        <a>
          <PlatformIcon platform="python" />
          <span>Python</span>
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
    </div>
    <h3>دیتابیس‌هایی که پشتیبانی می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای اجرای هر دیتابیس، صفحه‌ی مربوط به آن را دنبال کنید.
    </p>
    <div className="platforms">
      <Link href="/databases/mysql/install">
        <a>
          <PlatformIcon platform="mysql" />
          <span>MySQL</span>
        </a>
      </Link>
      <Link href="/databases/mariadb/install">
        <a>
          <PlatformIcon platform="mariadb" />
          <span>MariaDB</span>
        </a>
      </Link>
      <Link href="/databases/postgresql/install">
        <a>
          <PlatformIcon platform="postgres" />
          <span>PostgreSQL</span>
        </a>
      </Link>
      <Link href="/databases/sqlserver/install">
        <a>
          <PlatformIcon platform="mssql" />
          <span>SQL Server</span>
        </a>
      </Link>
      <Link href="/databases/mongodb/install">
        <a>
          <PlatformIcon platform="mongodb" />
          <span>MongoDB</span>
        </a>
      </Link>
      <Link href="/databases/redis/install">
        <a>
          <PlatformIcon platform="redis" />
          <span>Redis</span>
        </a>
      </Link>
      <Link href="/instructions/rabbitmq">
        <a>
          <PlatformIcon platform="rabbitmq" />
          <span>RabbitMQ</span>
        </a>
      </Link>
      <Link href="/instructions/elasticsearch">
        <a>
          <PlatformIcon platform="elastic" />
          <span>Elastic</span>
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
      <Link href="/one-click-apps/prestashop">
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
      <Link href="/one-click-apps/grafana">
        <a>
          <PlatformIcon platform="grafana" />
          <span>Grafana</span>
        </a>
      </Link>
      <Link href="/one-click-apps/kibana">
        <a>
          <PlatformIcon platform="kibana" />
          <span>Kibana</span>
        </a>
      </Link>
      <Link href="/one-click-apps/mattermost">
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
      <Link href="/one-click-apps/parse">
        <a>
          <PlatformIcon platform="parseserver" />
          <span>Parse</span>
        </a>
      </Link>
      <Link href="/one-click-apps/vscode">
        <a>
          <PlatformIcon platform="vscode" />
          <span>Code</span>
        </a>
      </Link>
      <Link href="/one-click-apps/odoo">
        <a>
          <PlatformIcon platform="odoo" />
          <span>Odoo</span>
        </a>
      </Link>
    </div>
  </Layout>
);

export default Index;
