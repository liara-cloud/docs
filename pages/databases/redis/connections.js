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
      <title>مستندات اتصال به دیتابیس‌های Redis - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="redis" />
      <div className="page-title">
        <h1>دیتابیس Redis</h1>
        <span className="page-description">(Redis key/value Database)</span>
      </div>
    </div>

    <h3>راه‌های اتصال به Redis</h3>
    <p>
      پس از نصب و راه‌اندازی یک دیتابیس جدید نوبت به مدیریت آن می‌رسد و شما
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های Redis از ابزارهای
      مختلفی، استفاده کنید.
    </p>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#phpredisadmin">اتصال به Redis با PHPRedisAdmin</a>
      </li>
      <li>
        <a href="#redis-cli">اتصال به Redis-CLI</a>
      </li>
      <li>
        <a href="#medis">پنل Medis</a>
      </li>
      <li>
        <a href="#db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</a>
      </li>
    </ul>

    <h4 id="phpredisadmin">PHPRedisAdmin</h4>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/redis/redis-cli.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      ابزار phpRedisAdmin امکان مدیریت دیتابیس‌های Redis را در محیط وب فراهم
      می‌کند. برای راه‌اندازی این ابزار در لیارا تنها کافیست وارد منوی{" "}
      <strong>نحوه‌ی اتصال</strong> به دیتابیس شده و گزینه‌ی{" "}
      <strong>راه‌اندازی phpRedisAdmin</strong> را فعال کنید.
    </p>
    <ZoomableImage
      src="/static/databases/php-redis-admin.png"
      alt="آماده شدن دیتابیس"
    />
    <p>
      سپس می‌توانید با کلیک بر روی دکمه‌ی <strong>بازکردن phpRedisAdmin</strong>{" "}
      و وارد کردن اطلاعات اتصال به دیتابیس‌تان از امکانات این ابزار استفاده
      کنید.
    </p>
    <br />

    <h4 id="redis-cli">Redis-cli</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      Redis متصل شوید می‌توانید ابزار{" "}
      <a href="https://redis.io/topics/rediscli" target="_blank" rel="noopener">
        redis-cli
      </a>{" "}
      را نصب کرده و با اجرای دستور زیر به سرویس دیتابیس خود متصل شوید.
    </p>

    <Highlight className="bash">{`$ redis-cli -h REDIS_HOST -p REDIS_PORT -a REDIS_PASSWORD`}</Highlight>

    <Asciinema id="465259" />

    <h4 id="medis">استفاده از پنل رایگان و متن باز</h4>
    <p>
      همچنین شما می‌توانید از پنل رایگان و متن‌باز{" "}
      <a
        href="https://github.com/luin/medis"
        rel="noopener noreferrer"
        target="_blank"
      >
        medis
      </a>{" "}
      نیز استفاده کنید.
    </p>

    <h3 id="db-platforms">اتصال به دیتابیس در پلتفرم‌های مختلف</h3>
    <div className="platforms">
      <Link href="/app-deploy/nextjs/dbs/#redis">
        <PlatformIcon platform="next" />
        <span>NextJS</span>
      </Link>
      <Link href="/app-deploy/php/dbs/#redis">
        <PlatformIcon platform="php" />
        <span>PHP</span>
      </Link>
      <Link href="/app-deploy/flask/dbs/#redis">
        <PlatformIcon platform="flask" />
        <span>Flask</span>
      </Link>
      <Link href="/app-deploy/golang/dbs/#redis">
        <PlatformIcon platform="go" />
        <span>Golang</span>
      </Link>
    </div>

    <br />
    <Link href="/databases/redis/backup" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
