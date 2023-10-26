import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های Django - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#python-version">انتخاب نسخه‌ی Python</a>
      </li>
      <li>
        <a href="#supervisord-conf">استفاده از Supervisord</a>
      </li>
      <li>
        <a href="#collectstatic">دستور collectstatic</a>
      </li>
      <li>
        <a href="#compilemessages">دستور compilemessages</a>
      </li>
      <li>
        <a href="#modify-settings">
          جلوگیری از اعمال تغییرات در فایل settings.py
        </a>
      </li>
      <li>
        <a href="#nginx-customization">تنظیمات Nginx</a>
      </li>
      <li>
        <a href="#http-security-headers">تنظیم هدرهای امنیتی HTTP</a>
      </li>
      <li>
        <a href="#max-upload-size">افزایش محدودیت حجم آپلود فایل</a>
      </li>
      <li>
        <a href="#set-timezone">تنظیم منطقه‌ی زمانی (TimeZone)</a>
      </li>
      <li>
        <a href="#cors-media-files">رفع خطای CORS فایل‌های Media</a>
      </li>
      <li>
        <a href="#gunicorn-timeout">افزایش زمان تایم‌اوت Gunicorn</a>
      </li>
      <li>
        <a href="#gunicorn-max-requests">تنظیم مقدار Gunicorn max_request</a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
      <li>
        <a href="#asgi">استقرار برنامه‌های ASGI</a>
      </li>
      <li>
        <a href="#mirror">غیرفعال کردن Mirror</a>
      </li>
      <li>
        <a href="#gdal">استفاده از GDAL</a>
      </li>
    </ul>
    <h3 id="python-version">انتخاب نسخه‌ی Python</h3>
    <p>
      به‌صورت پیش‌فرض برنامه‌ی شما روی Python 3.8 اجرا می‌شود. در صورتی که قصد
      دارید نسخه دیگری را برای اجرای برنامه‌ی‌تان استفاده کنید می‌توانید داخل
      فایل <Link href="/app-deploy/django/liarajson">liara.json</Link> بخش زیر
      را اضافه کنید. توجه داشته باشید که فایل{" "}
      <Link href="/app-deploy/django/liarajson">liara.json</Link> را باید در
      کنار فایل <span className="code">requirements.txt</span> بسازید:
    </p>
    <Highlight className="json">
      {`{
  "django": {
    "pythonVersion": "3.11"
  }
}
`}
    </Highlight>
    <p></p>
    <ul>
      <li>3.7</li>
      <li>3.8</li>
      <li>
        <b>3.9 (پیش‌فرض)</b>
      </li>
      <li>3.10</li>
      <li>3.11</li>
    </ul>
    <h3 id="supervisord-conf">استفاده از Supervisord</h3>
    <p>
      در صورتی که نیاز به Worker برای اجرای Background Job‌ها برای مثال با
      Celery را دارید، می‌توانید یک فایل به‌نام
      <span className="code">supervisor.conf</span>
      در کنار <span className="code">requirements.txt</span>
      بسازید و سپس دیپلوی کنید. در این‌صورت Supervisor اجرا شده و دستور شما را
      در Background اجرا خواهد کرد. در ادامه، یک نمونه فایل{" "}
      <span className="code">supervisor.conf</span>
      را مشاهده می‌کنید:
    </p>
    <Highlight className="ini">
      {`[program:celery-worker]
process_name=%(program_name)s_%(process_num)02d
command=celery -A proj worker -l INFO
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
startsecs=10
stopwaitsecs=600
redirect_stderr=true
stdout_logfile=/tmp/worker.log`}
    </Highlight>
    <Notice variant="info">
      برای کسب اطلاعات بیشتر در رابطه با نحوه‌ی شروع به کار Celery در
      برنامه‌‌های Django می‌توانید{" "}
      <Link href="/instructions/celery#django">
        دستورالعمل Celery در برنامه‌های Django
      </Link>{" "}
      را مطالعه کنید.
    </Notice>
    <h3 id="collectstatic">
      دستور <span className="code">collectstatic</span>
    </h3>
    <p>
      در هر استقراری که انجام می‌دهید، لیارا به‌صورت خودکار دستور
      <span className="code">python manage.py collectstatic</span>
      را اجرا می‌کند. برای جلوگیری از اجرای خودکار این دستور، باید تنظیمات زیر
      را در فایل <Link href="/app-deploy/django/liarajson">
        liara.json
      </Link>{" "}
      قرار بدهید:
    </p>
    <Highlight className="json">
      {`{
  "django": {
    "collectStatic": false
  }
}
`}
    </Highlight>
    <h3 id="compilemessages">
      دستور <span className="code">compilemessages</span>
    </h3>
    <p>
      اگر برنامه‌ی شما چند زبانه است و نیازمند اجرای دستور
      <span className="code">python manage.py compilemessages</span>
      بعد از هر بار استقرار هستید، باید تنظیمات زیر را در فایل{" "}
      <Link href="/app-deploy/django/liarajson">liara.json</Link> قرار بدهید:
    </p>
    <Highlight className="json">
      {`{
  "django": {
    "compileMessages": true
  }
}
`}
    </Highlight>
    <Notice variant="info">
      در صورتی که این پارامتر را فعال کنید، حتما لازم است که پوشه‌ی
      <span className="code">locale</span>
      در ریشه‌ی برنامه‌ی‌تان قرار داشته باشد.
    </Notice>
    <h3 id="modify-settings">
      جلوگیری از اعمال تغییرات در فایل <span className="code">settings.py</span>
    </h3>
    <p>
      لیارا به‌صورت خودکار فایل
      <span className="code">settings.py</span>
      برنامه‌ی شما را پیدا کرده و در انتهای آن تنظیماتی را اضافه می‌کند تا برای
      اجرا آماده شود. چنانچه قصد غیر فعال کردن آن را دارید، باید فایل{" "}
      <Link href="/app-deploy/django/liarajson">liara.json</Link> زیر را
      به‌ریشه‌ی برنامه‌ی‌تان اضافه کنید:
    </p>
    <Highlight className="json">
      {`{
  "django": {
    "modifySettings": false
  }
}
`}
    </Highlight>
    <Notice variant="warning">
      توجه داشته باشید که فقط و فقط این قابلیت را زمانی غیرفعال کنید که کاملا
      به‌نتایج آن آگاه باشید.
    </Notice>
    <h3 id="nginx-customization">تنظیمات Nginx</h3>
    <p>
      در برنامه‌های Django لیارا از وب‌سرور Nginx استفاده می‌شود و پیکربندی
      پیش‌فرض این وب‌سرور به‌شکل زیر است:
    </p>
    <Highlight className="nginx">
      {`client_max_body_size 100M;

location /media {
  alias /usr/src/app/media;
}

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files /dev/null @django_app;
}

location ~\\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\\.well-known {
  allow all;
}`}
    </Highlight>
    <p>
      حال شما می‌توانید یک فایل با نام{" "}
      <span className="code">liara_nginx.conf</span>
      در مسیر اصلی پروژه‌ی خود ایجاد کرده و پیکربندی وب‌سرور Nginx را متناسب با
      نیاز خود تغییر دهید. برای مثال، برای فعال‌کردن فشرده‌سازی
      <span className="code">gzip</span>
      می‌توانید به‌شکل زیر عمل کنید:
    </p>
    <Highlight className="nginx">
      {`gzip             on;
gzip_disable     "msie6";
gzip_vary        on;
gzip_proxied     any;
gzip_comp_level  6;
gzip_types       text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

client_max_body_size 100M;

location /media {
  alias /usr/src/app/media;
}

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files /dev/null @django_app;
}

location ~\\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\\.well-known {
  allow all;
}`}
    </Highlight>
    <h3 id="http-security-headers">تنظیم هدرهای امنیتی HTTP</h3>
    <p>
      برای جلوگیری از حملاتی مانند Clickjacking، XSS، SSL Striping می‌توانید
      هدرهای امنیتی را مانند مثال زیر در{" "}
      <Link href="#nginx-customization">تنظیمات Nginx</Link> برنامه‌ی خود تنظیم
      کرده و نحوه‌ی برقراری ارتباط با سایت را برای مرورگرها تعیین کنید:
    </p>
    <Highlight className="nginx">
      {`add_header X-Frame-Options DENY always;
add_header X-Content-Type-Options: nosniff;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";

client_max_body_size 100M;

location /media {
  alias /usr/src/app/media;
}

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files /dev/null @django_app;
}

location ~\\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\\.well-known {
  allow all;
}`}
    </Highlight>
    <Notice variant="warning">
      توجه داشته باشید که قبل از فعال‌سازی HSTS با تنظیم هدر{" "}
      <span className="code">Strict-Transport-Security</span> باید SSL را فعال
      کرده باشید. <Link href="/domains/ssl">تهیه‌ی SSL رایگان</Link>
    </Notice>
    <h3 id="max-upload-size">افزایش محدودیت حجم آپلود فایل</h3>
    <p>
      همان‌طور که در بخش قبلی گفته شد، پلتفرم Django در لیارا با استفاده از
      وب‌سرور Nginx مستقر و اجرا می‌گردد. در این وب‌سرور، به‌صورت پیش‌فرض حداکثر
      حجم مجاز آپلود فایل <strong>1MB</strong> در نظر گرفته شده‌است. شما
      می‌توانید یک فایل با نام
      <span className="code">liara_nginx.conf</span>
      در کنار
      <span className="code">requirements.txt</span>
      بسازید و محتویات زیر را داخل آن قرار دهید و سپس دستور
      <span className="code">liara deploy</span>
      را وارد کنید:
    </p>
    <Highlight className="nginx">
      {`client_max_body_size 250M;

location /media {
  alias /usr/src/app/media;
}

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files /dev/null @django_app;
}

location ~\\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\\.well-known {
  allow all;
}`}
    </Highlight>
    <p>
      با قرار دادن فایل بالا در ریشه‌ی برنامه‌ی‌تان حداکثر حجم مجاز آپلود فایل
      به <strong>250MB</strong> افزایش می‌یابد. شما می‌توانید مقدار دلخواه
      خودتان را تنظیم کنید.
    </p>

    <h3 id="set-timezone">تنظیم منطقه‌ی زمانی (TimeZone)</h3>
    <p>
      به صورت پیش‌فرض، منطقه‌ی زمانی بر روی Asia/Tehran تنظیم شده است. برای
      تغییر مقدار پیش‌فرض، می‌توانید از پارامتر
      <span className="code">timezone</span>
      در فایل <Link href="/app-deploy/django/liarajson">liara.json</Link>{" "}
      استفاده کنید. برای نمونه:
    </p>
    <Highlight className="json">
      {`{
  "platform": "django",
  "app": "django-starter",
  "django": {
    "timezone": "America/Los_Angeles"
  }
}`}
    </Highlight>

    <h3 id="cors-media-files">رفع خطای CORS فایل‌های Media</h3>
    <p>
      مسئولیت ارائه فایل‌های رسانه (Media) به کاربران در پلتفرم Django برعهده‌ی
      وب‌سرور (Nginx) است، حال اگر کاربران شما برای دسترسی به فایل‌های رسانه با
      خطای CORS مواجه شدند باید <Link href="#nginx">تنظیمات Nginx</Link> پروژه‌ی
      خود را شخصی‌سازی کنید. برای رفع این خطا، یک فایل با نام{" "}
      <span className="code">liara_nginx.conf</span> در مسیر اصلی پروژه‌ی خود
      ایجاد کرده و قطعه‌کد زیر را در این فایل قرار دهید:
    </p>
    <Highlight className="nginx">
      {`client_max_body_size 100M;

location /media {
  add_header Access-Control-Allow-Origin *;
  alias /usr/src/app/media;
}

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files /dev/null @django_app;
}

location ~\\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\\.well-known {
  allow all;
}`}
    </Highlight>
    <p>
      سپس برای اعمال این تغییرات، دستور{" "}
      <span className="code">liara deploy</span> را در مسیر اصلی پروژه‌ی خود
      اجرا کنید.
    </p>
    <p>
      با اعمال این پیکربندی، فایل‌های قرار گرفته در پوشه‌ی{" "}
      <span className="code">media</span>
      با Header
      <span className="code">Access-Control-Allow-Origin</span>و مقدار
      <span className="code">*</span>
      Serve می‌شوند. همچنین شما می‌توانید مقدار دلخواه خودتان را تنظیم کنید.
    </p>
    <h3 id="gunicorn-timeout">افزایش زمان تایم‌اوت Gunicorn</h3>
    <p>
      درصورتی که در برنامه‌ی Django خود با خطای{" "}
      <span className="code">[CRITICAL] WORKER TIMEOUT</span> مواجه شده‌اید و به
      WORKER TIMEOUT بیشتر از ۳۰ ثانیه نیاز دارید می‌توانید وارد تنظیمات
      برنامه‌ی Django خود شده و در بخش متغیرها، متغیر{" "}
      <span className="code">GUNICORN_TIMEOUT=60</span> را به‌شکل زیر اضافه کرده
      و درنهایت با کلیک بر روی دکمه ثبت تغییرات، WORKER TIMEOUT برنامه را افزایش
      دهید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/django/add-gunicorn-timeout-variable-to-django-app.gif"></ZoomableImage>
    <Notice variant="info">
      توجه داشته باشید که متغیر <span className="code">GUNICORN_TIEMOUT</span>{" "}
      براساس ثانیه است.
    </Notice>

    <h3 id="gunicorn-max-requests">تنظیم مقدار Gunicorn max_request</h3>

    <p>
      یکی از راه‌های جلوگیری از Memory leak و مصرف بالای RAM در Gunicorn، تنظیم
      پارامتر max_requests است. با تنظیم این پارامتر، با رسیدن تعداد درخواست‌های
      هر یک از Threadهای Gunicorn به این عدد، آن Thread ری‌استارت شده و حافظه‌ی
      RAM آن خالی می‌شود. در صورتی که در برنا‌مه‌ی Django خود نیاز به ری‌استارت{" "}
      <span className="code">WORKER THREAD</span> بعد از تعداد مشخصی Request
      دارید، می‌تونید وارد تنظیمات برنامه‌ی Django شده و در بخش متغیر‌ها، متغیر{" "}
      <span className="code">GUNICORN_MAX_REQUESTS=1000</span> را اضافه کرده و
      در نهایت روی دکمه ثبت تغییرات کلیک کنید. همچنین توجه داشته باشید که مقدار
      پیش‌فرض برابر با <span className="code">GUNICORN_MAX_REQUESTS=10000</span>{" "}
      است.
    </p>

    <h3 id="cors">رفع خطای CORS</h3>
    <p>
      درصورتی که Headerهای مربوط به CORS را با استفاده از پکیج{" "}
      <a
        href="https://pypi.org/project/django-cors-headers/"
        target="_blank"
        rel="noopener"
      >
        django-cors-headers
      </a>
      ، در Middleware برنامه‌ی خود تنظیم کرده‌اید باید
      <span className="code">CORS_ALLOWED_ORIGINS</span> و{" "}
      <span className="code">CORS_ALLOW_METHODS</span> را نیز در فایل{" "}
      <span className="code">settings.py</span> تعریف کرده باشید:
    </p>
    <Highlight className="python">{`CORS_ALLOWED_ORIGINS = [
    "https://example.com",
    "https://www.example.com",
]

CORS_ALLOW_METHODS = [
  "DELETE",
  "GET",
  "OPTIONS",
  "PATCH",
  "POST",
  "PUT",
]`}</Highlight>
    <h3 id="asgi">استقرار برنامه‌های ASGI</h3>
    <p>
      برای استقرار برنامه‌های ASGI در پلتفرم Django لیارا تنها باید{" "}
      <span className="code">WSGI_APPLICATION</span> را از فایل{" "}
      <span className="code">settings.py</span> برنامه حذف کنید و مسیر فایل
      پیکربندی برنامه‌ی ASGI خود را در متغیر{" "}
      <span className="code">ASGI_APPLICATION</span> مقداردهی کنید.
    </p>
    <h3 id="mirror">غیرفعال کردن Mirror</h3>
    <p>
      Mirror اختصاصی لیارا به‌منظور دانلود سریع‌تر پکیج‌ها در پلتفرم Django
      به‌صورت پیش‌فرض فعال است اما شما می‌توانید با قرار دادن قطعه‌کد زیر در
      فایل <Link href="/app-deploy/django/liarajson">liara.json</Link>، این
      قابلیت را غیر فعال کنید:
    </p>
    <Highlight className="json">
      {`{
  "django": {
    "mirror": false
  }
}`}
    </Highlight>

    <h3 id="gdal">استفاده از GDAL</h3>
    <p>
      برای استفاده از GDAL در پلتفرم Django یک فایل به نام{" "}
      <Link href="/app-deploy/django/liarajson">liara.json</Link> ایجاد کرده و
      محتویات زیر را به آن اضافه کنید:
    </p>
    <Highlight className="json">
      {`{
    "django": {
        "geospatial": true
    }
}`}
    </Highlight>
    <Notice variant="info">
      توجه داشته باشید که نسخه پکیج GDAL با نسخه Python باید سازگار باشند. در
      پلتفرم Django نسخه پیش‌فرض Python برابر با 3.9 و نسخه متناسب پکیج GDAL
      برابر با 3.6.0 است. در صورتی که نسخه Python را تغییر دهید، پکیج GDAL را
      نیز باید متناسب با نسخه Python انتخاب کنید.
    </Notice>

    <h3 id="mirror">غیرفعال کردن Mirror</h3>
    <p>
      Mirror اختصاصی لیارا به‌منظور دانلود سریع‌تر پکیج‌ها در پلتفرم Django
      به‌صورت پیش‌فرض فعال است اما شما می‌توانید با قرار دادن قطعه‌کد زیر در
      فایل <Link href="/app-deploy/django/liarajson">liara.json</Link>، این
      قابلیت را غیر فعال کنید:
    </p>
    <Highlight className="json">
      {`{
  "django": {
    "mirror": false
  }
}`}
    </Highlight>
  </Layout>
);
