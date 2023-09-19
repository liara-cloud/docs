import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌ها در برنامه‌های Django - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        اتصال به <a href="#postgres">PostgreSQL</a>
      </li>
      <li>
        اتصال به <a href="#mysql">mysql</a>
      </li>
      <li>
        اتصال به <a href="#sqlite">sqlite</a>
      </li>
    </ul>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیو‌های آموزشی
       ‌را مشاهده کنید.
    </p>
    
    <br />
    <Notice variant="info">
      توجه داشته باشید برای اتصال به هر دیتابیس باید درایور‌های آن را نصب کرده
      باشید. مثلا برای MySQL و PostgreSQL نیاز است تا مقادیر زیر در فایل
      requirements.txt شما وجود داشته باشد. این یک فایل نمونه برای Django است:
      <Highlight className="config">
        {`Django == 3.0.7
psycopg2 == 2.8.5
mysqlclient == 1.4.6‍`}
      </Highlight>
    </Notice>
    <br />
    <ul>
      <li id="postgres">
        <b>PostgreSQL</b>
      </li>

      <video
      src="https://files.liara.ir/liara/django/django-postgresql.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
      ></video>

      <p>
        در ابتدا باید driver دیتابیس PostgreSQL را نصب کنید. برای این کار دستور
        <span className="code">pip install psycopg2</span> اجرا کنید‍. سپس
        تنظیمات دیتابیس‌تان در فایل <span className="code">settings.py</span> را
        به شکل زیر تغییر دهید:
      </p>
      <Highlight className="python">
        {`DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.postgresql',
       'NAME': '<database_name>',
       'USER': '<database_username>',
       'PASSWORD': '<password>',
       'HOST': '<database_hostname_or_ip>',
       'PORT': '<database_port>',
   }
}`}
      </Highlight>
      <Notice variant="info">
        هر کدام از این متغیر‌ها را باید با توجه به اطلاعات دیتابیس‌تان تغییر
        دهید.
      </Notice>
      <br />
      <li id="mysql">
        <b>MySQL</b>
      </li>
      <p>
        در ابتدا باید driver دیتابیس MySQL را نصب کنید. برای این کار دستور{" "}
        <span className="code">pip install mysqlclient</span> اجرا کنید‍. سپس
        تنظیمات دیتابیس‌تان در فایل <span className="code">settings.py</span> را
        به شکل زیر تغییر دهید:
      </p>
      <Highlight className="python">
        {`DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.mysql',
       'NAME': '<database_name>',
       'USER': '<database_username>',
       'PASSWORD': '<password>',
       'HOST': '<database_hostname_or_ip>',
       'PORT': '<database_port>',
   }
}`}
      </Highlight>
      <Notice variant="info">
        هر کدام از این متغیر‌ها را باید با توجه به اطلاعات دیتابیس‌تان تغییر
        دهید.
      </Notice>
      <br />
      <li id="sqlite">
        <b>SQLite</b>
      </li>

      <video
      src="https://files.liara.ir/liara/django/django-sqlite.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
      ></video>

      <p>
        برای استفاده از SQLite باید در نظر داشته باشید که فایل سیستم برنامه‌های
        لیارا، <a href="/app-features/file-system">Read-Only</a> است. به عبارتی،
        بعد از عملیات استقرار، امکان ذخیره‌سازی فایل‌های جدید در کنار فایل‌های
        پروژه، وجود ندارد و داده‌های پایدار را باید داخل دیسک ذخیره کنید. برای
        این کار، یک پوشه‌ی اختصاصی برای دیتابیس‌تان بسازید و فایل دیتابیس را
        داخل آن قرار بدهید و سپس آن پوشه را به عنوان دیسک تعریف کرده و دیپلوی
        کنید.{" "}
        <Link href="/storage/disks/about">اطلاعات بیشتر درباره‌ی دیسک‌ها</Link>
      </p>
      <p>
        به عنوان مثال، برای تغییر مسیر قرار‌گیری فایل دیتابیس به پوشه data
        می‌توانید تنظیمات دیتابیس‌تان را در فایل{" "}
        <span className="code">settings.py</span> به این شکل تغثییر دهید:
      </p>
      <Highlight className="python">
        {`DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'data', 'db.sqlite3'),
    }

}`}
      </Highlight>
    </ul>

    <Link href="/app-deploy/django/migrations" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
