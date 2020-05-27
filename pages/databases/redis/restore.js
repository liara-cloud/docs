import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس Redis</h1>
    <span className="pageDescription">(Redis key/value Database)</span>

    <h3>Redis Restore</h3>
    <p>
      اگر تصور کنیم که دیتابیس Redis شما دچار مشکل شده است و قصد دارید به کمک
      آخرین فایل پشتیبان، داده‌های آن‌را در دیتابیس جدیدی بازسازی کنید میتوانید
      طبق این سناریو پیش بروید:
    </p>
    <ul>
      <li>
        ابتدا فایل پشتیبان مدنظرتان را دانلود کنید و آن‌را از حالت فشرده خارج
        کنید. احتمالا فایل‌هایی شبیه تصویر زیر خواهید داشت.
      </li>
      <br />
      <ZoomableImage src="/static/databases/mongo-backup-1.png" />
      <br />

      <li>
        پکیج{" "}
        <span className="code">
          <a
            href="https://github.com/sripathikrishnan/redis-rdb-tools"
            target="_blank"
          >
            rdbtools
          </a>{" "}
        </span>{" "}
        را به صورت زیر نصب کنید:
      </li>
      <br />
      <code>{`$ pip install rdbtools python-lzf`}</code>
      <br />

      <li>دیتابیس Redis جدیدی هم‌نسخه با دیتابیس قدیم ایجاد کنید.</li>
      <br />

      <li>
        با اجرای دستور زیر و دادن اطلاعات مربوط به Redis جدید و دادن آدرس فایل
        Backup میتوانید دیتابیس جدید را بازسازی کنید. اطلاعات زیر برای یک
        دیتابیس نمونه است.
      </li>
      <br />

      <code>{`$ rdb -c protocol 2020-05-27T16-15-22-1590579922198.dump | redis-cli -p 32234 -h s1.liara.ir -a N1qjmxzBA2 --pipe`}</code>
      <br />

      <li>بعد از اجرای دستور بالا پیامی مانند زیر به شما نمایش داده میشود:</li>
      <br />

      <ZoomableImage src="/static/databases/redis-restore.png" />
      <p>
        خروجی بالا یعنی ۴ دستور توسط ردیس اجرا شده، چون در مثال بالا ما ۴ دستور
        SET در فایل Backup داشتیم Redis همه آن‌ها را با موفقیت و با صفر Errors
        اجرا کرده‌ است که یعنی همه داده‌ها با موفقیت بازسازی شده‌است. برای اطمینان میتوانید از پنل‌‌های گرافیکی یا cli چک کنید که داده‌ها با موفقیت منتقل شده‌است یا خیر.
      </p>
    </ul>
  </Layout>
);
