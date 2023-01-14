import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مدیریت ذخیره‌سازی ابری - لیارا</title>
    </Head>

    <h1>ذخیره‌سازی ابری</h1>

    <h2>مدیریت ذخیره‌سازی ابری با استفاده از AWS SDK</h2>

    <p>
      از آنجا که ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با پروتکل
      S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و فریم‌ورک‌های
      مختلفی این فضای ذخیره‌سازی را مدیریت کنید.
    </p>

    <div className="platforms">
      <Link href="/app-deploy/nodejs/object-storage">
        <a>
          <PlatformIcon platform="nodejs" />
          <span>NodeJS</span>
        </a>
      </Link>

      <Link href="/app-deploy/php/object-storage">
        <a>
          <PlatformIcon platform="php" />
          <span>PHP</span>
        </a>
      </Link>

      <Link href="/app-deploy/laravel/object-storage">
        <a>
          <PlatformIcon platform="laravel" />
          <span>Laravel</span>
        </a>
      </Link>

      <Link href="/app-deploy/django/object-storage">
        <a>
          <PlatformIcon platform="django" />
          <span>Django</span>
        </a>
      </Link>

      <Link href="/app-deploy/flask/object-storage">
        <a>
          <PlatformIcon platform="flask" />
          <span>Flask</span>
        </a>
      </Link>

      <Link href="/app-deploy/netcore/object-storage">
        <a>
          <PlatformIcon platform="netcore" />
          <span>.NET</span>
        </a>
      </Link>
    </div>
  </Layout>
);
