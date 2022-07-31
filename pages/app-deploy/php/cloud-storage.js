import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به فضای ذخیره‌سازی ابری در برنامه‌های PHP - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="php" />
      <div className="page-title">
        <h1>برنامه‌های PHP</h1>
        <span className="page-description">(PHP Apps)</span>
      </div>
    </div>

    <h3>اتصال به فضای ذخیره‌سازی ابری</h3>

    <p>
      بدون شک اتصال برنامه به یک{" "}
      <Link href="/buckets/about">فضای ذخیره‌سازی ابری</Link> مطمئن برای نگهداری
      و ارائه فایل‌های استاتیک وب‌سایت یا داده‌های آپلود شده توسط کاربران، باعث
      اطمینان خاطر صاحبان کسب و کار و بهبود عملکرد برنامه‌ می‌شود.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#install-aws-sdk">نصب AWS SDK</a>
      </li>
      <li>
        <a href="#set-keys">تنظیم کلیدها</a>
      </li>
      <li>
        <a href="#how-to-use">نحوه‌ی استفاده</a>
      </li>
    </ul>

    <h3 id="install-aws-sdk">نصب AWS SDK</h3>
    <p>
      از آنجا که فضای ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با
      پروتکل S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و
      فریم‌ورک‌های مختلفی این فضای ذخیره‌سازی را مدیریت کنید. حال برای اتصال به
      فضای ذخیره‌سازی ابری در PHP باید با اجرای دستور زیر، پکیج{" "}
      <a
        href="https://packagist.org/packages/aws/aws-sdk-php"
        target="_blank"
        rel="noopener noreferrer"
      >
        aws-sdk
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`composer require aws/aws-sdk-php`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      در مرحله‌ی بعد، به‌منظور امنیت و کنترل راحت‌تر مقادیر باید مشخصات فضای
      ذخیره‌سازی ابری اعم از <Link href="/buckets/keys">کلیدها</Link> و آدرس
      اتصال به این سرویس را در بخش{" "}
      <Link href="/app-deploy/php/envs">متغیرهای برنامه</Link> تنظیم کنید.
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>نمونه کد برای دریافت لیست باکت‌های ایجاد شده:</p>

    <Highlight className="php">
      {`<?php
require 'vendor/autoload.php';

use AwsS3S3Client;

$client = new S3Client([
    'region' => 'us-east-1',
    'version' => '2006-03-01',
    'endpoint' => LIARA_ENDPOINT,
    'credentials' => [
        'key' => LIARA_ACCESS_KEY
        'secret' => LIARA_SECRET_KEY
    ],
    'use_path_style_endpoint' => true
]);

$listResponse = $client->listBuckets();

print_r($listResponse);`}
    </Highlight>

    <br />

    <Link href="/app-deploy/php/domain">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
