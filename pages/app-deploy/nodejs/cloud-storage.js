import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به فضای ذخیره‌سازی ابری در برنامه‌های NodeJS - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
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
      فضای ذخیره‌سازی ابری در NodeJS باید با اجرای دستور زیر، پکیج{" "}
      <a
        href="https://www.npmjs.com/package/aws-sdk"
        target="_blank"
        rel="noopener noreferrer"
      >
        aws-sdk
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`npm i aws-sdk`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      در مرحله‌ی بعد، به‌منظور امنیت و کنترل راحت‌تر مقادیر باید مشخصات فضای
      ذخیره‌سازی ابری اعم از <Link href="/buckets/keys">کلیدها</Link> و آدرس
      اتصال به این سرویس را در بخش{" "}
      <Link href="/app-deploy/nodejs/envs">متغیرهای برنامه</Link> تنظیم کنید.
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>نمونه کد برای دریافت لیست باکت‌های ایجاد شده:</p>

    <Highlight className="javascript">
      {`const AWS = require('aws-sdk');

const config = {
    endpoint: process.env(LIARA_ENDPOINT),
    accessKeyId: process.env(LIARA_ACCESS_KEY),
    secretAccessKey: process.env(LIARA_SECRET_KEY),
    region: "default",
    s3ForcePathStyle: true,
}

const client = new AWS.S3(config);

client.listBuckets(
    (err, data) => {
        if (err) console.error(err, err.stack);
        else console.log(data);
    }
);`}
    </Highlight>

    <Link href="/app-deploy/nodejs/domain">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
