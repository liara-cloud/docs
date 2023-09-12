import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Notice from "../components/Notice";
import PlatformIcon from "../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات مدیریت دامنه‌ها - لیارا</title>
    </Head>

    <h1>دامنه‌ها</h1>
    <span className="page-description">(Domain Management)</span>

    <h3>دامنه‌های غیرقابل پشتیبانی</h3>

    <ul className="mt-0">
      <li>xyz.</li>
      <li>gq.</li>
      <li>cf.</li>
      <li>ga.</li>
      <li>ml.</li>
      <li>tk.</li>
    </ul>

    <Notice variant="warning">
      به دلیل رایگان بودن دوره‌ای این نوع دامنه‌ها ، و اینکه از آن‌ها برای{" "}
      <span className="code">Abuse</span> کردن سرور‌های لیارا استفاده می‌شود ،
      لیارا از آن‌ها پشتیبانی نمی‌کند.
    </Notice>

    <h3>مدیریت دامنه‌ها</h3>

    <p>
      برای مطالعه‌ی راهنمای اتصال دامنه هر برنامه، صفحه‌ی مربوط به آن را دنبال
      کنید.
    </p>

    <div className="platforms">
      <Link href="/app-deploy/react/domain">
        <PlatformIcon platform="react" />
        <span>React</span>
      </Link>

      <Link href="/app-deploy/vue/domain">
        <PlatformIcon platform="vue" />
        <span>Vue</span>
      </Link>

      <Link href="/app-deploy/angular/domain">
        <PlatformIcon platform="angularjs" />
        <span>Angular</span>
      </Link>

      <Link href="/app-deploy/static/domain">
        <PlatformIcon platform="HTML5" />
        <span>Static</span>
      </Link>

      <Link href="/app-deploy/nodejs/domain">
        <PlatformIcon platform="nodejs" />
        <span>NodeJS</span>
      </Link>

      <Link href="/app-deploy/nextjs/domain">
        <PlatformIcon platform="next" />
        <span>NextJS</span>
      </Link>

      <Link href="/app-deploy/php/domain">
        <PlatformIcon platform="php" />
        <span>PHP</span>
      </Link>

      <Link href="/app-deploy/laravel/domain">
        <PlatformIcon platform="laravel" />
        <span>Laravel</span>
      </Link>

      <Link href="/app-deploy/django/domain">
        <PlatformIcon platform="django" />
        <span>Django</span>
      </Link>

      <Link href="/app-deploy/flask/domain">
        <PlatformIcon platform="flask" />
        <span>Flask</span>
      </Link>

      <Link href="/app-deploy/netcore/domain">
        <PlatformIcon platform="netcore" />
        <span>.Net</span>
      </Link>

      <Link href="/app-deploy/docker/domain">
        <PlatformIcon platform="docker" />
        <span>Docker</span>
      </Link>

      <Link href="/wp-plus/domain">
        <PlatformIcon platform="wordpress" />
        <span>WordPress</span>
      </Link>
    </div>
  </Layout>
);
