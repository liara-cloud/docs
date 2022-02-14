import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Svelte - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="svelte" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Svelte</h1>
        <span className="page-description">(Svelte Apps)</span>
      </div>
    </div>

    <p>
      Svelte یک فریم‌ورک سریع و سبک برای ایجاد رابط‌های کاربری وب است که برخلاف
      فریم‌ورک‌های React و Vue، از Virtual DOM استفاده نمی‌کند. حال برای استقرار
      برنامه‌های Svelte در لیارا تنها کافی است که مراحل زیر را دنبال کنید:
    </p>

    <h3>build گرفتن از برنامه</h3>
    <Highlight className="bash">{`$ npm run build`}</Highlight>
    <p>
      با اجرای دستور فوق، فرایند build گرفتن از برنامه‌ی شما شروع خواهد شد و
      درنهایت تمام فایل‌های استاتیک اعم از فایل‌های HTML/CSS/JS در پوشه‌ی{" "}
      <span className="code">public</span> قرار داده می‌شوند.
    </p>

    <h3>دیپلوی برنامه در پلتفرم استاتیک</h3>
    <p>
      حال شما می‌توانید خروجی نهایی را مانند برنامه‌های{" "}
      <Link href="/app-deploy/static/getting-started">Static</Link> در لیارا
      مستقر کنید.
    </p>
    <Highlight className="bash">
      {`$ cd public
$ liara deploy --platform=static`}
    </Highlight>
  </Layout>
);
