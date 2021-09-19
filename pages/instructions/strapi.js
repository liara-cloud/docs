import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";




export default () => (
    <Layout>
        <Head>
            <title>
                استقرار برنامه‌های Strapi - سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/strapi.svg"
                alt="strapi"
            />
            <div className="page-title">
                <h1>استقرار برنامه‌های Strapi</h1>
                <span className="page-description">(Strapi Apps)</span>
            </div>
        </div>

        <p>
            Strapi یک CMS مبتنی بر Node.js است که با بسیاری از قابلیت‌ها مانند سادگی و تغییر‌پذیری ارائه می‌شود. حال شما می‌توانید برنامه‌ی Strapi خود را با ایجاد برنامه‌ی <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> در پنل کاربری لیارا و اجرای دستور
            <span className="code">liara deploy --port 3000</span>
            در مسیر اصلی پروژه، بر روی لیارا مستقر کنید.
        </p>
        <p>
            توجه داشته باشید که برای دیپلوی برنامه‌های Strapi نیازی به ایجاد تغییر در فایل <span className="code">package.json</span> نیست و لیارا به‌طور کامل از این CMS پشتیبانی می‌کند بنابراین تغییری در بخش <span className="code">scripts</span> ایجاد نکنید.
        </p>
        <Highlight className="json">{`"scripts": {
    "develop": "strapi develop",
    "start": "strapi start",
    "build": "strapi build",
    "strapi": "strapi"
},`}</Highlight>


        <h3>استفاده از دیتابیس SQLite</h3>
        <p>
            برای استفاده از دیتابیس SQLite باید در نظر داشته باشید که فایل سیستم برنامه‌های لیارا، <Link href="/app-features/file-system">Read-Only</Link> است بنابراین پس از اتمام عملیات استقرار امکان ذخیره‌سازی فایل‌های جدید در کنار فایل‌های پروژه وجود ندارد. حال برای استفاده از دیتابیس SQLite باید طبق مستندات <Link href="/app-deploy/nodejs/disks">استفاده از دیسک‌ها</Link>، یک دیسک جدید ایجاد کرده و دیسک ایجاد شده را به مسیر نگهداری داده‌های دیتابیس مونت کنید.
        </p>
        <Highlight className="json">{`{
    "platform": "node",
    "port": 8000,
    "disks": [
        {
            "name": "disk",
            "mountTo": "/app/.tmp"
        }
    ]
}`}</Highlight>
    </Layout>
);
