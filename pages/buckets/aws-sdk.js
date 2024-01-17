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
        <PlatformIcon platform="nodejs" />
        <span>NodeJS</span>
      </Link>

      <Link href="/app-deploy/php/object-storage">
        <PlatformIcon platform="php" />
        <span>PHP</span>
      </Link>

      <Link href="/app-deploy/laravel/object-storage">
        <PlatformIcon platform="laravel" />
        <span>Laravel</span>
      </Link>

      <Link href="/app-deploy/django/object-storage">
        <PlatformIcon platform="django" />
        <span>Django</span>
      </Link>

      <Link href="/app-deploy/flask/object-storage">
        <PlatformIcon platform="flask" />
        <span>Flask</span>
      </Link>

      <Link href="/app-deploy/nextjs/object-storage">
        <PlatformIcon platform="next" />
        <span>NextJS</span>
      </Link>
      <Link href="/app-deploy/netcore/object-storage">
        <PlatformIcon platform="netcore" />
        <span>.NET</span>
      </Link>
      <Link href="/app-deploy/golang/object-storage">
        <PlatformIcon platform="go" />
        <span>Golang</span>
      </Link>
    </div>
  </Layout>
);
