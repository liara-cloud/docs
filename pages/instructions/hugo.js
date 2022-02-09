import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Hugo - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="hugo" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Hugo</h1>
        <span className="page-description">(Hugo Apps)</span>
      </div>
    </div>

    <p>
      Hugo یکی از مشهورترین فریم‌ورک‌های SSG است که با زبان Go توسعه داده شده و
      سرعت بالا، سهولت استفاده و پیکربندی از ویژگی‌های کلیدی این فریم‌ورک محسوب
      می‌شود. حال برای استقرار برنامه‌های Hugo در لیارا تنها کافی است که مراحل
      زیر را دنبال کنید:
    </p>
    <h3>build گرفتن از برنامه</h3>
    <Highlight className="bash">{`$ hugo`}</Highlight>
    <p>
      با اجرای دستور فوق، فرایند build گرفتن از برنامه‌ی شما شروع خواهد شد و
      درنهایت تمام فایل‌های استاتیک اعم از فایل‌های HTML/CSS/JS در پوشه‌ی{" "}
      <span className="code">public</span> قرار داده می‌شوند.
    </p>

    <h3>دیپلوی برنامه در پلتفرم استاتیک</h3>
    <p>
      همان‌طور که گفته شد، Hugo یک فریم‌ورک SSG (Static Site Generator) است
      بنابراین خروجی نهایی شامل فایل‌های استاتیک HTML، CSS و JavaScript خواهد
      بود که شما می‌توانید با اجرای دستورهای:
      <Highlight className="bash">
        {`$ cd public
$ liara deploy --platform=static`}
      </Highlight>
      برنامه‌ی خود را مانند برنامه‌های{" "}
      <Link href="/app-deploy/static/getting-started">Static</Link> در لیارا
      مستقر کنید.
    </p>
  </Layout>
);
