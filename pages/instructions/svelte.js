import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Svelte - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="svelte" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Svelte</h1>
        <span className="page-description">(Svelte Apps)</span>
      </div>
    </div>
    <Notice variant="info">
      در لیارا امکان استقرار برنامه‌ی svelteKit امکان پذیر هست. برای استقرار
      پروژه‌ svelteKit نیاز هست طبق{" "}
      <a href="/instructions/sveltekit" target="_blank">
        مستندات{" "}
      </a>{" "}
      آن عمل کنید.
    </Notice>

    <p>
      Svelte یک فریم‌ورک سریع و سبک برای ایجاد رابط‌های کاربری وب است که برخلاف
      فریم‌ورک‌های React و Vue، از Virtual DOM استفاده نمی‌کند. شما می‌توانید
      برنامه‌های Svelte خود را با ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا
      دیپلوی کنید.
    </p>

    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های Svelte نیازی به ایجاد تغییر در
      فایل <span className="code">package.json</span> نیست و لیارا به‌طور کامل
      از این فریم‌ورک پشتیبانی می‌کند بنابراین تغییری در بخش{" "}
      <span className="code">scripts</span> ایجاد نکنید.
    </p>
    <Highlight className="json">{`"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public --no-clear"
},`}</Highlight>

    <p>
      حالت استاندارد npm scripts در برنامه‌های Svelte به‌شکل بالا است. حال دستور
      <span className="code">liara deploy --port 3000 --platform node</span>
      را در مسیر اصلی پروژه‌ی خود اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و
      اجرا شود.
    </p>
  </Layout>
);
