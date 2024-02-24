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
        مستندات استقرار برنامه‌های React با استفاده از ابزار Liara Desktop -
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="react" />
      <div className="page-title">
        <h1>پلتفرم ReactJS</h1>
        <span className="page-description">(ReactJS Platform)</span>
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
    </ul>

    <h3 id="video">استقرار با Liara Desktop</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/react/react-desktop.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/react-getting-started.git">
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
    <Notice variant="warning">
      توجه داشته باشید؛ تنها برنامه‌هایی که با دو روش
      <span className="code">Vite</span> و یا
      <span className="code">create-react-app</span>
      ساخته شده باشند، در پلتفرم React لیارا قابل اجرا خواهند بود.
    </Notice>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم REACT و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه react-starter را انتخاب کردیم.
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
      <span className="code">create-react-app</span>:
    </p>
    <Highlight className="json">
      {`{
  "name": "react-getting-started",
  "version": "0.1.0",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}`}
    </Highlight>
    <p>
      نمونه فایل package.json استفاده شده از <span className="code">Vite</span>:
    </p>
    <Highlight className="json">
      {`{
  "name": "react-getting-started",
  "version": "0.1.0",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  },
  "devDependencies": {
    "vite": "^2.4.4", 
    "@vitejs.plugin-react-refresh": "^1.3.1" 
  },
  "scripts": {
    "start": "vite preview",
    "build": "vite build"
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
      توجه داشته باشید که لیارا به‌طور خودکار در فرایند استقرار برنامه‌های React
      دستور <span className="code">npm run build</span> را اجرا می‌کند.
    </Notice>
    <p>
      <b>گام سوم)</b> در قدم بعدی کافیست Liara Desktop را اجرا کرده و پوشه
      پروژه‌تان را انتخاب کنید. بعد از انتخاب پروژه‌تان، از شما شناسه برنامه‌
      موردنظرتان پرسیده می‌شود و بعد از انتخاب شناسه، لیارا عملیات استقرار را
      شروع می‌کند.
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
      <b>گام چهارم و پایانی)</b> بعد از انجام گام‌های قبلی، لیارا به برنامه شما
      یک زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن شوید که
      برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این آدرس بر
      اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p>

    <p dir="ltr">https://react-starter.liara.run</p>

    <Link href="/app-deploy/react/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
