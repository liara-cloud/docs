import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>Django سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>فریم‌ورک Django</h1>
    <span className="pageDescription">(Django Framework)</span>

    <h3>اجرای Migrationها</h3>
    <p>
      وقتی در Django مدلی تعریف میکنیم یا تغییر میدهیم نیاز داریم تا اصطلاحا
      Migrationها را اجرا کنیم.
    </p>
    <p>
      کافیست ابتدا از طریق پنل لیارا، وارد بخش <b>خط فرمان</b> شده و سپس دستورات
      لازم را وارد نمایید:
    </p>
    <pre>
      <code>{`$ python manage.py migrate`}</code>
    </pre>
    <ZoomableImage
      src="/static/django-migrate.png"
      alt="اجرای دستورات migrations"
    />

    <Notice variant="info">
      در نظر داشته باشید که هرزمان از طریق خط‌ فرمان لیارا متصل میشوید، در ریشه
      پروژه قرار دارید.
    </Notice>
    <br />

    <Link href="/apps/django/disks">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
