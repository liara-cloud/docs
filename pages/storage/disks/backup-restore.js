import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات تهیه‌ی فایل پشتیبان از دیسک‌ها - سرویس ابری لیارا</title>
    </Head>

    <h1>دیسک‌ها</h1>
    <span className="page-description">(Disks)</span>

    <h3>تهیه‌ی فایل پشتیبان از دیسک‌ها</h3>
    <p>
      تهیه فایل پشتیبان از دیسک‌ها در لیارا به‌صورت روزانه و خودکار انجام
      می‌شود. همچنین شما می‌توانید از منوی <strong>پشتیبان‌گیری</strong> دیسک
      ایجاد شده و با کلیک بر روی دکمه‌ی <strong>ایجاد فایل پشتیبان</strong>،
      به‌صورت دستی اقدام به تهیه فایل پشتیبان کنید.
    </p>
    <ZoomableImage
      src="https://files.liara.ir/docs/disks/backup.gif"
      alt="صفحه‌ی پشتیبان‌گیری دیسک"
    />
    <h3>برگرداندن اطلاعات از طریق فایل پشتیبان</h3>
    <p>
      ممکن است در زمان انتقال سرویس و یا پس از مواجه شدن با هرگونه Data
      corruption تصمیم بگیرید فایل پشتیبان دیسک خود را بازیابی کنید. برای
      بازیابی فایل پشتیبان تنها کافیست آخرین فایل پشتیبان‌ را دانلود کرده و
      محتوای آن را با استفاده از{" "}
      <Link href="/storage/disks/ftp">دسترسی FTP</Link> به دیسک مورد نظرتان
      منتقل کنید.
    </p>
  </Layout>
);
