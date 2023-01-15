import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Eleventy - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="eleventy" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Eleventy</h1>
        <span className="page-description">(Eleventy Apps)</span>
      </div>
    </div>

    <p>
      Eleventy یک SSG دیگر است که از Template engineهای مختلفی مانند{" "}
      <a href="https://github.com/markdown-it/markdown-it" target="_blank">
        Markdown
      </a>{" "}
      ،{" "}
      <a href="https://www.npmjs.com/package/liquidjs" target="_blank">
        Liquid
      </a>{" "}
      ،{" "}
      <a href="https://github.com/janl/mustache.js/" target="_blank">
        Mustache
      </a>{" "}
      ،{" "}
      <a href="https://www.npmjs.com/package/ejs" target="_blank">
        EJS
      </a>{" "}
      و{" "}
      <a href="https://github.com/pugjs/pug" target="_blank">
        Pug
      </a>{" "}
      پشتیبانی می‌کند. برای استقرار خروجی نهایی ابزار Eleventy در لیارا تنها
      کافی است که مراحل زیر را دنبال کنید:
    </p>
    <h3>build گرفتن از برنامه</h3>
    <Highlight className="bash">{`$ npx @11ty/eleventy`}</Highlight>
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
