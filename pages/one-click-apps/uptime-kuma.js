import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نصب و راه‌اندازی Uptime Kuma - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="uptimekuma" />
      <div className="page-title">
        <h1>پلتفرم Uptime Kuma</h1>
        <span className="page-description">(Uptime Kuma one-click app)</span>
      </div>
    </div>

    <p align="justify">
      <a
        href="https://github.com/louislam/uptime-kuma"
        target="_blank"
        rel="noopener"
      >
        Uptime Kuma
      </a>{" "}
      یک ابزار مانیتورینگ متن‌باز (open source) است که به شما این امکان را
      می‌دهد تا سرویس‌های خود را از طریق پروتکل‌های HTTP/S و TCP و DNS و دیگر
      پروتکل‌ها، نظارت کنید. با این ابزار، شما می‌توانید هشدارهای در مورد
      downtime را دریافت کنید و حتی صفحات custom status برای کاربران خود ایجاد
      کنید.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/liara/one-click-apps/uptime-kuma.gif"></ZoomableImage>

    <p align="justify">
      برای راه‌اندازی برنامه‌ی آماده Uptime Kuma باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Uptime Kuma را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید. در آخر پس از
      انتخاب شبکه خصوصی و پلن، بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک
      کنید.
    </p>

    <h3 id="proxy">تنظیمات TrustedProxies</h3>
    <p align="justify">
      با توجه به این نکته که تمامی درخواست‌ها توسط{" "}
      <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank">
        Reverse proxy
      </a>{" "}
      لیارا به برنامه‌ی شما هدایت می‌شود باید در زمان استفاده از فریم‌ورک‌های
      مختلف برای مشاهده‌ی IP واقعی کاربران و بسیاری از قابلیت‌های دیگر تعیین
      کنید که برنامه‌ی شما در پشت یک Reverse proxy راه‌اندازی شده است:
    </p>
    <p align="justify">
      برای انجام این کار، کافیست که وارد قسمت setting برنامه Uptime Kuma خود شده
      و در زیر قسمت Reverse Proxy در بخش Trust Proxy بر روی yes کلیک کنید و سپس
      تغییرات را ذخیره کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/liara/one-click-apps/reverse-proxy.png"></ZoomableImage>
  </Layout>
);
