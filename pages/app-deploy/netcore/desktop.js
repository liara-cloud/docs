import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های ASP.Net Core با استفاده از ابزار Liara
        Desktop - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="netcore" />
      <div className="page-title">
        <h1>پلتفرم .Net</h1>
        <span className="page-description">(.Net Platform)</span>
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
        <a href="#solution-folder">استقرار پوشه‌ی Solution</a>
      </li>
      <li>
        <a href="#common-problem">خطاهای رایج در فرایند استقرار</a>
      </li>
    </ul>

    <h3 id="video">استقرار با Liara Desktop</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/dotnet/dotnet-desktop.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

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
      بروید و با انتخاب پلتفرم ASP.NET CORE و نوشتن شناسه برنامه‌ی موردنظرتان و
      در نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه dotnet-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b>
      در قدم بعدی کافیست Liara Desktop را اجرا کرده و پوشه پروژه‌تان را انتخاب
      کنید. بعد از انتخاب پروژه‌تان، از شما شناسه برنامه‌ موردنظرتان پرسیده
      می‌شود و بعد از انتخاب شناسه، لیارا عملیات استقرار را شروع می‌کند.
    </p>
    <p>
      برنامه‌ی شما حتما باید فایل
      <span className="code">.csproj</span>
      را داشته باشد. یک نمونه‌ی پروژه‌ی ASP.Net Core که آماده‌ی مستقر شدن در
      لیارا است را در لینک زیر می‌توانید مشاهده کنید:
    </p>
    <p dir="ltr">
      <a
        href="https://github.com/liara-cloud/dotnetcore-starter"
        target="_blank"
      >
        https://github.com/liara-cloud/dotnetcore-starter
      </a>
    </p>
    <p>
      بعد از وارد کردن دستور دیپلوی، Liara Desktop به صورت خودکار، تشخیص خواهد
      داد که برنامه‌ی شما را باید به عنوان یک برنامه‌ی ASP.Net Core اجرا کند و
      عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت،
      می‌توانید از دستور زیر استفاده کنید:
    </p>
    <Notice variant="info">
      لیارا به صورت خودکار پکیج‌های برنامه‌ی شما را نصب می‌کند. پس نیازی ندارید
      که به دنبال اجرای دستورات
      <span className="code">dotnet restore</span>
      باشید. از آن‌جایی که اجرای این دستورات زمان‌بر است، برای سرعت بیشتر، این
      دستورات را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر
      نمانید.
    </Notice>
    <h3 id="solution-folder">استقرار پوشه‌ی Solution</h3>
    <p>
      در صورتی که ساختار برنامه‌ی شما وابسته به چندین پروژه است، پوشه‌ی Solution
      ریشه‌ی برنامه‌ی شما به‌حساب می‌آید. بنابراین، لازم است که اگر فایل
      <span className="code">liara.json</span>
      را می‌سازید، آن را در پوشه‌ی Solution ساخته و سپس پروژه‌تان را دیپلوی
      کنید.
    </p>

    <h3 id="common-problem">خطاهای رایج در فرایند استقرار</h3>
    <p>
      چنانچه در فرایند استقرار با خطای خاصی مواجه شده‌اید، حتما پیشنهاد می‌کنیم
      که بخش <Link href="/app-deploy/netcore/tips">توضیحات و نکات تکمیلی</Link>{" "}
      را مطالعه کرده و تنظیمات مربوطه را انجام دهید.
    </p>
    <p>
      <b>گام سوم و پایانی)</b> بعد از انجام گام‌های قبلی، لیارا به برنامه شما یک
      زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن شوید که
      برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این آدرس بر
      اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p>

    <p dir="ltr">https://dotnet-starter.liara.run</p>

    <Link href="/app-deploy/netcore/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
