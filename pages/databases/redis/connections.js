import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>
    <h1>دیتابیس Redis</h1>
    <span className="pageDescription">(Redis key/value Database)</span>

    <h3>راه‌های اتصال به Redis</h3>
    <p>
      در صورتی که قصد دارید داده‌های دیتابیس‌‌تان را ببینید و در یک محیط گرافیکی
      یا کامندلاینی به مدیریت دیتابیس‌‌تان بپردازید، می‌توانید از راه‌های زیر
      اقدام کنید:
    </p>
    <ul>
      <li>
        <b>استفاده از phpRedisAdmin</b>
      </li>
      <p>
        لیارا برای دیتابیس Redis امکان راه‌اندازی phpRedisAdmin را به راحتی
        فراهم کرده است. برای این کار کافیست که به صفحه دیتابیس مورد نظرتان بروید
        و از بخش <b>راه‌اندازی phpRedisAdmin</b> آن را اجرا کنید.
      </p>
      <ZoomableImage
        src="/static/databases/redis-admin.png"
        alt="آماده شدن دیتابیس"
      />
      <p>
        برای ورود به پنل کافیست در بخش UserName مقدار admin و در بخش Password
        رمز عبور Redis را وارد کنید.
      </p>

      <br />
      <li>
        <b>استفاده از Redis-cli</b>
      </li>
      <p>بعد از نصب redis-cli کافیست برای اتصال دستور زیر را وارد کنید:</p>
      <code>{`$ redis-cli -h REDIS_HOST -p REDIS_PORT -a REDIS_PASSWORD`}</code>
      <br />
      <ZoomableImage
        src="/static/databases/redis-cli.png"
        alt="اتصال به redis با cli"
      />
      <br />
      <li>
        <b>استفاده از پنل‌های رایگان و اپن‌سورس</b>
      </li>
      <p>
        شما می‌توانید از پنل‌های موجود دیگر نیز برای اتصال به Redis در لیارا
        استفاده کنید. برای نمونه لینک دو تا از این برنامه ها در زیر آمده است:
      </p>
      <ul>
        <li>
          <a href="https://github.com/luin/medis" target="_blank">
            medis
          </a>
        </li>
        <li>
          <a href="https://github.com/marians/rebrow" target="_blank">
            rebrow
          </a>
        </li>
      </ul>
    </ul>
    <Notice variant="info">
      در همه موارد گفته شده در بالا میتوان به جای اتصال مستقیم به دیتابیس از
      قابلیت <b>Secure SSH Tunnel</b> نیز استفاده کرد. برای راه اندازی این
      قابلیت کافی‌ست مستندات{" "}
      <b>
        <a href="">اتصال امن به دیتابیس‌ها</a>
      </b>{" "}
      را مطالعه کنید.
    </Notice>
  </Layout>
);
