import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های BlitzJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="blitz" />
      <div className="page-title">
        <h1>استقرار برنامه‌های BlitzJS</h1>
        <span className="page-description">(BlitzJS Apps)</span>
      </div>
    </div>
    <p>
      Blitz یک فریم‌ورک فول‌استک مبتنی بر NextJS است که در توسعه‌ی آن از Ruby on
      Rails الهام گرفته شده است. حال شما می‌توانید برنامه‌های BlitzJS را با
      ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا
      دیپلوی کنید.
    </p>
    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های BlitzJS نیازی به ایجاد تغییر در
      فایل <span className="code">package.json</span> نیست و لیارا به‌طور کامل
      از این فریم‌ورک پشتیبانی می‌کند بنابراین تغییری در بخش{" "}
      <span className="code">scripts</span> ایجاد نکنید.
    </p>
    <Highlight className="json">{`"scripts": {
  "dev": "blitz dev",
  "build": "blitz build",
  "start": "blitz start",
  "lint": "eslint --ignore-path .gitignore --ext .js .",
  "test": "jest",
  "test:watch": "jest --watch",
  "prepare": "husky install"
},`}</Highlight>

    <p>
      حالت استاندارد npm scripts در برنامه‌های BlitzJS به‌شکل بالا است. در نهایت
      دستور
      <span className="code">liara deploy --port 3000 --platform node</span>
      را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
    </p>
  </Layout>
);
