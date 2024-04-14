import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Remix - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="remix" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Remix</h1>
        <span className="page-description">(Remix Apps)</span>
      </div>
    </div>
    <p>
      <a href="https://github.com/remix-run/remix">Remix</a> یک فریم‌ورک وب است
      که به شما امکان می‌دهد که بر روی رابط کاربری برنامه خود تمرکز کنید و با
      تکیه بر استانداردهای وب، یک تجربه کاربری آسان، منعطف و عالی ارائه دهید.
      شما می‌توانید برنامه‌های Remix را با ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا
      دیپلوی کنید.
    </p>
    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های Remix نیازی به ایجاد تغییر در
      فایل <span className="code">package.json</span> نیست و لیارا به‌طور کامل
      از این فریم‌ورک پشتیبانی می‌کند؛ بنابراین تغییری در بخش{" "}
      <span className="code">scripts</span> ایجاد نکنید.
    </p>
    <Highlight className="json">{`"scripts": {
    "build": "remix vite:build",
    "dev": "remix vite:dev",
    "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
    "start": "remix-serve ./build/server/index.js",
    "typecheck": "tsc"
},`}</Highlight>

    <p>
      حالت استاندارد scripts در برنامه‌های Remix به‌شکل بالا است. در نهایت دستور
      <span className="code">liara deploy --port 3000 --platform node</span>
      را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
    </p>
  </Layout>
);
