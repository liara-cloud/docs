import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های Flask - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flask" />
      <div className="page-title">
        <h1>پلتفرم Flask</h1>
        <span className="page-description">(Flask Platform)</span>
      </div>
    </div>

    <h3>اتصال به ذخیره‌سازی ابری</h3>

    <p>
      بدون شک اتصال برنامه به یک{" "}
      <Link href="/buckets/about">ذخیره‌سازی ابری</Link> مطمئن برای نگهداری و
      ارائه فایل‌های استاتیک وب‌سایت یا داده‌های آپلود شده توسط کاربران، باعث
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
      از آنجا که ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با پروتکل
      S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و فریم‌ورک‌های
      مختلفی این فضای ذخیره‌سازی را مدیریت کنید. حال برای اتصال به ذخیره‌سازی
      ابری در Flask باید با اجرای دستور زیر، پکیج{" "}
      <a
        href="https://github.com/boto/boto3"
        target="_blank"
        rel="noopener noreferrer"
      >
        boto3
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`pip install boto3`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      در مرحله‌ی بعد، به‌منظور امنیت و کنترل راحت‌تر مقادیر باید مشخصات فضای
      ذخیره‌سازی ابری اعم از <Link href="/buckets/keys">کلیدها</Link> و آدرس
      اتصال به این سرویس را در بخش{" "}
      <Link href="/app-deploy/flask/envs">متغیرهای برنامه</Link> تنظیم کنید.
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>نمونه کد برای دریافت لیست باکت‌های ایجاد شده:</p>

    <Highlight className="python">
      {`import boto3, os

s3 = boto3.resource('s3',
        endpoint_url=os.environ.get(LIARA_ENDPOINT),
        aws_access_key_id=os.environ.get(LIARA_ACCESS_KEY),
        aws_secret_access_key=os.environ.get(LIARA_SECRET_KEY)
      )

for bucket in s3.buckets.all():
    print(bucket.name)`}
    </Highlight>

    <br />

    <Link href="/app-deploy/flask/domain">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
