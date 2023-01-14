import Head from "next/head";
import Layout from "../../components/Layout";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات Cron Job ها - لیارا</title>
    </Head>

    <h1>Cron Job ها</h1>
    <span className="page-description">(Cron Jobs)</span>

    <p>
      گاهی اوقات نیاز است کار خاصی در زمان خاصی و یا به صورت دوره‌ای انجام شود،
      مثلا تهیه‌ی فایل پشتیبان از پایگاه داده، ارسال ایمیل و خبرنامه و کارهایی
      نظیر این. برای تعریف کران‌جاب‌های‌تان، می‌توانید فیلدی به نام
      <span className="code">cron</span>
      را به فایل <span className="code">liara.json</span> برنامه‌ی‌تان اضافه
      کنید.
    </p>
    <Highlight className="json">
      {`{
  "cron": [
    "* * * * * cd /var/www/html && php artisan schedule:run >> /dev/null 2>&1"
  ]
}`}
    </Highlight>
    <p>
      همان‌طور که مشاهده می‌کنید، فیلد
      <span className="code">cron</span>
      یک آرایه است و این یعنی می‌توانید یک یا چند کران‌جاب تعریف کنید. بعد از
      تنظیم فایل <span className="code">liara.json</span>، باید دستور{" "}
      <span className="code">liara deploy</span>
      را اجرا کنید تا تغییرات‌تان روی سرور اعمال شود و jobهای‌تان اجرا شوند. در
      قسمت لاگ‌ها هم هر زمان که یک job اجرا شود، لاگ‌های مختص به‌آن‌ها نمایش
      داده می‌شود.
    </p>

    <p>
      بعد از اتمام فرایند استقرار، jobهایی که تعریف کرده‌اید را می‌توانید در
      صفحه‌ی تنظیمات مشاهده کنید:
    </p>

    <ZoomableImage src="/static/cron-jobs.png" alt="بخش Cron Job ها" />

    <p>
      در حال حاضر، پلتفرم‌های زیر از این قابلیت پشتیبانی می‌کنند:
      <ul>
        <li>Laravel</li>
        <li>PHP</li>
        <li>Django</li>
        <li>Flask</li>
      </ul>
    </p>
    <Notice varint="info">
      به‌زودی پشتیبانی سایر پلتفرم‌ها از این قابلیت را اضافه خواهیم کرد. چنانچه
      پلتفرم مدنظر شما در این لیست نیست، می‌توانید با پشتیبانی از طریق تیکت
      ارتباط بگیرید تا پلتفرم مربوطه را اضافه کنیم.
    </Notice>

    <h3>بازه‌های زمانی رایج</h3>
    <p>
      برای تعریف هر Job، ابتدا لازم است که زمان اجرای آن را تعریف کنید. در Cron
      Job، تعریف زمان نحوه‌ی نگارش خاصی دارد که در زیر چند نمونه‌ی پر استفاده را
      عنوان کرده‌ایم:
    </p>
    <ul>
      <li>
        <span className="code">* * * * *</span>{" "}
        <a href="https://crontab.guru/every-1-minute" target="_blank">
          هر دقیقه
        </a>
      </li>
      <li>
        <span className="code">0 * * * *</span>{" "}
        <a href="https://crontab.guru/every-1-hour" target="_blank">
          هر یک ساعت
        </a>
      </li>
      <li>
        <span className="code">0 1 * * *</span>{" "}
        <a href="https://crontab.guru/every-day-at-1am" target="_blank">
          هر روز ساعت یک بامداد
        </a>
      </li>
      <li>
        <span className="code">0 0 * * 0</span>{" "}
        <a href="https://crontab.guru/every-week" target="_blank">
          هر هفته روز یکشنبه
        </a>
      </li>
    </ul>
    <p>
      با کمک وب‌سایت{" "}
      <a href="https://crontab.guru/" target="_blank">
        crontab.guru
      </a>{" "}
      می‌توانید زمان دلخواه‌تان را بسازید.
    </p>

    <h3>نمونه‌ی Cron Job برای پلتفرم PHP</h3>
    <Highlight className="json">
      {`{
  "cron": [
    "0 1 * * * cd $ROOT && php update_price.php >> /dev/null 2>&1"
  ]
}`}
    </Highlight>
    <p>
      در نمونه‌ی بالا، یک اسکریپت با نام‌های
      <span className="code">update_price.php</span>
      در ریشه‌ی برنامه داریم که هر روز ساعت یک بامداد اجرا می‌شود.
    </p>

    <h3>نمونه‌ی Cron Job برای پلتفرم Django</h3>
    <Highlight className="json">
      {`{
  "cron": [
    "0 0 * * 0 cd $ROOT && python3 manage.py remove-old-emails >> /dev/null 2>&1"
  ]
}`}
    </Highlight>
    <p>
      در نمونه‌ی بالا، یک دستور دلخواه مدیریتی به‌جنگو با نام
      <span className="code">remove-old-emails</span>
      اضافه کرده‌ایم که هر هفته اجرا شود. در لینک زیر، می‌توانید مستندات مربوط
      به ساخت دستورات مدیریتی دلخواه مانند
      <span className="code">remove-old-emails</span>
      را مطالعه کنید:{" "}
      <a
        href="https://docs.djangoproject.com/en/3.0/howto/custom-management-commands/"
        target="_blank"
      >
        مستندات ساخت دستورات دلخواه مدیریتی برای جنگو
      </a>
    </p>

    <h3>نمونه‌ی Cron Job برای پلتفرم Flask</h3>
    <Highlight className="json">
      {`{
  "cron": [
    "0 0 * * 0 cd $ROOT && python3 job1.py",
    "0 0 * * 2 cd $ROOT && python3 job2.py"
  ]
}`}
    </Highlight>
    <p>
      در نمونه‌ی بالا، دو اسکریپت با نام‌های
      <span className="code">job1.py</span>و
      <span className="code">job2.py</span>
      در ریشه‌ی برنامه داریم که هفته‌ای یک‌بار اجرا می‌شوند.
    </p>
  </Layout>
);
