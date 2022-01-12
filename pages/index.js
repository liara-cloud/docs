import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProjectIcon from "../components/ProjectIcon";

const Index = () => (
  <Layout>
    <Head>
      <title>مستندات - سرویس ابری لیارا</title>
    </Head>

    <h1>صفحه‌ی اصلی مستندات</h1>

    <h3>معرفی سرویس ابری لیارا</h3>
    <p>
      سرویس ابری لیارا بستری را فراهم می‌کند تا شما بدون نیاز به پیکربندی
      و تنظیمات، با نهایت سرعت، آسودگی و راحتی، برنامه‌ی خود را روی سرور
      اجرا کنید.
    </p>

    <h3>برنامه‌هایی که پشتیبانی می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای اجرای هر برنامه، صفحه‌ی مربوط به آن را دنبال
      کنید.
    </p>
    <div className="platforms">
      <Link href="/app-deploy/react/getting-started">
        <a>
          <ProjectIcon platform="react" />
          <span>React</span>
        </a>
      </Link>
      <Link href="/app-deploy/vue/getting-started">
        <a>
          <ProjectIcon platform="vue" />
          <span>Vue</span>
        </a>
      </Link>
      <Link href="/app-deploy/angular/getting-started">
        <a>
          <ProjectIcon platform="angularjs" />
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
          <ProjectIcon platform="HTML5" />
          <span>Static</span>
        </a>
      </Link>
      <Link href="/app-deploy/nodejs/getting-started">
        <a>
          <ProjectIcon platform="nodejs" />
          <span>NodeJS</span>
        </a>
      </Link>
      <Link href="/instructions/nestjs">
        <a>
          <img src="/static/platformicons/nest.svg" alt="nestjs" />
          <span>NestJS</span>
        </a>
      </Link>
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
      <Link href="/instructions/strapi">
        <a>
          <img src="/static/platformicons/strapi.svg" alt="strapi" />
          <span>Strapi</span>
        </a>
      </Link>
      <Link href="/instructions/adonis">
        <a>
          <img
            src="/static/platformicons/adonisjs.svg"
            alt="adonis"
          />
          <span>Adonis</span>
        </a>
      </Link>
      <Link href="/app-deploy/php/getting-started">
        <a>
          <ProjectIcon platform="php" />
          <span>PHP</span>
        </a>
      </Link>

      <Link href="/app-deploy/laravel/getting-started">
        <a>
          <ProjectIcon platform="laravel" />
          <span>Laravel</span>
        </a>
      </Link>
      <Link href="/app-deploy/laravel/getting-started">
        <a>
          <img src="/static/platformicons/lumen.svg" alt="lumen" />
          <span>Lumen</span>
        </a>
      </Link>
      <Link href="/one-click-apps/wordpress/install">
        <a>
          <img src="/static/platformicons/yii.svg" alt="yii" />
          <span>Yii</span>
        </a>
      </Link>

      <Link href="/app-deploy/django/getting-started">
        <a>
          <ProjectIcon platform="django" />
          <span>Django</span>
        </a>
      </Link>
      <Link href="/app-deploy/flask/getting-started">
        <a>
          <ProjectIcon platform="flask" />
          <span>Flask</span>
        </a>
      </Link>
      <Link href="/app-deploy/netcore/getting-started">
        <a>
          <ProjectIcon platform="netcore" />
          <span>.Net</span>
        </a>
      </Link>
      <Link href="/app-deploy/docker/getting-started">
        <a>
          <ProjectIcon platform="docker" />
          <span>Docker</span>
        </a>
      </Link>
      <Link href="/instructions/golang">
        <a>
          <img src="/static/platformicons/Go.svg" alt="golang" />
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
      برای مطالعه‌ی راهنمای اجرای هر دیتابیس، صفحه‌ی مربوط به آن را دنبال
      کنید.
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
          <img
            src="/static/platformicons/mariadb.svg"
            alt="mariadb"
          />
          <span>MariaDB</span>
        </a>
      </Link>
      <Link href="/databases/postgresql/install">
        <a>
          <img
            src="/static/platformicons/postgres.svg"
            alt="postgres"
          />
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
          <img
            src="/static/platformicons/mongodb.svg"
            alt="mongodb"
          />
          <span>MongoDB</span>
        </a>
      </Link>
      <Link href="/databases/redis/install">
        <a>
          <img src="/static/platformicons/redis.svg" alt="redis" />
          <span>Redis</span>
        </a>
      </Link>
      <Link href="/instructions/rabbitmq">
        <a>
          <img
            src="/static/platformicons/rabbitmq.svg"
            alt="rabbitmq"
          />
          <span>RabbitMQ</span>
        </a>
      </Link>
      <Link href="/instructions/elasticsearch">
        <a>
          <img
            src="/static/platformicons/elastic.svg"
            alt="elasticsearch"
          />
          <span>Elastic</span>
        </a>
      </Link>
      <Link href="/instructions/arangodb">
        <a>
          <img
            src="/static/platformicons/arangodb.svg"
            alt="arangodb"
          />
          <span>ArangoDB</span>
        </a>
      </Link>
    </div>

    <h3>برنامه‌های آماده‌ای که ارائه می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای نصب هر برنامه آماده، صفحه‌ی مربوط به آن را
      دنبال کنید.
    </p>
    <div className="platforms">
      <Link href="/one-click-apps/wordpress/install">
        <a>
          <img
            src="/static/platformicons/wordpress.svg"
            alt="wordpress"
          />
          <span>WordPress</span>
        </a>
      </Link>
      <Link href="/one-click-apps/others">
        <a>
          <img src="/static/platformicons/ghost.svg" alt="ghost" />
          <span>Ghost</span>
        </a>
      </Link>
      <Link href="/instructions/prestashop">
        <a>
          <img
            src="/static/platformicons/prestashop.svg"
            alt="prestashop"
          />
          <span>Prestashop</span>
        </a>
      </Link>
      <Link href="/one-click-apps/pusher/install">
        <a>
          <img src="/static/platformicons/pusher.svg" alt="pusher" />
          <span>Pusher</span>
        </a>
      </Link>
      <Link href="/one-click-apps/metabase">
        <a>
          <img
            src="/static/platformicons/metabase.svg"
            alt="metabase"
          />
          <span>Metabase</span>
        </a>
      </Link>
      <Link href="/instructions/grafana">
        <a>
          <img
            src="/static/platformicons/grafana.svg"
            alt="grafana"
          />
          <span>Grafana</span>
        </a>
      </Link>
      <Link href="/instructions/kibana">
        <a>
          <img src="/static/platformicons/kibana.svg" alt="kibana" />
          <span>Kibana</span>
        </a>
      </Link>
      <Link href="/instructions/mattermost">
        <a>
          <img
            src="/static/platformicons/mattermost.svg"
            alt="mattermost"
          />
          <span>Mattermost</span>
        </a>
      </Link>
      <Link href="/one-click-apps/rocketchat">
        <a>
          <img
            src="/static/platformicons/rocketchat.svg"
            alt="rocketchat"
          />
          <span>Rocket.Chat</span>
        </a>
      </Link>
      <Link href="/one-click-apps/gitea">
        <a>
          <img src="/static/platformicons/gitea.svg" alt="gitea" />
          <span>Gitea</span>
        </a>
      </Link>
      <Link href="/one-click-apps/nextcloud">
        <a>
          <img
            src="/static/platformicons/nextcloud.svg"
            alt="nextcloud"
          />
          <span>NextCloud</span>
        </a>
      </Link>
      <Link href="/one-click-apps/imgproxy">
        <a>
          <img
            src="/static/platformicons/imgproxy.svg"
            alt="imgproxy"
          />
          <span>Imgproxy</span>
        </a>
      </Link>
      <Link href="/one-click-apps/headless-chrome/install">
        <a>
          <img src="/static/platformicons/chrome.svg" alt="Chrome" />
          <span>Chrome</span>
        </a>
      </Link>
    </div>
  </Layout>
);

export default Index;
