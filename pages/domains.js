import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import PlatformIcon from "../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات مدیریت دامنه‌ها - سرویس ابری لیارا</title>
    </Head>

    <h1>دامنه‌ها</h1>
    <span className="page-description">(Domain Management)</span>

    <h3>مدیریت دامنه‌ها</h3>

    <p>
      برای مطالعه‌ی راهنمای اتصال دامنه هر برنامه، صفحه‌ی مربوط به آن را دنبال
      کنید.
    </p>

    <div className="platforms">
      <Link href="/app-deploy/react/domain">
        <a>
          <PlatformIcon platform="react" />
          <span>React</span>
        </a>
      </Link>

      <Link href="/app-deploy/vue/domain">
        <a>
          <PlatformIcon platform="vue" />
          <span>Vue</span>
        </a>
      </Link>

      <Link href="/app-deploy/angular/domain">
        <a>
          <PlatformIcon platform="angularjs" />
          <span>Angular</span>
        </a>
      </Link>

      <Link href="/app-deploy/static/domain">
        <a>
          <PlatformIcon platform="HTML5" />
          <span>Static</span>
        </a>
      </Link>

      <Link href="/app-deploy/nodejs/domain">
        <a>
          <PlatformIcon platform="nodejs" />
          <span>NodeJS</span>
        </a>
      </Link>

      <Link href="/app-deploy/php/domain">
        <a>
          <PlatformIcon platform="php" />
          <span>PHP</span>
        </a>
      </Link>

      <Link href="/app-deploy/laravel/domain">
        <a>
          <PlatformIcon platform="laravel" />
          <span>Laravel</span>
        </a>
      </Link>

      <Link href="/app-deploy/django/domain">
        <a>
          <PlatformIcon platform="django" />
          <span>Django</span>
        </a>
      </Link>

      <Link href="/app-deploy/flask/domain">
        <a>
          <PlatformIcon platform="flask" />
          <span>Flask</span>
        </a>
      </Link>

      <Link href="/app-deploy/netcore/domain">
        <a>
          <PlatformIcon platform="netcore" />
          <span>.Net</span>
        </a>
      </Link>

      <Link href="/app-deploy/docker/domain">
        <a>
          <PlatformIcon platform="docker" />
          <span>Docker</span>
        </a>
      </Link>
    </div>
  </Layout>
);
