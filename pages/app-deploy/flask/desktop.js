import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Flask با استفاده از ابزار Liara Desktop -
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Flask</h1>
        <span className="page-description">(Flask Platform)</span>
      </div>
    </div>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#video">استقرار با Liara Desktop</a>
      </li>
      <li>
        <a href="#installing-liara-desktop">نصب Liara Desktop</a>
      </li>
      <li>
        <a href="#login">ورود به حساب کاربری</a>
      </li>
      <li>
        <a href="#deploy">اولین استقرار</a>
      </li>
      <li>
        <a href="#errors">خطاهای رایج در فرایند استقرار</a>
      </li>
    </ul>

    <h3 id="video">استقرار با Liara Desktop</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/flask/flask-desktop.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/flask-getting-started">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <p>
      <h3 id="installing-liara-desktop">نصب Liara Desktop</h3>
      شما می‌توانید از طریق این <Link href="/desktop/install">لینک</Link>؛ Liara
      Desktop را؛ متناسب با سیستم عامل خود دانلود و نصب کنید.
    </p>
    <h3 id="login">ورود به حساب کاربری</h3>
    <p>
      برای ورود به حساب کاربری از طریق Liara Desktop، ابتدا نرم‌افزار را اجرا
      کرده، سپس از طریق مروگر، وارد حساب‌تان شوید.
    </p>
    <h3 id="deploy">اولین استقرار</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم Flask و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه flask-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b>
      در قدم بعدی کافیست Liara Desktop را اجرا کرده و پوشه پروژه‌تان را انتخاب
      کنید. بعد از انتخاب پروژه‌تان، از شما شناسه برنامه‌ موردنظرتان پرسیده
      می‌شود و بعد از انتخاب شناسه، لیارا عملیات استقرار را شروع می‌کند.
    </p>
    <p>
      برنامه‌ی شما حتما باید فایل
      <span className="code">requirements.txt</span>
      را داشته باشد و در این فایل باید لیست تمام پکیج‌هایی که استفاده کرده‌اید
      را وارد کنید. برای برنامه‌های Flask، دست کم باید پکیج Flask را در این فایل
      عنوان کرده باشید. یک نمونه‌ی پروژه‌ی Flask که آماده‌ی مستقر شدن در لیارا
      است را در لینک زیر می‌توانید مشاهده کنید:
    </p>
    <p dir="ltr">
      <a
        href="https://github.com/liara-cloud/flask-getting-started"
        target="_blank"
      >
        https://github.com/liara-cloud/flask-getting-started
      </a>
    </p>
    <Notice variant="info">
      لیارا به صورت خودکار پکیج‌هایی که در فایل‌های
      <span className="code">requirements.txt</span>
      لیست شده‌اند را برای شما نصب می‌کند. پس نیازی ندارید که به دنبال اجرای
      دستورات
      <span className="code">pip install</span>
      باشید. از آن‌جایی که اجرای این دستورات زمان‌بر است، برای سرعت بیشتر، این
      دستورات را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر
      نمانید.
    </Notice>
    <p>
      <b>گام سوم و پایانی)</b> بعد از انجام گام‌های قبلی، لیارا به برنامه شما یک
      زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن شوید که
      برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این آدرس بر
      اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p>

    <p dir="ltr">https://flask-starter.liara.run</p>

    <h3 id="errors">خطاهای رایج در فرایند استقرار</h3>
    <p>لیارا برنامه‌های فلسک را با دستوری مشابه دستور زیر اجرا می‌کند:</p>
    <pre>
      <code>$ gunicorn app:app</code>
    </pre>
    <p>
      همان‌طور که در دستور بالا مشاهده می‌کنید، لیارا نام ماژول شما را به‌صورت
      پیش‌فرض
      <span className="code">app</span>
      در نظر می‌گیرد. اما چنانچه شما از نام دیگری استفاده می‌کنید و در زمان
      دیپلوی خطای زیر را دریافت می‌کنید:
    </p>
    <pre>
      <code>
        {`File "/usr/local/lib/python3.7/site-packages/gunicorn/util.py", line 350, in import_app
  __import__(module)
  ModuleNotFoundError: No module named 'app'`}
      </code>
    </pre>
    <p>
      دو راه حل دارید. راه اول این است که نام ماژول‌تان را به{" "}
      <span className="code">app</span>
      تغییر دهید و بعد دوباره <span className="code">liara deploy</span>
      را وارد کنید. در غیر این‌صورت، چنانچه قصد دارید که از همان نام ماژول
      خودتان استفاده کنید، لازم است که نام این ماژول را در فایلی به‌نام{" "}
      <span className="code">liara.json</span>
      تعریف کنید. این فایل باید در کنار{" "}
      <span className="code">requirements.txt</span>
      ساخته شود و محتویات آن به‌شکل زیر باشد:
    </p>
    <Highlight className="json">
      {`{
  "flask": {
    "appModule": "myname:app"
  }
}`}
    </Highlight>
    <p>
      با اضافه‌کردن این فایل، بار دیگر برنامه‌تان را دیپلوی کنید. حالا لیارا
      برنامه‌ی شما را با دستور زیر اجرا خواهد کرد:
    </p>
    <pre>
      <code>$ gunicorn myname:app</code>
    </pre>

    <br />

    <Link href="/app-deploy/flask/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
