import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

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
      <li><a href="#collectstatic">دستور collectstatic</a></li>
      <li><a href="#compilemessages">دستور compilemessages</a></li>
      <li><a href="#modify-settings">جلوگیری از اعمال تغییرات در فایل settings.py</a></li>
      <li><a href="#nginx-customization">تنظیمات Nginx</a></li>
    </ul>

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
      <span className="code">Nginx</span>
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
  </Layout>
);
