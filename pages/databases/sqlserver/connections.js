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
      <title>مستندات اتصال به دیتابیس‌های SQL Server - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mssql" />
      <div className="page-title">
        <h1>دیتابیس SQL Server</h1>
        <span className="page-description">(SQL Server Database)</span>
      </div>
    </div>

    <h3>راه‌های اتصال به SQL Server</h3>
    <p>
      پس از نصب و راه‌اندازی یک دیتابیس جدید نوبت به مدیریت آن می‌رسد و شما
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های SQL Server از ابزارهای
      مختلفی استفاده کنید.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#database-management-tools">
          مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
        </a>
      </li>
      <li>
        <a href="#sqlcmd">اتصال به SQL CMD</a>
      </li>
      <li>
        <a href="#db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</a>
      </li>
    </ul>

    <h4 id="database-management-tools">
      مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
    </h4>
    <p>
      حال اگر بخواهید دیتابیس‌های SQL Server را با استفاده از رابط‌های کاربری
      گرافیکی (GUI) مدیریت کنید، می‌توانید از ابزار{" "}
      <a href="https://dbeaver.io/" target="_blank" rel="noopener">
        DBeaver
      </a>{" "}
      و یا{" "}
      <a href="https://github.com/microsoft/azuredatastudio" target="_blank">
        Azure Data Studio
      </a>{" "}
      استفاده کنید.
    </p>

    <h5 id="sql-server-management-studio">SQL Server Management Studio</h5>
    <video
      src="https://files.liara.ir/liara/mssql/mssql-local.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h5 id="sql-server-dbeaver">DBeaver</h5>
    <video
      src="https://files.liara.ir/liara/mssql/mssql-dbeaver.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h5 id="sql-server-azure">Azure Data Studio</h5>
    <video
      src="https://files.liara.ir/liara/mssql/mssql-azure.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h4 id="sqlcmd">sqlcmd</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      SQL Server متصل شوید می‌توانید ابزار{" "}
      <a
        href="https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?view=sql-server-ver15"
        target="_blank"
      >
        sqlcmd
      </a>{" "}
      را نصب کرده و با اجرای دستور زیر به سرویس دیتابیس خود متصل شوید.
    </p>
    <Highlight className="bash">{`$ sqlcmd -S DB_URL,DB_PORT -Usa -P DB_PASSWORD`}</Highlight>

    <Asciinema id="465248" />

    <p>
      همچنین شما می‌توانید با مراجعه به این بخش از{" "}
      <a
        href="https://docs.microsoft.com/en-us/sql/tools/overview-sql-tools?view=sql-server-ver15"
        target="_blank"
      >
        مستندات Microsoft
      </a>
      ، به لیست کامل‌تری از ابزارهای اتصال به دیتابیس‌های SQL Server دست پیدا
      کنید.
    </p>

    <h3 id="db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</h3>
    <div className="platforms">
      <Link href="/app-deploy/nodejs/dbs/#mssql">
        <PlatformIcon platform="nodejs" />
        <span>NodeJS</span>
      </Link>
      <Link href="/app-deploy/nextjs/dbs/#mssql">
        <PlatformIcon platform="next" />
        <span>NextJS</span>
      </Link>
      <Link href="/app-deploy/laravel/dbs/">
        <PlatformIcon platform="laravel" />
        <span>Laravel</span>
      </Link>
      <Link href="/app-deploy/django/dbs/#mssql">
        <PlatformIcon platform="django" />
        <span>Django</span>
      </Link>
      <Link href="/app-deploy/flask/dbs/#postgres">
        <PlatformIcon platform="flask" />
        <span>Flask</span>
      </Link>
      <Link href="/app-deploy/dotnet/dbs/#mssql">
        <PlatformIcon platform="dotnet" />
        <span>.NET</span>
      </Link>
      <Link href="/app-deploy/golang/dbs/#sqlserver">
        <PlatformIcon platform="go" />
        <span>Golang</span>
      </Link>
    </div>

    <br />
    <Link href="/databases/sqlserver/backup" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
