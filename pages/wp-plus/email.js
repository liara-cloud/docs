import Link from "next/link";
import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های وردپرس - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="wordpress" />
      <div className="page-title">
        <h1>وردپرس پلاس</h1>
        <span className="page-description">(WordPress plus)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      در سیستم مدیریت محتوای وردپرس تعداد زیادی پلاگین برای استفاده از{" "}
      <Link href="/app-features/email#settings">دسترسی SMTP</Link> وجود دارد که
      پیشنهاد ما استفاده از{" "}
      <a href="https://wordpress.org/plugins/wp-mail-smtp/" target="_blank">
        WP Mail SMTP
      </a>{" "}
      با بیش از ۱ میلیون نصب فعال است. پس از نصب و فعال‌سازی این پلاگین
      می‌توانید مانند تصویر زیر به قسمت تنظیمات این پلاگین وارد شوید.
    </p>

    <ZoomableImage src="/static/wp-mail-smtp-1.png" />

    <p>سپس فیلد From Email را تنظیم کنید.</p>

    <Notice variant="warning" style={{ marginBottom: 8 }}>
      قابل ذکر است که فیلد <span className="code">From Email</span> باید یکی از
      نشانی‌های اضافه شده در سرویس ایمیل باشد.
    </Notice>

    <ZoomableImage src="/static/wp-mail-smtp-2.png" />

    <p>در قدم بعد از میان سرویس‌های مختلف، Other SMTP را انتخاب کنید.</p>
    <ZoomableImage src="/static/wp-mail-smtp-3.png" />

    <p>
      و در نهایت اطلاعات دسترسی SMTP را در تنظیمات وارد کرده و تغییرات را ذخیره
      کنید.
    </p>
    <ZoomableImage src="/static/wp-mail-smtp-4.png" />
  </Layout>
);
