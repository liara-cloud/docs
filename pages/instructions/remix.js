import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Remix - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="remix" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Remix</h1>
        <span className="page-description">(Remix Apps)</span>
      </div>
    </div>
    <p>
      فریم‌ورک Remix این امکان را در اختیار شما قرار می‌دهد تا تجربه‌ی کاربری
      سریع و مدرنی را برای کاربران خود خلق کنید. حال شما می‌توانید برنامه‌های
      Remix را با ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا
      دیپلوی کنید.
    </p>
    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های Remix نیازی به ایجاد تغییر در
      فایل <span className="code">package.json</span> نیست و لیارا به‌طور کامل
      از این فریم‌ورک پشتیبانی می‌کند بنابراین تغییری در بخش{" "}
      <span className="code">scripts</span> ایجاد نکنید.
    </p>
    <Highlight className="json">{`"scripts": {
  "build": "remix build",
  "dev": "remix dev",
  "postinstall": "remix setup node",
  "start": "remix-serve build"
},`}</Highlight>

    <p>
      حالت استاندارد npm scripts در برنامه‌های Remix به‌شکل بالا است. در نهایت
      دستور
      <span className="code">liara deploy --port 3000 --platform node</span>
      را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
    </p>
  </Layout>
);
