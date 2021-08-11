import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

export default () => (
    <Layout>
        <Head>
            <title>
                استقرار برنامه‌های NextJS - سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/next.svg"
                alt="nextjs"
            />
            <div className="page-title">
                <h1>استقرار برنامه‌های NextJS</h1>
                <span className="page-description">(NextJS Apps)</span>
            </div>
        </div>

        <p>
            NextJS یک فریم‌ورک مبتنی بر React است که بسیاری از قابلیت‌ها مانند SSR را برای شما به ارمغان می‌آورد و شما می‌توانید برنامه‌های NextJS خود را با ایجاد برنامه‌های <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا دیپلوی کنید.
        </p>
        <p>
            توجه داشته باشید که برای دیپلوی برنامه‌های NextJs نیازی به ایجاد تغییر در فایل <span className="code">package.json</span> نیست و لیارا به‌طور کامل از این فریم‌ورک پشتیبانی می‌کند بنابراین تغییری در بخش <span className="code">scripts</span> ایجاد نکنید.
        </p>
        <Highlight className="json">{`"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },`}</Highlight>

    </Layout>
);
