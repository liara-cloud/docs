import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Prisma - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="prisma" />
      <div className="page-title">
        <h1>استقرار Prisma</h1>
        <span className="page-description">(Prisma ORM)</span>
      </div>
    </div>
    <p>
      <a href="https://www.prisma.io/" target="_blank">
        Prisma
      </a>{" "}
      یک ORM برای NodeJS و زبان TypeScript است که بسیاری از مشکل‌های ORMهای دیگر
      در آن برطرف شده و به شما امکان اتصال و اجرای کوئری بر روی دیتابیس‌های{" "}
      <Link href="/databases/postgresql/install">PostgreSQL</Link>,{" "}
      <Link href="/databases/mysql/install">MySQL</Link>,{" "}
      <Link href="/databases/sqlserver/install">SQL Server</Link>, SQLite و{" "}
      <Link href="/databases/mongodb/install">MongoDB</Link> را می‌دهد. برای
      استقرار نرم‌افزارهایی که در آن‌ها از Prisma استفاده شده در لیارا باید به
      نکته‌های زیر توجه داشته باشید.
    </p>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/prisma/prisma.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/nodejs-getting-started/tree/prisma">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <p>
      در ابتدا باید با اجرای دستور زیر در خط فرمان سیستم خود، فایل‌های Migration
      را ایجاد کنید:
    </p>
    <Highlight className="bash">
      {`npx prisma migrate dev --name init --create-only`}
    </Highlight>
    <p>
      سپس باید در بخش
      <span className="code">scripts</span>
      فایل
      <span className="code">package.json</span>
      اسکریپت
      <span className="code">build</span>
      را به‌صورت زیر بنویسید:
    </p>
    <Highlight className="json">
      {`"scripts": {
  "build": "npx prisma generate",
},`}
    </Highlight>
    <p>
      اگر که از قبل اسکریپت build را تعریف کرده بودید؛ می‌توانید با استفاده از
      عملگر <span className="code">&&</span> دستور مربوط به prisma را نیز، به
      اسکریپت خود اضافه کنید، به عنوان مثال:
    </p>
    <Highlight className="json">
      {`"scripts": {
  "build": "npx prisma generate && webpack --watch"
},`}
    </Highlight>

    <p>
      همچنین باید متغیر
      <span className="code">DATABASE_URL</span>
      را طبق مستندات <Link href="/app-deploy/nodejs/envs">تنظیم متغیرها</Link>،
      در متغیرهای محیطی برنامه‌ی خود تنظیم کنید:
    </p>
    <Highlight className="plaintext">
      {`DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:PORT/postgres`}
    </Highlight>
    <br />
    <Notice variant="info">
      اگر که از دیتابیس لیارا استفاده می‌کنید؛ توصیه می‌شود هم برنامه و هم
      دیتابیس را در یک <a href="/app-features/private-network">شبکه خصوصی</a>{" "}
      قرار دهید و برای ایجاد اتصال ایمن و مطمئن از uri شبکه خصوصی دیتابیس
      استفاده کنید.
    </Notice>

    <p>
      در ادامه، باید{" "}
      <a href="/app-deploy/nodejs/disks/">طبق مستندات ایجاد دیسک</a> یک دیسک به
      نام prisma (یا هر نام دلخواه دیگری) در برنامه خود ایجاد کنید و به واسطه
      فایل <span className="code">liara.json</span> زیر که باید در مسیر اصلی
      پروژه خود ایجاد کنید، آن دیسک را به برنامه متصل کنید:
    </p>
    <Highlight className="json">
      {`{
    "disks":[
        {
            "name": "prisma",
            "mountTo": "prisma/migrations"
        }
    ]
}`}
    </Highlight>

    <p>
      درنهایت می‌توانید با اجرای دستور
      <span className="code">liara deploy</span>، پروژه‌ی خود را در لیارا مستقر
      کنید.
    </p>
    <h2>اعمال Migrationها</h2>
    <p>
      پس از استقرار موفق پروژه می‌توانید دستور زیر را برای اعمال Migrationها در
      خط فرمان سیستم خود اجرا کنید:
    </p>
    <Highlight className="bash">{`liara shell -c "npx prisma migrate deploy"`}</Highlight>
    <Notice variant="info">
      اگر که در اجرای دستور فوق با خطای <span className="code">Read-Only</span>{" "}
      مواجه شدید کافیست تا <a href="/app-features/file-system">فایل‌سیستم</a>{" "}
      برنامه خود را موقتاً خاموش کرده، دستور را اجرا کرده و سپس آن را مجدداً
      روشن کنید.
    </Notice>
  </Layout>
);
