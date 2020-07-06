import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات رابط خط فرمان - Liara API</title>
    </Head>

    <h1>رابط خط فرمان لیارا</h1>
    <span className="page-description">(Liara API)</span>

    <p>
      وب‌سرویس و در واقع API ما به شما دسترسی کامل به امکانات پلتفرم ابری لیارا را می‌دهد.
      با استفاده از این API، می‌توانید در برنامه‌ها و سرویس‌های خودتان از لیارا به عنوان فراهم‌کننده‌ی زیر ساخت استفاده کنید.
    </p>

    <Notice>
      در حال حاضر مستندات وب‌سرویس لیارا در دست تکمیل است. در صورت نیاز با پشتیبانی ارتباط بگیرید.
    </Notice>

    <h3>کلید احراز هویت</h3>
    <p>
      در پنل کاربری از بخش API
      امکان دریافت Token و یا همان کلید اختصاصی خودتان را دارید.
      در حال حاضر تنها کاربرد رایج این کلید، احراز هویت در ساز و کارهای CI/CD است.
      {' '}
      <Link href="/cicd/about"><a>توضیحات بیشتر</a></Link>
    </p>
  </Layout>
);
