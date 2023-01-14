import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Jekyll - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="jekyll" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Jekyll</h1>
        <span className="page-description">(Jekyll Apps)</span>
      </div>
    </div>

    <p>
      Jekyll یکی دیگر از SSGهای مشهور است که با زبان Ruby توسعه داده شده است.
      حال شما برای استقرار خروجی نهایی این ابزار در لیارا تنها کافی است مراحل
      زیر را دنبال کنید:
    </p>
    <h3>build گرفتن از برنامه</h3>
    <Highlight className="bash">{`$ jekyll build`}</Highlight>
    <p>
      با اجرای دستور فوق، فرایند build گرفتن از برنامه‌ی شما شروع خواهد شد و
      درنهایت تمام فایل‌های استاتیک در پوشه‌ی{" "}
      <span className="code">_site</span> قرار داده می‌شوند.
    </p>

    <h3>دیپلوی برنامه در پلتفرم استاتیک</h3>
    <p>
      حال شما می‌توانید خروجی نهایی را مانند برنامه‌های{" "}
      <Link href="/app-deploy/static/getting-started">Static</Link> در لیارا
      مستقر کنید.
    </p>
    <Highlight className="bash">
      {`$ cd _site
$ liara deploy --platform=static`}
    </Highlight>
  </Layout>
);
