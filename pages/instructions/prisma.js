import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Prisma - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      {/* <PlatformIcon platform="" /> */}
      <div className="page-title">
        <h1>استقرار Prisma</h1>
        <span className="page-description">(Prisma ORM)</span>
      </div>
    </div>
    <p>
      <a href="https://www.prisma.io/" target="_blank">
        Prisma
      </a>{" "}
      یک ORM برای Node.js و زبان TypeScript است که بسیاری از مشکل‌های ORMهای
      دیگر در آن برطرف شده و به شما امکان اتصال و اجرای کوئری بر روی دیتابیس‌های{" "}
      <Link href="/databases/postgresql/install">PostgreSQL</Link>,{" "}
      <Link href="/databases/mysql/install">MySQL</Link>,{" "}
      <Link href="/databases/sqlserver/install">SQL Server</Link>, SQLite و{" "}
      <Link href="/databases/mongodb/install">MongoDB</Link> را می‌دهد. برای
      استقرار نرم‌افزارهایی که در آن‌ها از Prisma استفاده شده در لیارا باید به
      نکته‌های زیر توجه داشته باشید.
    </p>
    <p>
      در ابتدا باید با اجرای دستور زیر در خط فرمان سیستم خود، فایل‌های Migration
      را ایجاد کنید:
    </p>
    <Highlight className="bash">
      {`npx prisma migrate dev --name init --create-only`}
    </Highlight>
    <p>
      سپس باید دستور
      <span className="code">npx prisma generate</span>
      را به اسکریپت <span className="code">build</span> اضافه کنید:
    </p>
    <Highlight className="json">
      {`"scripts": {
  "build" : "npx tsc && npx prisma generate",
  "start" : "node dist/index.js"
},`}
    </Highlight>
    <p>
      همچنین باید متغیر
      <span className="code">DATABASE_URL</span>
      را طبق مستندات <Link href="/app-deploy/nodejs/envs">تنظیم متغیرها</Link>،
      در متغیرهای محیطی برنامه‌ی Node.js خود تنظیم کنید:
    </p>
    <Highlight className="plaintext">
      {`DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:PORT/postgres`}
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
  </Layout>
);
