import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات استقرار برنامه‌های Docker - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>استقرار اولین برنامه</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#installing-liara-cli">نصب Liara CLI</a>
      </li>
      <li>
        <a href="#login">ورود به حساب کاربری</a>
      </li>
      <li>
        <a href="#deploy">اولین استقرار</a>
      </li>
    </ul>

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
      بروید و با انتخاب پلتفرم DOCKER و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه docker-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> کافیست وارد ریشه برنامه‌ی‌تان شده و سپس دستور زیر را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara deploy`}</code>
    </pre>
    <p>
      Liara CLI در صورتی که یک Dockerfile در ریشه‌ی برنامه‌ی‌تان وجود داشته
      باشد، تشخیص خواهد داد که برنامه‌ی شما را باید به عنوان یک برنامه‌ی Docker
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود
      داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>{`$ liara deploy --platform=docker`}</code>
    </pre>
    <p>
      بعد از وارد کردن دستور بالا، ابتدا نام برنامه‌ای که قصد دارید استقرار روی
      آن انجام شود پرسیده خواهد شد. سپس، پورتی که قصد دارید آن را در معرض دید
      قرار دهید، پرسیده خواهد شد. این پورت معمولا برابر با همان پورت EXPOSE است.
    </p>
    <Notice variant="info">
      برنامه‌ی شما در سرورهای لیارا build شده و image نهایی در registry خصوصی
      شما در لیارا ذخیره خواهد شد.
    </Notice>
    <Notice variant="info">
      توجه داشته باشید که تنها پورت یک وب‌سرور با پروتکل HTTP را می‌توانید
      Expose کنید. برای مثال پورت یک دیتابیس قابل دسترسی از بیرون از شبکه‌ی
      لیارا نیست و تنها بین برنامه‌های اکانت شما در شبکه‌ی خصوصی قابل دسترسی
      خواهد بود.
    </Notice>
    <p>
      <b>گام سوم و پایانی)</b> بعد از اجرای دستورات گام‌های قبلی، لیارا به
      برنامه شما یک زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن
      شوید که برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این
      آدرس بر اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p>
    <p dir="ltr">https://docker-starter.liara.run</p>

    <Link href="/app-deploy/docker/deploy-image">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
