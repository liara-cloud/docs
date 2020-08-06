import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های Redis - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/redis.svg"
        alt="redis"
      />
      <div className="page-title">
        <h1>دیتابیس Redis</h1>
        <span className="page-description">(Redis key/value Database)</span>
      </div>
    </div>

    <h3>Redis Restore</h3>
    <p>
      اگر تصور کنیم که دیتابیس Redis شما دچار مشکل شده است و قصد دارید به کمک
      آخرین فایل پشتیبان، داده‌های آن را در دیتابیس جدیدی بازسازی کنید می‌توانید
      طبق این سناریو پیش بروید:
    </p>
    <ul>
      <li>
        <p>
          {" "}
          ابتدا فایل پشتیبان مدنظرتان را دانلود کنید و آن را از حالت فشرده خارج
          کنید. احتمالا فایل‌هایی شبیه تصویر زیر خواهید داشت.
        </p>
      </li>
      <br />
      <ZoomableImage src="/static/databases/mongo-backup-1.png" />
      <br />

      <li>
        <p>
          {" "}
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
        </p>
      </li>
      <br />
      <code>{`$ pip install rdbtools python-lzf`}</code>
      <br />

      <li>
        <p>دیتابیس Redis جدیدی هم‌نسخه با دیتابیس قدیم ایجاد کنید.</p>
      </li>
      <br />

      <li>
        <p>
          {" "}
          با اجرای دستور زیر و دادن اطلاعات مربوط به Redis جدید و دادن آدرس فایل
          Backup می‌توانید دیتابیس جدید را بازسازی کنید. اطلاعات زیر برای یک
          دیتابیس نمونه است.
        </p>
      </li>
      <br />

      <code>{`$ rdb -c protocol BACKUP_FILE.dump | redis-cli -p REDIS_PORT -h REDIS_HOST -a REDIS_PASSWORD --pipe`}</code>
      <br />

      <li>بعد از اجرای دستور بالا پیامی مانند زیر به شما نمایش داده می‌شود:</li>
      <br />

      <ZoomableImage src="/static/databases/redis-restore.png" />
      <p>
        همانطور که در خروجی بالا میبینیم، ۴ دستور توسط ردیس اجرا شده است. چون در
        مثال بالا ما ۴ دستور SET در فایل Backup داشتیم Redis همه آن‌ها را با
        موفقیت و با صفر Errors اجرا کرده‌ است که یعنی همه داده‌ها با موفقیت
        بازسازی شده‌اند. برای اطمینان می‌توانید از پنل‌‌های گرافیکی یا cli چک
        کنید که داده‌ها با موفقیت منتقل شده‌است یا خیر.
      </p>
    </ul>
  </Layout>
);
