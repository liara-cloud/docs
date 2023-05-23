import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های SvelteKit - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="svelte" />
      <div className="page-title">
        <h1>استقرار برنامه‌های SvelteKit</h1>
        <span className="page-description">(SvelteKit Apps)</span>
      </div>
    </div>

    <p>
      SvelteKit یک فریم‌ورک توسعه وب است که بر پایه Svelte ساخته شده است. این
      فریم‌ورک برای ساخت برنامه‌های وب با عملکرد بالا و قابلیت‌های پیشرفته طراحی
      شده است. با استفاده از SvelteKit، شما می‌توانید برنامه‌های وب پویا و
      تعاملی را با استفاده از توانایی‌هایی مانند رندر سمت سرور (SSR)، مسیریابی،
      تجزیه کد (Code-splitting)، پشتیبانی آفلاین در سمت کلاینت ایجاد کنید.
    </p>

    <p>
      به عنوان یک فریم‌ورک جدید در جامعه توسعه‌دهندگان وب، SvelteKit از
      تکنولوژی‌های پیشروی استفاده می‌کند تا برنامه‌های وب را با کارایی بالا و
      تجربه کاربری بهتری فراهم کند. عملکرد بهینه و بهینه سازی‌های پیشرفته این
      فریم‌ورک اجازه می‌دهد تا برنامه‌های وب سریع‌تری را نسبت به فریم‌ورک‌ها و
      روش‌های سنتی ایجاد کنید.
    </p>

    <p>
      با استفاده از SvelteKit، شما قادر خواهید بود تا برنامه‌های وب پویا و
      تعاملی را با استفاده از کامپوننت‌های Svelte ساخته و قابلیت‌هایی مانند
      مسیریابی پیچیده، SSR، SSG (Static Site Generation) و انعطاف‌پذیری بیشتر در
      توسعه برنامه‌های وب را تجربه کنید.
    </p>

    <h3>Static Adapter</h3>
    <p>
      زمانی که برنامه SvelteKit خود را با استفاده از Static Adapter بسازید،
      مجموعه‌ای از فایل‌های HTML، CSS و JavaScript استاتیک ایجاد می‌شود که
      نماینده برنامه شما می‌باشند. برای استقرار پروژه استاتیک نیاز هست ابتدا
      دستور <span className="code">npm run build</span> را اجرا کرده و سپس وارد
      مسیر Build برنامه‌تون شده و دستور
      <span className="code">liara deploy --platform static</span> را اجرا کنید
      تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
    </p>

    <h3>Node Server Adapter</h3>
    <p>
      در SvelteKit، Node Server Adapter یک adapter است که به شما امکان می‌دهد
      برنامه SvelteKit خود را به عنوان یک سرور Node.js اجرا کنید. این یکی از
      گزینه‌های استقراری است که توسط SvelteKit ارائه می‌شود.زمانی که از Node
      Server Adapter استفاده می‌کنید، برنامه SvelteKit شما در یک محیط سرور
      Node.js اجرا می‌شود. به این ترتیب، سرور درخواست‌های ورودی را پردازش کرده و
      صفحات و فایل‌های SvelteKit مناسب را به صورت پویا ارائه می‌دهد. برای هر
      درخواست، عملیات رندر سمت سرور (SSR) انجام شده و محتواهای پویا و دریافت
      داده از سمت سرور تولید می‌شوند.
    </p>
    <p>
      برای استقرار پروژه NodeJS نیاز هست در فایل{" "}
      <span className="code">package.json</span>، اسکریپت{" "}
      <span className="code">start</span> رو به شکل زیر تغییر:
    </p>
    <Highlight className="json">{`"start": "node build/index.js",`}</Highlight>

    <p>
      سپس دستور{" "}
      <span className="code">liara deploy --port 3000 --platform node</span> را
      در مسیر اصلی پروژه‌ی خود اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و
      اجرا شود..
    </p>
  </Layout>
);
