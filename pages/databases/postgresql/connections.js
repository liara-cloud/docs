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
      <title>مستندات اتصال به دیتابیس‌های PostgreSQL - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="postgres" />
      <div className="page-title">
        <h1>دیتابیس PostgreSQL</h1>
        <span className="page-description">(PostgreSQL Database)</span>
      </div>
    </div>

    <h3>راه‌های اتصال به PostgreSQL</h3>
    <p>
      پس از نصب و راه‌اندازی یک دیتابیس جدید نوبت به مدیریت آن می‌رسد و شما
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های PostgreSQL از ابزارهای
      مختلفی، استفاده کنید.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#pgadmin">اتصال به PGAdmin</a>
      </li>
      <li>
        <a href="#database-management-tools">
          مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
        </a>
      </li>
      <li>
        <a href="#psql">اتصال به PSQL</a>
      </li>
      <li>
        <a href="#db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</a>
      </li>
    </ul>

    <h4 id="pgadmin">PGAdmin</h4>

    <video
      src="https://files.liara.ir/liara/postgresql/postgres-pgadmin.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h4 id="database-management-tools">
      مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
    </h4>
    <p>
      حال اگر بخواهید دیتابیس‌های PostgreSQL را با استفاده از رابط‌های کاربری
      گرافیکی (GUI) مدیریت کنید، می‌توانید از ابزار{" "}
      <a href="https://dbeaver.io/" target="_blank" rel="noopener">
        DBeaver
      </a>{" "}
      و یا{" "}
      <a href="https://www.heidisql.com/" target="_blank" rel="noopener">
        HeidiSQL
      </a>{" "}
      استفاده کنید.
    </p>

    <h5 id="postgresql-dbeaver">DBeaver</h5>
    <video
      src="https://files.liara.ir/liara/postgresql/postgres-dbeaver.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h4 id="psql">psql</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      PostgreSQL متصل شوید می‌توانید ابزار PostgreSQL Client را نصب کرده و با
      اجرای دستور زیر به سرویس دیتابیس خود متصل شوید.
    </p>

    <Highlight className="bash">{`$ psql -h DB_HOST -p DB_PORT -U DB_USERNAME -W postgres`}</Highlight>
    <p>بعد از وارد کردن دستور فوق، رمز عبور دیتابیس از شما پرسیده خواهد شد..</p>

    <video
      src="https://files.liara.ir/liara/postgresql/postgres-psql.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h3 id="db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</h3>
    <div className="platforms">
      <Link href="/app-deploy/nodejs/dbs/#postgres">
        <PlatformIcon platform="nodejs" />
        <span>NodeJS</span>
      </Link>
      <Link href="/app-deploy/nextjs/dbs/#postgres">
        <PlatformIcon platform="next" />
        <span>NextJS</span>
      </Link>
      <Link href="/app-deploy/laravel/dbs/">
        <PlatformIcon platform="laravel" />
        <span>Laravel</span>
      </Link>
      <Link href="/app-deploy/php/dbs/#postgres">
        <PlatformIcon platform="php" />
        <span>PHP</span>
      </Link>
      <Link href="/app-deploy/django/dbs/#postgres">
        <PlatformIcon platform="django" />
        <span>Django</span>
      </Link>
      <Link href="/app-deploy/flask/dbs/#postgres">
        <PlatformIcon platform="flask" />
        <span>Flask</span>
      </Link>
      <Link href="/app-deploy/netcore/dbs/#postgres">
        <PlatformIcon platform="netcore" />
        <span>.NET</span>
      </Link>
      <Link href="/app-deploy/golang/dbs/#postgres">
        <PlatformIcon platform="go" />
        <span>Golang</span>
      </Link>
    </div>

    <br />

    <Link href="/databases/postgresql/backup" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
