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
      <title>مستندات اتصال به دیتابیس‌های Elasticsearch - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="elastic" />
      <div className="page-title">
        <h1>دیتابیس Elasticsearch</h1>
        <span className="page-description">(Elasticsearch Database)</span>
      </div>
    </div>

    <h3>راه‌های اتصال به Elasticsearch</h3>
    <p>
      پس از نصب و راه‌اندازی یک دیتابیس جدید نوبت به مدیریت آن می‌رسد و شما
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های Elasticsearch از
      ابزارهای مختلفی، استفاده کنید.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#python">اتصال به Elasticsearch در پایتون</a>
      </li>
      <li>
        <a href="#db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</a>
      </li>
    </ul>

    <h4 id="python">اتصال به Elasticsearch در پایتون</h4>

    <video
      src="https://files.liara.ir/liara/elastic/elastic-python.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h3 id="db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</h3>
    <div className="platforms">
      <Link href="/app-deploy/flask/dbs/#elastic">
        <PlatformIcon platform="flask" />
        <span>Flask</span>
      </Link>
      <Link href="/app-deploy/golang/dbs/#elastic">
        <PlatformIcon platform="go" />
        <span>Golang</span>
      </Link>
    </div>

    <br />
    <Link href="/databases/mariadb/backup" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
