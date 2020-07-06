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

    <div className="page-head">
      <img className="page-icon" src="/static/platformicons/django.svg" alt="django"/>
      <div className="page-title">
        <h1>برنامه‌های Django</h1>
        <span className="page-description">(Django Apps)</span>
      </div>
    </div>

    <h3>اجرای Migrationها</h3>
    <p>
      وقتی در Django مدلی تعریف می‌کنید یا تغییر میدهید نیاز دارید تا اصطلاحا
      Migration ها را اجرا کنید.
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
      در نظر داشته باشید که هرزمان از طریق خط‌ فرمان لیارا متصل می‌شوید، در ریشه
      برنامه قرار دارید.
    </Notice>
    <br />

    <Link href="/app-deploy/django/disks">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
