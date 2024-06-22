import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import Notice from "../../components/Notice";
export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Astro - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="astro" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Astro</h1>
        <span className="page-description">(Astro Apps)</span>
      </div>
    </div>

    <p>
      <a href="https://astro.build/">Astro</a> یک وب‌فریم‌ورک جاوااسکریپت است که
      برای ساخت وب‌سایت‌های محتوا محور مثل وبلاگ‌ها، سایت‌های بازاریابی و
      سایت‌های تجاری، به کار می‌رود. Astro بیشتر به خاطر معماری فرانت‌اند جدیدش
      و کاهش پیچیدگی‌های مرتبط با جاوااسکریپت نسبت به سایر فریم‌ورک‌ها شناخته
      شده است. اگر که قصد دارید یک وب‌سایت سریع با SEO خوب، بسازید؛ می‌توانید از
      Astro استفاده کنید. در ادامه مستندات مربوط به استقرار برنامه‌های Astro در
      لیارا آمده است.
    </p>
    <h3 id="deploy-app-on-liara">دیپلوی برنامه در لیارا</h3>
    <p>
      در ابتدا، بایستی در مسیر اصلی پروژه، دستور زیر را اجرا کنید تا فایل‌های
      پروژه build شوند.
    </p>
    <Highlight className="bash">{` npm run build`}</Highlight>
    <p>
      با اجرای دستور فوق، فرایند build گرفتن از برنامه‌ی شما شروع خواهد شد و
      درنهایت تمام فایل‌های استاتیک اعم از فایل‌های HTML/CSS/JS در پوشه‌ی{" "}
      <span className="code">dist</span> قرار داده می‌شوند. البته در صورتی که
      دایرکتوری پیش‌فرض را از <span className="code">dist</span> به چیز دیگری
      تغییر داده‌اید؛ فایل‌های نهایی در آن‌جا قرار خواهند گرفت.
    </p>
    <p>
      در ادامه، بایستی تا در لیارا، یک برنامه{" "}
      <a href="/app-deploy/static/getting-started/">Static</a> جدید ایجاد کنید.
      وارد دایرکتوری <span className="code">dist</span> شده و در این دایرکتوری،
      دستور زیر را اجرا کنید تا برنامه‌تان، در لیارا مستقر شود:
    </p>
    <Highlight className="bash">{`liara deploy --platform=static`}</Highlight>
    <Notice variant="info">
      یک نمونه پروژه‌ی Astro که آماده مستقر شدن در لیارا است را می‌توانید در{" "}
      <Link href="https://github.com/liara-cloud/astro-getting-started">
        اینجا
      </Link>{" "}
      مشاهده کنید.{" "}
    </Notice>
  </Layout>
);
