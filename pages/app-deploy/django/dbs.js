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
        <a href="#postgres">اتصال به PostgreSQL</a>
      </li>
      <li>
        <a href="#mysql">اتصال به MySQL</a>
      </li>
      <li>
        <a href="#sqlite">اتصال به SQLite</a>
      </li>
      <li>
        <a href="#mssql">اتصال به MSSQL</a>
      </li>
      <li>
        <a href="#connection-pooling">استفاده از Connection Pooling</a>
      </li>
    </ul>

    <br />
    <Notice variant="info">
      توجه داشته باشید برای اتصال به هر دیتابیس باید درایور‌های آن را نصب کرده
      باشید. مثلاً برای MySQL و PostgreSQL نیاز است تا مقادیر زیر در فایل
      requirements.txt شما وجود داشته باشد:
      <Highlight className="shell">
        {`Django == 3.0.7
psycopg == 3.1.18
psycopg-binary == 3.1.18
mysqlclient == 1.4.6‍`}
      </Highlight>
      برای ایجاد فایل requirements.txt کافیست تا در محیط مجازی پروژه Django خود،
      دستور <span className="code">pip freeze &gt; requirements.txt </span> را
      اجرا کنید.
    </Notice>
    <br />

    <h4 id="postgres">PostgreSQL</h4>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیو‌ی آموزشی
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/django/django-postgresql.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در ابتدا باید driver دیتابیس PostgreSQL را نصب کنید. برای این کار دستور
      <span className="code">pip install "psycopg[binary]"</span> را اجرا کنید‍.
      سپس تنظیمات دیتابیس‌تان در فایل <span className="code">settings.py</span>{" "}
      را به شکل زیر تغییر دهید:
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
      هر کدام از این متغیر‌ها را باید با توجه به اطلاعات دیتابیس‌تان تغییر دهید.
    </Notice>

    <h4 id="mysql">MySQL</h4>
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
      هر کدام از این متغیر‌ها را باید با توجه به اطلاعات دیتابیس‌تان تغییر دهید.
    </Notice>

    <h4 id="sqlite">SQLite</h4>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیو‌ی آموزشی
      ‌را مشاهده کنید.
    </p>
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
      پروژه، وجود ندارد و داده‌های پایدار را باید داخل دیسک ذخیره کنید. برای این
      کار، یک پوشه‌ی اختصاصی برای دیتابیس‌تان بسازید و فایل دیتابیس را داخل آن
      قرار بدهید و سپس آن پوشه را به عنوان دیسک تعریف کرده و دیپلوی کنید.{" "}
      <Link href="/storage/disks/about">اطلاعات بیشتر درباره‌ی دیسک‌ها</Link>
    </p>
    <p>
      به عنوان مثال، برای تغییر مسیر قرار‌گیری فایل دیتابیس به پوشه data
      می‌توانید تنظیمات دیتابیس‌تان را در فایل{" "}
      <span className="code">settings.py</span> به این شکل تغییر دهید:
    </p>
    <Highlight className="python">
      {`DATABASES = {
  'default': {
      'ENGINE': 'django.db.backends.sqlite3',
      'NAME': os.path.join(BASE_DIR, 'data', 'db.sqlite3'),
  }

}`}
    </Highlight>

    <h4 id="mssql">MSSQL</h4>
    <p>
      برای اتصال به دیتابیس SQL Server کافیست تا مقدار{" "}
      <span className="code">DATABASES</span> موجود در فایل{" "}
      <span className="code">settings.py</span>
      خود را به شکل زیر، تغییر دهید:
    </p>
    <Highlight className="python">
      {`DATABASES = {
    "default": {
        "ENGINE": "mssql",
        "NAME": "<database_name>",
        "USER": "<database_username>",
        "PASSWORD": "<database_password>",
        "HOST": "<database_host>",
        "PORT": "<database_port>",
        "OPTIONS": {
            "driver": "ODBC Driver 18 for SQL Server",
            "extra_params": "Encrypt=no;",
        },
    },
}`}
    </Highlight>
    <Notice variant="info">
      هر کدام از متغیر‌های فوق را باید با توجه به اطلاعات دیتابیس‌تان تغییر
      دهید.
    </Notice>
    <Notice variant="warning">
      توجه داشته باشید که باید حتماً نسخه{" "}
      <span className="code">ODBC Driver</span> بر روی 18 تنظیم باشد.
    </Notice>
    <p>
      در انتها، بایستی درون فایل <span className="code">requirements.txt</span>،
      قطعه کد زیر را اضافه کنید تا برنامه، به درستی در لیارا، مستقر شود:
    </p>
    <Highlight className="text">
      {`mssql-django==1.4.2
pyodbc==5.1.0`}
    </Highlight>

    <h4 id="connection-pooling">استفاده از Connection Pooling</h4>
    <p>
      شما می‌توانید در برنامه Django خود، قابلیت Connection Pooling را نیز فعال
      کنید. در Connection Pooling برنامه به جای ایجاد یک ارتباط (Connection)
      جدید برای انجام عملیات دیتابیسی و بستن آن پس از پایان عملیات، از
      ارتباط‌هایی که قبلاً ایجاد شده‌اند، استفاده می‌کند.
    </p>
    <p>
      استفاده از Connection Pooling کارایی برنامه را افزایش می‌دهد و تاثیر بسیار
      زیادی در بهینه‌سازی و کاهش منابع مورد استفاده برنامه و دیتابیس دارد.
      بنابراین توصیه می‌شود که حتماً در حالت Production، از این قابلیت، استفاده
      کنید. در ادامه، به نحوه فعال‌سازی این قابلیت با توجه به نوع هر دیتابیس،
      خواهیم پرداخت:
    </p>

    <ul className="mt-0">
      <li>
        <a href="#postgres-cp">
          قابلیت Connection Pooling در دیتابیس PostgreSQL
        </a>
      </li>
      <li>
        <a href="#mysql-cp">قابلیت Connection Pooling در دیتابیس MySQL</a>
      </li>
      <li>
        <a href="#mssql-cp">قابلیت Connection Pooling در دیتابیس MSSQL</a>
      </li>
    </ul>

    <h5 id="postgres-cp">قابلیت Connection Pooling در دیتابیس PostgreSQL</h5>
    <p>
      برای فعال‌سازی این قابلیت در دیتابیس Postgres کافیست تا ماژول زیر را در
      پروژه خود نصب کنید:
    </p>

    <Highlight className="shell">
      {`pip install django-db-connection-pool[postgresql]`}
    </Highlight>

    <p>
      سپس، بایستی فیلد <span className="code">ENGINE</span> موجود در{" "}
      <span className="code">DATABASES</span>
      در فایل <span className="code">settings.py</span> را به شکل زیر تغییر
      دهید:
    </p>
    <Highlight className="python">
      {`DATABASES = {
    'default': {
        'ENGINE': 'dj_db_conn_pool.backends.postgresql'
    }
}`}
    </Highlight>
    <p>
      البته، اگر که قصد تغییر فایل <span className="code">settings.py</span> را
      ندارید، می‌توانید با استفاده از ماژول{" "}
      <span className="code">psycopg_pool</span>، به صورت مستقیم این کار را
      انجام دهید؛ برای نصب این ماژول، باید دستور زیر را اجرا کنید:
    </p>

    <Highlight className="shell">{`pip install "psycopg[pool]"`}</Highlight>

    <p>
      پس از آن، می‌توانید به شکل زیر، از Connection Pooling در برنامه خود برای
      کار با دیتابیس، استفاده کنید (به عنوان مثال، قطعه کد زیر در فایل views.py
      به کار رفته است):
    </p>
    <Highlight className="python">
      {`from psycopg_pool import ConnectionPool
from django.shortcuts import render
import random, string, os

def index(request):
with ConnectionPool(conninfo=os.getenv('DB_URI')) as pool:
pool.wait()
with pool.connection() as conn:
for _ in range(10):
data = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
conn.execute("INSERT INTO myapp_testmodel (data) VALUES (%s)", [data])

with conn.cursor() as cursor:
cursor.execute("SELECT data FROM myapp_testmodel")
data = [row[0] for row in cursor.fetchall()]

return render(request, 'myapp/index.html', {'data': data})`}
    </Highlight>

    <Notice variant="info">
      در نظر داشته باشید که مقدار آرگومان conninfo را باید برابر با URI دیتابیس
      Postgres خود قرار دهید. که در قطعه کد بالا، از متغیرهای محیطی برنامه،
      فراخوانی شده است.
    </Notice>

    <h5 id="mysql-cp">قابلیت Connection Pooling در دیتابیس MySQL</h5>
    <p>
      برای فعال‌سازی این ویژگی در دیتابیس MySQL، باید در ابتدا ماژول مربوطه را
      با استفاده از دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">
      {`pip install django-db-connection-pool[mysql]`}
    </Highlight>
    <p>
      سپس، بایستی فیلد <span className="code">ENGINE</span> موجود در{" "}
      <span className="code">DATABASES</span>
      در فایل <span className="code">settings.py</span> را به شکل زیر تغییر
      دهید:
    </p>

    <Highlight className="python">
      {`DATABASES = {
    'default': {
        'ENGINE': 'dj_db_conn_pool.backends.mysql'
    }
}`}
    </Highlight>
    <p>
      پس از انجام کار فوق، قابلیت Connection Pooling در دیتابیس برنامه شما، فعال
      می‌شود.
    </p>

    <h5 id="mssql-cp">قابلیت Connection Pooling در دیتابیس MSSQL</h5>
    <p>
      برای فعال‌سازی این قابلیت، کافیست تا قطعه کد زیر را به فایل{" "}
      <span className="code">settings.py</span> اضافه کنید:
    </p>
    <Highlight className="python">
      {`DATABASE_CONNECTION_POOLING = True`}
    </Highlight>

    <br />
    <Link href="/app-deploy/django/migrations" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
