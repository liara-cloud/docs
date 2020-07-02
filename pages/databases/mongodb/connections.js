import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>
    <h1>دیتابیس MongoDB</h1>
    <span className="pageDescription">(MongoDB Database)</span>

    <h3>راه‌های اتصال به MongoDB</h3>
    <p>
      در صورتی که قصد دارید داده‌های دیتابیس‌‌تان را ببینید و در یک محیط گرافیکی
      یا کامندلاینی به مدیریت دیتابیس‌‌تان بپردازید، می‌توانید از راه‌های زیر
      اقدام کنید:
    </p>
    <ul>
      <li>
        <b>استفاده از نرم‌افزار محبوب Robo 3T</b>
      </li>
      <p>
        {" "}
        <a target="_blank" href="https://robomongo.org/">
          Robo 3T
        </a>
        ، که با نام سابق RoboMongo آشناتر است، یک محیط GUI که در تمام
        سیستم‌عامل‌ها نیز پشتیبانی می‌شود در اختیارتان قرار می‌دهد که با آن
        می‌توانید به دیتابیس‌های مونگودی‌بی متصل شده و داده‌های‌تان را مدیریت
        کنید. این نرم‌افزار، رایگان و OpenSource است. بعد از نصب این نرم‌افزار
        کافیست برای اتصال مراحل زیر را انجام دهید:
        <ul>
          <li>
            <p>
              در هنگام بالاآمدن نرم‌افزار روی New Connection کلیک کنید و اطلاعات
              آن را متناسب با اطلاعات دیتابیس‌ خودتان تکمیل کنید.
            </p>
          </li>
          <ZoomableImage src="/static/databases/robo3t-auth1.png" />
          <p>
            در tab مربوط به Authentication کافیست Mode را روی حالت SCRAM-SHA-1
            قرار دهید و Database را با مقدار اولیه admin بدون تغییر خاصی باقی
            بگذارید.
          </p>
          <ZoomableImage src="/static/databases/robo3t-auth2.png" />
          <p>
            سپس کافیست روی Test کلیک کنید تا مطمئن شوید همه چیز با موفقیت انجام
            شده است.
          </p>
          <ZoomableImage src="/static/databases/robo3t-test.png" />
        </ul>
      </p>
      <li>
        <b>استفاده از mongo cli</b>
      </li>
      <p>
        برای اتصال با cli کافیست که mongo در سیستم شما نصب شده باشد و به کمک
        ترمینال می‌توانید با استفاده از این دستور به دیتابیس‌‌تان در لیارا متصل
        شوید:
      </p>
      <code>
        {`$ mongo -u DB_USERNAME -p DB_PASSWORD --host DB_HOST --port DB_PORT --authenticationDatabase admin`}
      </code>
      <br />

      <ZoomableImage src="/static/databases/mongo-cli.png" />

      <br />

      <li>
        <b>استفاده از پنل‌های رایگان و اپن سورس</b>
      </li>
      <br />
      <ul>
        <li>
          <a
            href="https://github.com/mongo-express/mongo-express"
            target="_blank"
          >
            mongo-express
          </a>
        </li>
        <li>
          <a href="https://github.com/mrvautin/adminMongo" target="_blank">
            adminMongo
          </a>
        </li>
      </ul>
    </ul>
    <Notice variant="info">
      در همه موارد گفته شده در بالا میتوان به جای اتصال مستقیم به دیتابیس از
      قابلیت <b>Secure SSH Tunnel</b> نیز استفاده کرد. برای راه اندازی این
      قابلیت کافی‌ست مستندات{" "}
      <b>
        <Link href="/databases/tunnel"><a>اتصال امن به دیتابیس‌ها</a></Link>
      </b>{" "}
      را مطالعه کنید.
    </Notice>
  </Layout>
);
