import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import ZoomableImage from '../../components/ZoomableImage'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های MongoDB با RoboMongo</title>
    </Head>

    <h1>اتصال به مونگودی‌بی با Robo 3T</h1>
    <span className="pageDescription">(Connect to MongoDB using Robo 3T)</span>

    <p>
      برای اتصال به دیتابیس‌های MongoDB از لوکال و کامپیوتر خودتان،
      می‌توانید از ابزار خط فرمان
      <span className="code">mongo</span>
      استفاده کنید. اما محیط خط فرمان برای همه خوشایند نیست
      و به همین علت ممکن است مایل باشید که از نرم‌افزارهای ساده و قدرتمندی مانند 
      {' '}
      <a href="https://robomongo.org" target="_blank">Robo 3T</a>
      {' '}
      استفاده کنید.
    </p>
    <p>
      Robo 3T، که با نام سابق RoboMongo آشناتر است،
      یک محیط GUI که در تمام سیستم‌عامل‌ها نیز پشتیبانی می‌شود در اختیارتان قرار می‌دهد
      که با آن می‌توانید به دیتابیس‌های مونگودی‌بی متصل شده و داده‌های‌تان را مدیریت کنید.
      این نرم‌افزار، رایگان و OpenSource است.
    </p>

    <h3>نحوه‌ی اتصال</h3>
    <p>
      ۱) ابتدا مطمئن شوید که آخرین نسخه‌ی <Link href="/clients/cli" title="مستندات CLI">Liara CLI</Link> را نصب کردید. برای اطمینان، <span className="code">npm i -g @liara/cli</span> را وارد کنید.
      <br />
      ۲) دستور <span className="code">liara tunnel:open</span> را وارد کنید و سپس دیتابیس مورد نظر را انتخاب کنید تا یک تونل در لوکال‌هاست برای دیتابیس ایجاد شود.
      {' '}
      <Link href="/databases/tunnel" title="مستندات ایجاد تونل">اطلاعات بیشتر</Link>
      <br />
      ۳) وارد Robo 3T شده و سپس وارد بخش Create Connection شوید.
      <br />
      ۴) مطابق تصویر زیر، تب Connection را پر کنید:
    </p>
      <ZoomableImage src="/static/robo3t-1.png" alt="ترمینال" />
    <p>
      در فیلد Address، بنویسید: localhost
      <br />
      و در فیلد مقابل آن، پورتی را وارد کنید که در ساخت تونل، به شما نمایش داده شد.
      معمولا این پورت، برابر با 30000 است.
      <br />
      ۵) در تب Authentication، باید اطلاعات لازم برای احراز هویت را وارد کنید.
      <br />
      در فیلد Database، مقدار پیش‌فرض برابر admin است که بدون تغییر، رهایش کنید. فیلدهای User Name
      و Password را از پنل لیارا، صفحه‌ی دیتابیس، می‌توانید بردارید و در این قسمت‌ها بنویسید.
    </p>
    <p>
      <ZoomableImage src="/static/robo3t-2.png" alt="ترمینال" />
      <br />
      ۶) با کلیک روی دکمه‌ی Test می‌توانید از اتصال مطمئن شده و بعد ذخیره کنید و متصل شوید.
    </p>
  </Layout>
)
