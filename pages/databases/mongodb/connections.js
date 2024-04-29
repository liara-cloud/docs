import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌های MongoDB - لیارا</title>
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
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های MongoDB از ابزارهای
      مختلفی، استفاده کنید.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#database-management-tools">
          مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
        </a>
      </li>
      <li>
        <a href="#mongo-cli">اتصال به Mongo-CLI</a>
      </li>
      <li>
        <a href="#db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</a>
      </li>
    </ul>

    <h4 id="database-management-tools">
      مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
    </h4>

    <p>
      اگر بخواهید دیتابیس‌های MongoDB را با استفاده از رابط‌های کاربری گرافیکی
      (GUI) مدیریت کنید، می‌توانید از ابزار{" "}
      <a href="https://robomongo.org/" target="_blank" rel="noopener">
        Robo 3T
      </a>{" "}
      و یا{" "}
      <a
        href="https://www.mongodb.com/products/compass"
        target="_blank"
        rel="noopener"
      >
        MongoDB Compass
      </a>{" "}
      استفاده کنید.
    </p>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/mongodb/mongodb-compass.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h5 id="mongodb-dbeaver">MongoDB Compass</h5>
    <ZoomableImage src="https://files.liara.ir/docs/mongodb/connect-to-mongodb-database-with-mongodb-compass.gif" />

    <h4 id="mongo-cli">mongo cli</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      MongoDB متصل شوید می‌توانید ابزار Mongo Shell را نصب کرده و با اجرای دستور
      زیر به سرویس دیتابیس خود متصل شوید.
    </p>
    <Highlight className="bash">
      {`$ mongosh -u DB_USERNAME \\
           --port DB_PORT \\
           --host DB_HOST \\
           -p DB_PASSWORD \\
           --authenticationDatabase admin`}
    </Highlight>

    <Asciinema id="465250" />

    <h3 id="db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</h3>
    <div className="platforms">
      <Link href="/app-deploy/nodejs/dbs/#mongodb">
        <PlatformIcon platform="nodejs" />
        <span>NodeJS</span>
      </Link>
      <Link href="/app-deploy/nextjs/dbs/#mongodb">
        <PlatformIcon platform="next" />
        <span>NextJS</span>
      </Link>
      <Link href="/app-deploy/php/dbs/#mongodb">
        <PlatformIcon platform="php" />
        <span>PHP</span>
      </Link>
      <Link href="/app-deploy/flask/dbs/#mongodb">
        <PlatformIcon platform="flask" />
        <span>Flask</span>
      </Link>
    </div>

    <br />
    <Link href="/databases/mongodb/backup" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
