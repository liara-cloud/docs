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
        مستندات استقرار برنامه‌هایASP.Net Core با استفاده از ابزار Liara CLI -
        لیارا
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
        <a href="#video">استقرار با Liara CLI</a>
      </li>
      <li>
        <a href="#installing-liara-cli">نصب Liara CLI</a>
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

    <h3 id="video">استقرار با Liara CLI</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/dotnet/dotnet-cli.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/dotnet-getting-started.git">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <h3 id="installing-liara-cli">نصب Liara CLI</h3>
    <p>
      اگر Liara CLI را نصب ندارید می‌توانید با اجرای دستور زیر آن‌ را به‌راحتی
      نصب کنید: <Link href="/cli/install">توضیحات بیشتر</Link>
    </p>
    <pre>
      <code>{`$ npm install -g @liara/cli`}</code>
    </pre>
    <h3 id="login">ورود به حساب کاربری</h3>
    <p>
      برای ورود به حساب کاربری خود به وسیله Liara CLI کافیست دستور زیر را وارد
      کنید و ایمیل و رمزعبوری که با آن حساب کاربری خود را ایجاد کرده‌اید را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara login`}</code>
    </pre>
    <h3 id="deploy">اولین استقرار</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم ASP.NET CORE و نوشتن شناسه برنامه‌ی موردنظرتان و
      در نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه dotnet-starter را انتخاب کردیم. همچنین شما
      می‌توانید از طریق Liara CLI با دستور زیر برنامه‌ی خود را ایجاد کنید.
    </p>
    <Highlight className="json">{`liara create`}</Highlight>

    <p>
      <b>گام دوم)</b> کافیست وارد ریشه برنامه‌ی‌تان شده و به وسیله دستور زیر
      اولین استقرار خود را اجرا کنید. این دستور از شما شناسه‌ی برنامه‌ای را که
      قصد دارید در آن استقرار را انجام دهید، می‌پرسد و سپس فرایند استقرار آغاز
      می‌شود:
    </p>
    <pre>
      <code>{`$ liara deploy`}</code>
    </pre>
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
      بعد از وارد کردن دستور دیپلوی، Liara CLI به صورت خودکار، تشخیص خواهد داد
      که برنامه‌ی شما را باید به عنوان یک برنامه‌ی ASP.Net Core اجرا کند و
      عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت،
      می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>{`$ liara deploy --platform=netcore`}</code>
    </pre>

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
      را می‌سازید، آن را در پوشه‌ی Solution ساخته و دستور
      <span className="code">liara deploy</span>
      را هم در پوشه‌ی Solution اجرا کنید.
    </p>

    <h3 id="common-problem">خطاهای رایج در فرایند استقرار</h3>
    <p>
      چنانچه در فرایند استقرار با خطای خاصی مواجه شده‌اید، حتما پیشنهاد می‌کنیم
      که بخش <Link href="/app-deploy/netcore/tips">توضیحات و نکات تکمیلی</Link>{" "}
      را مطالعه کرده و تنظیمات مربوطه را انجام دهید.
    </p>

    <p>
      <b>گام سوم و پایانی)</b> بعد از اجرای دستورات گام‌های قبلی، لیارا به
      برنامه شما یک زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن
      شوید که برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این
      آدرس بر اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p>

    <p dir="ltr">https://dotnet-starter.liara.run</p>

    <Link href="/app-deploy/netcore/envs" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
