import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های Django - لیارا
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
        <a href="#get-keys">دریافت کلیدها</a>
      </li>
      <li>
        <a href="#set-env">تنظیم متغیرها</a>
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

    <h3 id="get-keys">دریافت کلیدها</h3>
    <p>
      اگر باکت شما خصوصی باشد، برای دسترسی به باکت، نیاز به کلید دارید. برای
      ساخت کلید، به صفحه ذخیره‌سازی ابری رفته و طبق عکس‌ها کلیدخود را بسازید.
    </p>
    <p>به قسمت کلیدها رفته:</p>
    <ZoomableImage src="/static/flask/get_key1.png" />
    <p>یک کلید جدید بسازید.</p>
    <ZoomableImage src="/static/flask/get_key2.png" />
    <p>
      کلیدهای ساخته‌شده را ذخیره کنید. توجه داشته‌باشید که SECRET_KEY تنها یک
      بار نمایش داده می‌شود و پس از آن باید کلید را درجایی مطمئن ذخیره کنید.
    </p>
    <h3 id="set-env">تنظیم متغیرها</h3>

    <p>
      در مرحله‌ی آخر باید فایل <span className="code">settings.py</span>{" "}
      برنامه‌تان را به‌ شکل زیر ویرایش کنید:
    </p>
    <Highlight className="python">
      {`INSTALLED_APPS = [ 
  ...,
  'storages',
]

# Object storage

STORAGES = {"default": {"BACKEND": "storages.backends.s3boto3.S3Boto3Storage"}}
AWS_S3_ENDPOINT_URL = os.getenv("LIARA_ENDPOINT")
AWS_S3_ACCESS_KEY_ID = os.getenv("LIARA_ACCESS_KEY")
AWS_S3_SECRET_ACCESS_KEY = os.getenv("LIARA_SECRET_KEY")
AWS_STORAGE_BUCKET_NAME = os.getenv("LIARA_BUCKET_NAME")`}
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

    <p>برای استفاده از object storage در مدل‌ها، به شکل زیر می‌توان عمل کرد.</p>
    <Highlight className="python">{`from django.db import models


class Storage(models.Model):
    my_file = models.FileField()
`}</Highlight>
    <p>
      برای ذخیره فایل در object storage می‌توانید مانند قبل عمل کرده، و فایل های
      آپلود شده به طور خودکار در ذخیره‌سازی ابری لیارا قرار می‌گیرند. همچنین
      می‌توانید به طور مستقیم از کتابخانه boto3 نیز استفاده کنید. نحوه استفاده
      از این کتابخانه در مستندات flask آورده‌ شده‌است؛ می‌توانید به این{" "}
      <a href="/app-deploy/flask/object-storage">لینک</a> مراجعه کنید.
    </p>
    <br />

    <Link href="/app-deploy/django/domain" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
