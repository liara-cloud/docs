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
        مستندات استقرار برنامه‌های Docker با استفاده از ابزار Liara Desktop -
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>پلتفرم Docker</h1>
        <span className="page-description">(Docker Platform)</span>
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
      src="https://files.liara.ir/liara/docker/docker-desktop.mp4"
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
      بروید و با انتخاب پلتفرم DOCKER و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه docker-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام سوم)</b> در قدم بعدی کافیست Liara Desktop را اجرا کرده و پوشه
      پروژه‌تان را انتخاب کنید. بعد از انتخاب پروژه‌تان، از شما شناسه برنامه‌
      موردنظرتان پرسیده می‌شود و بعد از انتخاب شناسه، سپس، پورتی که قصد دارید آن
      را در معرض دید قرار دهید، پرسیده خواهد شد. این پورت معمولا برابر با همان
      پورت EXPOSE است.
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
      <b>گام سوم و پایانی)</b> بعد از انجام گام‌های قبلی، لیارا به برنامه شما یک
      زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن شوید که
      برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این آدرس بر
      اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p>
    <p dir="ltr">https://docker-starter.liara.run</p>

    <Link href="/app-deploy/docker/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
