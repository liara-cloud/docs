import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Asciinema from '../../components/Asciinema';
import ZoomableImage from '../../components/ZoomableImage';

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات متغیرهای محیطی (Environment Variables) - سرویس ابری
        لیارا
      </title>
    </Head>

    <h1>متغیرهای محیطی</h1>
    <span className="page-description">(Environment Variables)</span>

    <p>
      استفاده از متغیرهای محیطی (Environment Variables) به شما کمک می‌کند
      تا برنامه‌ی خود را متناسب با محیط‌های مختلفی اعم از Development و{' '}
      <Link href="/production-checklist">Production</Link> پیکربندی کنید و
      یکی از متداول‌ترین کاربردهای این متغیرها، اتصال برنامه به دیتابیس
      است. برای مثال در زمان توسعه معمولا به دیتابیس لوکال متصل هستید اما
      پس از استقرار برنامه انتظار می‌رود که برنامه‌ی شما به دیتابیس
      اصلی‌تان متصل شود.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#list">مشاهده‌ی لیستی از متغیرهای محیطی تنظیم شده</a>
      </li>
      <li>
        <a href="#set">تنظیم و یا ویرایش متغیرهای محیطی</a>
      </li>
      <li>
        <a href="#unset">حذف متغیرهای محیطی</a>
      </li>
    </ul>

    <h3 id="list">مشاهده‌ی لیستی از متغیرهای محیطی تنظیم شده</h3>
    <h4>مشاهده‌ی متغیرهای محیطی در پنل کاربری</h4>
    <ZoomableImage src="https://files.liara.ir/docs/django/environment-variables-list.png" />
    <p>
      شما می‌توانید متغیرهای محیطی تنظیم شده را پس از ورود به صفحه‌ی{' '}
      <strong>تنظیمات</strong> هر برنامه، در بخش <strong>متغیرها</strong>{' '}
      مشاهده کنید. همچنین امکان <Link href="#unset">حذف</Link>،{' '}
      <Link href="#set">ویرایش و اضافه کردن</Link> متغیرهای محیطی در این
      بخش امکان‌پذیر هست.
    </p>
    <h4>مشاهده‌ی متغیرهای محیطی با استفاده از لیارا CLI</h4>
    <Asciinema id="456274" />

    <h3 id="set">تنظیم و یا ویرایش متغیرهای محیطی</h3>
    <h4>تنظیم و یا ویرایش متغیرهای محیطی در پنل کاربری</h4>
    <ZoomableImage src="https://files.liara.ir/docs/django/set-and-edit-environment-variables.gif" />
    <h4>تنظیم و یا ویرایش متغیرهای محیطی با استفاده از لیارا CLI</h4>
    <Asciinema id="456070" />

    <h3 id="unset">حذف متغیرهای محیطی</h3>
    <h4>حذف متغیرهای محیطی در پنل کاربری</h4>
    <ZoomableImage src="https://files.liara.ir/docs/django/remove-an-environment-variable.gif" />
    <h4>حذف متغیرهای محیطی با استفاده از لیارا CLI</h4>
    <Asciinema id="456072" />
  </Layout>
);
