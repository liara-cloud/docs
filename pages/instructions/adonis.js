import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های AdonisJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/adonisjs.svg"
        alt="Adonisjs"
      />
      <div className="page-title">
        <h1>استقرار برنامه‌های AdonisJS</h1>
        <span className="page-description">(AdonisJS Apps)</span>
      </div>
    </div>
    <p>
      AdonisJS یکی دیگر از فریم‌ورک‌های NodeJS است که تمام ابزارهای مورد نیاز
      برای توسعه‌ی وب و API را در یک مجموعه ارا‌ئه می‌کند. حال شما می‌توانید
      پروژه‌های AdonisJS خود را با ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا
      دیپلوی کنید.
    </p>
    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های AdonisJS باید بخش{" "}
      <span className="code">scripts</span> فایل{" "}
      <span className="code">package.json</span> را به شکل زیر تغییر دهید.
    </p>
    <Highlight className="json">{`"scripts": {
  "dev": "node ace serve --watch",
  "build": "node ace build --production",
  "start": "node build/server.js"
},`}</Highlight>

    <p>
      در قدم بعد وارد تنظیمات برنامه شده و طبق مستندات{" "}
      <Link href="/app-deploy/nodejs/liarajson">تنظیم متغیرها</Link>، متغیرهای
      زیر را تنظیم کرده و بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
    </p>

    <Highlight className="plaintext">{`PORT=3000
HOST=0.0.0.0
NODE_ENV=production
APP_KEY=<APP_KEY> # generate APP_KEY with 'node ace generate:key' command
DRIVE_DISK=local
SESSION_DRIVER=cookie
CACHE_VIEWS=true
DB_CONNECTION=pg
PG_HOST=tommy.iran.liara.ir # you can use private-network host like 'adonis-pg'
PG_PORT=30807 # you can use private-network port like '5432'
PG_USER=root
PG_PASSWORD=9xPHbQ7xxxxxxxxa6pS3v
PG_DB_NAME=postgres`}</Highlight>

    <p>
      در نهایت برای استقرار پروژه‌ی AdonisJS بر روی لیارا باید دستور
      <span className="code">liara deploy --port 3000</span>
      را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
    </p>

    <h3>اجرای Migrationها</h3>

    <p>
      برای اجرای Migrationها در برنامه‌های Adonis کافیست پس از استقرار موفق
      پروژه، دستور زیر را در خط فرمان برنامه اجرا کنید:
    </p>

    <Highlight className="bash">{`node build/ace migration:run --force`}</Highlight>
    <h3>رفع خطای CORS</h3>
    <p>
      درصورتی که CORS را در فایل پیکربندی برنامه‌های AdonisJS در مسیر{" "}
      <span className="code">config/cors.ts</span> فعال کرده باشید باید اطمینان
      حاصل کنید مقادیر <span className="code">origin</span> و{" "}
      <span className="code">methods</span> نیز به‌درستی در این فایل تنظیم شده
      باشند:
    </p>
    <Highlight>{`{
  origin: '*',
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE']
}`}</Highlight>
    <p>
      برای کسب اطلاعات بیشتر می‌توانید{" "}
      <a
        href="https://docs.adonisjs.com/guides/security/cors"
        target="_blank"
        rel="noopener"
      >
        مستندات رسمی
      </a>{" "}
      این فریم‌ورک را مطالعه کنید.
    </p>
  </Layout>
);
