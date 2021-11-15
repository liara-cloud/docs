import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های Django - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/django.svg"
        alt="django"
      />
      <div className="page-title">
        <h1>برنامه‌های Django</h1>
        <span className="page-description">(Django Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#python-version">انتخاب نسخه‌ی Python</a></li>
      <li><a href="#supervisord-conf">استفاده از Supervisord</a></li>
      <li><a href="#collectstatic">دستور collectstatic</a></li>
      <li><a href="#compilemessages">دستور compilemessages</a></li>
      <li><a href="#modify-settings">جلوگیری از اعمال تغییرات در فایل settings.py</a></li>
      <li><a href="#nginx-customization">تنظیمات Nginx</a></li>
      <li><a href="#max-upload-size">افزایش محدودیت حجم آپلود فایل</a></li>
      <li><a href="#gunicorn-timeout">افزایش زمان تایم‌اوت Gunicorn</a></li>
    </ul>

    <h3 id="python-version">انتخاب نسخه‌ی Python</h3>
    <p>
      به‌صورت پیش‌فرض برنامه‌ی شما روی Python 3.8 اجرا می‌شود.
      در صورتی که قصد دارید نسخه دیگری را برای اجرای برنامه‌ی‌تان استفاده کنید
      می‌توانید داخل فایل <span className="code">liara.json</span> بخش زیر را
      اضافه کنید. توجه داشته باشید که فایل <span className="code">liara.json</span>
      را باید در کنار فایل <span className="code">requirements.txt</span> بسازید:
    </p>
    <Highlight className="json">
      {`{
  "django": {
    "pythonVersion": "3.7"
  }
}
`}
    </Highlight>
    <p>

    </p>
    <ul>
      <li>3.7</li>
      <li>3.8</li>
      <li>3.9</li>
    </ul>

    <h3 id="supervisord-conf">استفاده از Supervisord</h3>
    <p>
      در صورتی که نیاز به Worker برای اجرای Background Job‌ها
      برای مثال با Celery را دارید، می‌تونید یک فایل به‌نام
      <span className="code">supervisor.conf</span>
      در کنار <span className="code">requirements.txt</span>
      بسازید و سپس دیپلوی کنید. در این‌صورت Supervisor
      اجرا شده و دستور شما را در Background اجرا خواهد کرد.
      در ادامه، یک نمونه فایل <span className="code">supervisor.conf</span>
      را مشاهده می‌کنید:
    </p>
    <Highlight className="plaintext">
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
            برای کسب اطلاعات بیشتر در رابطه با نحوه‌ی شروع به کار Celery در برنامه‌‌های
            Django می‌توانید{' '}
            <Link href="/instructions/celery#django">دستورالعمل Celery در برنامه‌های Django</Link> را مطالعه
            کنید.
        </Notice>

    <h3 id="collectstatic">دستور <span className="code">collectstatic</span></h3>
    <p>
      در هر استقراری که انجام می‌دهید، لیارا به‌صورت خودکار دستور
      <span className="code">python manage.py collectstatic</span>
      را اجرا می‌کند. برای جلوگیری از اجرای خودکار این دستور، باید تنظیمات زیر را در فایل
      {' '}
      <Link href="/app-deploy/django/liarajson">
        liara.json
      </Link>
      {' '}
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

    <h3 id="compilemessages">دستور <span className="code">compilemessages</span></h3>
    <p>
      اگر برنامه‌ی شما چند زبانه است و نیازمند اجرای دستور
      <span className="code">python manage.py compilemessages</span>
      بعد از هر بار استقرار هستید،
      باید تنظیمات زیر را در فایل
      {' '}
      <Link href="/app-deploy/django/liarajson">
        liara.json
      </Link>
      {' '}
      قرار بدهید:
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

    <h3 id="modify-settings">جلوگیری از اعمال تغییرات در فایل <span className="code">settings.py</span></h3>
    <p>
      لیارا به‌صورت خودکار فایل
      <span className="code">settings.py</span>
      برنامه‌ی شما را پیدا کرده و در انتهای آن تنظیماتی را اضافه می‌کند تا برای اجرا آماده شود.
      چنانچه قصد غیر فعال کردن آن را دارید، باید فایل
      {' '}
      <Link href="/app-deploy/django/liarajson">
        liara.json
      </Link>
      {' '}
      زیر را به‌ریشه‌ی برنامه‌ی‌تان اضافه کنید:
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
      توجه داشته باشید که فقط و فقط این قابلیت را زمانی غیرفعال کنید که
      کاملا به‌نتایج آن آگاه باشید.
    </Notice>

    <h3 id="nginx-customization">تنظیمات Nginx</h3>
    <p>
      استقرار برنامه‌های Django، توسط وب‌سرور
      Nginx
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را
      مطابق با نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی
      برنامه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای برنامه‌های Django، این فایل به شکل زیر
      تعریف شده‌است:
    </p>
    <pre>
      <code>
        {`location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files $uri @django_app;
}

location ~\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}`}
      </code>
    </pre>
    <p>
      که شما می‌توانید آن را به شیوه‌ی خودتان گسترش دهید. برای مثال، برای
      فعال‌کردن فشرده‌سازی
      <span className="code">gzip</span>
      می‌توانید به این صورت عمل کنید:
    </p>
    <pre>
      <code>
        {`gzip             on;
gzip_disable     "msie6";
gzip_vary        on;
gzip_proxied     any;
gzip_comp_level  6;
gzip_types       text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
location /static {
  alias /usr/src/app/staticfiles;
}
location / {
  try_files $uri @django_app;
}`}
      </code>
    </pre>

    <h3 id="max-upload-size">افزایش محدودیت حجم آپلود فایل</h3>
    <p>
      همان‌طور که در بخش قبلی گفته شد، پلتفرم Django در لیارا با استفاده از
      وب‌سرور Nginx مستقر و اجرا می‌گردد.
      در این وب‌سرور، به‌صورت پیش‌فرض حداکثر حجم مجاز آپلود فایل
      {' '}
      <strong>1MB</strong>
      {' '}
      در نظر گرفته شده‌است. شما می‌توانید یک فایل با نام
      <span className="code">liara_nginx.conf</span>
      در کنار
      <span className="code">requirements.txt</span>
      بسازید و محتویات زیر را داخل آن قرار دهید و سپس دستور
      <span className="code">liara deploy</span>
      را وارد کنید:
    </p>
    <pre>
      <code>
        {`client_max_body_size 250M;

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files $uri @django_app;
}

location ~\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}
`}
      </code>
    </pre>
    <p>
      با قرار دادن فایل بالا در ریشه‌ی برنامه‌ی‌تان
      حداکثر حجم مجاز آپلود فایل به
      {' '}
      <strong>250MB</strong>
      {' '}
      افزایش می‌یابد. شما می‌توانید مقدار دلخواه خودتان را تنظیم کنید.
    </p>

    <h3 id="gunicorn-timeout">افزایش زمان تایم‌اوت Gunicorn</h3>
    <p>
      درصورتی که در برنامه‌ی Django خود با خطای <span className="code">[CRITICAL] WORKER TIMEOUT</span> مواجه شده‌اید و به WORKER TIMEOUT بیشتر از ۳۰ ثانیه نیاز دارید می‌توانید وارد تنظیمات برنامه‌ی Django خود شده و در بخش متغیرها، متغیر <span className="code">GUNICORN_TIMEOUT=60</span> را به‌شکل زیر اضافه کرده و درنهایت با کلیک بر روی دکمه ثبت تغییرات، WORKER TIMEOUT برنامه را افزایش دهید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/django/add-gunicorn-timeout-variable-to-django-app.gif"></ZoomableImage>

    <Notice variant="info">
      توجه داشته باشید که متغیر <span className="code">GUNICORN_TIEMOUT</span> براساس ثانیه است.
    </Notice>

  </Layout>
);
