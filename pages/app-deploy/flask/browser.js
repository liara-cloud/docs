import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

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
        <a href="#video">ویدیوی آموزشی استقرار با مرورگر</a>
      </li>
      <li>
        <a href="#how-to-deploy">پنج گام استقرار برنامه با مرورگر</a>
      </li>
    </ul>

    <h3 id="video">ویدیوی آموزشی استقرار با مرورگر</h3>

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

    <h3 id="how-to-deploy">پنج گام استقرار برنامه با مرورگر</h3>
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
      <b>گام دوم)</b> برنامه‌ی شما حتما باید فایل
      <span className="code">requirements.txt</span>
      را داشته باشد و در این فایل باید لیست تمام پکیج‌هایی که استفاده کرده‌اید
      را وارد کنید. برای برنامه‌های Flask، دست کم باید پکیج Flask را در این فایل
      عنوان کرده باشید. می‌توانید با استفاده از اجرای دستور زیر، البته زمانی که
      محیط مجازی برنامه‌تان فعال است، فایل{" "}
      <span className="code">requirements.txt</span> را ایجاد کنید:
    </p>
    <Highlight className="shell">{`pip freeze > requirements.txt`}</Highlight>
    <p>
      <b>گام سوم)</b> در این گام، بایستی پوشه پروژه خود را حتماً درون یک فایل با
      فرمت <span className="code">zip</span>
      قرار دهید؛ سپس فایل zip را کشیده و در مرورگر رها کنید؛ یا می‌توانید بر روی
      گزینه انتخاب فایل کلیک کرده و فایل zip مد نظر خود را انتخاب کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/liara/drag-and-drop/drag_and_drop_project.gif"></ZoomableImage>

    <p>
      <b>گام چهارم)</b> پس از اینکه فایل zip پروژه‌تان به صورت کامل در لیارا
      آپلود شد، به صفحه جدیدی هدایت می‌شوید؛ در این صفحه کافیست تا بخش‌های زیر
      را بر اساس نیازهای برنامه خود، تنظیم کنید:
    </p>
    <ul>
      <li>
        <b>تنظیمات دیسک‌ها: </b>اگر که در برنامه خود،{" "}
        <a href="/app-deploy/flask/disks">دیسک</a> تعریف کردید؛ می‌توانید در این
        بخش، آن را به برنامه خود متصل کنید.
      </li>
      <li>
        <b>تنظیمات پلتفرم:</b> در این بخش، می‌توانید نسخه Python و همچنین منطقه
        زمانی مدنظرتان را بر اساس نیازهای برنامه خود تنظیم کنید. همچنین اگر نام
        ماژول اصلی برنامه‌تان، نام دیگری به جز{" "}
        <span className="code">app.py</span> است حتماً باید نام آن را در فیلد
        تعیین نام ماژول، مشخص کنید. برای تجربه سرعت بالاتر هم، توصیه می‌شود که
        برای نصب پکیج‌های pip، از mirror اختصاصی لیارا استفاده کنید.
      </li>
      <li>
        <b>تنظیمات build: </b> در این بخش می‌توانید{" "}
        <a href="/app-features/build-location">موقعیت build</a> برنامه خود را
        مشخص کنید.
      </li>
    </ul>
    <p>
      <b>گام پنجم و پایانی) </b> در نهایت، کافیست که بر روی گزینه{" "}
      <span className="code">شروع عملیات استقرار</span> کلیک کنید تا استقرار
      برنامه‌تان آغاز شود.
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
    <Notice variant="warning">
      اگر که برنامه‌تان در مرحله نصب پکیج‌ها با استفاده از دستور{" "}
      <span className="code">pip install</span>
      به مشکل خورد، توصیه می‌شود برای رفع مشکل، mirror اختصاصی لیارا را خاموش و
      حتماً موقعیت build برنامه خود را بر روی آلمان، تنظیم کرده و در نهایت،
      مجدداً برنامه خود را مستقر کنید.
    </Notice>
    <p>
      بعد از انجام گام‌های قبلی، لیارا به برنامه شما یک زیردامنه رایگان اختصاص
      می‌دهد که به وسیله آن می‌توانید مطمئن شوید که برنامه‌ی‌تان به صورت صحیح به
      بستر لیارا منتقل شده است یا خیر. این آدرس بر اساس شناسه برنامه‌ی شما است،
      برای نمونه:
    </p>
    <Highlight className="shell">{`https://flask-starter.liara.run`}</Highlight>
    <br />

    <Link href="/app-deploy/flask/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
