import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مدیریت فضای ذخیره‌سازی ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>فضای ذخیره‌سازی ابری</h1>

    <h2>مدیریت فضای ذخیره‌سازی ابری با استفاده از AWS SDK</h2>

    <p>
      از آنجا که فضای ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با
      پروتکل S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و
      فریم‌ورک‌های مختلفی این سرویس فایل را مدیریت کنید.
    </p>

    <div className="platforms">
      <Link href="/app-deploy/nodejs/cloud-storage">
        <a>
          <PlatformIcon platform="nodejs" />
          <span>NodeJS</span>
        </a>
      </Link>

      <Link href="/app-deploy/php/cloud-storage">
        <a>
          <PlatformIcon platform="php" />
          <span>PHP</span>
        </a>
      </Link>

      <Link href="/app-deploy/laravel/cloud-storage">
        <a>
          <PlatformIcon platform="laravel" />
          <span>Laravel</span>
        </a>
      </Link>

      <Link href="/instructions/python#cloud-storage">
        <a>
          <PlatformIcon platform="python" />
          <span>Python</span>
        </a>
      </Link>

      <Link href="/app-deploy/django/cloud-storage">
        <a>
          <PlatformIcon platform="django" />
          <span>Django</span>
        </a>
      </Link>

      <Link href="/app-deploy/flask/cloud-storage">
        <a>
          <PlatformIcon platform="flask" />
          <span>Flask</span>
        </a>
      </Link>

      <Link href="/instructions/golang#cloud-storage">
        <a>
          <PlatformIcon platform="go" />
          <span>Go</span>
        </a>
      </Link>
    </div>
  </Layout>
);
