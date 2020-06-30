import Layout from "../../../components/Layout";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Django سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Django</h1>
    <span className="pageDescription">(Django Apps)</span>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h3>ایجاد CronJob</h3>
    <p>
      گاهی اوقات نیاز است کار خاصی در زمان خاصی و به صورت دوره‌ای انجام شود،
      مثلا تهیه‌ی فایل پشتیبان از پایگاه داده، ارسال ایمیل و خبرنامه و کارهایی
      نظیر این. برای تعریف کران‌جاب‌هایتان، می‌توانید فیلدی به نام
      <span className="code">cron</span>
      را به فایل <span className="code">liara.json</span> برنامه‌ی‌تان اضافه
      کنید.
    </p>
    <Highlight className="json">
      {`{
  "cron": [
    "* * * * * cd $ROOT && python3 manage.py remove-old-emails >> /dev/null 2>&1"
  ]
}`}
    </Highlight>
    <p>
      همان‌طور که مشاهده می‌کنید، فیلد
      <span className="code">cron</span>
      یک آرایه است و این یعنی می‌توانید یک یا چند کران‌جاب تعریف کنید.
      در لینک زیر،
      می‌توانید مستندات مربوط به ساخت دستورات مدیریتی دلخواه مانند
      <span className="code">remove-old-emails</span>
      را مطالعه کنید:
      {' '}
      <a href="https://docs.djangoproject.com/en/3.0/howto/custom-management-commands/" target="_blank">
        مستندات ساخت دستورات دلخواه مدیریتی برای جنگو
      </a>
    </p>
    <p>
    بعد از تنظیم فایل <span className="code">liara.json</span>،
      باید دستور <span className="code">liara deploy</span>
      را اجرا کنید تا تغییرات‌تان روی سرور اعمال شود و جاب‌های‌تان اجرا شوند.
    </p>

    <h3>تنظیمات Nginx</h3>
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
