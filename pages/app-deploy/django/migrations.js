import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اجرای Migrationها در برنامه‌های Django - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
      </div>
    </div>

    <h3>اجرای Migrationها</h3>
    <p>
      زمانیکه در برنامه‌های Django یک Model جدید را تعریف می‌کنید یا یکی از
      Modelهای فعلی را تغییر می‌دهید نیاز است تا اصطلاحا Migration ها را اجرا
      کنید. به‌منظور اجرای Migration ها در ابتدا دستور زیر را در مسیر اصلی
      پروژه‌ی لوکال خود اجرا کنید:
    </p>

    <Highlight className="bash">{`$ python manage.py makemigrations`}</Highlight>

    <p>
      پس از ایجاد موفق فایل‌های Migration و اطمینان از{" "}
      <Link href="/app-deploy/django/dbs">اتصال به دیتابیس</Link>، پروژه‌ی خود
      را با اجرای دستور زیر در سرویس تهیه شده مستقر کنید:
    </p>

    <Highlight className="bash">{`$ liara deploy`}</Highlight>

    <p>
      درنهایت پس از استقرار موفق پروژه در سرویس تهیه شده می‌توانید دستور زیر را
      در <Link href="/app-features/console">خط فرمان</Link> برنامه اجرا کنید:
    </p>

    <Highlight className="bash">{`$ python manage.py migrate`}</Highlight>

    <br />

    <Link href="/app-deploy/django/disks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
