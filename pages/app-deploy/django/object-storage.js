import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های Django - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
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
        <a href="#filesystem-config">پیکربندی FileSystem</a>
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
      ابری در Django باید با اجرای دستورهای زیر، پکیج{" "}
      <a
        href="https://github.com/boto/boto3"
        target="_blank"
        rel="noopener noreferrer"
      >
        boto3
      </a>{" "}
      و{" "}
      <a
        href="https://django-storages.readthedocs.io/en/latest/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Django storages
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`pip install boto3
pip install django-storages`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      در مرحله‌ی بعد، به‌منظور امنیت و کنترل راحت‌تر مقادیر باید مشخصات فضای
      ذخیره‌سازی ابری اعم از <Link href="/buckets/keys">کلیدها</Link> و آدرس
      اتصال به این سرویس را در بخش{" "}
      <Link href="/app-deploy/django/envs">متغیرهای برنامه</Link> تنظیم کنید.
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <h3 id="filesystem-config">پیکربندی فایل‌سیستم</h3>

    <p>
      در مرحله‌ی آخر باید فایل <span className="code">settings.py</span>{" "}
      برنامه‌تان را به‌شکل زیر ویرایش کنید:
    </p>
    <Highlight className="python">
      {`INSTALLED_APPS = [
  ...,
  'storages',
]

AWS_S3_ENDPOINT_URL = "https://" + os.environ.get(LIARA_ENDPOINT)
AWS_STORAGE_BUCKET_NAME = os.environ.get(LIARA_BUCKET_NAME)
AWS_ACCESS_KEY_ID = os.environ.get(LIARA_ACCESS_KEY)
AWS_SECRET_ACCESS_KEY = os.environ.get(LIARA_SECRET_KEY)
AWS_S3_OBJECT_PARAMETERS = {
  'CacheControl': 'max-age=86400',
}
AWS_LOCATION = 'static'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'`}
    </Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>
      می‌توان گفت که تغییر خاصی در نحوه‌ی استفاده‌ی شما به‌وجود نخواهد آمد. برای
      مثال شما می‌توانید با استفاده از قطعه کد زیر، محتوای{" "}
      <span className="code">Contents</span> را در فایلی با نام{" "}
      <span className="code">example.txt</span> قرار داده و آن را در فضای
      ذخیره‌سازی ابری ذخیره کنید:
    </p>

    <Highlight className="python">{`from django.core.files.base import ContentFile
from django.core.files.storage import default_storage

path = default_storage.save('/example.txt', ContentFile(b'Contents'))`}</Highlight>

    <br />

    <Link href="/app-deploy/django/domain">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
