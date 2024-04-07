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
        مستندات استقرار برنامه‌های Vue با استفاده از ابزار Liara Desktop - سرویس
        ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="vue" />
      <div className="page-title">
        <h1>پلتفرم Vue</h1>
        <span className="page-description">(VueJS Platform)</span>
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
      src="https://files.liara.ir/liara/vue/vue-desktop.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/vue-getting-started.git">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <h3 id="how-to-deploy">پنج گام استقرار برنامه با مرورگر</h3>
    <Notice variant="warning">
      توجه داشته باشید؛ تنها برنامه‌هایی که با دو روش
      <span className="code">Vite</span> و یا
      <span className="code">vue-cli</span>
      ساخته شده باشند، در پلتفرم Vue لیارا قابل اجرا خواهند بود.
    </Notice>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم VUE و نوشتن شناسه برنامه‌ی موردنظرتان و در نهایت
      انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش برای
      برنامه آزمایشی‌مان، شناسه vue-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> داخل فایل
      <span className="code">package.json</span>
      یک فیلد با نام
      <span className="code">scripts</span>
      وجود دارد. شما باید
      <b> حتما </b>
      یک اسکریپت در این بخش با نام
      <span className="code">start</span>
      تعریف کنید.
    </p>
    <p>
      نمونه فایل package.json استفاده شده از{" "}
      <span className="code">vue-cli</span>:
    </p>
    <Highlight className="json">
      {`{
  "name": "vue-getting-started",
  "version": "0.1.0",
  "scripts": {
    "start": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.3.11"
  }
}`}
    </Highlight>
    <p>
      نمونه فایل package.json استفاده شده از <span className="code">Vite</span>:
    </p>
    <Highlight className="json">
      {`{
  "name": "vue-getting-started",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.11"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.5.2",
    "vite": "^5.0.10"
  }
}`}
    </Highlight>
    <p>
      بعد از این‌که برنامه‌ی شما آپلود شد، لیارا برای شما دستور
      <span className="code">npm start</span>
      را اجرا می‌کند. شما باید داخل این اسکریپت، دستوری بنویسید که باعث اجرا شدن
      برنامه‌ی‌تان شود.(مانند نمونه‌ی بالا)
    </p>
    <Notice variant="warning">
      توجه داشته باشید که اگر اسکریپت build را در فایل{" "}
      <span className="code">package.json</span> خود تعریف کرده باشید، لیارا
      به‌طور خودکار در فرایند استقرار برنامه‌های Vue دستور{" "}
      <span className="code">npm run build</span> را اجرا می‌کند.
    </Notice>
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
      را نیز بر اساس نیازهای برنامه خود، تنظیم کنید:
    </p>
    <ul>
      <li>
        <b>تنظیمات پلتفرم:</b> اگر که به{" "}
        <span className="code">source map</span> نیاز دارید، می‌توانید در این
        بخش، آن را فعال کنید. همچنین، برای تجربه استقرار سریع‌تر نیز، توصیه
        می‌شود که از mirror اختصاصی لیارا برای نصب پکیج‌های npm استفاده کنید.
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
      برنامه‌تان آغاز شود
    </p>
    <Notice variant="info">
      برنامه‌ی شما حتما باید دارای فایل
      <span className="code">package.json</span> باشد تا بتواند در لیارا مستقر
      شود.
    </Notice>
    <Notice variant="info">
      لیارا به صورت خودکار پکیج‌هایی که در فایل
      <span className="code">package.json</span>
      لیست شده‌اند را برای شما نصب می‌کند. پس نیازی ندارید که به دنبال اجرای
      دستور
      <span className="code">npm install</span>
      باشید. از آن‌جایی که اجرای این دستور زمان‌بر است، برای سرعت بیشتر، این
      دستور را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر
      نمانید.
    </Notice>
    <p>
      بعد از انجام گام‌های قبلی، لیارا به برنامه شما یک زیردامنه رایگان اختصاص
      می‌دهد که به وسیله آن می‌توانید مطمئن شوید که برنامه‌ی‌تان به صورت صحیح به
      بستر لیارا منتقل شده است یا خیر. این آدرس بر اساس شناسه برنامه‌ی شما است،
      برای نمونه:
    </p>

    <Highlight className="shell">{`https://vue-starter.liara.run`}</Highlight>
    <br />

    <Link href="/app-deploy/vue/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
