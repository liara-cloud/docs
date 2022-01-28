import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌های MongoDB - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mongodb" />
      <div className="page-title">
        <h1>دیتابیس MongoDB</h1>
        <span className="page-description">(MongoDB Database)</span>
      </div>
    </div>

    <h3>راه‌های اتصال به MongoDB</h3>
    <p>
      پس از نصب و راه‌اندازی یک دیتابیس جدید نوبت به مدیریت آن می‌رسد و شما
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های MongoDB یکی از
      ابزارهای زیر را انتخاب کنید.
    </p>

    <h4 id="robo-3t">Robo 3T</h4>
    <p>
      اگر بخواهید دیتابیس‌های MongoDB را در محیط سیستم‌عامل مدیریت کنید
      می‌توانید از ابزار{" "}
      <a href="https://robomongo.org/" target="_blank" rel="noopenner">
        Robo 3T
      </a>{" "}
      که اکثر توسعه‌دهندگان آن را با نام سابقش یعنی RoboMongo می‌شناسند، استفاده
      کنید. این ابزار رایگان و متن‌باز در تمامی سیستم‌عامل‌ها قابل اجرا هست و
      شما می‌توانید به‌سادگی و با دنبال کردن مراحل زیر، با استفاده از این ابزار
      به سرویس دیتابیس خود متصل شوید.
      <p>
        در هنگام بالاآمدن نرم‌افزار روی New Connection کلیک کنید و اطلاعات آن را
        متناسب با اطلاعات دیتابیس‌ خودتان تکمیل کنید.
      </p>
      <ZoomableImage src="/static/databases/robo3t-auth1.png" />
      <p>
        در tab مربوط به Authentication کافیست Mode را روی حالت SCRAM-SHA-1 قرار
        دهید و Database را با مقدار اولیه admin بدون تغییر خاصی باقی بگذارید.
      </p>
      <ZoomableImage src="/static/databases/robo3t-auth2.png" />
      <p>
        سپس کافیست روی Test کلیک کنید تا مطمئن شوید همه چیز با موفقیت انجام شده
        است.
      </p>
      <ZoomableImage src="/static/databases/robo3t-test.png" />
    </p>
    <h4>mongo cli</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      MongoDB متصل شوید می‌توانید ابزار Mongo Shell را نصب کرده و با اجرای دستور
      زیر به سرویس دیتابیس خود متصل شوید.
    </p>
    <Highlight className="bash">
      {`$ mongo -u DB_USERNAME -p DB_PASSWORD --host DB_HOST --port DB_PORT --authenticationDatabase admin`}
    </Highlight>
    <br />

    <ZoomableImage src="/static/databases/mongo-cli.png" />
  </Layout>
);
