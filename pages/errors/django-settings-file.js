import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        خطای Multiple Settings Files - سرویس ابری لیارا
      </title>
    </Head>

    <h1>خطای Multiple Settings Files</h1>
    <p>
      در زمان استقرار در پلتفرم جنگو، لیارا به‌دنبال فایلی که حاوی متغیر
      <span className="code">WSGI_APPLICATION</span>
      باشد می‌گردد. این متغیر معمولا در فایل
      <span className="code">settings.py</span>
      پیش‌فرض جنگو قرار دارد. چنانچه در پروژه‌ی شما چندین فایل وجود داشته باشند
      که حاوی این متغیر باشند، این خطا را دریافت می‌کنید.
    </p>

    <h3>✔️ راه حل</h3>
    <p>
      برای رفع این خطا، لازم است که یک فایل به‌نام
      {' '}
      <Link href="/app-deploy/django/liarajson">
        liara.json
      </Link>
      {' '}
      در ریشه‌ی برنامه‌ی‌تان بسازید:
    </p>
    <Highlight className="json">
      {`{
  "django": {
    "settingsFile": "./path/to/my/settings.py"
  }
}
`}
    </Highlight>
    <p>
      در مقابل فیلد 
      <span className="code">settingsFile</span>،
      باید مسیر نسبی فایل
      <span className="code">settings.py</span>
      برنامه‌ی‌تان را قرار بدهید و سپس دستور
      <span className="code">liara deploy</span>
      را اجرا کنید.
    </p>
  </Layout>
);
